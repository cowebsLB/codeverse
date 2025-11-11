import { useParams, useNavigate, Link } from 'react-router-dom'
import { getLanguageIntroduction } from '../../data/languageIntroductions'
import { getLanguageConfig } from '../../data/languages'
import { getDifficultyIcon } from '../../data/languages'
import { getIconFromEmoji } from '../../utils/iconMapper'
import LanguageLogo from '../ui/LanguageLogo'
import { FaArrowLeft, FaCheckCircle, FaRocket, FaCode, FaGlobe, FaMobileAlt, FaServer, FaLightbulb, FaStar, FaCog, FaBook, FaPlayCircle, FaPalette, FaArrowRight } from 'react-icons/fa'
import { lessons } from '../../data/lessons'

export default function LanguageIntroduction() {
  const { languageId } = useParams<{ languageId: string }>()
  const navigate = useNavigate()
  
  if (!languageId) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 font-body">Language not found</p>
          <Link to="/languages" className="text-indigo-400 hover:text-indigo-300 mt-4 inline-block">
            Back to Languages
          </Link>
        </div>
      </div>
    )
  }

  const introduction = getLanguageIntroduction(languageId)
  const languageConfig = getLanguageConfig(languageId)
  const languageLessons = lessons.filter(lesson => lesson.subject === languageId)

  if (!introduction || !languageConfig) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 font-body">Introduction not available for this language yet</p>
          <Link to="/languages" className="text-indigo-400 hover:text-indigo-300 mt-4 inline-block">
            Back to Languages
          </Link>
        </div>
      </div>
    )
  }

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

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/languages')}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors font-body"
          >
            <FaArrowLeft /> Back to Languages
          </button>
          
          <div className="flex items-start gap-6 mb-6">
            <div className="flex-shrink-0">
              <LanguageLogo languageName={languageId} size={80} />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold font-heading text-white mb-2">
                {introduction.name}
              </h1>
              <p className="text-xl text-indigo-400 font-body mb-4">
                {introduction.tagline}
              </p>
              <div className="flex flex-wrap gap-3">
                <span className={`px-3 py-1 rounded text-sm font-code border ${getDifficultyColor(languageConfig.difficulty)}`}>
                  {getIconFromEmoji(getDifficultyIcon(languageConfig.difficulty), 'text-sm')}
                  <span className="ml-1 capitalize">{languageConfig.difficulty}</span>
                </span>
                <span className="px-3 py-1 rounded text-sm font-code bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                  {getTrackIcon(languageConfig.track)}
                  {languageConfig.track}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6">
          <p className="text-gray-300 font-body text-lg leading-relaxed">
            {introduction.description}
          </p>
        </div>

        {/* What is it */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <FaLightbulb className="text-3xl text-yellow-400" />
            <h2 className="text-2xl font-bold font-heading text-white">
              {introduction.whatIsIt.title}
            </h2>
          </div>
          <p className="text-gray-300 font-body mb-4 leading-relaxed">
            {introduction.whatIsIt.content}
          </p>
          {introduction.whatIsIt.visual && (
            <div className="bg-indigo-900/20 border border-indigo-700 rounded-lg p-4 mt-4">
              <p className="text-indigo-200 font-body italic">
                💡 {introduction.whatIsIt.visual}
              </p>
            </div>
          )}
        </div>

        {/* Why Learn */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <FaStar className="text-3xl text-indigo-400" />
            <h2 className="text-2xl font-bold font-heading text-white">
              Why Learn {introduction.name}?
            </h2>
          </div>
          <div className="space-y-3">
            {introduction.whyLearn.map((reason, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 font-body">{reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <FaCog className="text-3xl text-purple-400" />
            <h2 className="text-2xl font-bold font-heading text-white">
              {introduction.keyFeatures.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {introduction.keyFeatures.items.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-700 border border-gray-600 rounded-lg p-4 hover:border-indigo-500 transition-colors"
              >
                <div className="flex items-start gap-3">
                  {feature.icon && (
                    <span className="text-2xl">{feature.icon}</span>
                  )}
                  <div>
                    <h3 className="text-lg font-bold font-heading text-white mb-2">
                      {feature.name}
                    </h3>
                    <p className="text-gray-400 font-body text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Example */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <FaCode className="text-3xl text-green-400" />
            <h2 className="text-2xl font-bold font-heading text-white">
              {introduction.quickExample.title}
            </h2>
          </div>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 mb-4 overflow-x-auto">
            <pre className="text-sm text-gray-300 font-code whitespace-pre-wrap">
              <code className="text-green-400">{introduction.quickExample.code}</code>
            </pre>
          </div>
          <div className="bg-indigo-900/20 border border-indigo-700 rounded-lg p-4">
            <p className="text-indigo-200 font-body text-sm">
              💡 {introduction.quickExample.explanation}
            </p>
          </div>
        </div>

        {/* CSS Example - Only for HTML */}
        {introduction.cssExample && (
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <FaPalette className="text-3xl text-pink-400" />
              <h2 className="text-2xl font-bold font-heading text-white">
                {introduction.cssExample.title}
              </h2>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-sm text-gray-300 font-code whitespace-pre-wrap">
                <code className="text-cyan-400">{introduction.cssExample.code}</code>
              </pre>
            </div>
            <div className="bg-pink-900/20 border border-pink-700 rounded-lg p-4">
              <p className="text-pink-200 font-body text-sm">
                ✨ {introduction.cssExample.explanation}
              </p>
            </div>
          </div>
        )}

        {/* Use Cases */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <FaGlobe className="text-3xl text-blue-400" />
            <h2 className="text-2xl font-bold font-heading text-white">
              Common Use Cases
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {introduction.useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-700 border border-gray-600 rounded-lg p-4"
              >
                <h3 className="text-lg font-bold font-heading text-white mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 font-body text-sm">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Getting Started */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <FaBook className="text-3xl text-orange-400" />
            <h2 className="text-2xl font-bold font-heading text-white">
              {introduction.gettingStarted.title}
            </h2>
          </div>
          <div className="space-y-4">
            {introduction.gettingStarted.steps.map((step) => (
              <div
                key={step.step}
                className="flex gap-4 bg-gray-700 border border-gray-600 rounded-lg p-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold font-heading">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold font-heading text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 font-body text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Available Lessons */}
        {languageLessons.length > 0 && (
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <FaPlayCircle className="text-3xl text-red-400" />
              <h2 className="text-2xl font-bold font-heading text-white">
                Available Lessons
              </h2>
            </div>
            <p className="text-gray-400 font-body text-sm mb-4">
              💡 You can edit and preview examples live in our interactive lessons!
            </p>
            <div className="space-y-2">
              {languageLessons
                .filter((lesson, index, self) => {
                  // Group similar lessons - remove duplicates based on title similarity
                  const titleWords = lesson.title.toLowerCase().split(/\s+/)
                  return !self.slice(0, index).some(otherLesson => {
                    const otherWords = otherLesson.title.toLowerCase().split(/\s+/)
                    // If titles share 3+ common words, consider them duplicates
                    const commonWords = titleWords.filter(word => otherWords.includes(word))
                    return commonWords.length >= 3 && Math.abs(lesson.title.length - otherLesson.title.length) < 10
                  })
                })
                .map((lesson) => (
                  <Link
                    key={lesson.id}
                    to={`/lesson/${lesson.id}`}
                    className="block bg-gray-700 border border-gray-600 rounded-lg p-4 hover:border-indigo-500 hover:bg-gray-750 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold font-heading text-white mb-1">
                          {lesson.title}
                        </h3>
                        <p className="text-sm text-gray-400 font-body">
                          {lesson.description}
                        </p>
                      </div>
                      <FaRocket className="text-indigo-400" />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        )}

        {/* Next Steps */}
        {introduction.nextSteps && (
          <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border-2 border-indigo-700 rounded-lg p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <FaArrowRight className="text-3xl text-indigo-400" />
              <h2 className="text-2xl font-bold font-heading text-white">
                {introduction.nextSteps.title}
              </h2>
            </div>
            <p className="text-gray-300 font-body mb-4">
              {introduction.nextSteps.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {introduction.nextSteps.suggestions.map((suggestion, index) => (
                <Link
                  key={index}
                  to={`/language/${suggestion.languageId}`}
                  className="bg-gray-800/50 border border-gray-600 rounded-lg p-4 hover:border-indigo-500 hover:bg-gray-800 transition-all"
                >
                  <div className="flex items-start gap-3">
                    {suggestion.icon && (
                      <span className="text-2xl">{suggestion.icon}</span>
                    )}
                    <div>
                      <h3 className="text-lg font-bold font-heading text-white mb-1">
                        {suggestion.language}
                      </h3>
                      <p className="text-gray-400 font-body text-sm">
                        {suggestion.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to={`/study-program`}
            className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all font-medium text-center font-heading"
          >
            <FaCode className="inline mr-2" />
            Start Learning {introduction.name}
          </Link>
          <Link
            to="/languages"
            className="flex-1 bg-gray-700 text-white px-6 py-4 rounded-lg hover:bg-gray-600 transition-colors font-medium text-center font-heading"
          >
            Explore Other Languages
          </Link>
        </div>
      </div>
    </div>
  )
}

