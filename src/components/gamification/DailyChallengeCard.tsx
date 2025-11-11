import { DailyChallengeProgress } from '../../store/gamificationStore'
import { FaCheckCircle, FaCoins, FaStar, FaGift } from 'react-icons/fa'
import { getIconFromEmoji } from '../../utils/iconMapper'

interface DailyChallengeCardProps {
  challenge: DailyChallengeProgress
  onComplete?: () => void
}

export default function DailyChallengeCard({ challenge, onComplete }: DailyChallengeCardProps) {
  const progressPercentage = Math.min(100, (challenge.progress / challenge.challenge.target) * 100)

  return (
    <div className={`bg-gray-800 border-2 rounded-lg p-4 ${challenge.completed ? 'border-green-500' : 'border-gray-700'}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          {getIconFromEmoji(challenge.challenge.icon, 'text-3xl')}
          <div>
            <h3 className="text-lg font-bold font-heading text-white">{challenge.challenge.name}</h3>
            <p className="text-sm text-gray-400 font-body">{challenge.challenge.description}</p>
          </div>
        </div>
        {challenge.completed && (
          <FaCheckCircle className="text-2xl text-green-500" />
        )}
      </div>
      
      <div className="mb-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400 font-code">
            Progress: {challenge.progress} / {challenge.challenge.target}
          </span>
          <span className="text-sm text-indigo-400 font-code font-bold">
            {Math.round(progressPercentage)}%
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all ${
              challenge.completed ? 'bg-green-500' : 'bg-gradient-to-r from-indigo-500 to-purple-600'
            }`}
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {!challenge.completed && (
        <div className="flex items-center justify-between pt-3 border-t border-gray-700">
          <div className="flex items-center gap-4 text-sm">
            <span className="text-yellow-400 font-code flex items-center gap-1"><FaCoins className="inline" /> +{challenge.rewardCoins} coins</span>
            <span className="text-indigo-400 font-code flex items-center gap-1"><FaStar className="inline" /> +{challenge.rewardXP} XP</span>
          </div>
          {challenge.progress >= challenge.challenge.target && onComplete && (
            <button
              onClick={onComplete}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all font-medium text-sm"
            >
              Claim Reward
            </button>
          )}
        </div>
      )}

      {challenge.completed && (
        <div className="pt-3 border-t border-gray-700">
          <p className="text-sm text-green-400 font-code text-center flex items-center justify-center gap-1">Challenge Completed! <FaGift className="inline" /></p>
        </div>
      )}
    </div>
  )
}

