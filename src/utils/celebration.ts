import confetti from 'canvas-confetti'

export function celebrateAchievement(rarity: 'common' | 'rare' | 'epic' | 'legendary') {
  const duration = 3000
  const end = Date.now() + duration

  const configs: Record<string, any> = {
    common: {
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#9CA3AF', '#6B7280', '#4B5563'],
    },
    rare: {
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#3B82F6', '#2563EB', '#1D4ED8'],
    },
    epic: {
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#A855F7', '#9333EA', '#7E22CE'],
    },
    legendary: {
      particleCount: 200,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#FCD34D', '#FBBF24', '#F59E0B'],
    },
  }

  const config = configs[rarity] || configs.common

  const interval = setInterval(() => {
    if (Date.now() > end) {
      clearInterval(interval)
      return
    }

    confetti({
      ...config,
      angle: 60,
      origin: { x: 0 },
    })

    confetti({
      ...config,
      angle: 120,
      origin: { x: 1 },
    })
  }, 200)
}

export function celebrateLessonCompletion() {
  const duration = 2000
  const end = Date.now() + duration

  const interval = setInterval(() => {
    if (Date.now() > end) {
      clearInterval(interval)
      return
    }

    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#6366F1', '#8B5CF6', '#EC4899'],
    })

    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#6366F1', '#8B5CF6', '#EC4899'],
    })
  }, 200)
}

