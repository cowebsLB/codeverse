import { describe, it, expect, beforeEach, vi } from 'vitest'
import {
  checkRateLimit,
  recordAttempt,
  resetRateLimit,
  getRemainingTime,
  getFormattedRemainingTime,
  MAX_ATTEMPTS,
} from '../rateLimiter'

describe('Rate Limiter', () => {
  beforeEach(() => {
    // Reset rate limit store by clearing all keys
    resetRateLimit('test-key')
  })

  describe('checkRateLimit', () => {
    it('should allow attempts for new keys', () => {
      const result = checkRateLimit('new-key')
      expect(result.isLimited).toBe(false)
      expect(result.remainingAttempts).toBe(MAX_ATTEMPTS)
      expect(result.resetTime).toBeNull()
    })

    it('should track remaining attempts', () => {
      recordAttempt('test-key')
      const result = checkRateLimit('test-key')
      expect(result.isLimited).toBe(false)
      expect(result.remainingAttempts).toBe(MAX_ATTEMPTS - 1)
      expect(result.resetTime).not.toBeNull()
    })

    it('should limit after max attempts', () => {
      // Record max attempts
      for (let i = 0; i < MAX_ATTEMPTS; i++) {
        recordAttempt('test-key')
      }

      const result = checkRateLimit('test-key')
      expect(result.isLimited).toBe(true)
      expect(result.remainingAttempts).toBe(0)
      expect(result.resetTime).not.toBeNull()
    })
  })

  describe('recordAttempt', () => {
    it('should create a new entry for a new key', () => {
      recordAttempt('new-key')
      const result = checkRateLimit('new-key')
      expect(result.remainingAttempts).toBe(MAX_ATTEMPTS - 1)
    })

    it('should increment count for existing key', () => {
      recordAttempt('test-key')
      recordAttempt('test-key')
      const result = checkRateLimit('test-key')
      expect(result.remainingAttempts).toBe(MAX_ATTEMPTS - 2)
    })
  })

  describe('resetRateLimit', () => {
    it('should reset rate limit for a key', () => {
      recordAttempt('test-key')
      recordAttempt('test-key')
      resetRateLimit('test-key')
      
      const result = checkRateLimit('test-key')
      expect(result.isLimited).toBe(false)
      expect(result.remainingAttempts).toBe(MAX_ATTEMPTS)
    })
  })

  describe('getRemainingTime', () => {
    it('should return null for non-existent keys', () => {
      const time = getRemainingTime('non-existent')
      expect(time).toBeNull()
    })

    it('should return remaining time for rate limited keys', () => {
      // Record max attempts to trigger rate limit
      for (let i = 0; i < MAX_ATTEMPTS; i++) {
        recordAttempt('test-key')
      }

      const time = getRemainingTime('test-key')
      expect(time).not.toBeNull()
      expect(time).toBeGreaterThan(0)
      expect(time).toBeLessThanOrEqual(15 * 60 * 1000) // 15 minutes
    })
  })

  describe('getFormattedRemainingTime', () => {
    it('should return null for non-existent keys', () => {
      const formatted = getFormattedRemainingTime('non-existent')
      expect(formatted).toBeNull()
    })

    it('should format time correctly', () => {
      // Record max attempts
      for (let i = 0; i < MAX_ATTEMPTS; i++) {
        recordAttempt('test-key')
      }

      const formatted = getFormattedRemainingTime('test-key')
      expect(formatted).not.toBeNull()
      expect(formatted).toMatch(/\d+ (minute|second)/)
    })
  })

  describe('Rate limit expiration', () => {
    it('should reset after window expires', () => {
      vi.useFakeTimers()
      
      recordAttempt('test-key')
      recordAttempt('test-key')
      
      // Fast-forward past the rate limit window
      vi.advanceTimersByTime(15 * 60 * 1000 + 1000)
      
      const result = checkRateLimit('test-key')
      expect(result.isLimited).toBe(false)
      expect(result.remainingAttempts).toBe(MAX_ATTEMPTS)
      
      vi.useRealTimers()
    })
  })
})

