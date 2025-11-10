import { useGamificationStore } from '../../store/gamificationStore'
import { useEffect } from 'react'
import DailyChallengeCard from './DailyChallengeCard'

export default function DailyChallengesSection() {
  const { dailyChallenges, getDailyChallenges, updateDailyChallengeProgress, completeDailyChallenge } = useGamificationStore()

  useEffect(() => {
    getDailyChallenges()
  }, [getDailyChallenges])

  useEffect(() => {
    // Update progress when challenges are loaded
    if (dailyChallenges.length > 0) {
      updateDailyChallengeProgress()
    }
  }, [dailyChallenges, updateDailyChallengeProgress])

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

