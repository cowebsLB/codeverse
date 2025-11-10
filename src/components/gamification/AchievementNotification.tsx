import { useEffect, useState } from 'react'
import { Achievement } from '../../data/achievements'
import { getAchievementById } from '../../data/achievements'

interface AchievementNotificationProps {
  achievementId: string | null
  onClose: () => void
}

export default function AchievementNotification({ achievementId, onClose }: AchievementNotificationProps) {
  const [show, setShow] = useState(false)
  const achievement = achievementId ? getAchievementById(achievementId) : null

  useEffect(() => {
    if (achievementId) {
      setShow(true)
      const timer = setTimeout(() => {
        setShow(false)
        setTimeout(onClose, 300) // Wait for animation to complete
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [achievementId, onClose])

  if (!achievement || !show) return null

  const rarityColors = {
    common: 'border-gray-500 bg-gray-800',
    rare: 'border-blue-500 bg-blue-900/30',
    epic: 'border-purple-500 bg-purple-900/30',
    legendary: 'border-yellow-500 bg-yellow-900/30',
  }

  return (
    <div
      className={`fixed top-4 right-4 z-50 transform transition-all duration-300 ${
        show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div className={`rounded-lg border-2 p-4 shadow-xl ${rarityColors[achievement.rarity]}`}>
        <div className="flex items-center gap-3">
          <div className="text-4xl">{achievement.icon}</div>
          <div>
            <p className="text-white font-bold font-heading">Achievement Unlocked!</p>
            <p className="text-gray-300 font-body">{achievement.name}</p>
            <p className="text-sm text-gray-400 font-body mt-1">{achievement.description}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs text-yellow-400 font-code">+{achievement.rewardCoins} coins</span>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-xs text-indigo-400 font-code">+{achievement.rewardXP} XP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

