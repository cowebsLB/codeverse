import { useState, useEffect } from 'react'
import { useGamificationStore } from '../../store/gamificationStore'
import { useProgressStore } from '../../store/progressStore'
import { useAuthStore } from '../../store/authStore'
import { unlockables, Unlockable, checkUnlockableRequirement } from '../../data/unlockables'
import { getUnlockedItems, unlockItem, setActiveUnlockable, getActiveUnlockables } from '../../db/gamificationDb'
import ShareButton from './ShareButton'
import { FaGift, FaCoins } from 'react-icons/fa'
import { getIconFromEmoji } from '../../utils/iconMapper'

export default function UnlockablesShop() {
  const { user } = useAuthStore()
  const { coins, spendCoins, unlockedAchievements, currentStreak } = useGamificationStore()
  const { xp, level, getAllLanguageProgress } = useProgressStore()
  const [unlockedItems, setUnlockedItems] = useState<string[]>([])
  const [activeItems, setActiveItems] = useState<string[]>([])
  const [languagesMastered, setLanguagesMastered] = useState(0)
  const [lessonsCompleted, setLessonsCompleted] = useState(0)

  useEffect(() => {
    // Wait for stores to initialize before loading data
    if (!user?.id) return
    
    let cancelled = false
    
    const load = async () => {
      await Promise.all([
        loadUnlockedItems(),
        loadLanguagesMastered()
      ])
    }
    
    load()
    
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id])

  const loadUnlockedItems = async () => {
    if (!user?.id) return
    try {
      const unlocked = await getUnlockedItems(user.id)
      setUnlockedItems(unlocked)
      
      const active = await getActiveUnlockables(user.id)
      setActiveItems(active)
    } catch (error) {
      console.error('Failed to load unlockables:', error)
      setUnlockedItems([])
      setActiveItems([])
    }
  }

  const loadLanguagesMastered = async () => {
    try {
      const languages = await getAllLanguageProgress()
      const mastered = languages.filter(l => l.completed).length
      setLanguagesMastered(mastered)
      
      // Calculate completed lessons
      const completed = languages.reduce((sum, lang) => sum + lang.completedLessons, 0)
      setLessonsCompleted(completed)
    } catch (error) {
      console.error('Failed to load languages:', error)
      setLanguagesMastered(0)
      setLessonsCompleted(0)
    }
  }

  const handleUnlock = async (unlockable: Unlockable) => {
    if (!user?.id) return

    const userData = {
      level,
      streak: currentStreak,
      lessonsCompleted,
      languagesMastered,
      achievements: unlockedAchievements,
      coins,
    }

    const { canUnlock, reason } = checkUnlockableRequirement(unlockable, userData)
    
    if (!canUnlock) {
      alert(reason || 'Cannot unlock this item')
      return
    }

    // Check if already unlocked
    if (unlockedItems.includes(unlockable.id)) {
      // Toggle active state
      const isActive = activeItems.includes(unlockable.id)
      await setActiveUnlockable(user.id, unlockable.id, !isActive)
      await loadUnlockedItems()
      return
    }

    // Spend coins if required
    if (unlockable.cost > 0) {
      const success = await spendCoins(unlockable.cost)
      if (!success) {
        alert('Not enough coins!')
        return
      }
    }

    // Unlock the item
    await unlockItem(user.id, unlockable.id)
    await loadUnlockedItems()
    alert(`Unlocked: ${unlockable.name}!`)
  }

  const getUnlockableStatus = (unlockable: Unlockable) => {
    const userData = {
      level,
      streak: currentStreak,
      lessonsCompleted,
      languagesMastered,
      achievements: unlockedAchievements,
      coins,
    }

    const { canUnlock, reason } = checkUnlockableRequirement(unlockable, userData)
    const isUnlocked = unlockedItems.includes(unlockable.id)
    const isActive = activeItems.includes(unlockable.id)

    return { canUnlock, reason, isUnlocked, isActive }
  }

  const rarityColors = {
    common: 'border-gray-500',
    rare: 'border-blue-500',
    epic: 'border-purple-500',
    legendary: 'border-yellow-500',
  }

  const groupedUnlockables = unlockables.reduce((acc, item) => {
    if (!acc[item.type]) acc[item.type] = []
    acc[item.type].push(item)
    return acc
  }, {} as Record<string, Unlockable[]>)

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <h3 className="text-xl font-bold font-heading text-white mb-4 flex items-center gap-2">
        <FaGift className="inline" /> Unlockables Shop
      </h3>
      
      <div className="space-y-6">
        {Object.entries(groupedUnlockables).map(([type, items]) => (
          <div key={type}>
            <h4 className="text-lg font-bold font-heading text-gray-300 mb-3 capitalize">
              {type.replace('_', ' ')}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((unlockable) => {
                const { canUnlock, reason, isUnlocked, isActive } = getUnlockableStatus(unlockable)
                
                return (
                  <div
                    key={unlockable.id}
                    className={`bg-gray-700 border-2 rounded-lg p-4 transition-all ${
                      isUnlocked
                        ? isActive
                          ? `${rarityColors[unlockable.rarity]} bg-opacity-50`
                          : 'border-green-500'
                        : canUnlock
                        ? 'border-gray-600 hover:border-indigo-500'
                        : 'border-gray-700 opacity-60'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {getIconFromEmoji(unlockable.icon, 'text-2xl')}
                        <div>
                          <h5 className="text-sm font-bold font-heading text-white">{unlockable.name}</h5>
                          <p className="text-xs text-gray-400 font-body">{unlockable.description}</p>
                        </div>
                      </div>
                      {isUnlocked && (
                        <span className="text-xs text-green-400 font-code">✓</span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-600">
                      {unlockable.cost > 0 ? (
                        <span className="text-xs text-yellow-400 font-code flex items-center gap-1"><FaCoins className="inline" /> {unlockable.cost} coins</span>
                      ) : (
                        <span className="text-xs text-indigo-400 font-code">Free</span>
                      )}
                      
                      {isUnlocked ? (
                        <button
                          onClick={() => handleUnlock(unlockable)}
                          className={`text-xs px-3 py-1 rounded font-medium ${
                            isActive
                              ? 'bg-green-600 text-white'
                              : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                          }`}
                        >
                          {isActive ? 'Active' : 'Activate'}
                        </button>
                      ) : (
                        <button
                          onClick={() => handleUnlock(unlockable)}
                          disabled={!canUnlock}
                          className={`text-xs px-3 py-1 rounded font-medium ${
                            canUnlock
                              ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          {canUnlock ? 'Unlock' : reason || 'Locked'}
                        </button>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

