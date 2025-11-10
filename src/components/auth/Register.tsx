import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import { validatePasswordStrength } from '../../utils/password'
import { checkRateLimit, recordAttempt, resetRateLimit, getFormattedRemainingTime, MAX_ATTEMPTS } from '../../utils/rateLimiter'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [rateLimitError, setRateLimitError] = useState('')
  const register = useAuthStore((state) => state.register)
  const navigate = useNavigate()

  // Check rate limit on email change
  useEffect(() => {
    if (email) {
      const rateLimit = checkRateLimit(`register:${email}`)
      if (rateLimit.isLimited) {
        const remainingTime = getFormattedRemainingTime(`register:${email}`)
        setRateLimitError(`Too many attempts. Please try again in ${remainingTime}.`)
      } else {
        setRateLimitError('')
      }
    } else {
      setRateLimitError('')
    }
  }, [email])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setRateLimitError('')
    
    if (!name || !email || !password) {
      setError('Please fill in all fields')
      return
    }

    // Check rate limit
    const rateLimit = checkRateLimit(`register:${email}`)
    if (rateLimit.isLimited) {
      const remainingTime = getFormattedRemainingTime(`register:${email}`)
      setRateLimitError(`Too many registration attempts. Please try again in ${remainingTime}.`)
      return
    }
    
    // Validate password strength
    const passwordValidation = validatePasswordStrength(password)
    if (!passwordValidation.isValid) {
      setError(passwordValidation.error || 'Password does not meet requirements')
      return
    }

    // Record attempt
    recordAttempt(`register:${email}`)
    
    const success = await register(email, password, name)
    if (success) {
      // Reset rate limit on successful registration
      resetRateLimit(`register:${email}`)
      navigate('/')
    } else {
      // Check rate limit again after failed attempt
      const newRateLimit = checkRateLimit(`register:${email}`)
      if (newRateLimit.isLimited) {
        const remainingTime = getFormattedRemainingTime(`register:${email}`)
        setRateLimitError(`Too many registration attempts. Please try again in ${remainingTime}.`)
      } else if (newRateLimit.remainingAttempts < MAX_ATTEMPTS) {
        setError(`Registration failed. Email may already be in use. ${newRateLimit.remainingAttempts} attempt${newRateLimit.remainingAttempts !== 1 ? 's' : ''} remaining.`)
      } else {
        setError('Registration failed. Email may already be in use.')
      }
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Image */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 items-center justify-center p-12 border-r border-gray-700">
        <div className="text-center text-white">
          <div className="mb-8">
            <svg
              className="w-64 h-64 mx-auto"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="100" cy="100" r="80" fill="rgba(255,255,255,0.1)" />
              <rect x="60" y="60" width="80" height="80" rx="8" fill="rgba(255,255,255,0.2)" stroke="white" strokeWidth="2" />
              <circle cx="100" cy="100" r="30" fill="rgba(255,255,255,0.3)" />
              <path d="M100 70 L100 130 M70 100 L130 100" stroke="white" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold font-heading mb-4">Codeverse</h1>
          <p className="text-xl text-indigo-100 font-body">Start your journey into programming with interactive 3D lessons</p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-900 p-8">
        <div className="w-full max-w-md">
          <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold font-heading mb-2 text-white">Create Account</h2>
            <p className="text-gray-400 mb-6 font-body">Sign up to start learning with 3D interactive lessons</p>
            <form onSubmit={handleSubmit} className="space-y-4" aria-label="Registration form">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1 font-body">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  aria-required="true"
                  aria-invalid={error ? 'true' : 'false'}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-body"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 font-body">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-required="true"
                  aria-invalid={error ? 'true' : 'false'}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-body"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1 font-body">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  aria-required="true"
                  aria-invalid={error ? 'true' : 'false'}
                  aria-describedby="password-requirements password-error"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-body"
                  placeholder="••••••••"
                />
                <p id="password-requirements" className="mt-1 text-xs text-gray-400 font-body">
                  Must be at least 8 characters with uppercase, lowercase, number, and special character
                </p>
              </div>
              {error && (
                <div id="password-error" role="alert" aria-live="polite" className="text-red-400 text-sm text-center bg-red-900/30 border border-red-700 p-2 rounded font-body">{error}</div>
              )}
              {rateLimitError && (
                <div role="alert" aria-live="polite" className="text-orange-400 text-sm text-center bg-orange-900/30 border border-orange-700 p-2 rounded font-body">{rateLimitError}</div>
              )}
              <button
                type="submit"
                aria-label="Submit registration form"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all font-medium font-heading focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Register
              </button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-400 font-body">
              Already have an account?{' '}
              <Link to="/login" className="text-indigo-400 hover:text-indigo-300 font-medium">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

