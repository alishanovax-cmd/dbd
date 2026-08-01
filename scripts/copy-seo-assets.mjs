import { copyFileSync, existsSync } from 'node:fs'

/** Google Search favicon + logo files must exist in dist for Cloudflare deploy. */
const SEO_ASSETS = [
  'favicon.ico',
  'favicon-48.png',
  'favicon-96.png',
  'favicon-192.png',
  'apple-touch-icon.png',
  'zadeyo-logo.webp',
  'og-logo.png',
  'manifest.webmanifest',
  '_redirects',
  '_headers',
]

if (!existsSync('dist')) {
  console.warn('dist/ missing — skip SEO asset copy')
  process.exit(0)
}

let copied = 0
for (const file of SEO_ASSETS) {
  const source = `public/${file}`
  if (!existsSync(source)) {
    console.warn(`Missing SEO asset: ${source}`)
    continue
  }
  copyFileSync(source, `dist/${file}`)
  copied += 1
}

console.log(`Copied ${copied} SEO logo/favicon files to dist/`)
