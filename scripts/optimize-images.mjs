import { mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

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

  await sharp(join(root, 'public/zadeyo-logo.png'))
    .resize(128, 128, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 85 })
    .toFile(join(root, 'public/zadeyo-logo.webp'))

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
