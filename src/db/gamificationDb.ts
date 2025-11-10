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

// Unlockables
export interface UnlockableRecord {
  id: number
  user_id: string
  unlockable_id: string
  unlocked_at: number
  is_active: number
}

export async function getUnlockedItems(userId: string): Promise<string[]> {
  await initDatabase()
  const results = await executeQuery(
    'SELECT unlockable_id FROM unlockables WHERE user_id = ?',
    [userId]
  )
  return results.map((r: UnlockableRecord) => r.unlockable_id)
}

export async function unlockItem(userId: string, unlockableId: string): Promise<void> {
  await initDatabase()
  const unlockedAt = Date.now()
  
  const existing = await executeQuery(
    'SELECT id FROM unlockables WHERE user_id = ? AND unlockable_id = ?',
    [userId, unlockableId]
  )
  
  if (existing.length === 0) {
    await executeUpdate(
      'INSERT INTO unlockables (user_id, unlockable_id, unlocked_at, is_active) VALUES (?, ?, ?, ?)',
      [userId, unlockableId, unlockedAt, 0]
    )
  }
}

export async function setActiveUnlockable(userId: string, unlockableId: string, isActive: boolean): Promise<void> {
  await initDatabase()
  
  // First, deactivate all unlockables of the same type
  // (This would require getting the unlockable type, simplified for now)
  
  await executeUpdate(
    'UPDATE unlockables SET is_active = ? WHERE user_id = ? AND unlockable_id = ?',
    [isActive ? 1 : 0, userId, unlockableId]
  )
}

export async function getActiveUnlockables(userId: string): Promise<string[]> {
  await initDatabase()
  const results = await executeQuery(
    'SELECT unlockable_id FROM unlockables WHERE user_id = ? AND is_active = 1',
    [userId]
  )
  return results.map((r: UnlockableRecord) => r.unlockable_id)
}

// Leaderboard
export interface LeaderboardEntry {
  user_id: string
  user_name: string
  total_xp: number
  level: number
  languages_mastered: number
  achievements_unlocked: number
  current_streak: number
  rank?: number
}

export async function updateLeaderboardEntry(userId: string, userData: {
  name: string
  xp: number
  level: number
  languagesMastered: number
  achievementsUnlocked: number
  currentStreak: number
}): Promise<void> {
  await initDatabase()
  const lastUpdated = Date.now()
  
  const existing = await executeQuery(
    'SELECT id FROM leaderboard WHERE user_id = ?',
    [userId]
  )
  
  if (existing.length > 0) {
    await executeUpdate(
      `UPDATE leaderboard SET 
        user_name = ?, total_xp = ?, level = ?, 
        languages_mastered = ?, achievements_unlocked = ?, 
        current_streak = ?, last_updated = ?
      WHERE user_id = ?`,
      [
        userData.name,
        userData.xp,
        userData.level,
        userData.languagesMastered,
        userData.achievementsUnlocked,
        userData.currentStreak,
        lastUpdated,
        userId,
      ]
    )
  } else {
    await executeUpdate(
      `INSERT INTO leaderboard (
        user_id, user_name, total_xp, level,
        languages_mastered, achievements_unlocked,
        current_streak, last_updated
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        userId,
        userData.name,
        userData.xp,
        userData.level,
        userData.languagesMastered,
        userData.achievementsUnlocked,
        userData.currentStreak,
        lastUpdated,
      ]
    )
  }
}

export async function getLeaderboard(limit: number = 100, sortBy: 'xp' | 'level' | 'streak' = 'xp'): Promise<LeaderboardEntry[]> {
  await initDatabase()
  
  const sortColumn = {
    xp: 'total_xp',
    level: 'level',
    streak: 'current_streak',
  }[sortBy] || 'total_xp'
  
  const results = await executeQuery(
    `SELECT * FROM leaderboard ORDER BY ${sortColumn} DESC LIMIT ?`,
    [limit]
  )
  
  return (results as LeaderboardEntry[]).map((entry, index) => ({
    ...entry,
    rank: index + 1,
  }))
}

export async function getUserRank(userId: string, sortBy: 'xp' | 'level' | 'streak' = 'xp'): Promise<number | null> {
  await initDatabase()
  
  const sortColumn = {
    xp: 'total_xp',
    level: 'level',
    streak: 'current_streak',
  }[sortBy] || 'total_xp'
  
  const results = await executeQuery(
    `SELECT user_id FROM leaderboard ORDER BY ${sortColumn} DESC`,
    []
  )
  
  const rank = results.findIndex((r: { user_id: string }) => r.user_id === userId)
  return rank >= 0 ? rank + 1 : null
}

// Power-ups
export interface PowerUpRecord {
  id: number
  user_id: string
  power_up_id: string
  quantity: number
  last_purchased: number | null
}

export async function getPowerUps(userId: string): Promise<Record<string, number>> {
  await initDatabase()
  const results = await executeQuery(
    'SELECT power_up_id, quantity FROM power_ups WHERE user_id = ?',
    [userId]
  )
  
  const powerUps: Record<string, number> = {}
  for (const r of results as PowerUpRecord[]) {
    powerUps[r.power_up_id] = r.quantity
  }
  return powerUps
}

export async function addPowerUp(userId: string, powerUpId: string, quantity: number = 1): Promise<void> {
  await initDatabase()
  
  const existing = await executeQuery(
    'SELECT quantity FROM power_ups WHERE user_id = ? AND power_up_id = ?',
    [userId, powerUpId]
  )
  
  if (existing.length > 0) {
    const currentQuantity = (existing[0] as PowerUpRecord).quantity
    await executeUpdate(
      'UPDATE power_ups SET quantity = ?, last_purchased = ? WHERE user_id = ? AND power_up_id = ?',
      [currentQuantity + quantity, Date.now(), userId, powerUpId]
    )
  } else {
    await executeUpdate(
      'INSERT INTO power_ups (user_id, power_up_id, quantity, last_purchased) VALUES (?, ?, ?, ?)',
      [userId, powerUpId, quantity, Date.now()]
    )
  }
}

export async function usePowerUp(userId: string, powerUpId: string): Promise<boolean> {
  await initDatabase()
  
  const existing = await executeQuery(
    'SELECT quantity FROM power_ups WHERE user_id = ? AND power_up_id = ?',
    [userId, powerUpId]
  )
  
  if (existing.length === 0) {
    return false
  }
  
  const currentQuantity = (existing[0] as PowerUpRecord).quantity
  if (currentQuantity <= 0) {
    return false
  }
  
  await executeUpdate(
    'UPDATE power_ups SET quantity = ? WHERE user_id = ? AND power_up_id = ?',
    [currentQuantity - 1, userId, powerUpId]
  )
  
  return true
}

