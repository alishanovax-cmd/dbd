import { writeFileSync, existsSync } from 'node:fs'
import { getSiteUrl, sitemapPaths } from './seo-data.mjs'

const siteUrl = getSiteUrl()

const urls = sitemapPaths().map(({ path, lastmod, priority, changefreq }) => {
  const loc = path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
})

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`

function writeBoth(filename, content) {
  writeFileSync(`public/${filename}`, content)
  if (existsSync('dist')) {
    writeFileSync(`dist/${filename}`, content)
  }
}

writeBoth('sitemap.xml', sitemap)
writeBoth('robots.txt', robots)

console.log(`Generated sitemap (${urls.length} URLs) and robots.txt for ${siteUrl}`)
