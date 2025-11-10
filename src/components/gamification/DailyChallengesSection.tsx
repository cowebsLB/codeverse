import { useGamificationStore } from '../../store/gamificationStore'
import { useEffect } from 'react'
import DailyChallengeCard from './DailyChallengeCard'

export default function DailyChallengesSection() {
  const { dailyChallenges, getDailyChallenges, updateDailyChallengeProgress, completeDailyChallenge } = useGamificationStore()

  useEffect(() => {
    const loadChallenges = async () => {
      try {
        await getDailyChallenges()
      } catch (error) {
        console.error('Failed to load daily challenges:', error)
      }
    }
    loadChallenges()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    // Update progress when challenges are loaded (only once)
    if (dailyChallenges.length > 0 && !dailyChallenges[0]?.completed) {
      let cancelled = false
      const updateProgress = async () => {
        try {
          if (!cancelled) {
            await updateDailyChallengeProgress()
          }
        } catch (error) {
          if (!cancelled) {
            console.error('Failed to update daily challenge progress:', error)
          }
        }
      }
      updateProgress()
      
      return () => {
        cancelled = true
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dailyChallenges.length])

  if (dailyChallenges.length === 0) {
    return (
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <h3 className="text-xl font-bold font-heading text-white mb-4">Daily Challenges</h3>
        <p className="text-gray-400 font-body">Loading challenges...</p>
      </div>
    )
  }

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <h3 className="text-xl font-bold font-heading text-white mb-4">
        <span className="mr-2">📅</span> Daily Challenges
      </h3>
      <div className="space-y-4">
        {dailyChallenges.map((challenge, index) => (
          <DailyChallengeCard
            key={challenge.challenge.id}
            challenge={challenge}
            onComplete={() => completeDailyChallenge(challenge.challenge.id)}
          />
        ))}
      </div>
    </div>
  )
}

