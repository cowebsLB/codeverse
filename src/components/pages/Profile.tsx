import { useAuthStore } from '../../store/authStore'
import { useProgressStore, LanguageProgress } from '../../store/progressStore'
import { useGamificationStore } from '../../store/gamificationStore'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { lessons, Lesson } from '../../data/lessons'
import { getDifficultyIcon } from '../../data/languages'
import { achievements } from '../../data/achievements'
import AchievementBadge from '../gamification/AchievementBadge'
import DailyChallengesSection from '../gamification/DailyChallengesSection'
import StreakFreezeButton from '../gamification/StreakFreezeButton'
import ShareButton from '../gamification/ShareButton'
import Leaderboard from '../gamification/Leaderboard'
import UnlockablesShop from '../gamification/UnlockablesShop'
import PowerUpShop from '../gamification/PowerUpShop'
import StatisticsCard from '../gamification/StatisticsCard'

export default function Profile() {
  const { user } = useAuthStore()
  const getOverallProgress = useProgressStore((state) => state.getOverallProgress)
  const getAllLanguageProgress = useProgressStore((state) => state.getAllLanguageProgress)
  const getProgress = useProgressStore((state) => state.getProgress)
  const xp = useProgressStore((state) => state.xp)
  const level = useProgressStore((state) => state.level)
  const coins = useGamificationStore((state) => state.coins)
  const currentStreak = useGamificationStore((state) => state.currentStreak)
  const longestStreak = useGamificationStore((state) => state.longestStreak)
  const unlockedAchievements = useGamificationStore((state) => state.unlockedAchievements)
  const [overallProgress, setOverallProgress] = useState(0)
  const [languagesProgress, setLanguagesProgress] = useState<LanguageProgress[]>([])
  const [completedLessons, setCompletedLessons] = useState<Lesson[]>([])
  const [totalLessons, setTotalLessons] = useState(0)
  const [completedLanguages, setCompletedLanguages] = useState<LanguageProgress[]>([])
  
  // Helper functions to avoid regex parsing issues
  const calculateAchievementPercentage = () => {
    if (achievements.length === 0) return 0
    const total = unlockedAchievements.length * 100
    const divisor = achievements.length
    const inverseDivisor = Math.pow(divisor, -1)
    const percentage = total * inverseDivisor
    return Math.round(percentage)
  }
  
  const calculateXpToNextLevel = () => {
    const modResult = xp % 100
    const result = 100 - modResult
    return result || 100
  }
  
  const achievementPercentage = calculateAchievementPercentage()
  const xpToNextLevel = calculateXpToNextLevel()
  
  const getLessonPath = (lessonId: string) => {
    const slashChar = String.fromCharCode(47)
    const lessonText = 'lesson'
    const basePath = slashChar + lessonText + slashChar
    return basePath + lessonId
  }

  useEffect(() => {
    const loadData = async () => {
      const progress = await getOverallProgress()
      setOverallProgress(progress)

      const languages = await getAllLanguageProgress()
      setLanguagesProgress(languages)

      // Get all completed lessons
      const allLessons = lessons.filter((l) => (l.order ?? 0) > 0)
      setTotalLessons(allLessons.length)
      
      const completed: Lesson[] = []
      for (const lesson of allLessons) {
        const lessonProgress = await getProgress(lesson.id)
        if (lessonProgress?.completed) {
          completed.push(lesson)
        }
      }
      setCompletedLessons(completed)

      // Get completed languages
      const completedLangs = languages.filter((lang) => lang.completed)
      setCompletedLanguages(completedLangs)
    }
    loadData()
  }, [getOverallProgress, getAllLanguageProgress, getProgress])

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-12">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-4xl font-bold font-heading border-4 border-white/30">
                {user?.name ? getInitials(user.name) : 'U'}
              </div>
              <div>
                <h1 className="text-4xl font-bold font-heading text-white mb-2">
                  {user?.name || 'User'}
                </h1>
                <p className="text-indigo-100 font-body text-lg">{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Stats Card */}
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-bold font-heading text-white mb-4">Learning Stats</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-body">Overall Progress</span>
                      <span className="text-indigo-400 font-code font-bold">{overallProgress + '%'}</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full transition-all"
                        style={{ width: String(overallProgress) + '%' }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-600">
                    <div>
                      <div className="text-3xl font-bold font-heading text-indigo-400">{totalLessons}</div>
                      <div className="text-gray-400 font-body text-sm">Total Lessons</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold font-heading text-purple-400">{completedLessons.length}</div>
                      <div className="text-gray-400 font-body text-sm">Completed</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-600">
                    <div>
                      <div className="text-3xl font-bold font-heading text-green-400">{completedLanguages.length}</div>
                      <div className="text-gray-400 font-body text-sm">Languages Mastered</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold font-heading text-yellow-400">{xp}</div>
                      <div className="text-gray-400 font-body text-sm">Total XP</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-600">
                    <div>
                      <div className="text-3xl font-bold font-heading text-indigo-400">Level {level}</div>
                      <div className="text-gray-400 font-body text-sm">Current Level</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold font-heading text-purple-400">{xpToNextLevel}</div>
                      <div className="text-gray-400 font-body text-sm">XP to Next Level</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-600">
                    <div>
                      <div className="text-3xl font-bold font-heading text-orange-400"><span className="mr-1">🔥</span> {currentStreak}</div>
                      <div className="text-gray-400 font-body text-sm">Current Streak</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold font-heading text-yellow-500"><span className="mr-1">💰</span> {coins}</div>
                      <div className="text-gray-400 font-body text-sm">Coins</div>
                    </div>
                  </div>
                </div>
              </div>

                  {/* Gamification Card */}
                  <div className="bg-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-bold font-heading text-white mb-4">Gamification</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-300 font-body">Current Streak</span>
                          <span className="text-orange-400 font-code font-bold"><span className="mr-1">🔥</span> {currentStreak} days</span>
                        </div>
                        {currentStreak > 0 && (
                          <div className="text-xs text-gray-400 font-body">
                            Longest: {longestStreak} days
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-300 font-body">Coins</span>
                          <span className="text-yellow-500 font-code font-bold"><span className="mr-1">💰</span> {coins}</span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-300 font-body">Achievements</span>
                          <span className="text-indigo-400 font-code font-bold">
                            {unlockedAchievements.length} of {achievements.length}
                          </span>
                        </div>
                        <div className="text-xs text-gray-400 font-body">
                          {achievementPercentage + '% unlocked'}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-600">
                      <StreakFreezeButton />
                    </div>
                  </div>
            </div>

            {/* Statistics Section */}
            <div className="mb-8">
              <StatisticsCard />
            </div>

            {/* Daily Challenges Section */}
            <div className="mb-8">
              <DailyChallengesSection />
            </div>

            {/* Leaderboard Section */}
            <div className="mb-8">
              <Leaderboard />
            </div>

            {/* Power-Up Shop */}
            <div className="mb-8">
              <PowerUpShop />
            </div>

            {/* Unlockables Shop */}
            <div className="mb-8">
              <UnlockablesShop />
            </div>

            {/* Achievements Section */}
            <div className="bg-gray-700 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold font-heading text-white">
                  <span className="mr-2">🏆</span> Achievements ({unlockedAchievements.length} of {achievements.length})
                </h3>
                <ShareButton
                  data={{
                    type: 'achievement',
                    title: `${unlockedAchievements.length} Achievements Unlocked`,
                    description: `I've unlocked ${unlockedAchievements.length} achievements on Codeverse!`,
                    url: window.location.href,
                  }}
                />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="text-center">
                    <AchievementBadge
                      achievement={achievement}
                      unlocked={unlockedAchievements.includes(achievement.id)}
                      size="md"
                    />
                    <p className="text-xs text-gray-400 font-body mt-2 line-clamp-2">
                      {achievement.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Account Info Card */}
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-bold font-heading text-white mb-4">Account Information</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-gray-400 font-code text-sm">Name</label>
                    <p className="text-white font-body">{user?.name}</p>
                  </div>
                  <div>
                    <label className="text-gray-400 font-code text-sm">Email</label>
                    <p className="text-white font-body">{user?.email}</p>
                  </div>
                  <div>
                    <label className="text-gray-400 font-code text-sm">Member Since</label>
                    <p className="text-white font-body">Recently joined</p>
                  </div>
                </div>
              </div>

            {/* Completed Languages */}
            {completedLanguages.length > 0 && (
              <div className="bg-gray-700 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold font-heading text-white mb-4">
                  🎉 Languages Mastered ({completedLanguages.length})
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {completedLanguages.map((lang) => (
                    <div
                      key={lang.id}
                      className="bg-gray-800 border-2 border-green-500 rounded-lg p-4 hover:border-green-400 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold font-heading text-white">{lang.name}</h4>
                        <span className="text-2xl">✅</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span>{getDifficultyIcon(lang.difficulty)}</span>
                        <span className="text-sm text-gray-400 font-body">{lang.difficulty}</span>
                      </div>
                      <div className="text-sm text-gray-400 font-body">
                        {lang.completedLessons} of {lang.totalLessons} lessons
                      </div>
                      <div className="text-sm text-indigo-400 font-code font-bold mt-1">
                        {lang.xp} XP earned
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Completed Lessons */}
            {completedLessons.length > 0 && (
              <div className="bg-gray-700 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold font-heading text-white mb-4">
                  ✅ Completed Lessons ({completedLessons.length})
                </h3>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {completedLessons.map((lesson) => (
                    <Link
                      key={lesson.id}
                      to={getLessonPath(lesson.id)}
                      className="block bg-gray-800 border border-gray-600 rounded-lg p-4 hover:border-indigo-500 hover:bg-gray-750 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="text-lg font-bold font-heading text-white mb-1">{lesson.title}</h4>
                          <p className="text-sm text-gray-400 font-body line-clamp-1">{lesson.description}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="px-2 py-1 rounded text-xs font-code bg-indigo-900/30 text-indigo-400 border border-indigo-700">
                              {lesson.subject}
                            </span>
                            <span className="px-2 py-1 rounded text-xs font-code bg-gray-600 text-gray-300">
                              {lesson.difficulty}
                            </span>
                            <span className="px-2 py-1 rounded text-xs font-code bg-gray-600 text-gray-300">
                              {lesson.estimatedTime} min
                            </span>
                          </div>
                        </div>
                        <div className="ml-4 text-2xl">✅</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold font-heading text-white mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  to="/study-program"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all font-medium font-heading text-center"
                >
                  Continue Learning
                </Link>
                <Link
                  to="/settings"
                  className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition-colors font-medium font-heading text-center"
                >
                  Settings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

