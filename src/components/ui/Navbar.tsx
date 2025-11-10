import { Link } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import ProfileDropdown from './ProfileDropdown'

export default function Navbar() {
  const { isAuthenticated } = useAuthStore()

  return (
    <nav className="bg-gray-800 border-b border-gray-700 shadow-lg" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold font-heading bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent" aria-label="Codeverse Home">
              Codeverse
            </Link>
            {isAuthenticated && (
              <div className="hidden md:flex items-center space-x-6" role="menubar">
                <Link
                  to="/"
                  className="text-gray-300 hover:text-indigo-400 font-body transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-2 py-1"
                  aria-label="Navigate to home page"
                >
                  Home
                </Link>
                <Link
                  to="/study-program"
                  className="text-gray-300 hover:text-indigo-400 font-body transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-2 py-1"
                  aria-label="Navigate to study program"
                >
                  Study Program
                </Link>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-4">
            {isAuthenticated && <ProfileDropdown />}
          </div>
        </div>
      </div>
    </nav>
  )
}

