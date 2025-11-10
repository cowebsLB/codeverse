import { create } from 'zustand'
import { initDatabase } from '../db/database'
import { useAuthStore } from './authStore'
import { useProgressStore } from './progressStore'
import {
  getAchievements,
  unlockAchievement,
  getStreak,
  updateStreak,
  getCoins,
  addCoins,
  spendCoins,
} from '../db/gamificationDb'
import { achievements, Achievement } from '../data/achievements'
import { updateUserStats } from '../db/userStatsDb'

interface GamificationState {
  unlockedAchievements: string[]
  currentStreak: number
  longestStreak: number
  coins: number
  initialized: boolean
  init: () => Promise<void>
  checkAndUnlockAchievements: () => Promise<string[]>
  updateStreakOnActivity: () => Promise<void>
  addCoins: (amount: number) => Promise<void>
  spendCoins: (amount: number) => Promise<boolean>
  getStreakMultiplier: () => number
}

// Streak multipliers
const STREAK_MULTIPLIERS: Record<number, number> = {
  0: 1.0,
  7: 1.5,
  14: 2.0,
  30: 2.5,
  60: 3.0,
  100: 3.5,
}

export const useGamificationStore = create<GamificationState>()((set, get) => ({
  unlockedAchievements: [],
  currentStreak: 0,
  longestStreak: 0,
  coins: 0,
  initialized: false,

  init: async () => {
    if (get().initialized) return

    try {
      await initDatabase()

      const userId = useAuthStore.getState().user?.id
      if (!userId) {
        set({ initialized: true })
        return
      }

      // Load achievements
      const unlocked = await getAchievements(userId)
      set({ unlockedAchievements: unlocked })

      // Load streak
      const streak = await getStreak(userId)
      if (streak) {
        set({
          currentStreak: streak.current_streak,
          longestStreak: streak.longest_streak,
        })
      }

      // Load coins
      const coins = await getCoins(userId)
      set({ coins })

      // Update streak on init (check if activity today)
      await get().updateStreakOnActivity()

      set({ initialized: true })
    } catch (error) {
      console.error('Failed to initialize gamification:', error)
      set({ initialized: true })
    }
  },

  checkAndUnlockAchievements: async () => {
    const userId = useAuthStore.getState().user?.id
    if (!userId) return []

    const progressStore = useProgressStore.getState()
    const unlocked = get().unlockedAchievements
    const newlyUnlocked: string[] = []

    // Get user data for achievement checking
    const allProgress = await progressStore.getAllLanguageProgress()
    const languagesMastered = allProgress
      .filter((lp) => lp.completed)
      .map((lp) => lp.name)

    const totalLessonsCompleted = Object.values(progressStore.lessons).filter(
      (l) => l.completed
    ).length

    // Get today's date
    const today = new Date().toISOString().split('T')[0]
    const now = new Date()
    const hour = now.getHours()

    // Check lessons completed today
    const lessonsToday = Object.values(progressStore.lessons).filter((l) => {
      if (!l.completed) return false
      const completedDate = new Date(l.lastAccessed).toISOString().split('T')[0]
      return completedDate === today
    }).length

    // Prepare user data for achievement conditions
    const userData = {
      totalLessonsCompleted,
      languagesMastered,
      lessonsToday,
      currentStreak: get().currentStreak,
      hasFastCompletion: false, // TODO: Track lesson completion time
      hasFirstTryCompletion: false, // TODO: Track first try completions
      hasNightCompletion: hour >= 0 && hour < 6,
      hasEarlyCompletion: hour >= 5 && hour < 6,
      perfectStreak: 0, // TODO: Track perfect streak
      flawlessLessons: 0, // TODO: Track flawless lessons
      weekendLessons: 0, // TODO: Track weekend lessons
    }

    // Check each achievement
    for (const achievement of achievements) {
      if (unlocked.includes(achievement.id)) continue

      try {
        const conditionMet = await achievement.condition(userData)
        if (conditionMet) {
          await unlockAchievement(userId, achievement.id)
          await get().addCoins(achievement.rewardCoins)
          await progressStore.addXP(achievement.rewardXP)
          newlyUnlocked.push(achievement.id)
        }
      } catch (error) {
        console.error(`Error checking achievement ${achievement.id}:`, error)
      }
    }

    if (newlyUnlocked.length > 0) {
      set({
        unlockedAchievements: [...unlocked, ...newlyUnlocked],
      })
    }

    return newlyUnlocked
  },

  updateStreakOnActivity: async () => {
    const userId = useAuthStore.getState().user?.id
    if (!userId) return

    const today = new Date().toISOString().split('T')[0]
    const streak = await getStreak(userId)

    if (!streak) {
      // First activity - start streak
      await updateStreak(userId, {
        current_streak: 1,
        longest_streak: 1,
        last_activity_date: today,
      })
      set({ currentStreak: 1, longestStreak: 1 })
      return
    }

    const lastActivity = streak.last_activity_date
    const currentStreak = streak.current_streak

    if (lastActivity === today) {
      // Already active today - no change
      set({ currentStreak, longestStreak: streak.longest_streak })
      return
    }

    // Check if yesterday
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const yesterdayStr = yesterday.toISOString().split('T')[0]

    if (lastActivity === yesterdayStr) {
      // Continue streak
      const newStreak = currentStreak + 1
      const newLongest = Math.max(newStreak, streak.longest_streak)
      await updateStreak(userId, {
        current_streak: newStreak,
        longest_streak: newLongest,
        last_activity_date: today,
      })
      set({ currentStreak: newStreak, longestStreak: newLongest })
    } else {
      // Streak broken - start new streak
      await updateStreak(userId, {
        current_streak: 1,
        longest_streak: streak.longest_streak, // Keep longest
        last_activity_date: today,
      })
      set({ currentStreak: 1, longestStreak: streak.longest_streak })
    }
  },

  addCoins: async (amount: number) => {
    const userId = useAuthStore.getState().user?.id
    if (!userId) return

    await addCoins(userId, amount)
    const newCoins = get().coins + amount
    set({ coins: newCoins })

    // Update user stats
    const progressStore = useProgressStore.getState()
    await updateUserStats(userId, progressStore.xp, progressStore.level, newCoins)
  },

  spendCoins: async (amount: number) => {
    const userId = useAuthStore.getState().user?.id
    if (!userId) return false

    const success = await spendCoins(userId, amount)
    if (success) {
      const newCoins = get().coins - amount
      set({ coins: newCoins })

      // Update user stats
      const progressStore = useProgressStore.getState()
      await updateUserStats(userId, progressStore.xp, progressStore.level, newCoins)
    }

    return success
  },

  getStreakMultiplier: () => {
    const streak = get().currentStreak
    // Find the highest multiplier threshold that applies
    const thresholds = Object.keys(STREAK_MULTIPLIERS)
      .map(Number)
      .sort((a, b) => b - a)

    for (const threshold of thresholds) {
      if (streak >= threshold) {
        return STREAK_MULTIPLIERS[threshold]
      }
    }

    return 1.0
  },
}))

