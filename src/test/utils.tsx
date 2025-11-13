import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { vi } from 'vitest'

// Mock stores
export const mockAuthStore = {
  user: { id: 'test-user-id', email: 'test@example.com', name: 'Test User' },
  isAuthenticated: true,
  sessionId: 'test-session-id',
  initialized: true,
  init: vi.fn().mockResolvedValue(undefined),
  login: vi.fn().mockResolvedValue(true),
  register: vi.fn().mockResolvedValue(true),
  logout: vi.fn().mockResolvedValue(undefined),
}

export const mockProgressStore = {
  lessons: {},
  xp: 100,
  level: 1,
  initialized: true,
  init: vi.fn().mockResolvedValue(undefined),
  updateProgress: vi.fn().mockResolvedValue(undefined),
  getProgress: vi.fn().mockResolvedValue({ completed: false, progress: 0 }),
  getAllLanguageProgress: vi.fn().mockResolvedValue([]),
  addXP: vi.fn().mockResolvedValue(undefined),
}

export const mockGamificationStore = {
  unlockedAchievements: [],
  currentStreak: 0,
  longestStreak: 0,
  coins: 100,
  streakFreezes: 0,
  dailyChallenges: [],
  initialized: true,
  init: vi.fn().mockResolvedValue(undefined),
  checkAndUnlockAchievements: vi.fn().mockResolvedValue([]),
  updateStreakOnActivity: vi.fn().mockResolvedValue(undefined),
  addCoins: vi.fn().mockResolvedValue(undefined),
  spendCoins: vi.fn().mockResolvedValue(true),
  getStreakMultiplier: vi.fn().mockReturnValue(1.0),
  useStreakFreeze: vi.fn().mockResolvedValue(true),
  getDailyChallenges: vi.fn().mockResolvedValue(undefined),
  updateDailyChallengeProgress: vi.fn().mockResolvedValue(undefined),
  completeDailyChallenge: vi.fn().mockResolvedValue(undefined),
}

// Custom render function with providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <BrowserRouter>{children}</BrowserRouter>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

// Re-export everything
export * from '@testing-library/react'
export { customRender as render }

// Helper to wait for async operations
export const waitForAsync = () => new Promise((resolve) => setTimeout(resolve, 0))

// Mock database functions
export const mockDatabase = {
  initDatabase: vi.fn().mockResolvedValue(undefined),
  createUser: vi.fn().mockResolvedValue({ id: 'test-user-id', email: 'test@example.com', name: 'Test User' }),
  getUserByEmail: vi.fn().mockResolvedValue(null),
  getUserById: vi.fn().mockResolvedValue({ id: 'test-user-id', email: 'test@example.com', name: 'Test User' }),
  createSession: vi.fn().mockResolvedValue('test-session-id'),
  getSession: vi.fn().mockResolvedValue({ user_id: 'test-user-id' }),
  deleteSession: vi.fn().mockResolvedValue(undefined),
  getProgress: vi.fn().mockResolvedValue({ completed: false, progress: 0 }),
  updateProgress: vi.fn().mockResolvedValue(undefined),
  getAllProgress: vi.fn().mockResolvedValue([]),
  getAchievements: vi.fn().mockResolvedValue([]),
  unlockAchievement: vi.fn().mockResolvedValue(undefined),
  getStreak: vi.fn().mockResolvedValue(null),
  updateStreak: vi.fn().mockResolvedValue(undefined),
  getCoins: vi.fn().mockResolvedValue(100),
  addCoins: vi.fn().mockResolvedValue(undefined),
  spendCoins: vi.fn().mockResolvedValue(true),
  getDailyChallenges: vi.fn().mockResolvedValue([]),
  updateDailyChallenge: vi.fn().mockResolvedValue(undefined),
}

