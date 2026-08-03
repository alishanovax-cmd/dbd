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
export const siteLogoPath = `${import.meta.env.BASE_URL}zadeyo-logo.webp`
export const siteOgLogoPath = `${import.meta.env.BASE_URL}og-logo.png`

/** Must match public/og-image.jpg pixel dimensions (see scripts/copy-og-image.mjs). */
export const ogImageDimensions = { width: 1025, height: 1300 } as const
export const logoDimensions = { width: 512, height: 512 } as const

export const homeSeo = {
  title: 'DBD Cheats | Dead by Daylight Cheats 2026 — Aimbot, ESP & Wallhack',
  description:
    'DBD cheats for Dead by Daylight — undetected external aimbot, ESP, wallhack, World ESP, Auto Skill Check & HWID spoofer. From $35/month on dbdcheats.net. Guides & instant delivery.',
  siteName: 'DBD Cheats',
  keywords:
    'dbd cheats, dead by daylight cheats, dbd aimbot, dbd esp, dbd wallhack, dbd hacks, dbd cheat, dead by daylight hack',
} as const

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
    title: homeSeo.title,
    description: homeSeo.description,
    path: '/',
    type: 'website',
    image: siteOgLogoPath,
  },
  buy: {
    title: 'Buy DBD Cheats — Pricing & Features',
    description:
      'Buy DBD cheats for Dead by Daylight — $35/month or $150 lifetime. Full aimbot, ESP, wallhack, HWID spoofer, requirements, and instant checkout.',
    path: '/buy',
    type: 'product',
    image: defaultOgImagePath,
  },
  cheats: {
    title: 'DBD Cheats 2026 | ESP, Wallhack & Aimbot Modules',
    description:
      'DBD cheats module list for Dead by Daylight — Player ESP, World ESP wallhack, aimbot, Auto Skill Check, SpeedHack, HWID Spoofer, StreamProof, and external cheat architecture.',
    path: '/cheats',
    type: 'website',
  },
  reviews: {
    title: 'DBD Cheats Reviews — Official Feedback',
    description:
      'DBD cheats reviews and buyer feedback — official store, Discord, and support links. No fake ratings on this site.',
    path: '/reviews',
    type: 'website',
  },
  faq: {
    title: 'DBD Cheats FAQ — Safety, ESP & Compatibility',
    description:
      'DBD cheats FAQ — undetected status, ESP, wallhack, aimbot, HWID Spoofer, StreamProof, Steam/Epic support, and safety policy.',
    path: '/faq',
    type: 'website',
  },
  blog: {
    title: 'DBD Cheat Guides — ESP, Aimbot & Setup',
    description:
      'DBD cheats setup guides — ESP, wallhack, aimbot, HWID spoofer, loader updates, StreamProof, and external cheat configuration.',
    path: '/blog',
    type: 'website',
  },
  notFound: {
    title: 'Page Not Found | DBD Cheats',
    description: 'Page not found. Browse DBD cheat guides or return to the DBD cheats homepage.',
    path: '/404',
    noindex: true,
  },
} as const satisfies Record<string, PageSeo>

export function blogArticleSeo(slug: string): PageSeo | undefined {
  const article = blogArticles.find((a) => a.slug === slug)
  if (!article) return undefined

  return {
    title: `${article.title} | DBD Cheats`,
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
