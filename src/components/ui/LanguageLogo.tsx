import { getLanguageLogoUrl, getLanguageLogo, LanguageLogoProps } from '../../utils/languageLogos'

/**
 * Component to display a programming language logo with official colors
 */
export default function LanguageLogo({ 
  languageName, 
  size = 24, 
  className = '',
  showName = false 
}: LanguageLogoProps) {
  const logoInfo = getLanguageLogo(languageName)
  const officialColor = logoInfo.color
  // Use the colored version of the logo URL
  const logoUrl = getLanguageLogoUrl(languageName, size, officialColor)
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div 
        className="relative flex items-center justify-center rounded-lg p-2 transition-all"
        style={{
          backgroundColor: officialColor ? `${officialColor}15` : undefined,
          border: officialColor ? `2px solid ${officialColor}40` : undefined,
        }}
      >
        <img
          src={logoUrl}
          alt={`${languageName} logo`}
          className="object-contain"
          style={{ 
            width: `${size}px`, 
            height: `${size}px`,
            filter: officialColor ? `drop-shadow(0 0 8px ${officialColor}60)` : undefined,
          }}
          onError={(e) => {
            // Fallback to a generic code icon if logo fails to load
            const target = e.target as HTMLImageElement
            target.src = officialColor 
              ? `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/code.svg?color=${officialColor.replace('#', '')}`
              : 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/code.svg'
          }}
        />
      </div>
      {showName && (
        <span className="text-sm font-medium">{languageName}</span>
      )}
    </div>
  )
}

