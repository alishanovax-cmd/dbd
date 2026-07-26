import { assets, type AssetKey } from './index'

/** Native dimensions for CLS-safe img tags (matches source files). */
export const imageDimensions: Record<AssetKey, { width: number; height: number }> = {
  atmosphere1: { width: 1025, height: 1300 },
  cheatOverviewImage: { width: 1080, height: 607 },
  whyChooseImage: { width: 1080, height: 607 },
  cheatMenu: { width: 1868, height: 783 },
  supportHunt: { width: 3840, height: 2160 },
  trustMap: { width: 750, height: 640 },
  espWallhack: { width: 686, height: 386 },
  heroHuntressPoster: { width: 736, height: 414 },
  blogExternal: { width: 1600, height: 885 },
  blogStreamproof: { width: 736, height: 414 },
  heroVideo: { width: 1920, height: 1080 },
}

export function getImageDimensions(src: string | undefined): { width: number; height: number } {
  if (!src) return { width: 1200, height: 675 }

  const match = (Object.entries(assets) as [AssetKey, string][]).find(([, url]) => url === src)
  if (match) return imageDimensions[match[0]]

  return { width: 1200, height: 675 }
}
