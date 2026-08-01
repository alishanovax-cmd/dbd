import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'
import toIco from 'to-ico'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

async function optimize() {
  mkdirSync(join(root, 'public'), { recursive: true })

  const cheatMenuSrc = join(root, 'src/assets/images/cheat-menu-screenshot.png')
  const cheatMenuWebp = join(root, 'public/hero-cheat-menu.webp')
  const cheatMenuAssetWebp = join(root, 'src/assets/images/cheat-menu-screenshot.webp')

  const cheatMeta = await sharp(cheatMenuSrc)
    .resize(1200, null, { withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(cheatMenuWebp)

  await sharp(cheatMenuSrc)
    .resize(1200, null, { withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(cheatMenuAssetWebp)

  const logoPng = join(root, 'public/zadeyo-logo.png')
  if (existsSync(logoPng)) {
    await sharp(logoPng)
      .resize(128, 128, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: 85 })
      .toFile(join(root, 'public/zadeyo-logo.webp'))
  }

  const logoWebp = join(root, 'public/zadeyo-logo.webp')
  if (existsSync(logoWebp)) {
    const logo = sharp(logoWebp)

    /** White square favicons — purple Z reads clearly in Google’s circular SERP icon. */
    async function writeFaviconSquare(size, outPath) {
      const inset = Math.round(size * 0.14)
      const inner = Math.max(8, size - inset * 2)
      const mark = await logo
        .clone()
        .resize(inner, inner, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
        .png()
        .toBuffer()
      await sharp({
        create: {
          width: size,
          height: size,
          channels: 4,
          background: { r: 255, g: 255, b: 255, alpha: 1 },
        },
      })
        .composite([{ input: mark, gravity: 'center' }])
        .png()
        .toFile(outPath)
    }

    async function faviconSquareBuffer(size) {
      const inset = Math.round(size * 0.14)
      const inner = Math.max(8, size - inset * 2)
      const mark = await logo
        .clone()
        .resize(inner, inner, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
        .png()
        .toBuffer()
      return sharp({
        create: {
          width: size,
          height: size,
          channels: 4,
          background: { r: 255, g: 255, b: 255, alpha: 1 },
        },
      })
        .composite([{ input: mark, gravity: 'center' }])
        .png()
        .toBuffer()
    }

    await writeFaviconSquare(48, join(root, 'public/favicon-48.png'))
    const icoSizes = await Promise.all([16, 32, 48].map((size) => faviconSquareBuffer(size)))
    writeFileSync(join(root, 'public/favicon.ico'), await toIco(icoSizes))
    await writeFaviconSquare(96, join(root, 'public/favicon-96.png'))
    await writeFaviconSquare(192, join(root, 'public/favicon-192.png'))
    await writeFaviconSquare(180, join(root, 'public/apple-touch-icon.png'))
    await writeFaviconSquare(512, join(root, 'public/og-logo.png'))
    console.log('Generated white-background Zadeyo favicons for Google Search')
  }

  const posterSrc = join(root, 'src/assets/images/hero-huntress-poster.jpg')
  await sharp(posterSrc)
    .resize(1280, null, { withoutEnlargement: true })
    .webp({ quality: 78, effort: 6 })
    .toFile(join(root, 'public/hero-poster.webp'))

  const supportSrc = join(root, 'src/assets/images/dbd-support-hunt.jpg')
  const supportWebp = join(root, 'src/assets/images/dbd-support-hunt.webp')
  await sharp(supportSrc)
    .resize(1920, null, { withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(supportWebp)

  const whyChooseSrc = join(root, 'src/assets/images/dbd-why-choose.jpg')
  const whyChooseWebp = join(root, 'src/assets/images/dbd-why-choose.webp')
  const whyMeta = await sharp(whyChooseSrc)
    .resize(1200, null, { withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(whyChooseWebp)

  console.log(
    `Optimized hero cheat menu: ${Math.round(cheatMeta.size / 1024)} KB (${cheatMeta.width}x${cheatMeta.height})`,
  )

  console.log(
    `Optimized why choose image: ${Math.round(whyMeta.size / 1024)} KB (${whyMeta.width}x${whyMeta.height})`,
  )
}

optimize().catch((error) => {
  console.error(error)
  process.exit(1)
})
