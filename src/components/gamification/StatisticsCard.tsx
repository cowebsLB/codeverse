import { useProgressStore } from '../../store/progressStore'
import { useGamificationStore } from '../../store/gamificationStore'
import { useEffect, useState } from 'react'
import { lessons } from '../../data/lessons'
import { FaStar, FaChartBar, FaBullseye, FaCoins, FaFire, FaTrophy, FaBolt, FaMedal, FaGlobe, FaBook, FaCheckCircle, FaBookOpen, FaChartLine } from 'react-icons/fa'

interface Statistic {
  label: string
  value: string | number
  icon: React.ReactNode
  color: string
}

export default function StatisticsCard() {
  const { xp, level, getAllLanguageProgress } = useProgressStore()
  const { coins, currentStreak, longestStreak, unlockedAchievements } = useGamificationStore()
  const [languagesProgress, setLanguagesProgress] = useState<Awaited<ReturnType<typeof getAllLanguageProgress>>>([])
  const [stats, setStats] = useState<Statistic[]>([])

  useEffect(() => {
    let cancelled = false
    
    const load = async () => {
      try {
        const languages = await getAllLanguageProgress()
        if (!cancelled) {
          await loadStats(languages)
        }
      } catch (error) {
        if (!cancelled) {
          console.error('Failed to load statistics:', error)
          setStats([])
        }
      }
    }
    
    load()
    
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [xp, level, coins, currentStreak, longestStreak, unlockedAchievements.length])

  const loadStats = async (languages: Awaited<ReturnType<typeof getAllLanguageProgress>> = []) => {
    try {
      // If languages not provided, fetch them
      const langData = languages.length > 0 ? languages : await getAllLanguageProgress()
      setLanguagesProgress(langData)
    
    const completedLanguages = langData.filter(l => l.completed).length
    const totalLessons = lessons.filter(l => (l.order ?? 0) > 0).length
    const completedLessons = langData.reduce((sum, lang) => sum + lang.completedLessons, 0)
    const totalLanguages = langData.length
    const averageProgress = langData.length > 0 
      ? Math.round(langData.reduce((sum, lang) => sum + lang.progress, 0) / langData.length)
      : 0
    
    const totalXP = xp
    const xpToNextLevel = 100 - (xp % 100) || 100
    const streakMultiplier = currentStreak >= 7 ? 1.5 : currentStreak >= 14 ? 2.0 : currentStreak >= 30 ? 2.5 : 1.0
    
    setStats([
      { label: 'Total XP', value: totalXP.toLocaleString(), icon: <FaStar className="text-2xl" />, color: 'text-yellow-400' },
      { label: 'Current Level', value: level, icon: <FaChartBar className="text-2xl" />, color: 'text-indigo-400' },
      { label: 'XP to Next Level', value: xpToNextLevel, icon: <FaBullseye className="text-2xl" />, color: 'text-purple-400' },
      { label: 'Coins Earned', value: coins.toLocaleString(), icon: <FaCoins className="text-2xl" />, color: 'text-yellow-500' },
      { label: 'Current Streak', value: `${currentStreak} days`, icon: <FaFire className="text-2xl" />, color: 'text-orange-400' },
      { label: 'Longest Streak', value: `${longestStreak} days`, icon: <FaTrophy className="text-2xl" />, color: 'text-red-400' },
      { label: 'Streak Multiplier', value: `${streakMultiplier}x`, icon: <FaBolt className="text-2xl" />, color: 'text-blue-400' },
      { label: 'Achievements', value: `${unlockedAchievements.length}`, icon: <FaMedal className="text-2xl" />, color: 'text-green-400' },
      { label: 'Languages Mastered', value: completedLanguages, icon: <FaGlobe className="text-2xl" />, color: 'text-cyan-400' },
      { label: 'Total Languages', value: totalLanguages, icon: <FaBook className="text-2xl" />, color: 'text-indigo-300' },
      { label: 'Lessons Completed', value: completedLessons, icon: <FaCheckCircle className="text-2xl" />, color: 'text-green-300' },
      { label: 'Total Lessons', value: totalLessons, icon: <FaBookOpen className="text-2xl" />, color: 'text-gray-300' },
      { label: 'Average Progress', value: `${averageProgress}%`, icon: <FaChartLine className="text-2xl" />, color: 'text-purple-300' },
      { label: 'Completion Rate', value: totalLessons > 0 ? `${Math.round((completedLessons / totalLessons) * 100)}%` : '0%', icon: <FaBullseye className="text-2xl" />, color: 'text-pink-400' },
    ])
    } catch (error) {
      console.error('Failed to load statistics:', error)
      setStats([])
    }
  }

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <h3 className="text-xl font-bold font-heading text-white mb-4 flex items-center gap-2">
        <FaChartBar className="inline" /> Detailed Statistics
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-700 border border-gray-600 rounded-lg p-4 hover:border-indigo-500 transition-all"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className={stat.color}>{stat.icon}</div>
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

