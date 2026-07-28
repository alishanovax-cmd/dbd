const configuredUrl = import.meta.env.VITE_HERO_VIDEO_URL?.trim()

/** Hero video is optional — omit from deploy when hosted externally or too large for Cloudflare. */
export function hasHeroVideo(): boolean {
  return Boolean(configuredUrl)
}

export function loadHeroVideoUrl(): Promise<string | null> {
  return Promise.resolve(configuredUrl || null)
}
