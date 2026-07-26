let heroVideoUrl: string | null = null

export async function loadHeroVideoUrl(): Promise<string> {
  if (!heroVideoUrl) {
    const module = await import('./video/hero-dbd.mp4')
    heroVideoUrl = module.default
  }
  return heroVideoUrl
}
