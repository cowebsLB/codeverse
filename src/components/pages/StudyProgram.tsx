import { useNavigate } from 'react-router-dom'
import { lessons } from '../../data/lessons'
import { useProgressStore, LanguageProgress, LanguageTrack } from '../../store/progressStore'
import { useEffect, useState, useMemo } from 'react'
import { getDifficultyIcon, getLanguagesByTrack, getLanguageConfig } from '../../data/languages'
import { FaGlobe, FaMobileAlt, FaServer, FaLock, FaCheckCircle } from 'react-icons/fa'
import { getIconFromEmoji } from '../../utils/iconMapper'

export default function StudyProgram() {
  const getAllLanguageProgress = useProgressStore((state) => state.getAllLanguageProgress)
  const xp = useProgressStore((state) => state.xp)
  const level = useProgressStore((state) => state.level)
  const [languagesProgress, setLanguagesProgress] = useState<LanguageProgress[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const loadLanguages = async () => {
      setIsLoading(true)
      try {
        const progress = await getAllLanguageProgress()
        setLanguagesProgress(progress)
      } catch (error) {
        console.error('Error loading languages:', error)
      } finally {
        setIsLoading(false)
      }
    }
    loadLanguages()
  }, [getAllLanguageProgress])

  // Group languages by track
  const languagesByTrack = useMemo(() => {
    const grouped: Record<LanguageTrack, LanguageProgress[]> = {
      Web: [],
      Mobile: [],
      Systems: [],
    }
    
    languagesProgress.forEach((lang) => {
      grouped[lang.track].push(lang)
    })
    
    return grouped
  }, [languagesProgress])

  // Get lessons for a specific language
  const getLanguageLessons = (languageId: string) => {
    return lessons.filter((lesson) => lesson.subject === languageId)
  }

  // Get language color gradient
  const getLanguageColor = (languageId: string) => {
    const colorMap: Record<string, string> = {
      'JavaScript': 'from-yellow-500 to-yellow-600',
      'Python': 'from-blue-500 to-blue-600',
      'TypeScript': 'from-indigo-500 to-indigo-600',
      'React': 'from-cyan-500 to-cyan-600',
      'Java': 'from-red-500 to-red-600',
      'C#': 'from-purple-500 to-purple-600',
      'C++': 'from-blue-500 to-blue-600',
      'C': 'from-gray-500 to-gray-600',
      'Go': 'from-cyan-500 to-cyan-600',
      'Rust': 'from-orange-500 to-orange-600',
      'Ruby': 'from-red-500 to-red-600',
      'PHP': 'from-indigo-500 to-indigo-600',
      'Swift': 'from-orange-500 to-orange-600',
      'Kotlin': 'from-purple-500 to-purple-600',
      'HTML': 'from-orange-500 to-orange-600',
      'Node.js': 'from-green-500 to-green-600',
    }
    
    return colorMap[languageId] || 'from-indigo-500 to-purple-600'
  }

  // Get previous language in same track based on order
  const getPreviousLanguageInTrack = (langProgress: LanguageProgress, trackLanguages: LanguageProgress[]) => {
    // Get language config to find order
    const langConfig = getLanguageConfig(langProgress.id)
    if (!langConfig || langConfig.order <= 1) return null
    
    // Find previous language by order
    const previousOrder = langConfig.order - 1
    const previousLang = trackLanguages.find((l) => {
      const config = getLanguageConfig(l.id)
      return config && config.track === langConfig.track && config.order === previousOrder
    })
    
    return previousLang || null
  }

  // Track configuration
  const trackConfig: Record<LanguageTrack, { name: string; icon: React.ReactNode; color: string }> = {
    Web: {
      name: 'Web Development',
      icon: <FaGlobe className="text-2xl" />,
      color: 'from-blue-600 to-cyan-600',
    },
    Mobile: {
      name: 'Mobile Development',
      icon: <FaMobileAlt className="text-2xl" />,
      color: 'from-purple-600 to-pink-600',
    },
    Systems: {
      name: 'Systems Programming',
      icon: <FaServer className="text-2xl" />,
      color: 'from-orange-600 to-red-600',
    },
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto mb-4"></div>
          <p className="text-gray-400 font-body">Loading languages...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with XP/Level */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold font-heading text-white mb-2">
                Language Galaxy
              </h1>
              <p className="text-xl text-gray-400 font-body">
                Master programming languages to unlock new worlds
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold font-heading bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Level {level}
              </div>
              <div className="text-sm text-gray-400 font-body">
                {xp} XP
              </div>
            </div>
          </div>
        </div>

        {/* Languages by Track */}
        {languagesProgress.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 font-body text-lg">No languages available yet.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {(Object.keys(languagesByTrack) as LanguageTrack[]).map((track) => {
              const trackLanguages = languagesByTrack[track]
              if (trackLanguages.length === 0) return null
            
            const config = trackConfig[track]
            
            return (
              <div key={track} className="space-y-6">
                {/* Track Header */}
                <div className="border-b border-gray-700 pb-4">
                  <div className="flex items-center gap-4">
                    <div className={`text-4xl bg-gradient-to-r ${config.color} bg-clip-text text-transparent`}>
                      {config.icon}
                    </div>
                    <div>
                      <h2 className={`text-3xl font-bold font-heading bg-gradient-to-r ${config.color} bg-clip-text text-transparent`}>
                        {config.name}
                      </h2>
                      <p className="text-gray-400 font-body text-sm mt-1">
                        {trackLanguages.filter((l) => l.completed).length} / {trackLanguages.length} languages completed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Language Planets Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {trackLanguages.map((langProgress) => {
                    const languageLessons = getLanguageLessons(langProgress.id)
                    const colorGradient = getLanguageColor(langProgress.id)
                    const previousLang = getPreviousLanguageInTrack(langProgress, trackLanguages)
                    const isLocked = !langProgress.unlocked
                    const difficultyIcon = getIconFromEmoji(getDifficultyIcon(langProgress.difficulty), 'text-xl')
                    
                    // Debug: Log language info
                    console.log('Language:', langProgress.id, 'unlocked:', langProgress.unlocked, 'lessons:', languageLessons.length)

                    return (
                      <div
                        key={langProgress.id}
                        className={`relative bg-gray-800 border-2 rounded-xl shadow-lg overflow-hidden transition-all ${
                          isLocked
                            ? 'border-gray-700 opacity-60 cursor-not-allowed'
                            : langProgress.completed
                            ? 'border-green-500 hover:border-green-400 hover:shadow-2xl cursor-pointer'
                            : 'border-gray-700 hover:border-indigo-500 hover:shadow-xl cursor-pointer'
                        }`}
                        onMouseDown={(e) => {
                          if (isLocked) {
                            e.preventDefault()
                            return
                          }
                        }}
                        onClick={(e) => {
                          if (isLocked) {
                            e.preventDefault()
                            e.stopPropagation()
                            return
                          }
                          
                          e.preventDefault()
                          e.stopPropagation()
                          
                          // Navigate to first lesson of this language (with order > 0)
                          const orderedLessons = languageLessons
                            .filter((l) => (l.order ?? 0) > 0)
                            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
                          
                          // Fallback to any lesson if no ordered lessons
                          const firstLesson = orderedLessons[0] || languageLessons[0]
                          
                          if (firstLesson) {
                            navigate(`/lesson/${firstLesson.id}`)
                          } else {
                            console.warn('No lessons found for language:', langProgress.id)
                          }
                        }}
                      >
                        {/* Lock Overlay */}
                        {isLocked && (
                          <div 
                            className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm z-10 flex items-center justify-center pointer-events-auto"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                            }}
                          >
                            <div className="text-center">
                              <FaLock className="text-6xl mb-4 animate-spin mx-auto" />
                              <p className="text-white font-heading font-bold mb-2">Locked</p>
                              {previousLang && (
                                <p className="text-gray-400 font-body text-sm">
                                  Complete {previousLang.name} to unlock
                                </p>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Completed Effect */}
                        {langProgress.completed && (
                          <div className="absolute top-2 right-2 z-10">
                            <FaCheckCircle className="text-3xl animate-bounce" />
                          </div>
                        )}

                        {/* Planet Card */}
                        <div className="p-6 relative z-0">
                          {/* Language Name */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                              <h2 className="text-2xl font-bold font-heading text-white">
                                {langProgress.name}
                              </h2>
                              <span className="text-xl" title={langProgress.difficulty}>
                                {difficultyIcon}
                              </span>
                            </div>
                          </div>

                          {/* Progress Bar */}
                          <div className="mb-4">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm text-gray-400 font-body">
                                Progress
                              </span>
                              <span className="text-sm font-bold font-code text-indigo-400">
                                {langProgress.progress}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-3">
                              <div
                                className={`h-3 rounded-full transition-all ${
                                  langProgress.completed
                                    ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                                    : `bg-gradient-to-r ${colorGradient}`
                                }`}
                                style={{ width: `${langProgress.progress}%` }}
                              />
                            </div>
                          </div>

                          {/* Stats */}
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <div className="text-sm text-gray-400 font-body">Lessons</div>
                              <div className="text-lg font-bold font-heading text-white">
                                {langProgress.completedLessons} / {langProgress.totalLessons}
                              </div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-400 font-body">XP</div>
                              <div className="text-lg font-bold font-heading text-white">
                                {langProgress.xp}
                              </div>
                            </div>
                          </div>

                          {/* Lessons Preview */}
                          <div className="space-y-2" onClick={(e) => e.stopPropagation()}>
                            {languageLessons
                              .filter((l) => (l.order ?? 0) > 0)
                              .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
                              .slice(0, 3)
                              .map((lesson) => (
                                <div
                                  key={lesson.id}
                                  className="text-sm text-gray-400 font-body truncate hover:text-indigo-400 transition-colors cursor-pointer"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    e.preventDefault()
                                    if (!isLocked) {
                                      navigate(`/lesson/${lesson.id}`)
                                    }
                                  }}
                                >
                                  • {lesson.title}
                                </div>
                              ))}
                            {languageLessons.filter((l) => (l.order ?? 0) > 0).length > 3 && (
                              <div className="text-sm text-gray-500 font-body">
                                +{languageLessons.filter((l) => (l.order ?? 0) > 0).length - 3} more...
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Gradient Border Effect */}
                        <div
                          className={`absolute bottom-0 left-0 right-0 h-1 ${
                            langProgress.completed
                              ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                              : `bg-gradient-to-r ${colorGradient}`
                          }`}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
          </div>
        )}
      </div>
    </div>
  )
}

