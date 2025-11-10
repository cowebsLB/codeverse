import { useState, useEffect } from 'react'
import { useAuthStore } from '../../store/authStore'
import { LeaderboardEntry, getLeaderboard, getUserRank } from '../../db/gamificationDb'
import ShareButton from './ShareButton'

export default function Leaderboard() {
  const { user } = useAuthStore()
  const [entries, setEntries] = useState<LeaderboardEntry[]>([])
  const [userRank, setUserRank] = useState<number | null>(null)
  const [sortBy, setSortBy] = useState<'xp' | 'level' | 'streak'>('xp')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadLeaderboard()
  }, [sortBy])

  const loadLeaderboard = async () => {
    setLoading(true)
    const leaderboard = await getLeaderboard(100, sortBy)
    setEntries(leaderboard)
    
    if (user?.id) {
      const rank = await getUserRank(user.id, sortBy)
      setUserRank(rank)
    }
    
    setLoading(false)
  }

  const getRankIcon = (rank: number) => {
    if (rank === 1) return '🥇'
    if (rank === 2) return '🥈'
    if (rank === 3) return '🥉'
    return `#${rank}`
  }

  const getSortLabel = (sort: string) => {
    switch (sort) {
      case 'xp': return 'Total XP'
      case 'level': return 'Level'
      case 'streak': return 'Streak'
      default: return 'Total XP'
    }
  }

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold font-heading text-white">
          <span className="mr-2">🏆</span> Global Leaderboard
        </h3>
        <div className="flex items-center gap-2">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'xp' | 'level' | 'streak')}
            className="bg-gray-700 text-white px-3 py-1 rounded text-sm font-code border border-gray-600"
          >
            <option value="xp">Sort by XP</option>
            <option value="level">Sort by Level</option>
            <option value="streak">Sort by Streak</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500 mx-auto"></div>
          <p className="text-gray-400 font-body mt-2">Loading leaderboard...</p>
        </div>
      ) : (
        <>
          {userRank && (
            <div className="bg-indigo-900/30 border border-indigo-700 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-indigo-300 font-body">Your Rank</p>
                  <p className="text-2xl font-bold font-heading text-white">
                    {getRankIcon(userRank)} {userRank}
                  </p>
                </div>
                <ShareButton
                  data={{
                    type: 'progress',
                    title: `Rank #${userRank}`,
                    description: `I'm ranked #${userRank} on the Codeverse leaderboard!`,
                    url: window.location.href,
                  }}
                />
              </div>
            </div>
          )}

          <div className="space-y-2 max-h-96 overflow-y-auto">
            {entries.map((entry) => (
              <div
                key={entry.user_id}
                className={`bg-gray-700 rounded-lg p-4 flex items-center justify-between ${
                  entry.user_id === user?.id ? 'border-2 border-indigo-500' : 'border border-gray-600'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-2xl font-bold font-heading text-indigo-400 w-12 text-center">
                    {entry.rank ? getRankIcon(entry.rank) : '—'}
                  </div>
                  <div>
                    <p className="text-white font-bold font-heading">
                      {entry.user_name}
                      {entry.user_id === user?.id && (
                        <span className="ml-2 text-xs text-indigo-400">(You)</span>
                      )}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-400 font-code mt-1">
                      <span>Level {entry.level}</span>
                      <span>•</span>
                      <span>{entry.total_xp} XP</span>
                      <span>•</span>
                      <span>🔥 {entry.current_streak}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold font-heading text-indigo-400">
                    {sortBy === 'xp' && `${entry.total_xp} XP`}
                    {sortBy === 'level' && `Level ${entry.level}`}
                    {sortBy === 'streak' && `🔥 ${entry.current_streak}`}
                  </div>
                  <div className="text-xs text-gray-400 font-code mt-1">
                    {entry.languages_mastered} languages • {entry.achievements_unlocked} achievements
                  </div>
                </div>
              </div>
            ))}
          </div>

          {entries.length === 0 && (
            <div className="text-center py-8 text-gray-400 font-body">
              No entries yet. Be the first!
            </div>
          )}
        </>
      )}
    </div>
  )
}

