import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useAuthStore } from '../authStore'
import * as authDb from '../../db/authDb'
import * as database from '../../db/database'
import * as passwordUtils from '../../utils/password'

// Mock dependencies
vi.mock('../../db/database')
vi.mock('../../db/authDb')
vi.mock('../../utils/password')

describe('Auth Store', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    localStorage.clear()
    
    // Reset store state
    useAuthStore.setState({
      user: null,
      isAuthenticated: false,
      sessionId: null,
      initialized: false,
    })
  })

  describe('init', () => {
    it('should initialize database', async () => {
      vi.spyOn(database, 'initDatabase').mockResolvedValue(undefined)
      vi.spyOn(authDb, 'getSession').mockResolvedValue(null)

      await useAuthStore.getState().init()

      expect(database.initDatabase).toHaveBeenCalled()
      expect(useAuthStore.getState().initialized).toBe(true)
    })

    it('should restore session from localStorage', async () => {
      const mockUser = { id: 'user-1', email: 'test@example.com', name: 'Test User' }
      const sessionId = 'session-123'
      
      localStorage.setItem('codeverse_session', sessionId)
      vi.spyOn(database, 'initDatabase').mockResolvedValue(undefined)
      vi.spyOn(authDb, 'getSession').mockResolvedValue({ user_id: 'user-1' })
      vi.spyOn(authDb, 'getUserById').mockResolvedValue(mockUser)

      await useAuthStore.getState().init()

      expect(useAuthStore.getState().isAuthenticated).toBe(true)
      expect(useAuthStore.getState().user).toEqual(mockUser)
      expect(useAuthStore.getState().sessionId).toBe(sessionId)
    })

    it('should clear invalid session', async () => {
      localStorage.setItem('codeverse_session', 'invalid-session')
      vi.spyOn(database, 'initDatabase').mockResolvedValue(undefined)
      vi.spyOn(authDb, 'getSession').mockResolvedValue(null)

      await useAuthStore.getState().init()

      expect(localStorage.getItem('codeverse_session')).toBeNull()
      expect(useAuthStore.getState().isAuthenticated).toBe(false)
    })
  })

  describe('login', () => {
    it('should login successfully with valid credentials', async () => {
      const mockUser = { id: 'user-1', email: 'test@example.com', name: 'Test User', password: 'hashed' }
      const sessionId = 'session-123'
      
      vi.spyOn(database, 'initDatabase').mockResolvedValue(undefined)
      vi.spyOn(authDb, 'getUserByEmail').mockResolvedValue(mockUser)
      vi.spyOn(passwordUtils, 'verifyPassword').mockResolvedValue(true)
      vi.spyOn(authDb, 'createSession').mockResolvedValue(sessionId)

      const result = await useAuthStore.getState().login('test@example.com', 'password123')

      expect(result).toBe(true)
      expect(useAuthStore.getState().isAuthenticated).toBe(true)
      expect(useAuthStore.getState().user).toEqual({
        id: mockUser.id,
        email: mockUser.email,
        name: mockUser.name,
      })
      expect(localStorage.getItem('codeverse_session')).toBe(sessionId)
    })

    it('should fail with invalid email', async () => {
      vi.spyOn(database, 'initDatabase').mockResolvedValue(undefined)
      vi.spyOn(authDb, 'getUserByEmail').mockResolvedValue(null)

      const result = await useAuthStore.getState().login('invalid@example.com', 'password123')

      expect(result).toBe(false)
      expect(useAuthStore.getState().isAuthenticated).toBe(false)
    })

    it('should fail with invalid password', async () => {
      const mockUser = { id: 'user-1', email: 'test@example.com', name: 'Test User', password: 'hashed' }
      
      vi.spyOn(database, 'initDatabase').mockResolvedValue(undefined)
      vi.spyOn(authDb, 'getUserByEmail').mockResolvedValue(mockUser)
      vi.spyOn(passwordUtils, 'verifyPassword').mockResolvedValue(false)

      const result = await useAuthStore.getState().login('test@example.com', 'wrongpassword')

      expect(result).toBe(false)
      expect(useAuthStore.getState().isAuthenticated).toBe(false)
    })
  })

  describe('register', () => {
    it('should register successfully with new email', async () => {
      const mockUser = { id: 'user-1', email: 'new@example.com', name: 'New User' }
      const sessionId = 'session-123'
      
      vi.spyOn(database, 'initDatabase').mockResolvedValue(undefined)
      vi.spyOn(authDb, 'getUserByEmail').mockResolvedValue(null)
      vi.spyOn(authDb, 'createUser').mockResolvedValue(mockUser)
      vi.spyOn(authDb, 'createSession').mockResolvedValue(sessionId)

      const result = await useAuthStore.getState().register('new@example.com', 'Password123!', 'New User')

      expect(result).toBe(true)
      expect(useAuthStore.getState().isAuthenticated).toBe(true)
      expect(useAuthStore.getState().user).toEqual(mockUser)
    })

    it('should fail if email already exists', async () => {
      const existingUser = { id: 'user-1', email: 'existing@example.com', name: 'Existing User' }
      
      vi.spyOn(database, 'initDatabase').mockResolvedValue(undefined)
      vi.spyOn(authDb, 'getUserByEmail').mockResolvedValue(existingUser)

      const result = await useAuthStore.getState().register('existing@example.com', 'Password123!', 'New User')

      expect(result).toBe(false)
      expect(useAuthStore.getState().isAuthenticated).toBe(false)
    })
  })

  describe('logout', () => {
    it('should logout and clear session', async () => {
      const sessionId = 'session-123'
      useAuthStore.setState({
        user: { id: 'user-1', email: 'test@example.com', name: 'Test User' },
        isAuthenticated: true,
        sessionId,
      })
      localStorage.setItem('codeverse_session', sessionId)
      
      vi.spyOn(authDb, 'deleteSession').mockResolvedValue(undefined)

      await useAuthStore.getState().logout()

      expect(useAuthStore.getState().isAuthenticated).toBe(false)
      expect(useAuthStore.getState().user).toBeNull()
      expect(localStorage.getItem('codeverse_session')).toBeNull()
      expect(authDb.deleteSession).toHaveBeenCalledWith(sessionId)
    })
  })
})

