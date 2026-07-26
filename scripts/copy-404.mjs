import { readFileSync, writeFileSync } from 'node:fs'

function stripSeoTags(html) {
  return html
    .replace(/<meta name="description"[\s\S]*?>\s*/g, '')
    .replace(/<meta name="robots"[\s\S]*?>\s*/g, '')
    .replace(/<meta property="og:[^"]+"[\s\S]*?>\s*/g, '')
    .replace(/<meta name="twitter:[^"]+"[\s\S]*?>\s*/g, '')
    .replace(/<meta name="article:[^"]+"[\s\S]*?>\s*/g, '')
    .replace(/<link rel="canonical"[\s\S]*?>\s*/g, '')
    .replace(/<link rel="alternate"[\s\S]*?>\s*/g, '')
    .replace(/<script id="page-json-ld"[\s\S]*?<\/script>\s*/g, '')
}

const html = readFileSync('dist/index.html', 'utf8')
const noindexBlock = `
    <meta name="robots" content="noindex, nofollow" />
    <meta name="description" content="The requested page could not be found." />
    <title>Page Not Found | ZADEYO</title>`

const output = stripSeoTags(html).replace(/<title>[\s\S]*?<\/title>/, noindexBlock.trim())

writeFileSync('dist/404.html', output)
console.log('Created dist/404.html with noindex and stripped SEO for unknown routes')
