export interface DailyChallenge {
  id: string
  name: string
  description: string
  type: 'complete_lessons' | 'complete_languages' | 'maintain_streak' | 'earn_xp' | 'unlock_achievements'
  target: number
  rewardCoins: number
  rewardXP: number
  icon: string
}

export const dailyChallengeTemplates: DailyChallenge[] = [
  {
    id: 'complete_3_lessons',
    name: 'Daily Learner',
    description: 'Complete 3 lessons today',
    type: 'complete_lessons',
    target: 3,
    rewardCoins: 50,
    rewardXP: 100,
    icon: '📚',
  },
  {
    id: 'complete_5_lessons',
    name: 'Dedicated Student',
    description: 'Complete 5 lessons today',
    type: 'complete_lessons',
    target: 5,
    rewardCoins: 100,
    rewardXP: 200,
    icon: '🎓',
  },
  {
    id: 'earn_500_xp',
    name: 'XP Hunter',
    description: 'Earn 500 XP today',
    type: 'earn_xp',
    target: 500,
    rewardCoins: 75,
    rewardXP: 150,
    icon: '⭐',
  },
  {
    id: 'maintain_streak',
    name: 'Streak Keeper',
    description: 'Maintain your daily streak',
    type: 'maintain_streak',
    target: 1,
    rewardCoins: 25,
    rewardXP: 50,
    icon: '🔥',
  },
  {
    id: 'unlock_achievement',
    name: 'Achievement Seeker',
    description: 'Unlock 1 achievement today',
    type: 'unlock_achievements',
    target: 1,
    rewardCoins: 50,
    rewardXP: 100,
    icon: '🏆',
  },
]

export function getDailyChallengeForDate(date: string): DailyChallenge {
  // Use date as seed for consistent daily challenge
  const dateNum = parseInt(date.replace(/-/g, ''), 10)
  const index = dateNum % dailyChallengeTemplates.length
  return dailyChallengeTemplates[index]
}

