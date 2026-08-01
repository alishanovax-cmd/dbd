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
    const faviconBg = { r: 6, g: 4, b: 9, alpha: 1 }
    const faviconOpts = { fit: 'contain', background: faviconBg }

    await logo.clone().resize(48, 48, faviconOpts).png().toFile(join(root, 'public/favicon-48.png'))
    const icoSizes = await Promise.all(
      [16, 32, 48].map((size) =>
        logo.clone().resize(size, size, faviconOpts).png().toBuffer(),
      ),
    )
    writeFileSync(join(root, 'public/favicon.ico'), await toIco(icoSizes))
    await logo.clone().resize(96, 96, faviconOpts).png().toFile(join(root, 'public/favicon-96.png'))
    await logo.clone().resize(192, 192, faviconOpts).png().toFile(join(root, 'public/favicon-192.png'))
    await logo.clone().resize(180, 180, faviconOpts).png().toFile(join(root, 'public/apple-touch-icon.png'))
    await logo
      .clone()
      .resize(512, 512, faviconOpts)
      .png()
      .toFile(join(root, 'public/og-logo.png'))
    console.log('Generated brand favicons (48–192px) and og-logo.png for Google Search')
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
