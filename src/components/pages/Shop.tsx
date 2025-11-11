import { useAuthStore } from '../../store/authStore'
import { useGamificationStore } from '../../store/gamificationStore'
import PowerUpShop from '../gamification/PowerUpShop'
import UnlockablesShop from '../gamification/UnlockablesShop'
import { FaShoppingCart, FaCoins } from 'react-icons/fa'

export default function Shop() {
  const { user, initialized: authInitialized } = useAuthStore()
  const gamificationInitialized = useGamificationStore((state) => state.initialized)
  const coins = useGamificationStore((state) => state.coins)

  // Show loading state if stores aren't initialized
  if (!authInitialized || !gamificationInitialized) {
    return (
      <div className="min-h-screen bg-gray-900 py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto"></div>
          <p className="mt-4 text-gray-400 font-body">Loading shop...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Shop Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold font-heading text-white mb-2">
            <FaShoppingCart className="inline mr-2" /> Shop
          </h1>
          <p className="text-gray-400 font-body text-lg">
            Purchase power-ups and unlockables to enhance your learning experience
          </p>
          <div className="mt-4 flex items-center gap-4">
            <div className="bg-gray-800 border border-gray-700 rounded-lg px-6 py-3">
              <div className="flex items-center gap-2">
                <FaCoins className="text-2xl" />
                <div>
                  <div className="text-xs text-gray-400 font-body">Your Coins</div>
                  <div className="text-2xl font-bold font-heading text-yellow-500">{coins.toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Power-Up Shop */}
        <div className="mb-8">
          <PowerUpShop />
        </div>

        {/* Unlockables Shop */}
        <div className="mb-8">
          <UnlockablesShop />
        </div>
      </div>
    </div>
  )
}

