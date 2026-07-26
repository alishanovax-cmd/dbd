import { blogArticles } from './blogArticles'
import { siteConfig } from './navigation'

/** Set VITE_SITE_URL in .env for production canonical URLs (e.g. https://username.github.io/dbd). */
function getSiteOrigin(): string {
  const configured = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '')
  if (configured) return configured

  if (typeof window !== 'undefined') {
    const base = import.meta.env.BASE_URL.replace(/\/$/, '')
    return `${window.location.origin}${base}`
  }

  return ''
}

export const siteBasePath = import.meta.env.BASE_URL.replace(/\/$/, '')

export const defaultOgImagePath = `${import.meta.env.BASE_URL}og-image.jpg`

/** Must match public/og-image.jpg pixel dimensions (see scripts/copy-og-image.mjs). */
export const ogImageDimensions = { width: 1025, height: 1300 } as const

export function absoluteUrl(path: string): string {
  const origin = getSiteOrigin()
  const normalized = path.startsWith('/') ? path : `/${path}`
  if (!origin) return normalized
  return `${origin}${normalized}`.replace(/([^:]\/)\/+/g, '$1')
}

/** Resolve Vite asset paths and public paths to absolute URLs for schema / OG tags. */
export function absoluteAssetUrl(assetPath: string): string {
  if (assetPath.startsWith('http')) return assetPath

  const origin = getSiteOrigin()
  if (!origin) return assetPath

  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  if (assetPath.startsWith(base)) {
    const host = origin.replace(new RegExp(`${base.replace(/\//g, '\\/')}$`), '')
    return `${host}${assetPath}`
  }

  if (assetPath.startsWith('/assets/') || assetPath.startsWith('/og-image')) {
    return `${origin}${assetPath}`
  }

  return absoluteUrl(assetPath)
}

export function seoImageUrl(image?: string): string {
  return absoluteAssetUrl(image ?? defaultOgImagePath)
}

export type PageSeo = {
  title: string
  description: string
  path: string
  type?: 'website' | 'article' | 'product'
  noindex?: boolean
  image?: string
  publishedTime?: string
  modifiedTime?: string
}

function parseArticleDate(dateStr: string): string {
  const parsed = Date.parse(dateStr)
  if (Number.isNaN(parsed)) return new Date().toISOString()
  return new Date(parsed).toISOString()
}

/** Handbook §22–23: unique title + meta description per indexable page. */
export const pageSeo = {
  home: {
    title: 'Zadeyo DBD Cheats: Features, Compatibility and Pricing | ZADEYO',
    description:
      'Zadeyo external DBD cheat with World ESP, Box ESP, Auto Skill Check, HWID Spoofer, Cosmetic Unlocker, and StreamProof. See features, compatibility, pricing, and setup guides.',
    path: '/',
    type: 'website',
  },
  buy: {
    title: 'Buy Zadeyo DBD Cheat — Pricing, Features and Requirements | ZADEYO',
    description:
      'Purchase Zadeyo DBD cheat at $35/month or $150 lifetime. Full feature list, system requirements, delivery terms, FAQ, and checkout via the official Zadeyo store.',
    path: '/buy',
    type: 'product',
    image: defaultOgImagePath,
  },
  cheats: {
    title: 'Zadeyo DBD Cheats — ESP, Wallhack and Exploit Modules | ZADEYO',
    description:
      'Full Zadeyo DBD cheat module list: Player ESP, World ESP, Auto Skill Check, SpeedHack, HWID Spoofer, Cosmetic Unlocker, StreamProof, and Cloud-DMA. External cheat architecture.',
    path: '/cheats',
    type: 'website',
  },
  reviews: {
    title: 'Zadeyo DBD Customer Feedback — Official Channels | ZADEYO',
    description:
      'Honest feedback hub for Zadeyo DBD cheat. No fabricated reviews on this site — links to the official Zadeyo store, Discord, and support portal for real buyer information.',
    path: '/reviews',
    type: 'website',
  },
  faq: {
    title: 'Zadeyo DBD Cheat FAQ — Safety, ESP and Compatibility | ZADEYO',
    description:
      'Zadeyo DBD cheat FAQ: undetected status, World ESP, HWID Spoofer, StreamProof, platform support, and safety policy. Honest answers with no ban guarantees.',
    path: '/faq',
    type: 'website',
  },
  blog: {
    title: 'Zadeyo DBD Cheat Guides — ESP, Spoofer and Setup | ZADEYO',
    description:
      'Setup guides for Zadeyo DBD cheat: ESP configuration, World ESP, HWID spoofer, loader updates, StreamProof, and external cheat architecture.',
    path: '/blog',
    type: 'website',
  },
  notFound: {
    title: 'Page Not Found | ZADEYO',
    description: 'The requested page could not be found. Browse Zadeyo DBD cheat guides or return to the homepage.',
    path: '/404',
    noindex: true,
  },
} as const satisfies Record<string, PageSeo>

export function blogArticleSeo(slug: string): PageSeo | undefined {
  const article = blogArticles.find((a) => a.slug === slug)
  if (!article) return undefined

  return {
    title: `${article.title} | ZADEYO`,
    description: article.excerpt,
    path: `/blog/${slug}`,
    type: 'article',
    image: article.image,
    publishedTime: parseArticleDate(article.date),
    modifiedTime: parseArticleDate(siteConfig.lastUpdated),
  }
}

export const indexablePaths = [
  pageSeo.home.path,
  pageSeo.cheats.path,
  pageSeo.buy.path,
  pageSeo.reviews.path,
  pageSeo.faq.path,
  pageSeo.blog.path,
  ...blogArticles.map((a) => `/blog/${a.slug}`),
]
