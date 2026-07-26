import { copyFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs'

const source = 'src/assets/images/dbd-atmosphere-1.jpg'
const target = 'public/og-image.jpg'
const metaTarget = 'public/og-image-meta.json'

function jpegSize(buffer) {
  let i = 2
  while (i < buffer.length) {
    if (buffer[i] !== 0xff) break
    const marker = buffer[i + 1]
    if (marker === 0xc0 || marker === 0xc2) {
      return { width: buffer.readUInt16BE(i + 7), height: buffer.readUInt16BE(i + 5) }
    }
    i += 2 + buffer.readUInt16BE(i + 2)
  }
  throw new Error('Could not read JPEG dimensions')
}

if (!existsSync(source)) {
  console.warn(`OG image source missing: ${source}`)
  process.exit(0)
}

copyFileSync(source, target)
const dimensions = jpegSize(readFileSync(target))
writeFileSync(metaTarget, `${JSON.stringify(dimensions, null, 2)}\n`)

if (existsSync('dist')) {
  copyFileSync(target, 'dist/og-image.jpg')
  writeFileSync('dist/og-image-meta.json', `${JSON.stringify(dimensions, null, 2)}\n`)
}

console.log(`Copied ${source} → ${target} (${dimensions.width}x${dimensions.height})`)
