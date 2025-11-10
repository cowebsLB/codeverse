export type UnlockableType = 'avatar' | 'theme' | 'badge' | 'title' | 'effect' | 'background'
export type UnlockableRarity = 'common' | 'rare' | 'epic' | 'legendary'

export interface Unlockable {
  id: string
  name: string
  description: string
  type: UnlockableType
  rarity: UnlockableRarity
  icon: string
  cost: number // Coins required to unlock
  requirement?: {
    type: 'achievement' | 'level' | 'streak' | 'lessons_completed' | 'languages_mastered'
    value: number
    achievementId?: string
  }
  preview?: string // URL or data for preview
}

export const unlockables: Unlockable[] = [
  // Avatars
  {
    id: 'avatar-1',
    name: 'Code Master',
    description: 'Unlock by reaching Level 10',
    type: 'avatar',
    rarity: 'rare',
    icon: '👨‍💻',
    cost: 0,
    requirement: {
      type: 'level',
      value: 10,
    },
  },
  {
    id: 'avatar-2',
    name: 'Python Pro',
    description: 'Unlock by mastering Python',
    type: 'avatar',
    rarity: 'epic',
    icon: '🐍',
    cost: 0,
    requirement: {
      type: 'languages_mastered',
      value: 1,
    },
  },
  {
    id: 'avatar-3',
    name: 'Streak Champion',
    description: 'Unlock by maintaining a 30-day streak',
    type: 'avatar',
    rarity: 'legendary',
    icon: '🔥',
    cost: 0,
    requirement: {
      type: 'streak',
      value: 30,
    },
  },
  {
    id: 'avatar-4',
    name: 'Golden Coder',
    description: 'Purchase with 500 coins',
    type: 'avatar',
    rarity: 'epic',
    icon: '👑',
    cost: 500,
  },
  
  // Themes
  {
    id: 'theme-1',
    name: 'Neon Theme',
    description: 'Unlock by completing 50 lessons',
    type: 'theme',
    rarity: 'rare',
    icon: '💡',
    cost: 0,
    requirement: {
      type: 'lessons_completed',
      value: 50,
    },
  },
  {
    id: 'theme-2',
    name: 'Matrix Theme',
    description: 'Purchase with 300 coins',
    type: 'theme',
    rarity: 'epic',
    icon: '🟢',
    cost: 300,
  },
  {
    id: 'theme-3',
    name: 'Solarized Theme',
    description: 'Purchase with 250 coins',
    type: 'theme',
    rarity: 'rare',
    icon: '☀️',
    cost: 250,
  },
  
  // Badges
  {
    id: 'badge-1',
    name: 'First Steps',
    description: 'Unlock by completing your first lesson',
    type: 'badge',
    rarity: 'common',
    icon: '🎯',
    cost: 0,
    requirement: {
      type: 'achievement',
      value: 1,
      achievementId: 'hello_world',
    },
  },
  {
    id: 'badge-2',
    name: 'Polyglot',
    description: 'Unlock by mastering 5 languages',
    type: 'badge',
    rarity: 'legendary',
    icon: '🗣️',
    cost: 0,
    requirement: {
      type: 'languages_mastered',
      value: 5,
    },
  },
  
  // Titles
  {
    id: 'title-1',
    name: 'Novice Coder',
    description: 'Unlock by reaching Level 5',
    type: 'title',
    rarity: 'common',
    icon: '📝',
    cost: 0,
    requirement: {
      type: 'level',
      value: 5,
    },
  },
  {
    id: 'title-2',
    name: 'Code Wizard',
    description: 'Purchase with 1000 coins',
    type: 'title',
    rarity: 'legendary',
    icon: '🧙',
    cost: 1000,
  },
  
  // Effects
  {
    id: 'effect-1',
    name: 'Confetti Effect',
    description: 'Unlock by completing 25 lessons',
    type: 'effect',
    rarity: 'rare',
    icon: '🎊',
    cost: 0,
    requirement: {
      type: 'lessons_completed',
      value: 25,
    },
  },
  {
    id: 'effect-2',
    name: 'Fireworks Effect',
    description: 'Purchase with 400 coins',
    type: 'effect',
    rarity: 'epic',
    icon: '🎆',
    cost: 400,
  },
  
  // Backgrounds
  {
    id: 'bg-1',
    name: 'Space Background',
    description: 'Unlock by reaching Level 15',
    type: 'background',
    rarity: 'epic',
    icon: '🌌',
    cost: 0,
    requirement: {
      type: 'level',
      value: 15,
    },
  },
  {
    id: 'bg-2',
    name: 'Cyber Background',
    description: 'Purchase with 600 coins',
    type: 'background',
    rarity: 'legendary',
    icon: '🌐',
    cost: 600,
  },
]

export function getUnlockableById(id: string): Unlockable | undefined {
  return unlockables.find(u => u.id === id)
}

export function getUnlockablesByType(type: UnlockableType): Unlockable[] {
  return unlockables.filter(u => u.type === type)
}

export function checkUnlockableRequirement(unlockable: Unlockable, userData: {
  level: number
  streak: number
  lessonsCompleted: number
  languagesMastered: number
  achievements: string[]
  coins: number
}): { canUnlock: boolean; reason?: string } {
  // Check if already unlocked (would need to check database)
  
  // Check cost
  if (unlockable.cost > 0 && userData.coins < unlockable.cost) {
    return {
      canUnlock: false,
      reason: `Need ${unlockable.cost - userData.coins} more coins`,
    }
  }
  
  // Check requirement
  if (unlockable.requirement) {
    const { type, value, achievementId } = unlockable.requirement
    
    switch (type) {
      case 'level':
        if (userData.level < value) {
          return {
            canUnlock: false,
            reason: `Reach level ${value}`,
          }
        }
        break
      case 'streak':
        if (userData.streak < value) {
          return {
            canUnlock: false,
            reason: `Maintain a ${value}-day streak`,
          }
        }
        break
      case 'lessons_completed':
        if (userData.lessonsCompleted < value) {
          return {
            canUnlock: false,
            reason: `Complete ${value} lessons`,
          }
        }
        break
      case 'languages_mastered':
        if (userData.languagesMastered < value) {
          return {
            canUnlock: false,
            reason: `Master ${value} language${value > 1 ? 's' : ''}`,
          }
        }
        break
      case 'achievement':
        if (achievementId && !userData.achievements.includes(achievementId)) {
          return {
            canUnlock: false,
            reason: `Unlock the required achievement`,
          }
        }
        break
    }
  }
  
  return { canUnlock: true }
}

