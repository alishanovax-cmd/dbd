import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import {
  allRoutes,
  articleImagePrefixes,
  buildJsonLd,
  builtAssetDimensions,
  canonicalFor,
  getSiteUrl,
  parseArticleDate,
  resolveBuiltAssetUrl,
  siteConfig,
} from './seo-data.mjs'
import { buildStaticBody } from './static-page-content.mjs'

const siteUrl = getSiteUrl()

function readOgDimensions() {
  const paths = ['public/og-image-meta.json', 'dist/og-image-meta.json']
  for (const path of paths) {
    if (existsSync(path)) {
      return JSON.parse(readFileSync(path, 'utf8'))
    }
  }
  return { width: 1025, height: 1300 }
}

const ogDimensions = readOgDimensions()

function escapeAttr(value) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;')
}

function stripSeoTags(html) {
  return html
    .replace(/<meta name="description"[\s\S]*?>\s*/g, '')
    .replace(/<meta name="author"[\s\S]*?>\s*/g, '')
    .replace(/<meta name="robots"[\s\S]*?>\s*/g, '')
    .replace(/<meta property="og:[^"]+"[\s\S]*?>\s*/g, '')
    .replace(/<meta name="twitter:[^"]+"[\s\S]*?>\s*/g, '')
    .replace(/<meta name="article:[^"]+"[\s\S]*?>\s*/g, '')
    .replace(/<link rel="canonical"[\s\S]*?>\s*/g, '')
    .replace(/<link rel="alternate"[\s\S]*?>\s*/g, '')
    .replace(/<script id="page-json-ld"[\s\S]*?<\/script>\s*/g, '')
}

function routeImage(route) {
  if (route.ogImage) {
    return `${siteUrl}/${route.ogImage}`
  }
  if (route.type === 'article' && route.slug) {
    return resolveBuiltAssetUrl(siteUrl, articleImagePrefixes[route.slug])
  }
  return `${siteUrl}/og-image.jpg`
}

function routeOgDimensions(route) {
  if (route.ogImageDimensions) {
    return route.ogImageDimensions
  }
  if (route.type === 'article' && route.slug) {
    const prefix = articleImagePrefixes[route.slug]
    if (prefix && builtAssetDimensions[prefix]) {
      return builtAssetDimensions[prefix]
    }
  }
  return ogDimensions
}

function injectSeo(html, route) {
  const canonical = canonicalFor(siteUrl, route.path)
  const image = routeImage(route)
  const imageDimensionsForRoute = routeOgDimensions(route)
  const ogType = route.type === 'article' ? 'article' : route.type === 'product' ? 'product' : 'website'
  const jsonLd = buildJsonLd(siteUrl, route)
  const modifiedTime =
    route.type === 'article'
      ? `${siteConfig.lastUpdated}T00:00:00.000Z`
      : `${siteConfig.lastUpdated}T00:00:00.000Z`

  const articleMeta =
    route.type === 'article'
      ? `
    <meta property="article:published_time" content="${escapeAttr(parseArticleDate(route.date))}" />
    <meta property="article:modified_time" content="${escapeAttr(modifiedTime)}" />
    <meta property="article:author" content="ZADEYO" />
    <meta property="article:section" content="DBD Cheat Guides" />`
      : ''

  const seoBlock = `
    <meta name="description" content="${escapeAttr(route.description)}" />
    <meta name="author" content="Zadeyo DBD Cheats" />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="${escapeAttr(route.title)}" />
    <meta property="og:description" content="${escapeAttr(route.description)}" />
    <meta property="og:type" content="${ogType}" />
    <meta property="og:url" content="${escapeAttr(canonical)}" />
    <meta property="og:site_name" content="${escapeAttr(route.siteName ?? 'Zadeyo DBD Cheats')}" />
    <meta property="og:image" content="${escapeAttr(image)}" />
    <meta property="og:image:alt" content="${escapeAttr(route.title)}" />
    <meta property="og:image:width" content="${imageDimensionsForRoute.width}" />
    <meta property="og:image:height" content="${imageDimensionsForRoute.height}" />
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeAttr(route.title)}" />
    <meta name="twitter:description" content="${escapeAttr(route.description)}" />
    <meta name="twitter:image" content="${escapeAttr(image)}" />${articleMeta}
    <link rel="canonical" href="${escapeAttr(canonical)}" />
    <link rel="alternate" href="${escapeAttr(canonical)}" hreflang="en" />
    <link rel="alternate" href="${escapeAttr(canonical)}" hreflang="x-default" />
    <script id="page-json-ld" type="application/ld+json">${JSON.stringify(jsonLd)}</script>`

  let output = stripSeoTags(html)
  output = output.replace(/<title>[\s\S]*?<\/title>/, `<title>${route.title}</title>`)
  output = output.replace(
    '<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
    `<meta name="viewport" content="width=device-width, initial-scale=1.0" />${seoBlock}`,
  )
  output = output.replace('<!--PRERENDER_BODY-->', buildStaticBody(route))
  return output
}

if (!existsSync('dist/index.html')) {
  console.warn('dist/index.html not found — skip prerender')
  process.exit(0)
}

const template = readFileSync('dist/index.html', 'utf8')
const routes = allRoutes()

for (const route of routes) {
  const html = injectSeo(template, route)
  const outDir = route.path === '/' ? 'dist' : join('dist', route.path.slice(1))
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'index.html'), html)
}

console.log(`Prerendered SEO HTML + JSON-LD for ${routes.length} routes`)
