import { initDatabase, executeQuery, executeUpdate } from './database'

export interface UserStats {
  user_id: string
  xp: number
  level: number
  coins: number
  updated_at: number
}

export async function getUserStats(userId: string): Promise<UserStats | null> {
  await initDatabase()

  const results = await executeQuery(
    'SELECT * FROM user_stats WHERE user_id = ?',
    [userId]
  )

  if (results.length > 0) {
    const row = results[0] as any
    return {
      user_id: row.user_id,
      xp: row.xp || 0,
      level: row.level || 1,
      coins: row.coins || 0,
      updated_at: row.updated_at,
    }
  }

  return null
}

export async function updateUserStats(userId: string, xp: number, level: number, coins?: number): Promise<void> {
  await initDatabase()

  const updatedAt = Date.now()

  const existing = await getUserStats(userId)

  if (existing) {
    const coinsValue = coins !== undefined ? coins : existing.coins
    await executeUpdate(
      'UPDATE user_stats SET xp = ?, level = ?, coins = ?, updated_at = ? WHERE user_id = ?',
      [xp, level, coinsValue, updatedAt, userId]
    )
  } else {
    await executeUpdate(
      'INSERT INTO user_stats (user_id, xp, level, coins, updated_at) VALUES (?, ?, ?, ?, ?)',
      [userId, xp, level, coins || 0, updatedAt]
    )
  }
}

