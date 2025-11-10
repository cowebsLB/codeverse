/**
 * Client-side rate limiter for authentication attempts
 * Prevents brute force attacks by limiting login/register attempts
 */

interface RateLimitEntry {
  count: number
  resetTime: number
}

const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutes
export const MAX_ATTEMPTS = 5 // Maximum attempts per window

const rateLimitStore = new Map<string, RateLimitEntry>()

/**
 * Check if an action is rate limited
 * @param key - Unique key for the rate limit (e.g., email address)
 * @returns Object with isLimited flag and remaining attempts
 */
export function checkRateLimit(key: string): { isLimited: boolean; remainingAttempts: number; resetTime: number | null } {
  const now = Date.now()
  const entry = rateLimitStore.get(key)

  if (!entry) {
    return { isLimited: false, remainingAttempts: MAX_ATTEMPTS, resetTime: null }
  }

  // Check if the rate limit window has expired
  if (now > entry.resetTime) {
    rateLimitStore.delete(key)
    return { isLimited: false, remainingAttempts: MAX_ATTEMPTS, resetTime: null }
  }

  // Check if limit is exceeded
  if (entry.count >= MAX_ATTEMPTS) {
    return {
      isLimited: true,
      remainingAttempts: 0,
      resetTime: entry.resetTime,
    }
  }

  return {
    isLimited: false,
    remainingAttempts: MAX_ATTEMPTS - entry.count,
    resetTime: entry.resetTime,
  }
}

/**
 * Record an attempt (increment the counter)
 * @param key - Unique key for the rate limit
 */
export function recordAttempt(key: string): void {
  const now = Date.now()
  const entry = rateLimitStore.get(key)

  if (!entry || now > entry.resetTime) {
    // Create new entry or reset expired entry
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    })
  } else {
    // Increment existing entry
    entry.count++
    rateLimitStore.set(key, entry)
  }
}

/**
 * Reset rate limit for a key (e.g., after successful login)
 * @param key - Unique key for the rate limit
 */
export function resetRateLimit(key: string): void {
  rateLimitStore.delete(key)
}

/**
 * Get remaining time until rate limit resets (in milliseconds)
 * @param key - Unique key for the rate limit
 * @returns Remaining time in milliseconds, or null if not rate limited
 */
export function getRemainingTime(key: string): number | null {
  const entry = rateLimitStore.get(key)
  if (!entry) {
    return null
  }

  const now = Date.now()
  if (now > entry.resetTime) {
    rateLimitStore.delete(key)
    return null
  }

  return entry.resetTime - now
}

/**
 * Format remaining time as human-readable string
 * @param key - Unique key for the rate limit
 * @returns Formatted time string or null
 */
export function getFormattedRemainingTime(key: string): string | null {
  const remaining = getRemainingTime(key)
  if (!remaining) {
    return null
  }

  const minutes = Math.floor(remaining / 60000)
  const seconds = Math.floor((remaining % 60000) / 1000)

  if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} and ${seconds} second${seconds !== 1 ? 's' : ''}`
  }
  return `${seconds} second${seconds !== 1 ? 's' : ''}`
}

