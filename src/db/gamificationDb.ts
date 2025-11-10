import { initDatabase, executeQuery, executeUpdate } from './database'

// Achievements
export interface AchievementRecord {
  id: number
  user_id: string
  achievement_id: string
  unlocked_at: number
}

export async function getAchievements(userId: string): Promise<string[]> {
  await initDatabase()
  const results = await executeQuery(
    'SELECT achievement_id FROM achievements WHERE user_id = ?',
    [userId]
  )
  return results.map((r: AchievementRecord) => r.achievement_id)
}

export async function unlockAchievement(userId: string, achievementId: string): Promise<void> {
  await initDatabase()
  const unlockedAt = Date.now()
  
  // Check if already unlocked
  const existing = await executeQuery(
    'SELECT id FROM achievements WHERE user_id = ? AND achievement_id = ?',
    [userId, achievementId]
  )
  
  if (existing.length === 0) {
    await executeUpdate(
      'INSERT INTO achievements (user_id, achievement_id, unlocked_at) VALUES (?, ?, ?)',
      [userId, achievementId, unlockedAt]
    )
  }
}

// Streaks
export interface StreakRecord {
  user_id: string
  current_streak: number
  longest_streak: number
  last_activity_date: string
  streak_freeze_count: number
  updated_at: number
}

export async function getStreak(userId: string): Promise<StreakRecord | null> {
  await initDatabase()
  const results = await executeQuery(
    'SELECT * FROM streaks WHERE user_id = ?',
    [userId]
  )
  return results.length > 0 ? (results[0] as StreakRecord) : null
}

export async function updateStreak(userId: string, streak: Partial<StreakRecord>): Promise<void> {
  await initDatabase()
  const updatedAt = Date.now()
  const existing = await getStreak(userId)
  
  if (existing) {
    await executeUpdate(
      `UPDATE streaks SET 
        current_streak = ?,
        longest_streak = ?,
        last_activity_date = ?,
        streak_freeze_count = ?,
        updated_at = ?
      WHERE user_id = ?`,
      [
        streak.current_streak ?? existing.current_streak,
        streak.longest_streak ?? existing.longest_streak,
        streak.last_activity_date ?? existing.last_activity_date,
        streak.streak_freeze_count ?? existing.streak_freeze_count,
        updatedAt,
        userId,
      ]
    )
  } else {
    await executeUpdate(
      `INSERT INTO streaks (
        user_id, current_streak, longest_streak, 
        last_activity_date, streak_freeze_count, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        userId,
        streak.current_streak ?? 0,
        streak.longest_streak ?? 0,
        streak.last_activity_date ?? new Date().toISOString().split('T')[0],
        streak.streak_freeze_count ?? 0,
        updatedAt,
      ]
    )
  }
}

// Coins
export async function getCoins(userId: string): Promise<number> {
  await initDatabase()
  const results = await executeQuery(
    'SELECT coins FROM user_stats WHERE user_id = ?',
    [userId]
  )
  return results.length > 0 ? (results[0] as { coins: number }).coins : 0
}

export async function addCoins(userId: string, amount: number): Promise<void> {
  await initDatabase()
  const currentCoins = await getCoins(userId)
  const newCoins = currentCoins + amount
  
  // Update coins in user_stats table
  await executeUpdate(
    'UPDATE user_stats SET coins = ?, updated_at = ? WHERE user_id = ?',
    [newCoins, Date.now(), userId]
  )
}

export async function spendCoins(userId: string, amount: number): Promise<boolean> {
  await initDatabase()
  const currentCoins = await getCoins(userId)
  
  if (currentCoins < amount) {
    return false // Insufficient coins
  }
  
  const newCoins = currentCoins - amount
  await executeUpdate(
    'UPDATE user_stats SET coins = ?, updated_at = ? WHERE user_id = ?',
    [newCoins, Date.now(), userId]
  )
  
  return true
}

// Daily Challenges
export interface DailyChallenge {
  id: number
  user_id: string
  challenge_date: string
  challenge_type: string
  completed: number
  progress: number
  target: number
  reward_coins: number
  reward_xp: number
}

export async function getDailyChallenges(userId: string, date: string): Promise<DailyChallenge[]> {
  await initDatabase()
  const results = await executeQuery(
    'SELECT * FROM daily_challenges WHERE user_id = ? AND challenge_date = ?',
    [userId, date]
  )
  return results as DailyChallenge[]
}

export async function updateDailyChallenge(
  userId: string,
  date: string,
  challengeType: string,
  progress: number,
  completed: boolean = false
): Promise<void> {
  await initDatabase()
  
  const existing = await executeQuery(
    'SELECT * FROM daily_challenges WHERE user_id = ? AND challenge_date = ? AND challenge_type = ?',
    [userId, date, challengeType]
  )
  
  if (existing.length > 0) {
    await executeUpdate(
      'UPDATE daily_challenges SET progress = ?, completed = ? WHERE user_id = ? AND challenge_date = ? AND challenge_type = ?',
      [progress, completed ? 1 : 0, userId, date, challengeType]
    )
  } else {
    // Create new challenge (default values)
    await executeUpdate(
      `INSERT INTO daily_challenges (
        user_id, challenge_date, challenge_type, 
        completed, progress, target, reward_coins, reward_xp
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [userId, date, challengeType, completed ? 1 : 0, progress, 3, 50, 50]
    )
  }
}

