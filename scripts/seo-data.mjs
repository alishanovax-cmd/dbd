import { existsSync, readFileSync, readdirSync } from 'node:fs'

export const siteConfig = {
  name: 'DBD Cheats',
  logoFile: 'og-logo.png',
  logoWebpFile: 'zadeyo-logo.webp',
  fullName: 'DBD Cheats',
  seoSiteName: 'DBD Cheats',
  description:
    'DBD cheats for Dead by Daylight — external aimbot, ESP, wallhack, World ESP, Box ESP, Auto Skill Check, HWID spoofer, and StreamProof. From $35/month.',
  discordUrl: 'https://discord.gg/zadeyo',
  supportUrl: 'https://zadeyo.com/support',
  checkoutUrl: 'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fdbd',
  zadeyoUrl: 'https://zadeyo.com',
  liveUrl: 'https://dbdcheats.net',
  githubUrl: 'https://github.com/alishanovax-cmd/dbd',
  lastUpdated: '2026-08-03',
  /** Hosted at https://dbdcheats.net/{indexNowKey}.txt for IndexNow */
  indexNowKey: 'dbd7c4a9f2e18b3d6a5c9012ef8b4d7c',
}

export const staticPages = [
  {
    path: '/',
    title: 'DBD Cheats | Dead by Daylight Cheats 2026 — Aimbot, ESP & Wallhack',
    description:
      'DBD cheats for Dead by Daylight — undetected external aimbot, ESP, wallhack, World ESP, Auto Skill Check & HWID spoofer. From $35/month on dbdcheats.net. Guides & instant delivery.',
    type: 'website',
    priority: '1.0',
    changefreq: 'daily',
    siteName: 'DBD Cheats',
    ogImage: 'og-logo.png',
    ogImageDimensions: { width: 512, height: 512 },
    includeProduct: true,
    includeFaq: true,
    includeSoftwareApp: true,
    itemList: {
      name: 'DBD Cheat Modules',
      items: [
        'Player ESP',
        'World ESP',
        'Auto Skill Check',
        'SpeedHack',
        'HWID Spoofer',
        'Cosmetic Unlocker',
        'StreamProof',
        'Cloud-DMA',
      ],
    },
  },
  {
    path: '/cheats',
    title: 'DBD Cheats 2026 | ESP, Wallhack & Aimbot Modules',
    description:
      'DBD cheats module list for Dead by Daylight — Player ESP, World ESP wallhack, aimbot, Auto Skill Check, SpeedHack, HWID Spoofer, StreamProof, and external cheat architecture.',
    type: 'website',
    priority: '0.95',
    changefreq: 'weekly',
    breadcrumbs: [
      { name: 'DBD Cheats', path: '/' },
      { name: 'DBD Cheats', path: '/cheats' },
    ],
    itemList: {
      name: 'DBD Cheat Modules',
      items: [
        'Player ESP',
        'World ESP',
        'Auto Skill Check',
        'SpeedHack',
        'HWID Spoofer',
        'Cosmetic Unlocker',
        'StreamProof',
        'Cloud-DMA',
      ],
    },
  },
  {
    path: '/buy',
    title: 'Buy DBD Cheats — Pricing & Features',
    description:
      'Buy DBD cheats for Dead by Daylight — $35/month or $150 lifetime. Full aimbot, ESP, wallhack, HWID spoofer, requirements, and instant checkout.',
    type: 'product',
    priority: '0.9',
    changefreq: 'weekly',
    breadcrumbs: [
      { name: 'DBD Cheats', path: '/' },
      { name: 'Buy DBD Cheats', path: '/buy' },
    ],
    includeProduct: true,
  },
  {
    path: '/faq',
    title: 'DBD Cheats FAQ — Safety, ESP & Compatibility',
    description:
      'DBD cheats FAQ — undetected status, ESP, wallhack, aimbot, HWID Spoofer, StreamProof, Steam/Epic support, and safety policy.',
    type: 'website',
    priority: '0.85',
    changefreq: 'weekly',
    breadcrumbs: [
      { name: 'DBD Cheats', path: '/' },
      { name: 'DBD Cheats FAQ', path: '/faq' },
    ],
    includeFaq: true,
  },
  {
    path: '/reviews',
    title: 'DBD Cheats Reviews — Official Feedback',
    description:
      'DBD cheats reviews and buyer feedback — official store, Discord, and support links. No fake ratings on this site.',
    type: 'website',
    priority: '0.85',
    changefreq: 'weekly',
    breadcrumbs: [
      { name: 'DBD Cheats', path: '/' },
      { name: 'DBD Cheats Reviews', path: '/reviews' },
    ],
  },
  {
    path: '/blog',
    title: 'DBD Cheat Guides — ESP, Aimbot & Setup',
    description:
      'DBD cheats setup guides — ESP, wallhack, aimbot, HWID spoofer, loader updates, StreamProof, and external cheat configuration.',
    type: 'website',
    priority: '0.8',
    changefreq: 'weekly',
    breadcrumbs: [
      { name: 'DBD Cheats', path: '/' },
      { name: 'DBD Cheat Guides', path: '/blog' },
    ],
    includeBlogList: true,
  },
]

const blogSource = readFileSync('src/data/blogArticles.ts', 'utf8')
const contentSource = readFileSync('src/data/content.ts', 'utf8')

export const faqs = [...contentSource.matchAll(/question: '([^']+)'[\s\S]*?answer:\s*\n\s*'([^']+)'/g)].map(
  (match) => ({
    question: match[1],
    answer: match[2],
  }),
)

export const articleImagePrefixes = {
  'dbd-esp-guide': 'dbd-esp-wallhack',
  'world-esp-guide': 'dbd-trust-map',
  'dbd-beginners-guide': 'cheat-menu-screenshot',
  'hwid-spoofer-explained': 'hero-huntress-poster',
  'staying-updated-after-patches': 'dbd-cheat-overview',
  'best-dbd-cheat-2026': 'dbd-why-choose',
  'aimbot-setup-guide': 'dbd-atmosphere-1',
  'behaviour-anticheat-analysis': 'dbd-support-hunt',
  'external-cheat-architecture': 'blog-external',
  'streamproof-guide': 'blog-streamproof',
}

export const builtAssetDimensions = {
  'dbd-esp-wallhack': { width: 686, height: 386 },
  'dbd-trust-map': { width: 750, height: 640 },
  'cheat-menu-screenshot': { width: 1868, height: 783 },
  'hero-huntress-poster': { width: 736, height: 414 },
  'dbd-cheat-overview': { width: 1080, height: 607 },
  'dbd-why-choose': { width: 1080, height: 607 },
  'dbd-atmosphere-1': { width: 1025, height: 1300 },
  'dbd-support-hunt': { width: 3840, height: 2160 },
  'blog-external': { width: 1600, height: 885 },
  'blog-streamproof': { width: 736, height: 414 },
}

export function resolveBuiltAssetUrl(siteUrl, prefix) {
  if (prefix && existsSync('dist/assets')) {
    const match = readdirSync('dist/assets').find(
      (file) => file.startsWith(prefix) && /\.(jpe?g|png|webp)$/i.test(file),
    )
    if (match) return `${siteUrl}/assets/${match}`
  }
  return `${siteUrl}/og-image.jpg`
}

function parseArticlePagesFromBlogSource(source) {
  const pages = []
  const re =
    /slug: '([^']+)'[\s\S]*?title: '((?:\\'|[^'])*)'[\s\S]*?excerpt:\s*(?:'((?:\\'|[^'])*)'|\n\s*'((?:\\'|[^'])*)')[\s\S]*?category: '([^']+)'[\s\S]*?date: '([^']+)'/g
  for (const match of source.matchAll(re)) {
    const headline = match[2].replace(/\\'/g, "'")
    const description = (match[3] || match[4]).replace(/\\'/g, "'")
    pages.push({
      path: `/blog/${match[1]}`,
      slug: match[1],
      title: `${headline} | `,
      headline,
      description,
      category: match[5],
      date: match[6],
      type: 'article',
      priority: '0.7',
      changefreq: 'monthly',
    })
  }
  return pages
}

export const articlePages = parseArticlePagesFromBlogSource(blogSource)

export function getSiteUrl() {
  return (process.env.VITE_SITE_URL ?? process.env.SITE_URL ?? 'https://dbdcheats.net').replace(/\/$/, '')
}

export function canonicalFor(siteUrl, path) {
  return path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`
}

export function parseArticleDate(dateStr) {
  const parsed = Date.parse(dateStr)
  if (Number.isNaN(parsed)) return `${siteConfig.lastUpdated}T00:00:00.000Z`
  return new Date(parsed).toISOString()
}

function parseDate(dateStr) {
  const parsed = Date.parse(dateStr)
  if (Number.isNaN(parsed)) return siteConfig.lastUpdated
  return new Date(parsed).toISOString().split('T')[0]
}

export function allRoutes() {
  return [...staticPages, ...articlePages]
}

export function sitemapPaths() {
  const buildLastmod = new Date().toISOString().split('T')[0]
  return [
    ...staticPages.map(({ path, priority, changefreq }) => ({
      path,
      lastmod: buildLastmod,
      priority,
      changefreq,
    })),
    ...articlePages.map(({ path, date, priority, changefreq }) => ({
      path,
      lastmod: parseDate(date),
      priority,
      changefreq,
    })),
  ]
}

function absoluteUrl(siteUrl, path) {
  return canonicalFor(siteUrl, path)
}

function organizationSchema(siteUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${absoluteUrl(siteUrl, '/')}#organization`,
    name: siteConfig.seoSiteName,
    alternateName: [siteConfig.fullName, siteConfig.name, 'DBD cheats', 'Dead by Daylight cheats'],
    url: absoluteUrl(siteUrl, '/'),
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/og-logo.png`,
      width: 512,
      height: 512,
      contentUrl: `${siteUrl}/og-logo.png`,
    },
    description:
      'DBD cheats for Dead by Daylight — external aimbot, ESP, wallhack, World ESP, Box ESP, Auto Skill Check, HWID spoofer, and StreamProof.',
    sameAs: [siteConfig.discordUrl, siteConfig.zadeyoUrl, siteConfig.githubUrl],
  }
}

function websiteSchema(siteUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${absoluteUrl(siteUrl, '/')}#website`,
    name: siteConfig.seoSiteName,
    alternateName: [siteConfig.fullName, siteConfig.name, 'DBD cheats', 'Dead by Daylight cheats'],
    url: absoluteUrl(siteUrl, '/'),
    description:
      'DBD cheats for Dead by Daylight — aimbot, ESP, wallhack, World ESP, Box ESP, Auto Skill Check and HWID spoofer.',
    inLanguage: 'en-US',
    publisher: { '@id': `${absoluteUrl(siteUrl, '/')}#organization` },
  }
}

function webPageSchema(siteUrl, name, description, path, options = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: absoluteUrl(siteUrl, path),
    inLanguage: 'en-US',
    ...(options.dateModified ? { dateModified: options.dateModified } : {}),
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.fullName,
      url: absoluteUrl(siteUrl, '/'),
    },
  }
}

function breadcrumbSchema(siteUrl, items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: absoluteUrl(siteUrl, item.path) } : {}),
    })),
  }
}

function productSchema(siteUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'DBD Cheats — External Dead by Daylight Cheat',
    description:
      'DBD cheats for Dead by Daylight with aimbot, ESP, wallhack, World ESP, Auto Skill Check, HWID spoofer, and StreamProof.',
    sku: 'dbd-cheats-external',
    image: `${siteUrl}/og-logo.png`,
    brand: { '@type': 'Brand', name: siteConfig.seoSiteName },
    url: absoluteUrl(siteUrl, '/buy'),
    offers: [
      { label: 'Monthly', price: '35' },
      { label: 'Lifetime', price: '150' },
    ].map((plan) => ({
      '@type': 'Offer',
      name: plan.label,
      price: plan.price,
      priceCurrency: 'USD',
      url: siteConfig.checkoutUrl,
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2027-12-31',
    })),
  }
}

function softwareApplicationSchema(siteUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'DBD Cheats',
    alternateName: siteConfig.fullName,
    applicationCategory: 'GameApplication',
    operatingSystem: 'Windows 10, Windows 11',
    description:
      'External DBD cheats for Dead by Daylight — aimbot, ESP, wallhack, HWID spoofer, and StreamProof with instant loader delivery.',
    url: absoluteUrl(siteUrl, '/'),
    image: `${siteUrl}/og-logo.png`,
    offers: {
      '@type': 'Offer',
      price: '35',
      priceCurrency: 'USD',
      url: siteConfig.checkoutUrl,
    },
  }
}

function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

function itemListSchema(siteUrl, list) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: list.name,
    numberOfItems: list.items.length,
    itemListElement: list.items.map((name, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      url: absoluteUrl(siteUrl, '/cheats'),
    })),
  }
}

function blogItemListSchema(siteUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'DBD Cheat Guides',
    description: 'Setup guides for DBD cheat: ESP, spoofer, loader updates, and StreamProof.',
    numberOfItems: articlePages.length,
    itemListElement: articlePages.map((article, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: absoluteUrl(siteUrl, article.path),
      name: article.headline,
    })),
  }
}

function articleSchema(siteUrl, article) {
  const prefix = articleImagePrefixes[article.slug]
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.headline,
    description: article.description,
    datePublished: parseDate(article.date),
    dateModified: siteConfig.lastUpdated,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: absoluteUrl(siteUrl, '/'),
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: { '@type': 'ImageObject', url: `${siteUrl}/${siteConfig.logoFile}` },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(siteUrl, article.path),
    },
    image: resolveBuiltAssetUrl(siteUrl, prefix),
    articleSection: article.category,
    keywords: `DBD cheats, ${article.category}, Dead by Daylight, aimbot, ESP`,
  }
}

export function buildJsonLd(siteUrl, route) {
  const schemas = [organizationSchema(siteUrl), websiteSchema(siteUrl)]

  if (route.type === 'article') {
    schemas.push(
      webPageSchema(siteUrl, route.title, route.description, route.path, {
        dateModified: siteConfig.lastUpdated,
      }),
      breadcrumbSchema(siteUrl, [
        { name: 'DBD Cheats', path: '/' },
        { name: 'DBD Cheat Guides', path: '/blog' },
        { name: route.headline, path: route.path },
      ]),
      articleSchema(siteUrl, route),
    )
    return schemas
  }

  schemas.push(
    webPageSchema(siteUrl, route.title, route.description, route.path, {
      dateModified: siteConfig.lastUpdated,
    }),
  )

  if (route.breadcrumbs) {
    schemas.push(breadcrumbSchema(siteUrl, route.breadcrumbs))
  }
  if (route.includeProduct) {
    schemas.push(productSchema(siteUrl))
  }
  if (route.includeSoftwareApp) {
    schemas.push(softwareApplicationSchema(siteUrl))
  }
  if (route.includeFaq) {
    schemas.push(faqSchema())
  }
  if (route.itemList) {
    schemas.push(itemListSchema(siteUrl, route.itemList))
  }
  if (route.includeBlogList) {
    schemas.push(blogItemListSchema(siteUrl))
  }

  return schemas
}
