import { useState } from 'react'
import { ShareableData, shareToTwitter, shareToFacebook, shareToLinkedIn, shareToReddit, copyToClipboard, generateShareText, shareNative } from '../../utils/socialSharing'

interface ShareButtonProps {
  data: ShareableData
  className?: string
}

export default function ShareButton({ data, className = '' }: ShareButtonProps) {
  const [showMenu, setShowMenu] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleShare = async (platform: string) => {
    switch (platform) {
      case 'twitter':
        shareToTwitter(data)
        break
      case 'facebook':
        shareToFacebook(data)
        break
      case 'linkedin':
        shareToLinkedIn(data)
        break
      case 'reddit':
        shareToReddit(data)
        break
      case 'native':
        await shareNative(data)
        break
      case 'copy':
        const text = generateShareText(data)
        const success = await copyToClipboard(text)
        if (success) {
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        }
        break
    }
    setShowMenu(false)
  }

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all font-medium text-sm flex items-center gap-2"
      >
        <span>📤</span>
        Share
      </button>

      {showMenu && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowMenu(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50">
            <div className="py-1">
              {navigator.share && (
                <button
                  onClick={() => handleShare('native')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors font-body"
                >
                  📱 Share via...
                </button>
              )}
              <button
                onClick={() => handleShare('twitter')}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors font-body"
              >
                🐦 Twitter
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors font-body"
              >
                📘 Facebook
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors font-body"
              >
                💼 LinkedIn
              </button>
              <button
                onClick={() => handleShare('reddit')}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors font-body"
              >
                🤖 Reddit
              </button>
              <div className="border-t border-gray-700 my-1"></div>
              <button
                onClick={() => handleShare('copy')}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors font-body"
              >
                {copied ? '✅ Copied!' : '📋 Copy Link'}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

