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
  getDailyChallenges,
  updateDailyChallenge,
} from '../db/gamificationDb'
import { achievements } from '../data/achievements'
import { getDailyChallengeForDate, DailyChallenge } from '../data/dailyChallenges'
import { updateUserStats } from '../db/userStatsDb'

interface DailyChallengeProgress {
  challenge: DailyChallenge
  progress: number
  completed: boolean
  rewardCoins: number
  rewardXP: number
}

interface GamificationState {
  unlockedAchievements: string[]
  currentStreak: number
  longestStreak: number
  coins: number
  streakFreezes: number
  dailyChallenges: DailyChallengeProgress[]
  initialized: boolean
  init: () => Promise<void>
  checkAndUnlockAchievements: () => Promise<string[]>
  updateStreakOnActivity: () => Promise<void>
  addCoins: (amount: number) => Promise<void>
  spendCoins: (amount: number) => Promise<boolean>
  getStreakMultiplier: () => number
  useStreakFreeze: () => Promise<boolean>
  getDailyChallenges: () => Promise<void>
  updateDailyChallengeProgress: () => Promise<void>
  completeDailyChallenge: (challengeId: string) => Promise<void>
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
  streakFreezes: 0,
  dailyChallenges: [],
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
          streakFreezes: streak.streak_freeze_count,
        })
      }

      // Load coins
      const coins = await getCoins(userId)
      set({ coins })

      // Load daily challenges
      await get().getDailyChallenges()

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

    try {
      const today = new Date().toISOString().split('T')[0]
      const streak = await getStreak(userId)

      if (!streak) {
        // First activity - start streak
        await updateStreak(userId, {
          current_streak: 1,
          longest_streak: 1,
          last_activity_date: today,
          streak_freeze_count: 0,
        })
        set({ currentStreak: 1, longestStreak: 1, streakFreezes: 0 })
        return
      }

      const lastActivity = streak.last_activity_date
      const currentStreak = streak.current_streak
      let streakFreezeCount = streak.streak_freeze_count

      if (lastActivity === today) {
        // Already active today - no change
        set({ currentStreak, longestStreak: streak.longest_streak, streakFreezes: streakFreezeCount })
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
          streak_freeze_count: streakFreezeCount,
        })
        set({ currentStreak: newStreak, longestStreak: newLongest, streakFreezes: streakFreezeCount })
      } else if (streakFreezeCount > 0) {
        // Use a streak freeze
        streakFreezeCount--
        await updateStreak(userId, {
          current_streak: currentStreak, // Keep current streak
          longest_streak: streak.longest_streak,
          last_activity_date: today,
          streak_freeze_count: streakFreezeCount,
        })
        set({ currentStreak, longestStreak: streak.longest_streak, streakFreezes: streakFreezeCount })
      } else {
        // Streak broken - start new streak
        await updateStreak(userId, {
          current_streak: 1,
          longest_streak: streak.longest_streak, // Keep longest
          last_activity_date: today,
          streak_freeze_count: 0,
        })
        set({ currentStreak: 1, longestStreak: streak.longest_streak, streakFreezes: 0 })
      }
    } catch (error) {
      console.error('Failed to update streak:', error)
    }
  },

  addCoins: async (amount: number) => {
    const userId = useAuthStore.getState().user?.id
    if (!userId) return

    try {
      await addCoins(userId, amount)
      const newCoins = get().coins + amount
      set({ coins: newCoins })

      // Update user stats (don't await to avoid blocking)
      const progressStore = useProgressStore.getState()
      updateUserStats(userId, progressStore.xp, progressStore.level, newCoins).catch((error) => {
        console.error('Failed to update user stats:', error)
      })
    } catch (error) {
      console.error('Failed to add coins:', error)
    }
  },

  spendCoins: async (amount: number) => {
    const userId = useAuthStore.getState().user?.id
    if (!userId) return false

    try {
      const success = await spendCoins(userId, amount)
      if (success) {
        const newCoins = get().coins - amount
        set({ coins: newCoins })

        // Update user stats (don't await to avoid blocking)
        const progressStore = useProgressStore.getState()
        updateUserStats(userId, progressStore.xp, progressStore.level, newCoins).catch((error) => {
          console.error('Failed to update user stats:', error)
        })
      }

      return success
    } catch (error) {
      console.error('Failed to spend coins:', error)
      return false
    }
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

  useStreakFreeze: async () => {
    const userId = useAuthStore.getState().user?.id
    if (!userId) return false

    const current = get()
    if (current.streakFreezes <= 0) return false

    const streak = await getStreak(userId)
    if (!streak) return false

    // Use a streak freeze
    const newFreezeCount = current.streakFreezes - 1
    await updateStreak(userId, {
      current_streak: streak.current_streak,
      longest_streak: streak.longest_streak,
      last_activity_date: streak.last_activity_date,
      streak_freeze_count: newFreezeCount,
    })

    set({ streakFreezes: newFreezeCount })
    return true
  },

  getDailyChallenges: async () => {
    const userId = useAuthStore.getState().user?.id
    if (!userId) return

    const today = new Date().toISOString().split('T')[0]
    const challenge = getDailyChallengeForDate(today)
    
    // Get existing progress
    const existing = await getDailyChallenges(userId, today)
    
    // Find or create challenge record
    let challengeRecord = existing.find(c => c.challenge_type === challenge.id)
    
    if (!challengeRecord) {
      // Create new challenge
      await updateDailyChallenge(userId, today, challenge.id, 0, false)
      challengeRecord = {
        id: 0,
        user_id: userId,
        challenge_date: today,
        challenge_type: challenge.id,
        completed: 0,
        progress: 0,
        target: challenge.target,
        reward_coins: challenge.rewardCoins,
        reward_xp: challenge.rewardXP,
      }
    }

    set({
      dailyChallenges: [{
        challenge,
        progress: challengeRecord.progress,
        completed: challengeRecord.completed === 1,
        rewardCoins: challengeRecord.reward_coins,
        rewardXP: challengeRecord.reward_xp,
      }],
    })
  },

  updateDailyChallengeProgress: async () => {
    const userId = useAuthStore.getState().user?.id
    if (!userId) return

    const today = new Date().toISOString().split('T')[0]
    const progressStore = useProgressStore.getState()
    
    // Get today's challenge
    const challenges = get().dailyChallenges
    if (challenges.length === 0) {
      await get().getDailyChallenges()
      return
    }

    const challenge = challenges[0]
    if (challenge.completed) return
    
    // Prevent infinite loops by checking if update is already in progress
    const lastUpdate = (get() as any).lastChallengeUpdate
    const now = Date.now()
    if (lastUpdate && now - lastUpdate < 1000) {
      return // Skip if updated less than 1 second ago
    }
    (get() as any).lastChallengeUpdate = now

    // Calculate progress based on challenge type
    let progress = 0
    const todayDate = new Date().toISOString().split('T')[0]

    switch (challenge.challenge.type) {
      case 'complete_lessons':
        progress = Object.values(progressStore.lessons).filter((l) => {
          if (!l.completed) return false
          const completedDate = new Date(l.lastAccessed).toISOString().split('T')[0]
          return completedDate === todayDate
        }).length
        break
      case 'earn_xp':
        // Get XP earned today (simplified - would need to track daily XP)
        progress = Math.floor(progressStore.xp / 100) // Simplified
        break
      case 'maintain_streak':
        progress = get().currentStreak > 0 ? 1 : 0
        break
      case 'unlock_achievements':
        // Get achievements unlocked today (simplified - would need to track unlock dates)
        progress = get().unlockedAchievements.length
        break
    }

    const completed = progress >= challenge.challenge.target
    await updateDailyChallenge(userId, today, challenge.challenge.id, progress, completed)

    if (completed && !challenge.completed) {
      // Award rewards
      await get().addCoins(challenge.rewardCoins)
      await progressStore.addXP(challenge.rewardXP)
      
      // Update challenge status
      set({
        dailyChallenges: [{
          ...challenge,
          progress,
          completed: true,
        }],
      })
    } else {
      set({
        dailyChallenges: [{
          ...challenge,
          progress,
        }],
      })
    }
  },

  completeDailyChallenge: async (challengeId: string) => {
    const userId = useAuthStore.getState().user?.id
    if (!userId) return

    const today = new Date().toISOString().split('T')[0]
    const challenge = get().dailyChallenges.find(c => c.challenge.id === challengeId)
    
    if (!challenge || challenge.completed) return

    // Mark as completed
    await updateDailyChallenge(userId, today, challengeId, challenge.challenge.target, true)
    
    // Award rewards
    await get().addCoins(challenge.rewardCoins)
    const progressStore = useProgressStore.getState()
    await progressStore.addXP(challenge.rewardXP)

    set({
      dailyChallenges: get().dailyChallenges.map(c =>
        c.challenge.id === challengeId ? { ...c, completed: true, progress: c.challenge.target } : c
      ),
    })
  },
}))

// Auto-update leaderboard when stats change
export function updateLeaderboardOnChange() {
  const userId = useAuthStore.getState().user?.id
  if (!userId) return

  const progressStore = useProgressStore.getState()
  const gamificationStore = useGamificationStore.getState()
  const user = useAuthStore.getState().user

  if (!user) return

  // Import and update leaderboard
  import('../db/gamificationDb').then(({ updateLeaderboardEntry }) => {
    // Get languages mastered
    progressStore.getAllLanguageProgress().then((languages) => {
      const languagesMastered = languages.filter(l => l.completed).length
      
      updateLeaderboardEntry(userId, {
        name: user.name,
        xp: progressStore.xp,
        level: progressStore.level,
        languagesMastered,
        achievementsUnlocked: gamificationStore.unlockedAchievements.length,
        currentStreak: gamificationStore.currentStreak,
      })
    })
  })
}

