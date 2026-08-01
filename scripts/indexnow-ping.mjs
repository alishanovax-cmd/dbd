import { getSiteUrl, siteConfig, sitemapPaths } from './seo-data.mjs'

const key = siteConfig.indexNowKey
if (!key) {
  console.log('IndexNow: skipped (no indexNowKey)')
  process.exit(0)
}

const siteUrl = getSiteUrl()
const host = new URL(siteUrl).hostname
const keyLocation = `${siteUrl}/${key}.txt`
const urlList = sitemapPaths().map(({ path }) =>
  path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`,
)

const body = JSON.stringify({ host, key, keyLocation, urlList })

try {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body,
  })
  if (res.ok || res.status === 202) {
    console.log(`IndexNow: submitted ${urlList.length} URLs (${res.status})`)
  } else {
    const text = await res.text().catch(() => '')
    console.warn(`IndexNow: ${res.status} ${text.slice(0, 200)}`)
  }
} catch (err) {
  console.warn('IndexNow: ping failed (deploy still OK):', err.message)
}
