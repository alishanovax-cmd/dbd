import atmosphere1 from './images/dbd-atmosphere-1.jpg'
import cheatOverviewImage from './images/dbd-cheat-overview.jpg'
import whyChooseImage from './images/dbd-why-choose.webp'
import supportHunt from './images/dbd-support-hunt.webp'
import trustMap from './images/dbd-trust-map.jpg'
import espWallhack from './images/dbd-esp-wallhack.jpg'
import heroHuntressPoster from './images/hero-huntress-poster.jpg'
import blogExternal from './images/blog-external.jpg'
import blogStreamproof from './images/blog-streamproof.jpg'
import heroVideo from './video/hero-dbd.mp4'

const publicBase = import.meta.env.BASE_URL

export const assets = {
  atmosphere1,
  cheatOverviewImage,
  whyChooseImage,
  cheatMenu: `${publicBase}hero-cheat-menu.webp`,
  supportHunt,
  trustMap,
  espWallhack,
  heroHuntressPoster,
  blogExternal,
  blogStreamproof,
  heroVideo,
} as const

export type AssetKey = keyof typeof assets
