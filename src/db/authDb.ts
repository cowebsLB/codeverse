import { initDatabase, executeQuery, executeUpdate } from './database'
import { hashPassword } from '../utils/password'

export interface User {
  id: string
  email: string
  name: string
  password: string // This is now a hashed password
  created_at: number
}

export async function createUser(email: string, name: string, password: string): Promise<User> {
  await initDatabase()
  
  // Hash the password before storing
  const hashedPassword = await hashPassword(password)
  
  const id = Date.now().toString()
  const createdAt = Date.now()
  
  await executeUpdate(
    'INSERT INTO users (id, email, name, password, created_at) VALUES (?, ?, ?, ?, ?)',
    [id, email, name, hashedPassword, createdAt]
  )
  
  return {
    id,
    email,
    name,
    password: hashedPassword, // Return hashed password (not plain text)
    created_at: createdAt,
  }
}

export async function getUserByEmail(email: string): Promise<User | null> {
  await initDatabase()
  
  const results = await executeQuery(
    'SELECT * FROM users WHERE email = ?',
    [email]
  )
  
  if (results.length > 0) {
    const row = results[0] as any
    return {
      id: row.id,
      email: row.email,
      name: row.name,
      password: row.password,
      created_at: row.created_at,
    }
  }
  
  return null
}

export async function getUserById(id: string): Promise<User | null> {
  await initDatabase()
  
  const results = await executeQuery(
    'SELECT * FROM users WHERE id = ?',
    [id]
  )
  
  if (results.length > 0) {
    const row = results[0] as any
    return {
      id: row.id,
      email: row.email,
      name: row.name,
      password: row.password,
      created_at: row.created_at,
    }
  }
  
  return null
}

export async function createSession(userId: string): Promise<string> {
  await initDatabase()
  
  const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  const createdAt = Date.now()
  const expiresAt = createdAt + 7 * 24 * 60 * 60 * 1000 // 7 days
  
  await executeUpdate(
    'INSERT INTO sessions (id, user_id, created_at, expires_at) VALUES (?, ?, ?, ?)',
    [sessionId, userId, createdAt, expiresAt]
  )
  
  return sessionId
}

export async function getSession(sessionId: string): Promise<{ user_id: string } | null> {
  await initDatabase()
  
  const results = await executeQuery(
    'SELECT user_id FROM sessions WHERE id = ? AND expires_at > ?',
    [sessionId, Date.now()]
  )
  
  return results.length > 0 ? (results[0] as { user_id: string }) : null
}

export async function deleteSession(sessionId: string): Promise<void> {
  await initDatabase()
  
  await executeUpdate(
    'DELETE FROM sessions WHERE id = ?',
    [sessionId]
  )
}

