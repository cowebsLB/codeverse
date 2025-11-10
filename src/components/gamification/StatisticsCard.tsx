import { useProgressStore } from '../../store/progressStore'
import { useGamificationStore } from '../../store/gamificationStore'
import { useEffect, useState } from 'react'
import { lessons } from '../../data/lessons'

interface Statistic {
  label: string
  value: string | number
  icon: string
  color: string
}

export default function StatisticsCard() {
  const { xp, level, getAllLanguageProgress } = useProgressStore()
  const { coins, currentStreak, longestStreak, unlockedAchievements } = useGamificationStore()
  const [languagesProgress, setLanguagesProgress] = useState<any[]>([])
  const [stats, setStats] = useState<Statistic[]>([])

  useEffect(() => {
    loadStats()
  }, [])

  const loadStats = async () => {
    const languages = await getAllLanguageProgress()
    setLanguagesProgress(languages)
    
    const completedLanguages = languages.filter(l => l.completed).length
    const totalLessons = lessons.filter(l => (l.order ?? 0) > 0).length
    const completedLessons = languages.reduce((sum, lang) => sum + lang.completedLessons, 0)
    const totalLanguages = languages.length
    const averageProgress = languages.length > 0 
      ? Math.round(languages.reduce((sum, lang) => sum + lang.progress, 0) / languages.length)
      : 0
    
    const totalXP = xp
    const xpToNextLevel = 100 - (xp % 100) || 100
    const streakMultiplier = currentStreak >= 7 ? 1.5 : currentStreak >= 14 ? 2.0 : currentStreak >= 30 ? 2.5 : 1.0
    
    setStats([
      { label: 'Total XP', value: totalXP.toLocaleString(), icon: '⭐', color: 'text-yellow-400' },
      { label: 'Current Level', value: level, icon: '📊', color: 'text-indigo-400' },
      { label: 'XP to Next Level', value: xpToNextLevel, icon: '🎯', color: 'text-purple-400' },
      { label: 'Coins Earned', value: coins.toLocaleString(), icon: '💰', color: 'text-yellow-500' },
      { label: 'Current Streak', value: `${currentStreak} days`, icon: '🔥', color: 'text-orange-400' },
      { label: 'Longest Streak', value: `${longestStreak} days`, icon: '🏆', color: 'text-red-400' },
      { label: 'Streak Multiplier', value: `${streakMultiplier}x`, icon: '⚡', color: 'text-blue-400' },
      { label: 'Achievements', value: `${unlockedAchievements.length}`, icon: '🎖️', color: 'text-green-400' },
      { label: 'Languages Mastered', value: completedLanguages, icon: '🌐', color: 'text-cyan-400' },
      { label: 'Total Languages', value: totalLanguages, icon: '📚', color: 'text-indigo-300' },
      { label: 'Lessons Completed', value: completedLessons, icon: '✅', color: 'text-green-300' },
      { label: 'Total Lessons', value: totalLessons, icon: '📖', color: 'text-gray-300' },
      { label: 'Average Progress', value: `${averageProgress}%`, icon: '📈', color: 'text-purple-300' },
      { label: 'Completion Rate', value: totalLessons > 0 ? `${Math.round((completedLessons / totalLessons) * 100)}%` : '0%', icon: '🎯', color: 'text-pink-400' },
    ])
  }

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <h3 className="text-xl font-bold font-heading text-white mb-4">
        <span className="mr-2">📊</span> Detailed Statistics
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-700 border border-gray-600 rounded-lg p-4 hover:border-indigo-500 transition-all"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{stat.icon}</span>
              <div className={`text-2xl font-bold font-heading ${stat.color}`}>
                {stat.value}
              </div>
            </div>
            <div className="text-xs text-gray-400 font-body">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

