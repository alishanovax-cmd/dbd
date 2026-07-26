import atmosphere1 from './images/dbd-atmosphere-1.jpg'
import cheatOverviewImage from './images/dbd-cheat-overview.jpg'
import whyChooseImage from './images/dbd-why-choose.jpg'
import cheatMenu from './images/cheat-menu-screenshot.png'
import supportHunt from './images/dbd-support-hunt.jpg'
import trustMap from './images/dbd-trust-map.jpg'
import espWallhack from './images/dbd-esp-wallhack.jpg'
import heroHuntressPoster from './images/hero-huntress-poster.jpg'
import blogExternal from './images/blog-external.jpg'
import blogStreamproof from './images/blog-streamproof.jpg'
import heroVideo from './video/hero-dbd.mp4'

export const assets = {
  atmosphere1,
  cheatOverviewImage,
  whyChooseImage,
  cheatMenu,
  supportHunt,
  trustMap,
  espWallhack,
  heroHuntressPoster,
  blogExternal,
  blogStreamproof,
  heroVideo,
} as const

export type AssetKey = keyof typeof assets
