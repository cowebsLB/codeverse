import React from 'react'
import {
  FaUser, FaRocket, FaFire, FaFileAlt, FaCode, FaGlobe,
  FaGraduationCap, FaStar, FaCheck, FaShieldAlt, FaCrown,
  FaTrophy, FaGamepad, FaTwitter, FaSnowflake, FaLightbulb, FaClock,
  FaGift, FaUserTie, FaCircle, FaSun, FaBullseye, FaCommentDots,
  FaBook, FaBookOpen, FaStar as FaStarIcon,
  FaMedal, FaBolt, FaCoins, FaCheckCircle, FaChartBar, FaChartLine,
  FaMobileAlt, FaServer, FaLock, FaTimesCircle, FaShoppingCart,
  FaShare, FaFacebook, FaLinkedin, FaReddit, FaCopy, FaLeaf
} from 'react-icons/fa'

// Map emoji strings to React icon components
// Note: Each emoji key should appear only once
const emojiToIconMap: Record<string, React.ReactNode> = {
  // Gestures & People
  '👋': <FaUser />,
  '👨‍💻': <FaUserTie />,
  '🏃': <FaUser />,
  
  // Objects & Items
  '🚀': <FaRocket />,
  '🔥': <FaFire />,
  '📜': <FaFileAlt />,
  '📝': <FaFileAlt />,
  '📚': <FaBook />,
  '📖': <FaBookOpen />,
  '🎁': <FaGift />,
  '🎉': <FaGift />,
  '💡': <FaLightbulb />,
  '⏰': <FaClock />,
  '📅': <FaClock />,
  '📤': <FaShare />,
  '📱': <FaMobileAlt />,
  '📘': <FaFacebook />,
  '📋': <FaCopy />,
  '🛒': <FaShoppingCart />,
  '🔒': <FaLock />,
  '⚙️': <FaServer />,
  
  // Nature & Weather
  '🌐': <FaGlobe />,
  '🌍': <FaGlobe />,
  '🌌': <FaGlobe />,
  '☀️': <FaSun />,
  '❄️': <FaSnowflake />,
  '🌱': <FaLeaf />,
  
  // Animals
  '🐍': <FaCode />,
  '🦉': <FaTwitter />,
  '🐦': <FaTwitter />,
  '🐉': <FaFire />,
  
  // Symbols & Shapes
  '✨': <FaStar />,
  '⭐': <FaStarIcon />,
  '🧙': <FaStar />,
  '🎊': <FaStar />,
  '🎆': <FaStar />,
  '🟢': <FaCircle className="text-green-500" />,
  
  // Education & Achievement
  '🎓': <FaGraduationCap />,
  '💯': <FaCheck />,
  '✅': <FaCheckCircle />,
  '🏆': <FaTrophy />,
  '🎖️': <FaMedal />,
  '👑': <FaCrown />,
  
  // Activities & Hobbies
  '🎮': <FaGamepad />,
  '⚔️': <FaShieldAlt />,
  '🎯': <FaBullseye />,
  
  // Communication
  '🗣️': <FaCommentDots />,
  '💼': <FaLinkedin />,
  '🤖': <FaReddit />,
  
  // Currency & Rewards
  '💰': <FaCoins />,
  '⚡': <FaBolt />,
  
  // Charts & Data
  '📊': <FaChartBar />,
  '📈': <FaChartLine />,
  
  // Status & Actions
  '❌': <FaTimesCircle />,
}

/**
 * Converts an emoji string to a React icon component
 * @param emoji - The emoji string to convert
 * @param className - Optional className to apply to the icon
 * @returns React icon component or the original emoji if no mapping exists
 */
export function getIconFromEmoji(emoji: string, className?: string): React.ReactNode {
  const icon = emojiToIconMap[emoji]
  if (!icon) {
    // Fallback to emoji if no mapping exists
    return <span>{emoji}</span>
  }
  
  // Clone the icon and apply className if provided
  if (className && React.isValidElement(icon)) {
    return React.cloneElement(icon as React.ReactElement, { className })
  }
  
  return icon
}

/**
 * Gets an icon component for a given emoji string with size classes
 * @param emoji - The emoji string
 * @param size - Size class (text-2xl, text-3xl, etc.)
 * @returns React icon component
 */
export function getIconComponent(emoji: string, size: string = 'text-2xl'): React.ReactNode {
  return getIconFromEmoji(emoji, size)
}

