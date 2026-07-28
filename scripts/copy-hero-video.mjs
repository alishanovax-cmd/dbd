import { copyFileSync, existsSync } from 'node:fs'

const source = 'src/assets/video/hero-dbd.mp4'
const target = 'public/hero-dbd.mp4'

if (!existsSync(source)) {
  console.warn(`Hero video source missing: ${source} — click-to-play video will be unavailable`)
  process.exit(0)
}

copyFileSync(source, target)
console.log('Copied hero video to public/hero-dbd.mp4')
