import { LanguageTrack, LanguageProgress } from '../store/progressStore'

export interface LanguageConfig {
  id: string
  name: string
  track: LanguageTrack
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  order: number // Order within track
}

// Language progression trees by track
export const languageConfigs: LanguageConfig[] = [
  // Web Track - Beginner/Friendly
  {
    id: 'HTML',
    name: 'HTML & CSS',
    track: 'Web',
    difficulty: 'beginner',
    order: 1,
  },
  {
    id: 'JavaScript',
    name: 'JavaScript',
    track: 'Web',
    difficulty: 'beginner',
    order: 2,
  },
  {
    id: 'Python',
    name: 'Python',
    track: 'Web',
    difficulty: 'beginner',
    order: 3,
  },
  {
    id: 'Ruby',
    name: 'Ruby',
    track: 'Web',
    difficulty: 'beginner',
    order: 4,
  },
  // Web Track - Intermediate
  {
    id: 'TypeScript',
    name: 'TypeScript',
    track: 'Web',
    difficulty: 'intermediate',
    order: 5,
  },
  {
    id: 'Node.js',
    name: 'Node.js',
    track: 'Web',
    difficulty: 'intermediate',
    order: 6,
  },
  {
    id: 'PHP',
    name: 'PHP',
    track: 'Web',
    difficulty: 'intermediate',
    order: 7,
  },
  {
    id: 'Vue.js',
    name: 'Vue.js',
    track: 'Web',
    difficulty: 'intermediate',
    order: 8,
  },
  {
    id: 'React',
    name: 'React',
    track: 'Web',
    difficulty: 'intermediate',
    order: 9,
  },
  {
    id: 'Svelte',
    name: 'Svelte',
    track: 'Web',
    difficulty: 'intermediate',
    order: 10,
  },
  {
    id: 'Angular',
    name: 'Angular',
    track: 'Web',
    difficulty: 'intermediate',
    order: 11,
  },
  {
    id: 'Deno',
    name: 'Deno',
    track: 'Web',
    difficulty: 'intermediate',
    order: 12,
  },
  {
    id: 'Ruby on Rails',
    name: 'Ruby on Rails',
    track: 'Web',
    difficulty: 'intermediate',
    order: 13,
  },
  {
    id: 'Elixir',
    name: 'Elixir',
    track: 'Web',
    difficulty: 'advanced',
    order: 14,
  },
  {
    id: 'SQL',
    name: 'SQL',
    track: 'Web',
    difficulty: 'beginner',
    order: 15,
  },
  {
    id: 'PostgreSQL',
    name: 'PostgreSQL',
    track: 'Web',
    difficulty: 'intermediate',
    order: 16,
  },
  {
    id: 'MySQL',
    name: 'MySQL',
    track: 'Web',
    difficulty: 'intermediate',
    order: 17,
  },
  // Mobile Track
  {
    id: 'Swift',
    name: 'Swift',
    track: 'Mobile',
    difficulty: 'intermediate',
    order: 1,
  },
  {
    id: 'Kotlin',
    name: 'Kotlin',
    track: 'Mobile',
    difficulty: 'intermediate',
    order: 2,
  },
  {
    id: 'C#',
    name: 'C#',
    track: 'Mobile',
    difficulty: 'intermediate',
    order: 3,
  },
  {
    id: 'Flutter',
    name: 'Flutter / Dart',
    track: 'Mobile',
    difficulty: 'intermediate',
    order: 4,
  },
  {
    id: 'React Native',
    name: 'React Native',
    track: 'Mobile',
    difficulty: 'intermediate',
    order: 5,
  },
  {
    id: 'Objective-C',
    name: 'Objective-C',
    track: 'Mobile',
    difficulty: 'advanced',
    order: 6,
  },
  // Systems Track
  {
    id: 'C',
    name: 'C',
    track: 'Systems',
    difficulty: 'advanced',
    order: 1,
  },
  {
    id: 'C++',
    name: 'C++',
    track: 'Systems',
    difficulty: 'advanced',
    order: 2,
  },
  {
    id: 'Go',
    name: 'Go',
    track: 'Systems',
    difficulty: 'advanced',
    order: 3,
  },
  {
    id: 'Rust',
    name: 'Rust',
    track: 'Systems',
    difficulty: 'advanced',
    order: 4,
  },
  {
    id: 'Java',
    name: 'Java',
    track: 'Systems',
    difficulty: 'advanced',
    order: 5,
  },
  {
    id: 'Assembly',
    name: 'Assembly',
    track: 'Systems',
    difficulty: 'advanced',
    order: 6,
  },
  {
    id: 'R',
    name: 'R',
    track: 'Systems',
    difficulty: 'intermediate',
    order: 7,
  },
  {
    id: 'MATLAB',
    name: 'MATLAB',
    track: 'Systems',
    difficulty: 'intermediate',
    order: 8,
  },
  {
    id: 'Haskell',
    name: 'Haskell',
    track: 'Systems',
    difficulty: 'advanced',
    order: 9,
  },
  {
    id: 'Scala',
    name: 'Scala',
    track: 'Systems',
    difficulty: 'advanced',
    order: 10,
  },
  {
    id: 'Lua',
    name: 'Lua',
    track: 'Systems',
    difficulty: 'intermediate',
    order: 11,
  },
  {
    id: 'Bash',
    name: 'Bash / Shell',
    track: 'Systems',
    difficulty: 'beginner',
    order: 12,
  },
  {
    id: 'PowerShell',
    name: 'PowerShell',
    track: 'Systems',
    difficulty: 'beginner',
    order: 13,
  },
  {
    id: 'Perl',
    name: 'Perl',
    track: 'Systems',
    difficulty: 'intermediate',
    order: 14,
  },
  {
    id: 'Julia',
    name: 'Julia',
    track: 'Systems',
    difficulty: 'intermediate',
    order: 15,
  },
]

// Get language config by ID
export function getLanguageConfig(languageId: string): LanguageConfig | undefined {
  return languageConfigs.find((config) => config.id === languageId)
}

// Get languages by track
export function getLanguagesByTrack(track: LanguageTrack): LanguageConfig[] {
  return languageConfigs
    .filter((config) => config.track === track)
    .sort((a, b) => a.order - b.order)
}

// Get next language in track
export function getNextLanguageInTrack(
  currentLanguageId: string,
  track: LanguageTrack
): LanguageConfig | undefined {
  const currentConfig = getLanguageConfig(currentLanguageId)
  if (!currentConfig || currentConfig.track !== track) return undefined

  return languageConfigs.find(
    (config) =>
      config.track === track && config.order === currentConfig.order + 1
  )
}

// Get difficulty icon
export function getDifficultyIcon(difficulty: 'beginner' | 'intermediate' | 'advanced'): string {
  switch (difficulty) {
    case 'beginner':
      return '🌱'
    case 'intermediate':
      return '⚔️'
    case 'advanced':
      return '🐉'
    default:
      return '📚'
  }
}

