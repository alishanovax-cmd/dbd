import { existsSync, readFileSync, readdirSync } from 'node:fs'

export const siteConfig = {
  name: 'ZADEYO',
  logoFile: 'zadeyo-logo.webp',
  fullName: 'Zadeyo DBD Cheats',
  description:
    'Zadeyo private external cheat for Dead by Daylight. World ESP, Box ESP, Auto Skill Check, SpeedHack, Cosmetic Unlocker, HWID Spoofer, StreamProof. $35/month.',
  discordUrl: 'https://discord.gg/zadeyo',
  supportUrl: 'https://zadeyo.com/support',
  checkoutUrl: 'https://zadeyo.com/go/ALEXA?to=%2Fproducts%2Fdbd',
  lastUpdated: '2026-07-24',
}

export const staticPages = [
  {
    path: '/',
    title: 'Zadeyo DBD Cheats — Features & Pricing | ZADEYO',
    description:
      'Zadeyo external DBD cheat with World ESP, Box ESP, Auto Skill Check, HWID Spoofer, Cosmetic Unlocker, and StreamProof. See features, compatibility, pricing, and setup guides.',
    type: 'website',
    priority: '1.0',
    changefreq: 'weekly',
  },
  {
    path: '/cheats',
    title: 'Zadeyo DBD Cheats — ESP, Wallhack and Exploit Modules | ZADEYO',
    description:
      'Full Zadeyo DBD cheat module list: Player ESP, World ESP, Auto Skill Check, SpeedHack, HWID Spoofer, Cosmetic Unlocker, StreamProof, and Cloud-DMA. External cheat architecture.',
    type: 'website',
    priority: '0.9',
    changefreq: 'weekly',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Zadeyo DBD Cheats', path: '/cheats' },
    ],
    itemList: {
      name: 'Zadeyo DBD Cheat Modules',
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
    title: 'Buy Zadeyo DBD Cheat — Pricing, Features and Requirements | ZADEYO',
    description:
      'Purchase Zadeyo DBD cheat at $35/month or $150 lifetime. Full feature list, system requirements, delivery terms, FAQ, and checkout via the official Zadeyo store.',
    type: 'product',
    priority: '0.9',
    changefreq: 'weekly',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Buy Zadeyo DBD Cheat', path: '/buy' },
    ],
    includeProduct: true,
  },
  {
    path: '/faq',
    title: 'Zadeyo DBD Cheat FAQ — Safety, ESP and Compatibility | ZADEYO',
    description:
      'Zadeyo DBD cheat FAQ: undetected status, World ESP, HWID Spoofer, StreamProof, platform support, and safety policy. Honest answers with no ban guarantees.',
    type: 'website',
    priority: '0.85',
    changefreq: 'weekly',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Zadeyo DBD Cheat FAQ', path: '/faq' },
    ],
    includeFaq: true,
  },
  {
    path: '/reviews',
    title: 'Zadeyo DBD Customer Feedback — Official Channels | ZADEYO',
    description:
      'Honest feedback hub for Zadeyo DBD cheat. No fabricated reviews on this site — links to the official Zadeyo store, Discord, and support portal for real buyer information.',
    type: 'website',
    priority: '0.85',
    changefreq: 'weekly',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Customer Feedback', path: '/reviews' },
    ],
  },
  {
    path: '/blog',
    title: 'Zadeyo DBD Cheat Guides — ESP, Spoofer and Setup | ZADEYO',
    description:
      'Setup guides for Zadeyo DBD cheat: ESP configuration, World ESP, HWID spoofer, loader updates, StreamProof, and external cheat architecture.',
    type: 'website',
    priority: '0.8',
    changefreq: 'weekly',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Zadeyo DBD Cheat Guides', path: '/blog' },
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

export const articlePages = [
  ...blogSource.matchAll(
    /slug: '([^']+)'[\s\S]*?title: '([^']+)'[\s\S]*?excerpt: '([^']+)'[\s\S]*?category: '([^']+)'[\s\S]*?date: '([^']+)'/g,
  ),
].map((match) => ({
  path: `/blog/${match[1]}`,
  slug: match[1],
  title: `${match[2]} | ZADEYO`,
  headline: match[2],
  description: match[3],
  category: match[4],
  date: match[5],
  type: 'article',
  priority: '0.7',
  changefreq: 'monthly',
}))

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
  return [
    ...staticPages.map(({ path, priority, changefreq }) => ({
      path,
      lastmod: siteConfig.lastUpdated,
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
    name: siteConfig.name,
    url: absoluteUrl(siteUrl, '/'),
    logo: `${siteUrl}/${siteConfig.logoFile}`,
    description: siteConfig.description,
    sameAs: [siteConfig.discordUrl],
  }
}

function websiteSchema(siteUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.fullName,
    url: absoluteUrl(siteUrl, '/'),
    description: siteConfig.description,
    inLanguage: 'en-US',
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: { '@type': 'ImageObject', url: `${siteUrl}/${siteConfig.logoFile}` },
    },
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
    name: siteConfig.fullName,
    description: siteConfig.description,
    sku: 'zadeyo-dbd-cheat',
    image: `${siteUrl}/og-image.jpg`,
    brand: { '@type': 'Brand', name: siteConfig.name },
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
    name: 'Zadeyo DBD Cheat Guides',
    description: 'Setup guides for Zadeyo DBD cheat: ESP, spoofer, loader updates, and StreamProof.',
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
    keywords: `Zadeyo DBD cheat, ${article.category}, Dead by Daylight`,
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
        { name: 'Home', path: '/' },
        { name: 'Zadeyo DBD Cheat Guides', path: '/blog' },
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
