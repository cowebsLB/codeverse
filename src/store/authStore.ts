import { create } from 'zustand'
import { initDatabase } from '../db/database'
import { createUser, getUserByEmail, getUserById, createSession, getSession, deleteSession } from '../db/authDb'
import { verifyPassword } from '../utils/password'

interface User {
  id: string
  email: string
  name: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  sessionId: string | null
  initialized: boolean
  init: () => Promise<void>
  login: (email: string, password: string) => Promise<boolean>
  register: (email: string, password: string, name: string) => Promise<boolean>
  logout: () => Promise<void>
}

export const useAuthStore = create<AuthState>()((set, get) => ({
  user: null,
  isAuthenticated: false,
  sessionId: null,
  initialized: false,
  init: async () => {
    if (get().initialized) return
    
    try {
      await initDatabase()
      
      // Check for existing session
      const sessionId = localStorage.getItem('codeverse_session')
      if (sessionId) {
        const session = await getSession(sessionId)
        if (session) {
          const dbUser = await getUserById(session.user_id)
          if (dbUser) {
            const user: User = {
              id: dbUser.id,
              email: dbUser.email,
              name: dbUser.name,
            }
            set({ user, isAuthenticated: true, sessionId, initialized: true })
            return
          }
        } else {
          localStorage.removeItem('codeverse_session')
        }
      }
      
      set({ initialized: true })
    } catch (error) {
      console.error('Failed to initialize auth:', error)
      set({ initialized: true })
    }
  },
  login: async (email: string, password: string) => {
    try {
      await initDatabase()
      
      const dbUser = await getUserByEmail(email)
      if (!dbUser) {
        return false
      }
      
      // Verify password against hashed password
      const isValid = await verifyPassword(password, dbUser.password)
      if (!isValid) {
        return false
      }
      
      const user: User = {
        id: dbUser.id,
        email: dbUser.email,
        name: dbUser.name,
      }
      
      const sessionId = await createSession(user.id)
      localStorage.setItem('codeverse_session', sessionId)
      
      set({ user, isAuthenticated: true, sessionId })
      return true
    } catch (error) {
      console.error('Login error:', error)
      return false
    }
  },
  register: async (email: string, password: string, name: string) => {
    try {
      await initDatabase()
      
      // Check if user already exists
      const existing = await getUserByEmail(email)
      if (existing) {
        return false
      }
      
      const dbUser = await createUser(email, name, password)
      
      const user: User = {
        id: dbUser.id,
        email: dbUser.email,
        name: dbUser.name,
      }
      
      const sessionId = await createSession(user.id)
      localStorage.setItem('codeverse_session', sessionId)
      
      set({ user, isAuthenticated: true, sessionId })
      return true
    } catch (error) {
      console.error('Registration error:', error)
      return false
    }
  },
  logout: async () => {
    const sessionId = get().sessionId || localStorage.getItem('codeverse_session')
    if (sessionId) {
      await deleteSession(sessionId)
      localStorage.removeItem('codeverse_session')
    }
    set({ user: null, isAuthenticated: false, sessionId: null })
  },
}))

