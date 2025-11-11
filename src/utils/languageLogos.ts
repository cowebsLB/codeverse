/**
 * Utility to get official programming language logos
 * Uses Simple Icons via CDN for consistent, official logos
 */

export interface LanguageLogo {
  name: string
  url: string
  color?: string
}

/**
 * Maps language names/IDs to their Simple Icons slug names
 * Simple Icons uses lowercase with hyphens for multi-word names
 */
const languageSlugMap: Record<string, string> = {
  // Languages from languageConfigs (using IDs)
  'JavaScript': 'javascript',
  'TypeScript': 'typescript',
  'Python': 'python',
  'HTML': 'html5',
  'HTML & CSS': 'html5', // Also support the full name
  'CSS': 'css3',
  'React': 'react',
  'Vue': 'vue.js',
  'Angular': 'angular',
  'Node.js': 'nodedotjs',
  'Java': 'java',
  'C#': 'csharp',
  'C++': 'cplusplus',
  'C': 'c',
  'Go': 'go',
  'Rust': 'rust',
  'Ruby': 'ruby',
  'PHP': 'php',
  'Swift': 'swift',
  'Kotlin': 'kotlin',
  'Dart': 'dart',
  'Scala': 'scala',
  'R': 'r',
  'MATLAB': 'matlab',
  'Perl': 'perl',
  'Lua': 'lua',
  'Haskell': 'haskell',
  'Elixir': 'elixir',
  'Clojure': 'clojure',
  'Erlang': 'erlang',
  'OCaml': 'ocaml',
  'F#': 'fsharp',
  'Objective-C': 'objectivec',
  'Shell': 'gnubash',
  'Bash': 'gnubash',
  'PowerShell': 'powershell',
  'SQL': 'mysql',
  'PostgreSQL': 'postgresql',
  'MongoDB': 'mongodb',
  'Redis': 'redis',
  'Docker': 'docker',
  'Kubernetes': 'kubernetes',
  'Git': 'git',
  'GitHub': 'github',
  'GitLab': 'gitlab',
  'Bitbucket': 'bitbucket',
}

/**
 * Gets the Simple Icons slug for a language name
 */
function getLanguageSlug(languageName: string): string | null {
  return languageSlugMap[languageName] || null
}

/**
 * Gets the official logo URL for a programming language
 * Uses Simple Icons CDN (jsDelivr)
 * 
 * @param languageName - The name of the programming language
 * @param size - Size of the icon (default: 24)
 * @param color - Optional hex color code (without #) to colorize the SVG
 * @returns URL to the language logo SVG
 */
export function getLanguageLogoUrl(languageName: string, size: number = 24, color?: string): string {
  const slug = getLanguageSlug(languageName)
  if (!slug) {
    // Fallback to a generic code icon if language not found
    return `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/code.svg${color ? `?color=${color.replace('#', '')}` : ''}`
  }
  
  // Simple Icons CDN via jsDelivr
  // Add color parameter if provided (Simple Icons supports ?color=HEX format)
  const colorParam = color ? `?color=${color.replace('#', '')}` : ''
  return `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg${colorParam}`
}

/**
 * Gets language logo information including color
 * Simple Icons provides hex colors for each icon
 */
export function getLanguageLogo(languageName: string): LanguageLogo {
  const slug = getLanguageSlug(languageName)
  const url = slug 
    ? `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`
    : `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/code.svg`
  
  // Official language colors (from Simple Icons and official brand guidelines)
  const colorMap: Record<string, string> = {
    'javascript': '#F7DF1E', // JavaScript yellow
    'typescript': '#3178C6', // TypeScript blue
    'python': '#3776AB', // Python blue
    'html5': '#E34F26', // HTML5 orange-red
    'css3': '#1572B6', // CSS3 blue
    'react': '#61DAFB', // React cyan
    'vue.js': '#4FC08D', // Vue.js green
    'angular': '#DD0031', // Angular red
    'nodedotjs': '#339933', // Node.js green
    'java': '#ED8B00', // Java orange
    'csharp': '#239120', // C# green
    'cplusplus': '#00599C', // C++ blue
    'c': '#A8B9CC', // C light blue-gray
    'go': '#00ADD8', // Go cyan
    'rust': '#000000', // Rust black (or #CE412B for rust color)
    'ruby': '#CC342D', // Ruby red
    'php': '#777BB4', // PHP purple-blue
    'swift': '#FA7343', // Swift orange
    'kotlin': '#7F52FF', // Kotlin purple
    'dart': '#0175C2', // Dart blue
    'scala': '#DC322F', // Scala red
    'r': '#276DC3', // R blue
    'matlab': '#0076A8', // MATLAB blue
    'perl': '#39457E', // Perl blue
    'lua': '#2C2D72', // Lua dark blue
    'haskell': '#5D4F85', // Haskell purple
    'elixir': '#4B275F', // Elixir purple
    'clojure': '#5881D8', // Clojure blue
    'erlang': '#A90533', // Erlang red
    'ocaml': '#EC6813', // OCaml orange
    'fsharp': '#378BBA', // F# blue
    'objectivec': '#438EFF', // Objective-C blue
    'gnubash': '#4EAA25', // Bash green
    'powershell': '#5391FE', // PowerShell blue
    'mysql': '#4479A1', // MySQL blue
    'postgresql': '#336791', // PostgreSQL blue
    'mongodb': '#47A248', // MongoDB green
    'redis': '#DC382D', // Redis red
    'docker': '#2496ED', // Docker blue
    'kubernetes': '#326CE5', // Kubernetes blue
    'git': '#F05032', // Git orange-red
    'github': '#181717', // GitHub black
    'gitlab': '#FC6D26', // GitLab orange
    'bitbucket': '#0052CC', // Bitbucket blue
  }
  
  return {
    name: languageName,
    url,
    color: slug ? colorMap[slug] : undefined,
  }
}

/**
 * React component props for LanguageLogo component
 */
export interface LanguageLogoProps {
  languageName: string
  size?: number
  className?: string
  showName?: boolean
}

