import { Link } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import { useProgressStore } from '../../store/progressStore'
import { useEffect, useState } from 'react'
import { lessons } from '../../data/lessons'
import { FaBullseye, FaChartBar, FaRocket } from 'react-icons/fa'

export default function Home() {
  const { user } = useAuthStore()
  const getOverallProgress = useProgressStore((state) => state.getOverallProgress)
  const [overallProgress, setOverallProgress] = useState(0)

  useEffect(() => {
    getOverallProgress().then(setOverallProgress)
  }, [getOverallProgress])

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-heading text-white mb-6">
              Welcome to <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Codeverse</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-body mb-8 max-w-3xl mx-auto">
              Master programming languages with immersive 3D interactive lessons
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/study-program"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all font-medium text-lg font-heading shadow-lg"
              >
                Start Learning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold font-heading bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {overallProgress}%
              </div>
              <div className="text-gray-400 font-body">Overall Progress</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-heading bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {lessons.length}
              </div>
              <div className="text-gray-400 font-body">Available Lessons</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-heading bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {user?.name || 'Student'}
              </div>
              <div className="text-gray-400 font-body">Welcome back!</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-heading text-center text-white mb-12">
            Why Choose Codeverse?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-lg hover:border-indigo-500 transition-colors">
              <FaBullseye className="text-5xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold font-heading text-white mb-4">
                Interactive 3D Learning
              </h3>
              <p className="text-gray-400 font-body">
                Experience programming like never before with immersive 3D visualizations that bring code concepts to life.
              </p>
            </div>
            <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-lg hover:border-indigo-500 transition-colors">
              <FaChartBar className="text-5xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold font-heading text-white mb-4">
                Track Your Progress
              </h3>
              <p className="text-gray-400 font-body">
                Monitor your learning journey with detailed progress tracking and personalized insights.
              </p>
            </div>
            <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-lg hover:border-indigo-500 transition-colors">
              <FaRocket className="text-5xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold font-heading text-white mb-4">
                Learn at Your Pace
              </h3>
              <p className="text-gray-400 font-body">
                Study when and where you want with self-paced lessons designed for all learning styles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-heading text-center text-white mb-12">
            Explore Our Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/study-program"
              className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-6 rounded-lg hover:shadow-xl hover:scale-105 transition-all border border-indigo-500"
            >
              <h3 className="text-xl font-bold font-heading mb-2">Study Program</h3>
              <p className="text-indigo-100 font-body">Structured learning paths</p>
            </Link>
            <Link
              to="/profile"
              className="bg-gradient-to-br from-pink-600 to-red-600 text-white p-6 rounded-lg hover:shadow-xl hover:scale-105 transition-all border border-pink-500"
            >
              <h3 className="text-xl font-bold font-heading mb-2">My Profile</h3>
              <p className="text-pink-100 font-body">View your learning stats</p>
            </Link>
            <Link
              to="/settings"
              className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-6 rounded-lg hover:shadow-xl hover:scale-105 transition-all border border-blue-500"
            >
              <h3 className="text-xl font-bold font-heading mb-2">Settings</h3>
              <p className="text-blue-100 font-body">Manage your account</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

