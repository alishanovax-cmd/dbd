export type ShareNetwork = 'x' | 'facebook' | 'reddit' | 'telegram' | 'whatsapp' | 'linkedin'

export function buildShareUrl(network: ShareNetwork, url: string, title: string): string {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  switch (network) {
    case 'x':
      return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    case 'reddit':
      return `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`
    case 'telegram':
      return `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`
    case 'whatsapp':
      return `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`
    case 'linkedin':
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
  }
}

export const shareNetworks: { id: ShareNetwork; label: string }[] = [
  { id: 'x', label: 'Share on X' },
  { id: 'facebook', label: 'Share on Facebook' },
  { id: 'reddit', label: 'Share on Reddit' },
  { id: 'telegram', label: 'Share on Telegram' },
  { id: 'whatsapp', label: 'Share on WhatsApp' },
  { id: 'linkedin', label: 'Share on LinkedIn' },
]
