import { faqs, pricingPlans } from '../../data/content'
import type { BlogArticle } from '../../data/blogArticles'
import { blogArticles } from '../../data/blogArticles'
import { absoluteAssetUrl, absoluteUrl } from '../../data/seo'
import { siteConfig } from '../../data/navigation'

const siteRoot = absoluteUrl('/').replace(/\/$/, '')
const logoUrl = `${siteRoot}/og-logo.png`
const ogImageUrl = `${siteRoot}/og-image.jpg`

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
      name: siteConfig.fullName,
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
    name: siteConfig.fullName,
    description: siteConfig.description,
    sku: 'zadeyo-dbd-cheat',
    image: ogImageUrl,
    brand: {
      '@type': 'Brand',
      name: siteConfig.name,
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
    keywords: `Zadeyo DBD cheat, ${article.category}, Dead by Daylight`,
  }
}

export function blogItemListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Zadeyo DBD Cheat Guides',
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
    name: 'Zadeyo DBD Cheat Modules',
    description: 'Core Zadeyo DBD cheat modules included in every subscription.',
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
  return 'Setup guides for Zadeyo DBD cheat: ESP, spoofer, loader updates, and StreamProof.'
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: absoluteUrl('/'),
    logo: logoUrl,
    description: siteConfig.description,
    sameAs: [siteConfig.discordUrl, siteConfig.zadeyoUrl, siteConfig.githubUrl],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'DBD Cheats',
    alternateName: siteConfig.fullName,
    url: absoluteUrl('/'),
    description:
      'DBD cheats for Dead by Daylight — aimbot, ESP, wallhack, World ESP, Box ESP, Auto Skill Check and HWID spoofer.',
    inLanguage: 'en-US',
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: logoUrl,
      },
    },
  }
}

export function globalSchemas() {
  return [organizationSchema(), websiteSchema()]
}
