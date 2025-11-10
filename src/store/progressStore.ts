import { create } from 'zustand'
import { initDatabase } from '../db/database'
import { updateProgress as updateProgressDb, getProgress as getProgressDb, getOverallProgress as getOverallProgressDb, getAllProgress as getAllProgressDb } from '../db/progressDb'
import { getUserStats, updateUserStats } from '../db/userStatsDb'
import { useAuthStore } from './authStore'
import { lessons } from '../data/lessons'
import { languageConfigs, getLanguageConfig, getNextLanguageInTrack, getLanguagesByTrack } from '../data/languages'

interface LessonProgress {
  lessonId: string
  completed: boolean
  progress: number // 0-100
  lastAccessed: number
}

export type LanguageTrack = 'Web' | 'Mobile' | 'Systems'

export interface LanguageProgress {
  id: string // 'JavaScript', 'Python', etc.
  name: string // Display name
  progress: number // 0-100
  completed: boolean
  unlocked: boolean
  track: LanguageTrack
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  totalLessons: number
  completedLessons: number
  xp: number
}

interface ProgressState {
  lessons: Record<string, LessonProgress>
  languages: Record<string, LanguageProgress>
  xp: number
  level: number
  initialized: boolean
  init: () => Promise<void>
  updateProgress: (lessonId: string, progress: number, completed?: boolean) => Promise<void>
  getProgress: (lessonId: string) => Promise<LessonProgress | null>
  getOverallProgress: () => Promise<number>
  getLanguageProgress: (languageId: string) => Promise<LanguageProgress | null>
  getAllLanguageProgress: () => Promise<LanguageProgress[]>
  addXP: (amount: number) => Promise<void>
}

// Unlock threshold: percentage of lessons needed to unlock next language
const UNLOCK_THRESHOLD = 100 // 100% completion required

// XP values
const XP_PER_LESSON_COMPLETION = 100
const XP_PER_PROGRESS_POINT = 1

export const useProgressStore = create<ProgressState>()((set, get) => ({
  lessons: {},
  languages: {},
  xp: 0,
  level: 1,
  initialized: false,
  init: async () => {
    if (get().initialized) return
    
    try {
      await initDatabase()
      
      // Always recalculate XP from completed lessons to ensure accuracy
      const userId = useAuthStore.getState().user?.id
      if (userId) {
        // Get all progress from database
        const allProgress = await getAllProgressDb(userId)
        let totalXP = 0
        
        // Create a map of lesson progress for quick lookup
        const progressMap = new Map<string, { completed: number; progress: number }>()
        for (const p of allProgress) {
          progressMap.set(p.lesson_id, { completed: p.completed, progress: p.progress })
        }
        
        // Calculate XP from all completed lessons
        for (const lesson of lessons.filter((l) => (l.order ?? 0) > 0)) {
          const progress = progressMap.get(lesson.id)
          if (progress) {
            if (progress.completed === 1) {
              totalXP += XP_PER_LESSON_COMPLETION
            }
            totalXP += Math.round(progress.progress * XP_PER_PROGRESS_POINT)
          }
        }
        
        const calculatedLevel = Math.floor(totalXP / 100) + 1
        set({ xp: totalXP, level: calculatedLevel })
        
        // Always save to database to keep it in sync
        await updateUserStats(userId, totalXP, calculatedLevel)
      }
      
      set({ initialized: true })
    } catch (error) {
      console.error('Failed to initialize progress:', error)
      set({ initialized: true })
    }
  },
  updateProgress: async (lessonId: string, progress: number, completed = false) => {
    try {
      await initDatabase()
      
      const userId = useAuthStore.getState().user?.id
      if (!userId) {
        console.error('User not authenticated')
        return
      }
      
      const clampedProgress = Math.min(100, Math.max(0, progress))
      await updateProgressDb(userId, lessonId, clampedProgress, completed)
      
      // Update local state
      set((state) => ({
        lessons: {
          ...state.lessons,
          [lessonId]: {
            lessonId,
            progress: clampedProgress,
            completed,
            lastAccessed: Date.now(),
          },
        },
      }))

      // Update language progress and XP
      const lesson = lessons.find((l) => l.id === lessonId)
      if (lesson) {
        // Calculate XP gain
        const currentState = get()
        const previousProgress = currentState.lessons[lessonId]?.progress || 0
        const progressDiff = clampedProgress - previousProgress
        const xpGain = Math.round(progressDiff * XP_PER_PROGRESS_POINT)
        
        if (completed && !currentState.lessons[lessonId]?.completed) {
          // Bonus XP for completing a lesson
          await get().addXP(XP_PER_LESSON_COMPLETION + xpGain)
          
          // Gamification: Award coins and check achievements
          const gamificationStore = (await import('./gamificationStore')).useGamificationStore.getState()
          await gamificationStore.addCoins(10) // Base coins for lesson completion
          await gamificationStore.updateStreakOnActivity()
          await gamificationStore.checkAndUnlockAchievements()
          await gamificationStore.updateDailyChallengeProgress() // Update daily challenge progress
          
          // Update leaderboard
          const { updateLeaderboardOnChange } = await import('./gamificationStore')
          updateLeaderboardOnChange()
        } else if (xpGain > 0) {
          await get().addXP(xpGain)
        }

        // Recalculate language progress
        await get().getLanguageProgress(lesson.subject)
      }
    } catch (error) {
      console.error('Failed to update progress:', error)
    }
  },
  getProgress: async (lessonId: string) => {
    try {
      await initDatabase()
      
      const userId = useAuthStore.getState().user?.id
      if (!userId) {
        return null
      }
      
      const dbProgress = await getProgressDb(userId, lessonId)
      if (!dbProgress) {
        return null
      }
      
      const progress: LessonProgress = {
        lessonId: dbProgress.lesson_id,
        progress: dbProgress.progress,
        completed: dbProgress.completed === 1,
        lastAccessed: dbProgress.last_accessed,
      }
      
      // Update local state
      set((state) => ({
        lessons: {
          ...state.lessons,
          [lessonId]: progress,
        },
      }))
      
      return progress
    } catch (error) {
      console.error('Failed to get progress:', error)
      return null
    }
  },
  getOverallProgress: async () => {
    try {
      await initDatabase()
      
      const userId = useAuthStore.getState().user?.id
      if (!userId) {
        return 0
      }
      
      return await getOverallProgressDb(userId)
    } catch (error) {
      console.error('Failed to get overall progress:', error)
      return 0
    }
  },
  getLanguageProgress: async (languageId: string) => {
    try {
      await initDatabase()
      
      const userId = useAuthStore.getState().user?.id
      if (!userId) {
        return null
      }

      // Get all lessons for this language with order > 0 (exclude legacy lessons with order 0 or undefined)
      const languageLessons = lessons.filter((l) => l.subject === languageId && (l.order ?? 0) > 0)
      if (languageLessons.length === 0) {
        return null
      }

      // Get progress for each lesson
      const lessonProgresses = await Promise.all(
        languageLessons.map((lesson) => getProgressDb(userId, lesson.id))
      )

      // Calculate language progress
      let totalProgress = 0
      let completedLessons = 0
      let totalXP = 0

      lessonProgresses.forEach((progress, index) => {
        if (progress) {
          totalProgress += progress.progress
          if (progress.completed === 1) {
            completedLessons++
            totalXP += XP_PER_LESSON_COMPLETION
          }
          totalXP += progress.progress * XP_PER_PROGRESS_POINT
        }
      })

      const avgProgress = lessonProgresses.length > 0 
        ? Math.round(totalProgress / lessonProgresses.length)
        : 0
      
      const isCompleted = completedLessons === languageLessons.length
      
      // Get language config
      const langConfig = getLanguageConfig(languageId)
      let isUnlocked = false
      
      if (!langConfig) {
        // If language not in config, default to unlocked
        isUnlocked = true
      } else {
        // Determine unlock status based on track progression
        // First language in each track is always unlocked
        const trackLanguages = getLanguagesByTrack(langConfig.track)
        const isFirstInTrack = langConfig.order === 1
        
        if (isFirstInTrack) {
          isUnlocked = true
        } else {
          // Check if previous language in track is completed
          const previousLanguage = trackLanguages.find(
            (config) => config.order === langConfig.order - 1
          )
          
          if (previousLanguage) {
            // Get previous language progress from state or calculate it
            const previousLangProgress = get().languages[previousLanguage.id]
            if (previousLangProgress) {
              isUnlocked = previousLangProgress.completed
            } else {
              // If not in state, calculate it
              const prevLessons = lessons.filter((l) => l.subject === previousLanguage.id && (l.order ?? 0) > 0)
              if (prevLessons.length > 0) {
                const prevProgresses = await Promise.all(
                  prevLessons.map((lesson) => getProgressDb(userId, lesson.id))
                )
                let prevCompleted = 0
                prevProgresses.forEach((p) => {
                  if (p && p.completed === 1) prevCompleted++
                })
                const prevIsCompleted = prevCompleted === prevLessons.length && prevLessons.length > 0
                isUnlocked = prevIsCompleted
              } else {
                // If no lessons exist for previous language, unlock it
                isUnlocked = true
              }
            }
          }
        }
      }

      // Use langConfig already retrieved above
      const languageProgress: LanguageProgress = {
        id: languageId,
        name: langConfig?.name || languageId,
        progress: avgProgress,
        completed: isCompleted,
        unlocked: isUnlocked,
        track: langConfig?.track || 'Web',
        difficulty: langConfig?.difficulty || 'beginner',
        totalLessons: languageLessons.length,
        completedLessons,
        xp: totalXP,
      }

      // Update local state
      set((state) => ({
        languages: {
          ...state.languages,
          [languageId]: languageProgress,
        },
      }))

      return languageProgress
    } catch (error) {
      console.error('Failed to get language progress:', error)
      return null
    }
  },
  getAllLanguageProgress: async () => {
    try {
      // Get languages from config (only those with lessons)
      const languagesWithLessons = languageConfigs.filter((config) =>
        lessons.some((lesson) => lesson.subject === config.id)
      )
      
      // Get progress for each language
      const languageProgresses = await Promise.all(
        languagesWithLessons.map((config) => get().getLanguageProgress(config.id))
      )

      // Filter out nulls and sort by track, then order
      return languageProgresses
        .filter((lp): lp is LanguageProgress => lp !== null)
        .sort((a, b) => {
          // First by track
          const trackOrder: Record<LanguageTrack, number> = { Web: 1, Mobile: 2, Systems: 3 }
          if (trackOrder[a.track] !== trackOrder[b.track]) {
            return trackOrder[a.track] - trackOrder[b.track]
          }
          // Then by order within track
          const aConfig = getLanguageConfig(a.id)
          const bConfig = getLanguageConfig(b.id)
          if (aConfig && bConfig) {
            return aConfig.order - bConfig.order
          }
          return 0
        })
    } catch (error) {
      console.error('Failed to get all language progress:', error)
      return []
    }
  },
  addXP: async (amount: number) => {
    try {
      await initDatabase()
      
      const userId = useAuthStore.getState().user?.id
      if (!userId) {
        console.error('User not authenticated')
        return
      }
      
      const currentXP = get().xp
      const newXP = currentXP + amount
      
      // Calculate level (100 XP per level)
      const newLevel = Math.floor(newXP / 100) + 1
      
      // Update local state
      set({ xp: newXP, level: newLevel })
      
      // Persist to database
      await updateUserStats(userId, newXP, newLevel)
    } catch (error) {
      console.error('Failed to add XP:', error)
    }
  },
}))

