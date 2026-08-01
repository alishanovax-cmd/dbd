import { faqs, pricingPlans } from '../../data/content'
import type { BlogArticle } from '../../data/blogArticles'
import { blogArticles } from '../../data/blogArticles'
import { absoluteAssetUrl, absoluteUrl } from '../../data/seo'
import { siteConfig } from '../../data/navigation'

const siteRoot = absoluteUrl('/').replace(/\/$/, '')
const logoUrl = `${siteRoot}/og-logo.png`

export function breadcrumbSchema(items: { name: string; path?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: absoluteUrl(item.path) } : {}),
    })),
  }
}

export function webPageSchema(
  name: string,
  description: string,
  path: string,
  options?: { dateModified?: string },
) {
  const dateModified = options?.dateModified ? parseArticleDate(options.dateModified) : undefined

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: absoluteUrl(path),
    inLanguage: 'en-US',
    ...(dateModified ? { dateModified } : {}),
    isPartOf: {
      '@type': 'WebSite',
      name: 'DBD Cheats',
      url: absoluteUrl('/'),
    },
  }
}

export function productSchema() {
  const monthly = pricingPlans.find((p) => p.id === 'monthly')
  const lifetime = pricingPlans.find((p) => p.id === 'lifetime')

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'DBD Cheats — External Dead by Daylight Cheat',
    description:
      'DBD cheats for Dead by Daylight with aimbot, ESP, wallhack, World ESP, Auto Skill Check, HWID spoofer, and StreamProof.',
    sku: 'dbd-cheats-external',
    image: logoUrl,
    brand: {
      '@type': 'Brand',
      name: 'DBD Cheats',
    },
    url: absoluteUrl('/buy'),
    offers: [monthly, lifetime]
      .filter(Boolean)
      .map((plan) => ({
        '@type': 'Offer',
        name: plan!.label,
        price: String(plan!.price),
        priceCurrency: 'USD',
        url: siteConfig.checkoutUrl,
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2027-12-31',
      })),
  }
}

export function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

function parseArticleDate(dateStr: string): string {
  const parsed = Date.parse(dateStr)
  if (Number.isNaN(parsed)) return new Date().toISOString().split('T')[0]
  return new Date(parsed).toISOString().split('T')[0]
}

export function articleSchema(article: BlogArticle) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    datePublished: parseArticleDate(article.date),
    dateModified: parseArticleDate(siteConfig.lastUpdated),
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: absoluteUrl('/'),
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: logoUrl,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(`/blog/${article.slug}`),
    },
    image: absoluteAssetUrl(article.image),
    articleSection: article.category,
    keywords: `DBD cheats, ${article.category}, Dead by Daylight, aimbot, ESP`,
  }
}

export function blogItemListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'DBD Cheat Guides',
    description: pageSeoBlogDescription(),
    numberOfItems: blogArticles.length,
    itemListElement: blogArticles.map((article, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: absoluteUrl(`/blog/${article.slug}`),
      name: article.title,
    })),
  }
}

export function cheatsItemListSchema() {
  const modules = [
    'Player ESP',
    'World ESP',
    'Auto Skill Check',
    'SpeedHack',
    'HWID Spoofer',
    'Cosmetic Unlocker',
    'StreamProof',
    'Cloud-DMA',
  ]

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'DBD Cheat Modules',
    description: 'Core DBD cheats modules — ESP, wallhack, aimbot, spoofer, and StreamProof.',
    numberOfItems: modules.length,
    itemListElement: modules.map((name, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      url: absoluteUrl('/cheats'),
    })),
  }
}

function pageSeoBlogDescription() {
  return 'Setup guides for DBD cheat: ESP, spoofer, loader updates, and StreamProof.'
}

export function softwareApplicationSchema() {
  const monthly = pricingPlans.find((p) => p.id === 'monthly')

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'DBD Cheats',
    alternateName: siteConfig.fullName,
    applicationCategory: 'GameApplication',
    operatingSystem: 'Windows 10, Windows 11',
    description:
      'External DBD cheats for Dead by Daylight — aimbot, ESP, wallhack, HWID spoofer, and StreamProof with instant loader delivery.',
    url: absoluteUrl('/'),
    image: logoUrl,
    offers: {
      '@type': 'Offer',
      price: monthly ? String(monthly.price) : '35',
      priceCurrency: 'USD',
      url: siteConfig.checkoutUrl,
    },
  }
}

export function organizationSchema() {
  const orgId = `${siteRoot}#organization`
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': orgId,
    name: 'DBD Cheats',
    alternateName: [siteConfig.fullName, siteConfig.name, 'DBD cheats', 'Dead by Daylight cheats'],
    url: absoluteUrl('/'),
    logo: {
      '@type': 'ImageObject',
      url: logoUrl,
      width: 512,
      height: 512,
      contentUrl: logoUrl,
    },
    description:
      'DBD cheats for Dead by Daylight — external aimbot, ESP, wallhack, World ESP, Box ESP, Auto Skill Check, HWID spoofer, and StreamProof.',
    sameAs: [siteConfig.discordUrl, siteConfig.zadeyoUrl, siteConfig.githubUrl],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteRoot}#website`,
    name: 'DBD Cheats',
    alternateName: [siteConfig.fullName, siteConfig.name, 'DBD cheats', 'Dead by Daylight cheats'],
    url: absoluteUrl('/'),
    description:
      'DBD cheats for Dead by Daylight — aimbot, ESP, wallhack, World ESP, Box ESP, Auto Skill Check and HWID spoofer.',
    inLanguage: 'en-US',
    publisher: { '@id': `${siteRoot}#organization` },
  }
}

export function globalSchemas() {
  return [organizationSchema(), websiteSchema()]
}
