export const siteConfig = {
  name: 'ZADEYO',
  logoFile: 'zadeyo-logo.webp',
  fullName: 'Zadeyo DBD Cheats',
  tagline: 'ESP, Aimbot & Wallhack',
  description:
    'Zadeyo private external cheat for Dead by Daylight. World ESP, Box ESP, Auto Skill Check, SpeedHack, Cosmetic Unlocker, HWID Spoofer, StreamProof. Undetected. $35/month.',
  discordUrl: 'https://discord.gg/zadeyo',
  supportUrl: 'https://zadeyo.com/support',
  checkoutUrl: 'https://zadeyo.com/go/ALEXA?to=%2Fproducts%2Fdbd',
  lastUpdated: 'July 24, 2026',
} as const

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Cheats', href: '/cheats' },
  { label: 'Buy', href: '/buy' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '/blog' },
] as const

export const footerColumns = {
  pages: {
    title: 'Pages',
    icon: '◈',
    links: [
      { label: 'Zadeyo DBD Cheats home', href: '/' },
      { label: 'DBD cheat modules & features', href: '/cheats' },
      { label: 'Buy Zadeyo DBD Cheat — pricing', href: siteConfig.checkoutUrl, external: true },
      { label: 'Customer feedback hub', href: '/reviews' },
      { label: 'Zadeyo DBD cheat FAQ', href: '/faq' },
      { label: 'DBD cheat setup guides', href: '/blog' },
    ],
  },
  modules: {
    title: 'Cheat Modules',
    icon: '◎',
    links: [
      { label: 'Player ESP & Box wallhack', href: '/cheats' },
      { label: 'World ESP — map object tags', href: '/cheats' },
      { label: 'Auto Skill Check & exploits', href: '/cheats' },
      { label: 'HWID Spoofer for DBD bans', href: '/blog/hwid-spoofer-explained' },
      { label: 'StreamProof for OBS streaming', href: '/blog/streamproof-guide' },
      { label: 'Cosmetic Unlocker — all skins', href: '/cheats' },
      { label: 'External cheat architecture', href: '/blog/external-cheat-architecture' },
    ],
  },
  guides: {
    title: 'Popular Guides',
    icon: '▤',
    links: [
      { label: 'Zadeyo ESP setup guide', href: '/blog/dbd-esp-guide' },
      { label: 'World ESP cheat configuration', href: '/blog/world-esp-guide' },
      { label: 'First-time cheat setup', href: '/blog/dbd-beginners-guide' },
      { label: 'Loader updates after patches', href: '/blog/staying-updated-after-patches' },
      { label: 'Best DBD cheat comparison 2026', href: '/blog/best-dbd-cheat-2026' },
      { label: 'Behaviour anti-cheat analysis', href: '/blog/behaviour-anticheat-analysis' },
    ],
  },
  support: {
    title: 'Support',
    icon: '◉',
    links: [
      { label: 'Cheat FAQ & safety policy', href: '/faq' },
      { label: 'Checkout on Zadeyo store', href: siteConfig.checkoutUrl, external: true },
      { label: 'Zadeyo support portal', href: 'https://zadeyo.com/support', external: true },
      { label: 'Join Zadeyo Discord', href: 'https://discord.gg/zadeyo', external: true },
    ],
  },
} as const

/** Keyword-rich internal links for footer SEO cluster strip. */
export const footerKeywordLinks = [
  { label: 'Dead by Daylight Cheats', href: '/' },
  { label: 'DBD ESP', href: '/blog/dbd-esp-guide' },
  { label: 'DBD Wallhack', href: '/blog/world-esp-guide' },
  { label: 'World ESP', href: '/cheats' },
  { label: 'Box ESP', href: '/blog/dbd-esp-guide' },
  { label: 'HWID Spoofer', href: '/blog/hwid-spoofer-explained' },
  { label: 'StreamProof', href: '/blog/streamproof-guide' },
  { label: 'Auto Skill Check', href: '/blog/aimbot-setup-guide' },
  { label: 'External Cheat', href: '/blog/external-cheat-architecture' },
  { label: 'DBD Aimbot', href: '/blog/aimbot-setup-guide' },
  { label: 'Anti-Cheat Guide', href: '/blog/behaviour-anticheat-analysis' },
  { label: 'Buy DBD Cheat', href: siteConfig.checkoutUrl, external: true },
] as const

export type BlogCategory =
  | 'all'
  | 'comparison'
  | 'esp'
  | 'aimbot'
  | 'spoofing'
  | 'anti-cheat'
  | 'guide'
  | 'technical'
  | 'safety'

export const blogCategories: { id: BlogCategory; label: string }[] = [
  { id: 'all', label: 'ALL' },
  { id: 'comparison', label: 'COMPARISON' },
  { id: 'esp', label: 'ESP' },
  { id: 'aimbot', label: 'AIMBOT' },
  { id: 'spoofing', label: 'SPOOFING' },
  { id: 'anti-cheat', label: 'ANTI-CHEAT' },
  { id: 'guide', label: 'GUIDE' },
  { id: 'technical', label: 'TECHNICAL' },
  { id: 'safety', label: 'SAFETY' },
]

export type { BlogPostMeta as BlogPost } from './blogArticles'
export { blogPosts } from './blogArticles'
