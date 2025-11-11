import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { languageConfigs, LanguageConfig } from '../../data/languages'
import { getDifficultyIcon } from '../../data/languages'
import { getIconFromEmoji } from '../../utils/iconMapper'
import LanguageLogo from '../ui/LanguageLogo'
import { FaGlobe, FaMobileAlt, FaServer } from 'react-icons/fa'

type FilterTrack = 'All' | 'Web' | 'Mobile' | 'Systems'
type FilterDifficulty = 'All' | 'beginner' | 'intermediate' | 'advanced'

export default function Languages() {
  const [filterTrack, setFilterTrack] = useState<FilterTrack>('All')
  const [filterDifficulty, setFilterDifficulty] = useState<FilterDifficulty>('All')

  const filteredLanguages = useMemo(() => {
    return languageConfigs.filter((lang) => {
      const trackMatch = filterTrack === 'All' || lang.track === filterTrack
      const difficultyMatch = filterDifficulty === 'All' || lang.difficulty === filterDifficulty
      return trackMatch && difficultyMatch
    })
  }, [filterTrack, filterDifficulty])

  const getTrackIcon = (track: string) => {
    switch (track) {
      case 'Web':
        return <FaGlobe className="inline mr-2" />
      case 'Mobile':
        return <FaMobileAlt className="inline mr-2" />
      case 'Systems':
        return <FaServer className="inline mr-2" />
      default:
        return null
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-900/30 text-green-400 border-green-700'
      case 'intermediate':
        return 'bg-yellow-900/30 text-yellow-400 border-yellow-700'
      case 'advanced':
        return 'bg-red-900/30 text-red-400 border-red-700'
      default:
        return 'bg-gray-700 text-gray-300 border-gray-600'
    }
  }

  const getTrackColor = (track: string) => {
    switch (track) {
      case 'Web':
        return 'from-blue-600 to-cyan-600'
      case 'Mobile':
        return 'from-purple-600 to-pink-600'
      case 'Systems':
        return 'from-orange-600 to-red-600'
      default:
        return 'from-gray-600 to-gray-700'
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold font-heading text-white mb-2">
            Available Languages
          </h1>
          <p className="text-gray-400 font-body text-lg">
            Explore all programming languages available in Codeverse
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 bg-gray-800 border border-gray-700 rounded-lg p-4">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <label className="text-gray-300 font-body text-sm">Track:</label>
              <select
                value={filterTrack}
                onChange={(e) => setFilterTrack(e.target.value as FilterTrack)}
                className="bg-gray-700 text-white px-3 py-1 rounded text-sm font-code border border-gray-600"
              >
                <option value="All">All Tracks</option>
                <option value="Web">Web Development</option>
                <option value="Mobile">Mobile Development</option>
                <option value="Systems">Systems Programming</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-gray-300 font-body text-sm">Difficulty:</label>
              <select
                value={filterDifficulty}
                onChange={(e) => setFilterDifficulty(e.target.value as FilterDifficulty)}
                className="bg-gray-700 text-white px-3 py-1 rounded text-sm font-code border border-gray-600"
              >
                <option value="All">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <div className="ml-auto text-sm text-gray-400 font-body">
              Showing {filteredLanguages.length} of {languageConfigs.length} languages
            </div>
          </div>
        </div>

        {/* Language Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredLanguages.map((language) => (
            <Link
              key={language.id}
              to={`/study-program`}
              className="group"
            >
              <div className="bg-gray-800 border-2 border-gray-700 rounded-lg p-6 hover:border-indigo-500 transition-all hover:shadow-xl hover:scale-105">
                {/* Language Logo */}
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 flex items-center justify-center">
                    <LanguageLogo languageName={language.id} size={64} />
                  </div>
                </div>

                {/* Language Name */}
                <h3 className="text-center text-lg font-bold font-heading text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {language.name}
                </h3>

                {/* Track Badge */}
                <div className="flex justify-center mb-2">
                  <span className={`px-2 py-1 rounded text-xs font-code bg-gradient-to-r ${getTrackColor(language.track)} text-white`}>
                    {getTrackIcon(language.track)}
                    {language.track}
                  </span>
                </div>

                {/* Difficulty Badge */}
                <div className="flex justify-center">
                  <span className={`px-2 py-1 rounded text-xs font-code border ${getDifficultyColor(language.difficulty)}`}>
                    {getIconFromEmoji(getDifficultyIcon(language.difficulty), 'text-xs')}
                    <span className="ml-1 capitalize">{language.difficulty}</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredLanguages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 font-body text-lg">
              No languages found matching your filters.
            </p>
            <button
              onClick={() => {
                setFilterTrack('All')
                setFilterDifficulty('All')
              }}
              className="mt-4 text-indigo-400 hover:text-indigo-300 font-body"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

