export type AchievementRarity = 'common' | 'rare' | 'epic' | 'legendary'

export interface Achievement {
  id: string
  name: string
  description: string
  icon: string
  rarity: AchievementRarity
  category: 'first_steps' | 'language_mastery' | 'speed' | 'perfect' | 'consistency' | 'special'
  rewardCoins: number
  rewardXP: number
  condition: (userData: any) => boolean | Promise<boolean>
}

// Achievement definitions
export const achievements: Achievement[] = [
  // First Steps
  {
    id: 'hello_world',
    name: 'Hello World',
    description: 'Complete your first lesson',
    icon: '👋',
    rarity: 'common',
    category: 'first_steps',
    rewardCoins: 25,
    rewardXP: 50,
    condition: (userData) => userData.totalLessonsCompleted >= 1,
  },
  {
    id: 'getting_started',
    name: 'Getting Started',
    description: 'Complete 5 lessons',
    icon: '🚀',
    rarity: 'common',
    category: 'first_steps',
    rewardCoins: 50,
    rewardXP: 100,
    condition: (userData) => userData.totalLessonsCompleted >= 5,
  },
  {
    id: 'on_a_roll',
    name: 'On a Roll',
    description: 'Complete 10 lessons',
    icon: '🔥',
    rarity: 'rare',
    category: 'first_steps',
    rewardCoins: 100,
    rewardXP: 200,
    condition: (userData) => userData.totalLessonsCompleted >= 10,
  },

  // Language Mastery
  {
    id: 'javascript_novice',
    name: 'JavaScript Novice',
    description: 'Complete all JavaScript lessons',
    icon: '📜',
    rarity: 'rare',
    category: 'language_mastery',
    rewardCoins: 150,
    rewardXP: 300,
    condition: (userData) => userData.languagesMastered?.includes('JavaScript'),
  },
  {
    id: 'python_pro',
    name: 'Python Pro',
    description: 'Complete all Python lessons',
    icon: '🐍',
    rarity: 'rare',
    category: 'language_mastery',
    rewardCoins: 150,
    rewardXP: 300,
    condition: (userData) => userData.languagesMastered?.includes('Python'),
  },
  {
    id: 'html_hero',
    name: 'HTML Hero',
    description: 'Complete all HTML lessons',
    icon: '🌐',
    rarity: 'rare',
    category: 'language_mastery',
    rewardCoins: 150,
    rewardXP: 300,
    condition: (userData) => userData.languagesMastered?.includes('HTML'),
  },
  {
    id: 'polyglot',
    name: 'Polyglot',
    description: 'Master 5 different languages',
    icon: '🌍',
    rarity: 'epic',
    category: 'language_mastery',
    rewardCoins: 300,
    rewardXP: 500,
    condition: (userData) => (userData.languagesMastered?.length || 0) >= 5,
  },
  {
    id: 'linguist',
    name: 'Linguist',
    description: 'Master 10 different languages',
    icon: '🎓',
    rarity: 'epic',
    category: 'language_mastery',
    rewardCoins: 500,
    rewardXP: 1000,
    condition: (userData) => (userData.languagesMastered?.length || 0) >= 10,
  },
  {
    id: 'code_whisperer',
    name: 'Code Whisperer',
    description: 'Master 20 different languages',
    icon: '✨',
    rarity: 'legendary',
    category: 'language_mastery',
    rewardCoins: 1000,
    rewardXP: 2000,
    condition: (userData) => (userData.languagesMastered?.length || 0) >= 20,
  },

  // Speed & Efficiency
  {
    id: 'speed_demon',
    name: 'Speed Demon',
    description: 'Complete a lesson in under 5 minutes',
    icon: '⚡',
    rarity: 'common',
    category: 'speed',
    rewardCoins: 50,
    rewardXP: 100,
    condition: (userData) => userData.hasFastCompletion || false,
  },
  {
    id: 'quick_learner',
    name: 'Quick Learner',
    description: 'Complete 3 lessons in one day',
    icon: '📚',
    rarity: 'rare',
    category: 'speed',
    rewardCoins: 100,
    rewardXP: 200,
    condition: (userData) => userData.lessonsToday >= 3,
  },
  {
    id: 'marathon_runner',
    name: 'Marathon Runner',
    description: 'Complete 10 lessons in one day',
    icon: '🏃',
    rarity: 'epic',
    category: 'speed',
    rewardCoins: 300,
    rewardXP: 500,
    condition: (userData) => userData.lessonsToday >= 10,
  },

  // Perfect Execution
  {
    id: 'first_try',
    name: 'First Try',
    description: 'Complete a lesson on first attempt',
    icon: '🎯',
    rarity: 'common',
    category: 'perfect',
    rewardCoins: 50,
    rewardXP: 100,
    condition: (userData) => userData.hasFirstTryCompletion || false,
  },
  {
    id: 'perfect_streak',
    name: 'Perfect Streak',
    description: 'Complete 5 lessons in a row on first try',
    icon: '💯',
    rarity: 'epic',
    category: 'perfect',
    rewardCoins: 300,
    rewardXP: 500,
    condition: (userData) => userData.perfectStreak >= 5,
  },
  {
    id: 'flawless',
    name: 'Flawless',
    description: 'Complete 10 lessons without any errors',
    icon: '✨',
    rarity: 'legendary',
    category: 'perfect',
    rewardCoins: 500,
    rewardXP: 1000,
    condition: (userData) => userData.flawlessLessons >= 10,
  },

  // Consistency
  {
    id: 'daily_coder',
    name: 'Daily Coder',
    description: 'Code every day for 7 days',
    icon: '📅',
    rarity: 'rare',
    category: 'consistency',
    rewardCoins: 150,
    rewardXP: 300,
    condition: (userData) => userData.currentStreak >= 7,
  },
  {
    id: 'week_warrior',
    name: 'Week Warrior',
    description: 'Code every day for 14 days',
    icon: '⚔️',
    rarity: 'epic',
    category: 'consistency',
    rewardCoins: 300,
    rewardXP: 500,
    condition: (userData) => userData.currentStreak >= 14,
  },
  {
    id: 'month_master',
    name: 'Month Master',
    description: 'Code every day for 30 days',
    icon: '👑',
    rarity: 'epic',
    category: 'consistency',
    rewardCoins: 500,
    rewardXP: 1000,
    condition: (userData) => userData.currentStreak >= 30,
  },
  {
    id: 'habit_builder',
    name: 'Habit Builder',
    description: 'Code every day for 100 days',
    icon: '🏆',
    rarity: 'legendary',
    category: 'consistency',
    rewardCoins: 1000,
    rewardXP: 2000,
    condition: (userData) => userData.currentStreak >= 100,
  },

  // Special Challenges
  {
    id: 'weekend_warrior',
    name: 'Weekend Warrior',
    description: 'Complete 5 lessons on a weekend',
    icon: '🎮',
    rarity: 'rare',
    category: 'special',
    rewardCoins: 150,
    rewardXP: 300,
    condition: (userData) => userData.weekendLessons >= 5,
  },
  {
    id: 'night_owl',
    name: 'Night Owl',
    description: 'Complete a lesson after midnight',
    icon: '🦉',
    rarity: 'common',
    category: 'special',
    rewardCoins: 50,
    rewardXP: 100,
    condition: (userData) => userData.hasNightCompletion || false,
  },
  {
    id: 'early_bird',
    name: 'Early Bird',
    description: 'Complete a lesson before 6 AM',
    icon: '🐦',
    rarity: 'common',
    category: 'special',
    rewardCoins: 50,
    rewardXP: 100,
    condition: (userData) => userData.hasEarlyCompletion || false,
  },
]

export function getAchievementById(id: string): Achievement | undefined {
  return achievements.find((a) => a.id === id)
}

export function getAchievementsByCategory(category: Achievement['category']): Achievement[] {
  return achievements.filter((a) => a.category === category)
}

export function getAchievementsByRarity(rarity: AchievementRarity): Achievement[] {
  return achievements.filter((a) => a.rarity === rarity)
}

