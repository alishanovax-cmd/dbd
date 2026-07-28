const publicBase = import.meta.env.BASE_URL

export function loadHeroVideoUrl(): Promise<string> {
  return Promise.resolve(`${publicBase}hero-dbd.mp4`)
}
