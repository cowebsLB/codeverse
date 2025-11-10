import { Achievement, AchievementRarity } from '../../data/achievements'

interface AchievementBadgeProps {
  achievement: Achievement
  unlocked: boolean
  size?: 'sm' | 'md' | 'lg'
}

const rarityColors: Record<AchievementRarity, string> = {
  common: 'border-gray-500 bg-gray-800',
  rare: 'border-blue-500 bg-blue-900/30',
  epic: 'border-purple-500 bg-purple-900/30',
  legendary: 'border-yellow-500 bg-yellow-900/30',
}

const sizeClasses = {
  sm: 'w-12 h-12 text-2xl',
  md: 'w-16 h-16 text-3xl',
  lg: 'w-20 h-20 text-4xl',
}

export default function AchievementBadge({ achievement, unlocked, size = 'md' }: AchievementBadgeProps) {
  const rarityColor = rarityColors[achievement.rarity]
  const sizeClass = sizeClasses[size]

  return (
    <div
      className={`relative rounded-lg border-2 p-2 flex items-center justify-center transition-all ${
        unlocked ? rarityColor : 'border-gray-700 bg-gray-900 opacity-50'
      } ${sizeClass}`}
      title={unlocked ? achievement.name : 'Locked'}
    >
      <span className={unlocked ? '' : 'grayscale'}>{achievement.icon}</span>
      {!unlocked && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gray-600 text-xs">🔒</span>
        </div>
      )}
    </div>
  )
}

