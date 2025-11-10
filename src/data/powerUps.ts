export type PowerUpType = 'xp_boost' | 'coin_boost' | 'streak_freeze' | 'hint' | 'time_extension'

export interface PowerUp {
  id: string
  name: string
  description: string
  type: PowerUpType
  icon: string
  cost: number // Coins required to purchase
  effect: {
    duration?: number // Duration in minutes (for boosts)
    multiplier?: number // Multiplier for boosts
    amount?: number // Amount for one-time effects
  }
  maxQuantity?: number // Maximum quantity user can hold
}

export const powerUps: PowerUp[] = [
  {
    id: 'xp_boost_2x',
    name: '2x XP Boost',
    description: 'Double your XP gain for 1 hour',
    type: 'xp_boost',
    icon: '⚡',
    cost: 100,
    effect: {
      duration: 60,
      multiplier: 2,
    },
    maxQuantity: 5,
  },
  {
    id: 'xp_boost_3x',
    name: '3x XP Boost',
    description: 'Triple your XP gain for 30 minutes',
    type: 'xp_boost',
    icon: '🚀',
    cost: 200,
    effect: {
      duration: 30,
      multiplier: 3,
    },
    maxQuantity: 3,
  },
  {
    id: 'coin_boost_2x',
    name: '2x Coin Boost',
    description: 'Double your coin earnings for 1 hour',
    type: 'coin_boost',
    icon: '💰',
    cost: 150,
    effect: {
      duration: 60,
      multiplier: 2,
    },
    maxQuantity: 5,
  },
  {
    id: 'streak_freeze',
    name: 'Streak Freeze',
    description: 'Protect your streak for one day',
    type: 'streak_freeze',
    icon: '❄️',
    cost: 50,
    effect: {
      amount: 1,
    },
    maxQuantity: 10,
  },
  {
    id: 'hint',
    name: 'Lesson Hint',
    description: 'Get a hint for the current lesson',
    type: 'hint',
    icon: '💡',
    cost: 25,
    effect: {
      amount: 1,
    },
    maxQuantity: 20,
  },
  {
    id: 'time_extension',
    name: 'Time Extension',
    description: 'Add 10 minutes to lesson timer',
    type: 'time_extension',
    icon: '⏰',
    cost: 30,
    effect: {
      amount: 10,
    },
    maxQuantity: 15,
  },
]

export function getPowerUpById(id: string): PowerUp | undefined {
  return powerUps.find(p => p.id === id)
}

export function getPowerUpsByType(type: PowerUpType): PowerUp[] {
  return powerUps.filter(p => p.type === type)
}

