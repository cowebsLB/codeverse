import initSqlJs, { Database } from 'sql.js'

let db: Database | null = null
let dbInitialized = false

export async function initDatabase(): Promise<Database> {
  if (db && dbInitialized) {
    return db
  }

  try {
    const SQL = await initSqlJs({
      locateFile: (file: string) => `https://sql.js.org/dist/${file}`,
    })

    // Try to load existing database from localStorage
    const savedDb = localStorage.getItem('codeverse_db')
    
    if (savedDb) {
      const buffer = Uint8Array.from(atob(savedDb), (c) => c.charCodeAt(0))
      db = new SQL.Database(buffer)
    } else {
      db = new SQL.Database()
    }

    // Create tables if they don't exist
    createTables(db)
    
    dbInitialized = true
    return db
  } catch (error) {
    console.error('Failed to initialize database:', error)
    throw error
  }
}

function createTables(database: Database) {
  // Users table
  database.run(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      password TEXT NOT NULL,
      created_at INTEGER NOT NULL
    )
  `)

  // Progress table
  database.run(`
    CREATE TABLE IF NOT EXISTS progress (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL,
      lesson_id TEXT NOT NULL,
      progress INTEGER NOT NULL DEFAULT 0,
      completed INTEGER NOT NULL DEFAULT 0,
      last_accessed INTEGER NOT NULL,
      UNIQUE(user_id, lesson_id),
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `)

  // Sessions table
  database.run(`
    CREATE TABLE IF NOT EXISTS sessions (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      created_at INTEGER NOT NULL,
      expires_at INTEGER NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `)

  // User stats table for XP and level
  database.run(`
    CREATE TABLE IF NOT EXISTS user_stats (
      user_id TEXT PRIMARY KEY,
      xp INTEGER NOT NULL DEFAULT 0,
      level INTEGER NOT NULL DEFAULT 1,
      coins INTEGER NOT NULL DEFAULT 0,
      updated_at INTEGER NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `)

  // Achievements table
  database.run(`
    CREATE TABLE IF NOT EXISTS achievements (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL,
      achievement_id TEXT NOT NULL,
      unlocked_at INTEGER NOT NULL,
      UNIQUE(user_id, achievement_id),
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `)

  // Streaks table
  database.run(`
    CREATE TABLE IF NOT EXISTS streaks (
      user_id TEXT PRIMARY KEY,
      current_streak INTEGER NOT NULL DEFAULT 0,
      longest_streak INTEGER NOT NULL DEFAULT 0,
      last_activity_date TEXT NOT NULL,
      streak_freeze_count INTEGER NOT NULL DEFAULT 0,
      updated_at INTEGER NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `)

  // Daily challenges table
  database.run(`
    CREATE TABLE IF NOT EXISTS daily_challenges (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL,
      challenge_date TEXT NOT NULL,
      challenge_type TEXT NOT NULL,
      completed INTEGER NOT NULL DEFAULT 0,
      progress INTEGER NOT NULL DEFAULT 0,
      target INTEGER NOT NULL,
      reward_coins INTEGER NOT NULL DEFAULT 0,
      reward_xp INTEGER NOT NULL DEFAULT 0,
      UNIQUE(user_id, challenge_date, challenge_type),
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `)

  // Unlockables table
  database.run(`
    CREATE TABLE IF NOT EXISTS unlockables (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL,
      unlockable_id TEXT NOT NULL,
      unlocked_at INTEGER NOT NULL,
      is_active INTEGER NOT NULL DEFAULT 0,
      UNIQUE(user_id, unlockable_id),
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `)

  // Leaderboard table (for global rankings)
  database.run(`
    CREATE TABLE IF NOT EXISTS leaderboard (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL,
      user_name TEXT NOT NULL,
      total_xp INTEGER NOT NULL DEFAULT 0,
      level INTEGER NOT NULL DEFAULT 1,
      languages_mastered INTEGER NOT NULL DEFAULT 0,
      achievements_unlocked INTEGER NOT NULL DEFAULT 0,
      current_streak INTEGER NOT NULL DEFAULT 0,
      last_updated INTEGER NOT NULL,
      UNIQUE(user_id),
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `)

  // Power-ups table
  database.run(`
    CREATE TABLE IF NOT EXISTS power_ups (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL,
      power_up_id TEXT NOT NULL,
      quantity INTEGER NOT NULL DEFAULT 0,
      last_purchased INTEGER,
      UNIQUE(user_id, power_up_id),
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `)
}

export function saveDatabase() {
  if (!db) return
  
  try {
    const data = db.export()
    const uint8Array = new Uint8Array(data)
    const base64 = btoa(String.fromCharCode(...uint8Array))
    localStorage.setItem('codeverse_db', base64)
  } catch (error) {
    console.error('Failed to save database:', error)
  }
}

export function getDatabase(): Database | null {
  return db
}

export async function executeQuery(sql: string, params: any[] = []): Promise<any[]> {
  if (!db) {
    await initDatabase()
  }
  
  if (!db) {
    throw new Error('Database not initialized')
  }

  const stmt = db.prepare(sql)
  stmt.bind(params)
  
  const results: any[] = []
  while (stmt.step()) {
    const row = stmt.getAsObject()
    results.push(row)
  }
  
  stmt.free()
  saveDatabase()
  
  return results
}

export async function executeUpdate(sql: string, params: any[] = []): Promise<void> {
  if (!db) {
    await initDatabase()
  }
  
  if (!db) {
    throw new Error('Database not initialized')
  }

  db.run(sql, params)
  saveDatabase()
}

