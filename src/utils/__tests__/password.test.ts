import { describe, it, expect } from 'vitest'
import { hashPassword, verifyPassword, validatePasswordStrength } from '../password'

describe('Password Utilities', () => {
  describe('hashPassword', () => {
    it('should hash a password', async () => {
      const password = 'TestPassword123!'
      const hash = await hashPassword(password)
      
      expect(hash).toBeDefined()
      expect(hash).not.toBe(password)
      expect(hash.length).toBeGreaterThan(0)
    })

    it('should produce different hashes for the same password', async () => {
      const password = 'TestPassword123!'
      const hash1 = await hashPassword(password)
      const hash2 = await hashPassword(password)
      
      // bcrypt includes salt, so hashes should be different
      expect(hash1).not.toBe(hash2)
    })
  })

  describe('verifyPassword', () => {
    it('should verify a correct password', async () => {
      const password = 'TestPassword123!'
      const hash = await hashPassword(password)
      const isValid = await verifyPassword(password, hash)
      
      expect(isValid).toBe(true)
    })

    it('should reject an incorrect password', async () => {
      const password = 'TestPassword123!'
      const wrongPassword = 'WrongPassword123!'
      const hash = await hashPassword(password)
      const isValid = await verifyPassword(wrongPassword, hash)
      
      expect(isValid).toBe(false)
    })
  })

  describe('validatePasswordStrength', () => {
    it('should accept a valid password', () => {
      const result = validatePasswordStrength('TestPassword123!')
      expect(result.isValid).toBe(true)
      expect(result.error).toBeUndefined()
    })

    it('should reject passwords shorter than 8 characters', () => {
      const result = validatePasswordStrength('Test1!')
      expect(result.isValid).toBe(false)
      expect(result.error).toContain('8 characters')
    })

    it('should reject passwords longer than 128 characters', () => {
      const longPassword = 'A'.repeat(129) + '1!'
      const result = validatePasswordStrength(longPassword)
      expect(result.isValid).toBe(false)
      expect(result.error).toContain('128 characters')
    })

    it('should require at least one uppercase letter', () => {
      const result = validatePasswordStrength('testpassword123!')
      expect(result.isValid).toBe(false)
      expect(result.error).toContain('uppercase')
    })

    it('should require at least one lowercase letter', () => {
      const result = validatePasswordStrength('TESTPASSWORD123!')
      expect(result.isValid).toBe(false)
      expect(result.error).toContain('lowercase')
    })

    it('should require at least one number', () => {
      const result = validatePasswordStrength('TestPassword!')
      expect(result.isValid).toBe(false)
      expect(result.error).toContain('number')
    })

    it('should require at least one special character', () => {
      const result = validatePasswordStrength('TestPassword123')
      expect(result.isValid).toBe(false)
      expect(result.error).toContain('special character')
    })
  })
})

