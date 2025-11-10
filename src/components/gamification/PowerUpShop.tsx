import { useState, useEffect } from 'react'
import { useGamificationStore } from '../../store/gamificationStore'
import { useAuthStore } from '../../store/authStore'
import { powerUps, PowerUp } from '../../data/powerUps'
import { getPowerUps, addPowerUp, usePowerUp } from '../../db/gamificationDb'

export default function PowerUpShop() {
  const { user } = useAuthStore()
  const { coins, spendCoins } = useGamificationStore()
  const [userPowerUps, setUserPowerUps] = useState<Record<string, number>>({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadPowerUps()
  }, [])

  const loadPowerUps = async () => {
    if (!user?.id) return
    const powerUps = await getPowerUps(user.id)
    setUserPowerUps(powerUps)
  }

  const handlePurchase = async (powerUp: PowerUp) => {
    if (!user?.id) return

    if (coins < powerUp.cost) {
      alert('Not enough coins!')
      return
    }

    if (powerUp.maxQuantity && (userPowerUps[powerUp.id] || 0) >= powerUp.maxQuantity) {
      alert(`You already have the maximum quantity (${powerUp.maxQuantity})`)
      return
    }

    setLoading(true)
    const success = await spendCoins(powerUp.cost)
    
    if (success) {
      await addPowerUp(user.id, powerUp.id, 1)
      await loadPowerUps()
      alert(`Purchased ${powerUp.name}!`)
    } else {
      alert('Purchase failed!')
    }
    
    setLoading(false)
  }

  const handleUse = async (powerUp: PowerUp) => {
    if (!user?.id) return

    if ((userPowerUps[powerUp.id] || 0) <= 0) {
      alert('You don\'t have any of this power-up!')
      return
    }

    const success = await usePowerUp(user.id, powerUp.id)
    
    if (success) {
      await loadPowerUps()
      
      // Apply power-up effect
      switch (powerUp.type) {
        case 'xp_boost':
          // Would need to implement XP boost system
          alert(`${powerUp.name} activated! XP gain is now ${powerUp.effect.multiplier}x for ${powerUp.effect.duration} minutes.`)
          break
        case 'coin_boost':
          // Would need to implement coin boost system
          alert(`${powerUp.name} activated! Coin earnings are now ${powerUp.effect.multiplier}x for ${powerUp.effect.duration} minutes.`)
          break
        case 'streak_freeze':
          // Use streak freeze
          const gamificationStore = useGamificationStore.getState()
          await gamificationStore.useStreakFreeze()
          alert(`${powerUp.name} used! Your streak is protected.`)
          break
        case 'hint':
          alert(`${powerUp.name} used! Check the lesson for hints.`)
          break
        case 'time_extension':
          alert(`${powerUp.name} used! You have ${powerUp.effect.amount} more minutes.`)
          break
      }
    } else {
      alert('Failed to use power-up!')
    }
  }

  const getQuantity = (powerUpId: string) => userPowerUps[powerUpId] || 0

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <h3 className="text-xl font-bold font-heading text-white mb-4">
        <span className="mr-2">⚡</span> Power-Up Shop
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {powerUps.map((powerUp) => {
          const quantity = getQuantity(powerUp.id)
          const canPurchase = coins >= powerUp.cost && (!powerUp.maxQuantity || quantity < powerUp.maxQuantity)
          
          return (
            <div
              key={powerUp.id}
              className="bg-gray-700 border border-gray-600 rounded-lg p-4 hover:border-indigo-500 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{powerUp.icon}</span>
                  <div>
                    <h4 className="text-sm font-bold font-heading text-white">{powerUp.name}</h4>
                    <p className="text-xs text-gray-400 font-body">{powerUp.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-600">
                <div>
                  <div className="text-xs text-yellow-400 font-code mb-1">💰 {powerUp.cost} coins</div>
                  {quantity > 0 && (
                    <div className="text-xs text-indigo-400 font-code">Owned: {quantity}</div>
                  )}
                </div>
                
                <div className="flex gap-2">
                  {quantity > 0 && (
                    <button
                      onClick={() => handleUse(powerUp)}
                      className="bg-green-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-green-700 transition-colors"
                    >
                      Use
                    </button>
                  )}
                  <button
                    onClick={() => handlePurchase(powerUp)}
                    disabled={!canPurchase || loading}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                      canPurchase
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

