import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import { useProgressStore } from '../../store/progressStore'
import { useGamificationStore } from '../../store/gamificationStore'

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { user, logout } = useAuthStore()
  const xp = useProgressStore((state) => state.xp)
  const level = useProgressStore((state) => state.level)
  const coins = useGamificationStore((state) => state.coins)
  const currentStreak = useGamificationStore((state) => state.currentStreak)
  const navigate = useNavigate()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg px-3 py-2 hover:bg-gray-800 transition-colors"
      >
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold font-heading">
          {user?.name ? getInitials(user.name) : 'U'}
        </div>
        <span className="text-gray-300 font-body hidden sm:inline">{user?.name || 'User'}</span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50">
          <div className="py-1">
            <div className="px-4 py-3 border-b border-gray-700">
              <p className="text-sm font-medium text-white font-body">{user?.name}</p>
              <p className="text-sm text-gray-400 font-code">{user?.email}</p>
              <div className="flex items-center gap-2 mt-2 flex-wrap">
                <span className="text-xs text-indigo-400 font-code font-bold">Level {level}</span>
                <span className="text-xs text-gray-500">•</span>
                <span className="text-xs text-yellow-400 font-code">{xp} XP</span>
                {currentStreak > 0 && (
                  <>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-orange-400 font-code">🔥 {currentStreak}</span>
                  </>
                )}
                {coins > 0 && (
                  <>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-yellow-500 font-code">💰 {coins}</span>
                  </>
                )}
              </div>
            </div>
            <Link
              to="/profile"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors font-body"
            >
              Profile
            </Link>
            <Link
              to="/settings"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors font-body"
            >
              Settings
            </Link>
            <div className="border-t border-gray-700 my-1"></div>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-700 hover:text-red-300 transition-colors font-body"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

