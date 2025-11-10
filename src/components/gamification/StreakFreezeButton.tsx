import { useGamificationStore } from '../../store/gamificationStore'
import { useState } from 'react'

export default function StreakFreezeButton() {
  const { streakFreezes, useStreakFreeze } = useGamificationStore()
  const [isUsing, setIsUsing] = useState(false)

  const handleUseFreeze = async () => {
    if (streakFreezes <= 0) return
    
    if (window.confirm('Use a streak freeze to protect your streak? This will prevent your streak from breaking if you miss a day.')) {
      setIsUsing(true)
      const success = await useStreakFreeze()
      setIsUsing(false)
      
      if (success) {
        alert('Streak freeze activated! Your streak is protected for one day.')
      } else {
        alert('Failed to use streak freeze. Please try again.')
      }
    }
  }

  if (streakFreezes <= 0) {
    return (
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">❄️</span>
          <div>
            <h3 className="text-sm font-bold font-heading text-white">Streak Freeze</h3>
            <p className="text-xs text-gray-400 font-body">No freezes available</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-800 border-2 border-blue-500 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">❄️</span>
          <div>
            <h3 className="text-sm font-bold font-heading text-white">Streak Freeze</h3>
            <p className="text-xs text-gray-400 font-body">{streakFreezes} available</p>
          </div>
        </div>
        <button
          onClick={handleUseFreeze}
          disabled={isUsing}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isUsing ? 'Using...' : 'Use Freeze'}
        </button>
      </div>
    </div>
  )
}

