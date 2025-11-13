import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useGamificationStore } from '../gamificationStore'
import * as gamificationDb from '../../db/gamificationDb'
import * as database from '../../db/database'
import { useAuthStore } from '../authStore'
import { useProgressStore } from '../progressStore'

// Mock dependencies
vi.mock('../../db/database')
vi.mock('../../db/gamificationDb')
vi.mock('../authStore')
vi.mock('../progressStore')

describe('Gamification Store', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    
    // Reset store state
    useGamificationStore.setState({
      unlockedAchievements: [],
      currentStreak: 0,
      longestStreak: 0,
      coins: 0,
      streakFreezes: 0,
      dailyChallenges: [],
      initialized: false,
    })

    // Mock auth store
    vi.spyOn(useAuthStore, 'getState').mockReturnValue({
      user: { id: 'user-1', email: 'test@example.com', name: 'Test User' },
    } as any)

    // Mock progress store
    vi.spyOn(useProgressStore, 'getState').mockReturnValue({
      lessons: {},
      xp: 100,
      level: 1,
      getAllLanguageProgress: vi.fn().mockResolvedValue([]),
    } as any)
  })

  describe('init', () => {
    it('should initialize gamification store', async () => {
      vi.spyOn(database, 'initDatabase').mockResolvedValue(undefined)
      vi.spyOn(gamificationDb, 'getAchievements').mockResolvedValue([])
      vi.spyOn(gamificationDb, 'getStreak').mockResolvedValue(null)
      vi.spyOn(gamificationDb, 'getCoins').mockResolvedValue(100)
      vi.spyOn(gamificationDb, 'getDailyChallenges').mockResolvedValue([])

      await useGamificationStore.getState().init()

      expect(useGamificationStore.getState().initialized).toBe(true)
    })

    it('should load existing achievements', async () => {
      const achievements = ['achievement-1', 'achievement-2']
      vi.spyOn(database, 'initDatabase').mockResolvedValue(undefined)
      vi.spyOn(gamificationDb, 'getAchievements').mockResolvedValue(achievements)
      vi.spyOn(gamificationDb, 'getStreak').mockResolvedValue(null)
      vi.spyOn(gamificationDb, 'getCoins').mockResolvedValue(100)
      vi.spyOn(gamificationDb, 'getDailyChallenges').mockResolvedValue([])

      await useGamificationStore.getState().init()

      expect(useGamificationStore.getState().unlockedAchievements).toEqual(achievements)
    })

    it('should load streak data', async () => {
      const streak = {
        current_streak: 5,
        longest_streak: 10,
        last_activity_date: '2024-01-01',
        streak_freeze_count: 2,
      }
      vi.spyOn(database, 'initDatabase').mockResolvedValue(undefined)
      vi.spyOn(gamificationDb, 'getAchievements').mockResolvedValue([])
      vi.spyOn(gamificationDb, 'getStreak').mockResolvedValue(streak)
      vi.spyOn(gamificationDb, 'getCoins').mockResolvedValue(100)
      vi.spyOn(gamificationDb, 'getDailyChallenges').mockResolvedValue([])

      await useGamificationStore.getState().init()

      expect(useGamificationStore.getState().currentStreak).toBe(5)
      expect(useGamificationStore.getState().longestStreak).toBe(10)
      expect(useGamificationStore.getState().streakFreezes).toBe(2)
    })
  })

  describe('addCoins', () => {
    it('should add coins to user account', async () => {
      vi.spyOn(database, 'initDatabase').mockResolvedValue(undefined)
      vi.spyOn(gamificationDb, 'addCoins').mockResolvedValue(undefined)
      vi.spyOn(gamificationDb, 'getCoins').mockResolvedValue(150)

      useGamificationStore.setState({ coins: 100 })
      await useGamificationStore.getState().addCoins(50)

      expect(gamificationDb.addCoins).toHaveBeenCalledWith('user-1', 50)
      expect(useGamificationStore.getState().coins).toBe(150)
    })
  })

  describe('spendCoins', () => {
    it('should spend coins if user has enough', async () => {
      vi.spyOn(database, 'initDatabase').mockResolvedValue(undefined)
      vi.spyOn(gamificationDb, 'spendCoins').mockResolvedValue(true)

      useGamificationStore.setState({ coins: 100 })
      const result = await useGamificationStore.getState().spendCoins(50)

      expect(result).toBe(true)
      expect(useGamificationStore.getState().coins).toBe(50)
    })

    it('should not spend coins if user has insufficient funds', async () => {
      vi.spyOn(database, 'initDatabase').mockResolvedValue(undefined)
      vi.spyOn(gamificationDb, 'spendCoins').mockResolvedValue(false)

      useGamificationStore.setState({ coins: 30 })
      const result = await useGamificationStore.getState().spendCoins(50)

      expect(result).toBe(false)
      expect(useGamificationStore.getState().coins).toBe(30)
    })
  })

  describe('getStreakMultiplier', () => {
    it('should return 1.0 for no streak', () => {
      useGamificationStore.setState({ currentStreak: 0 })
      const multiplier = useGamificationStore.getState().getStreakMultiplier()
      expect(multiplier).toBe(1.0)
    })

    it('should return 1.5 for 7-day streak', () => {
      useGamificationStore.setState({ currentStreak: 7 })
      const multiplier = useGamificationStore.getState().getStreakMultiplier()
      expect(multiplier).toBe(1.5)
    })

    it('should return 2.0 for 14-day streak', () => {
      useGamificationStore.setState({ currentStreak: 14 })
      const multiplier = useGamificationStore.getState().getStreakMultiplier()
      expect(multiplier).toBe(2.0)
    })

    it('should return 3.5 for 100+ day streak', () => {
      useGamificationStore.setState({ currentStreak: 100 })
      const multiplier = useGamificationStore.getState().getStreakMultiplier()
      expect(multiplier).toBe(3.5)
    })
  })

  describe('updateStreakOnActivity', () => {
    it('should start new streak if no streak exists', async () => {
      const today = new Date().toISOString().split('T')[0]
      vi.spyOn(database, 'initDatabase').mockResolvedValue(undefined)
      vi.spyOn(gamificationDb, 'getStreak').mockResolvedValue(null)
      vi.spyOn(gamificationDb, 'updateStreak').mockResolvedValue(undefined)

      await useGamificationStore.getState().updateStreakOnActivity()

      expect(gamificationDb.updateStreak).toHaveBeenCalledWith('user-1', {
        current_streak: 1,
        longest_streak: 1,
        last_activity_date: today,
        streak_freeze_count: 0,
      })
      expect(useGamificationStore.getState().currentStreak).toBe(1)
    })

    it('should continue streak if activity was yesterday', async () => {
      const today = new Date().toISOString().split('T')[0]
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      const yesterdayStr = yesterday.toISOString().split('T')[0]

      const existingStreak = {
        current_streak: 5,
        longest_streak: 5,
        last_activity_date: yesterdayStr,
        streak_freeze_count: 0,
      }

      vi.spyOn(database, 'initDatabase').mockResolvedValue(undefined)
      vi.spyOn(gamificationDb, 'getStreak').mockResolvedValue(existingStreak)
      vi.spyOn(gamificationDb, 'updateStreak').mockResolvedValue(undefined)

      await useGamificationStore.getState().updateStreakOnActivity()

      expect(gamificationDb.updateStreak).toHaveBeenCalledWith('user-1', {
        current_streak: 6,
        longest_streak: 6,
        last_activity_date: today,
        streak_freeze_count: 0,
      })
      expect(useGamificationStore.getState().currentStreak).toBe(6)
    })
  })
})

