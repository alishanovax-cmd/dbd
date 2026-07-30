import { useEffect } from 'react'
import type { PageSeo } from '../../data/seo'
import { absoluteUrl, homeSeo, logoDimensions, ogImageDimensions, seoImageUrl } from '../../data/seo'
import { siteConfig } from '../../data/navigation'

type JsonLd = Record<string, unknown> | Record<string, unknown>[]

interface SeoHeadProps {
  seo: PageSeo
  jsonLd?: JsonLd
}

function upsertMeta(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name'
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.content = content
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`
  let el = document.querySelector(selector) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    if (hreflang) el.hreflang = hreflang
    document.head.appendChild(el)
  }
  el.href = href
}

function upsertJsonLd(data: JsonLd, id: string) {
  const existing = document.getElementById(id)
  if (existing) existing.remove()

  const script = document.createElement('script')
  script.id = id
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}

function ogTypeForSeo(type: PageSeo['type']): string {
  if (type === 'article') return 'article'
  if (type === 'product') return 'product'
  return 'website'
}

export function SeoHead({ seo, jsonLd }: SeoHeadProps) {
  const jsonLdKey = jsonLd ? JSON.stringify(jsonLd) : ''

  useEffect(() => {
    const canonical = absoluteUrl(seo.path)
    const imageUrl = seoImageUrl(seo.image)

    const imageDimensionsForPage = seo.path === '/' ? logoDimensions : ogImageDimensions
    const siteName = seo.path === '/' ? homeSeo.siteName : siteConfig.fullName
    const twitterCard = seo.path === '/' ? 'summary' : 'summary_large_image'

    document.title = seo.title

    upsertMeta('description', seo.description)
    upsertMeta('author', seo.path === '/' ? homeSeo.siteName : siteConfig.fullName)
    upsertMeta('robots', seo.noindex ? 'noindex, nofollow' : 'index, follow')

    upsertMeta('og:title', seo.title, true)
    upsertMeta('og:description', seo.description, true)
    upsertMeta('og:type', ogTypeForSeo(seo.type), true)
    upsertMeta('og:url', canonical, true)
    upsertMeta('og:site_name', siteName, true)
    upsertMeta('og:image', imageUrl, true)
    upsertMeta('og:image:alt', seo.path === '/' ? 'Zadeyo logo — DBD Cheats' : `${siteConfig.fullName} — ${seo.title}`, true)
    upsertMeta('og:image:width', String(imageDimensionsForPage.width), true)
    upsertMeta('og:image:height', String(imageDimensionsForPage.height), true)
    upsertMeta('og:locale', 'en_US', true)

    upsertMeta('twitter:card', twitterCard)
    upsertMeta('twitter:title', seo.title)
    upsertMeta('twitter:description', seo.description)
    upsertMeta('twitter:image', imageUrl)

    if (seo.type === 'article' && seo.publishedTime) {
      upsertMeta('article:published_time', seo.publishedTime, true)
      upsertMeta('article:modified_time', seo.modifiedTime ?? seo.publishedTime, true)
      upsertMeta('article:author', siteConfig.name, true)
      upsertMeta('article:section', 'DBD Cheat Guides', true)
    }

    upsertLink('canonical', canonical)
    upsertLink('alternate', canonical, 'en')
    upsertLink('alternate', canonical, 'x-default')

    if (jsonLd) {
      upsertJsonLd(jsonLd, 'page-json-ld')
    }

    return () => {
      document.getElementById('page-json-ld')?.remove()
    }
  }, [
    seo.title,
    seo.description,
    seo.path,
    seo.type,
    seo.noindex,
    seo.image,
    seo.publishedTime,
    seo.modifiedTime,
    jsonLdKey,
  ])

  return null
}
