export interface ShareableData {
  type: 'achievement' | 'progress' | 'milestone' | 'streak'
  title: string
  description: string
  image?: string
  url?: string
}

export function shareToTwitter(data: ShareableData): void {
  const text = `${data.title} - ${data.description}`
  const url = data.url || window.location.href
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
  window.open(twitterUrl, '_blank', 'width=550,height=420')
}

export function shareToFacebook(data: ShareableData): void {
  const url = data.url || window.location.href
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  window.open(facebookUrl, '_blank', 'width=550,height=420')
}

export function shareToLinkedIn(data: ShareableData): void {
  const text = `${data.title} - ${data.description}`
  const url = data.url || window.location.href
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&summary=${encodeURIComponent(text)}`
  window.open(linkedInUrl, '_blank', 'width=550,height=420')
}

export function shareToReddit(data: ShareableData): void {
  const title = data.title
  const url = data.url || window.location.href
  const redditUrl = `https://reddit.com/submit?title=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
  window.open(redditUrl, '_blank', 'width=550,height=420')
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text)
      return true
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'fixed'
      textArea.style.left = '-999999px'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      const success = document.execCommand('copy')
      document.body.removeChild(textArea)
      return success
    }
  } catch (error) {
    console.error('Failed to copy to clipboard:', error)
    return false
  }
}

export function generateShareText(data: ShareableData): string {
  const baseUrl = window.location.origin
  const shareUrl = data.url || `${baseUrl}/profile`
  
  switch (data.type) {
    case 'achievement':
      return `I just unlocked "${data.title}" on Codeverse! ${data.description}\n\nCheck out my progress: ${shareUrl}`
    case 'progress':
      return `I've made progress on Codeverse! ${data.description}\n\nSee my stats: ${shareUrl}`
    case 'milestone':
      return `Milestone reached! ${data.title} - ${data.description}\n\nView my profile: ${shareUrl}`
    case 'streak':
      return `I'm on a ${data.title} day streak on Codeverse! ${data.description}\n\nJoin me: ${shareUrl}`
    default:
      return `${data.title} - ${data.description}\n\n${shareUrl}`
  }
}

export async function shareNative(data: ShareableData): Promise<boolean> {
  if (!navigator.share) {
    return false
  }

  try {
    const shareData: ShareData = {
      title: data.title,
      text: data.description,
      url: data.url || window.location.href,
    }

    if (data.image) {
      // For images, we'd need to fetch and convert to blob
      // Simplified for now
    }

    await navigator.share(shareData)
    return true
  } catch (error) {
    if ((error as Error).name !== 'AbortError') {
      console.error('Error sharing:', error)
    }
    return false
  }
}

