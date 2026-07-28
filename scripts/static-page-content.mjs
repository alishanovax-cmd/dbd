import { readFileSync } from 'node:fs'
import { faqs } from './seo-data.mjs'

const blogSource = readFileSync('src/data/blogArticles.ts', 'utf8')
const cheatsSource = readFileSync('src/data/cheatsContent.ts', 'utf8')
const buySource = readFileSync('src/data/buyContent.ts', 'utf8')

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function p(text) {
  return `<p>${escapeHtml(text)}</p>`
}

function h2(text) {
  return `<h2>${escapeHtml(text)}</h2>`
}

function h1(text) {
  return `<h1>${escapeHtml(text)}</h1>`
}

function extractQuotedStrings(source, label) {
  const block = source.split(`${label}:`)[1]
  if (!block) return []
  return [...block.matchAll(/'((?:\\'|[^'])*)'/g)].map((match) => match[1].replace(/\\'/g, "'"))
}

function articleParagraphs(slug) {
  const block = blogSource.split(`slug: '${slug}'`)[1]
  if (!block) return []
  return [...block.matchAll(/text: '((?:\\'|[^'])*)'/g)].map((match) => match[1].replace(/\\'/g, "'"))
}

function cheatsModuleSections() {
  return [...cheatsSource.matchAll(/title: '([^']+)'[\s\S]*?description:\s*\n\s*'((?:\\'|[^'])*)'/g)]
    .slice(0, 6)
    .map((match) => `${h2(match[1])}${p(match[2].replace(/\\'/g, "'"))}`)
    .join('\n      ')
}

function buyFeatureDescriptions() {
  return [...buySource.matchAll(/description: '((?:\\'|[^'])*)'/g)].map((match) =>
    match[1].replace(/\\'/g, "'"),
  )
}

function wrapArticle(title, intro, sections, heroImage) {
  const hero = heroImage
    ? `<img src="${heroImage.src}" alt="${escapeHtml(heroImage.alt)}" width="${heroImage.width}" height="${heroImage.height}" fetchpriority="high" decoding="sync" />`
    : ''

  return `<article class="static-page-content">
      ${h1(title)}
      ${intro.map(p).join('\n      ')}
      ${hero}
      ${sections.map((section) => `${h2(section.heading)}${section.paragraphs.map(p).join('\n      ')}`).join('\n      ')}
    </article>`
}

function homeStaticHtml() {
  return wrapArticle(
    'Dead By Daylight Cheats — ESP, Aimbot & Wallhack for DBD',
    [
      'Premium Zadeyo external cheat with World ESP, Box ESP, Auto Skill Check, SpeedHack, Cosmetic Unlocker, HWID Spoofer, and StreamProof. Undetected external architecture with instant loader delivery at $35/month.',
      'Zadeyo DBD is built for players who want full wallhack coverage, exploit modules, and unlock tools in one private loader. Compatible with Steam, Epic Games, and Game Pass on Windows 10 and 11.',
    ],
    [
      {
        heading: 'Why Choose Zadeyo DBD Cheats?',
        paragraphs: [
          'Zadeyo DBD is a private external cheat built for reliability, safety, and full feature coverage at $35/month or $150 lifetime. External mode keeps the overlay outside the game process — significantly lower detection risk than internal cheats.',
          'Every subscription includes loader updates, HWID Spoofer, Cosmetic Unlocker, Cloud-DMA option, and 24/7 Discord support. Zadeyo pushes updates fast after every DBD patch so your build never falls behind.',
          'Buy once on Zadeyo, download instantly, and configure ESP colors, exploit toggles, and StreamProof from a clean in-game menu. No feature tiers — the full cheat suite is included.',
        ],
      },
      {
        heading: 'Zadeyo DBD Cheat — Full Feature Breakdown',
        paragraphs: [
          'Meet the ZADEYO private cheat for Dead by Daylight — external ESP, exploit modules, and unlock tools in one loader. Flexible ESP/WH customization lets you see survivors, killers, generators, exits, hatches, totems, traps, hooks, and more through walls.',
          'Included out of the box: Cosmetic Unlocker for all skins, HWID Spoofer for hardware ban protection, StreamProof for hidden overlays on OBS, Auto Skill Check, Instant Animation, SpeedHack, High Jump, FOV Changer, and saved configs.',
          'ZADEYO operates in External mode — the safest architecture for DBD. Toggle every feature individually from the menu. English menu, Menu Key bind, and Cloud-DMA support for advanced setups.',
        ],
      },
      {
        heading: 'What You Get With Zadeyo DBD',
        paragraphs: [
          'Zadeyo ships the complete DBD cheat package — no upsells, no locked tiers. World ESP, player ESP, exploit modules, spoofer, unlocker, and StreamProof all load from one external overlay.',
          'Player side: Box ESP, Name ESP, Character Name, Held Item, Borrowed Time Indicator, Distance, and Player Aura. World side: Generators, Chests, Exits, Pallets, Totems, Hatches, Hooks, Traps, and Windows — all wallhack-enabled.',
        ],
      },
    ],
    {
      src: '/hero-cheat-menu.webp',
      alt: 'Zadeyo DBD cheat menu — ESP, wallhack, and exploit overlay',
      width: 1200,
      height: 503,
    },
  )
}

function faqStaticHtml(route) {
  const items = faqs
    .map(
      (item) =>
        `<section><h2>${escapeHtml(item.question)}</h2><p>${escapeHtml(item.answer)}</p></section>`,
    )
    .join('\n      ')

  return `<article class="static-page-content">
      ${h1('Zadeyo DBD Cheat FAQ')}
      ${p(route.description)}
      ${items}
    </article>`
}

function cheatsStaticHtml(route) {
  return `<article class="static-page-content">
      ${h1('Zadeyo DBD Cheats — Full Module Breakdown')}
      ${p(route.description)}
      ${cheatsModuleSections()}
    </article>`
}

function buyStaticHtml(route) {
  const features = buyFeatureDescriptions()
  return `<article class="static-page-content">
      ${h1('Buy Zadeyo DBD Cheats')}
      ${p(route.description)}
      ${features
        .slice(0, 8)
        .map((text, index) => `<section><h2>Included Feature ${index + 1}</h2>${p(text)}</section>`)
        .join('\n      ')}
    </article>`
}

function articleBlocks(slug) {
  const block = blogSource.split(`slug: '${slug}'`)[1]?.split('content: [')[1]?.split('\n    ],')[0] ?? ''
  return [...block.matchAll(/type: '(p|h2)',\s*\n\s*text: '((?:\\'|[^'])*)'/g)].map((match) => ({
    type: match[1],
    text: match[2].replace(/\\'/g, "'"),
  }))
}

function articleStaticHtml(route) {
  const blocks = articleBlocks(route.slug)
  const body = blocks.length
    ? blocks
        .map((block) => (block.type === 'h2' ? h2(block.text) : p(block.text)))
        .join('\n      ')
    : `${p(route.description)}`

  return `<article class="static-page-content">
      ${h1(route.headline)}
      ${p(route.description)}
      ${body}
    </article>`
}

function genericStaticHtml(route) {
  return `<article class="static-page-content">
      ${h1(route.title.replace(/\s\|\sZADEYO$/, ''))}
      ${p(route.description)}
      ${p('Zadeyo DBD Cheats is an independent resource for Dead by Daylight external cheat features, setup guides, pricing, compatibility notes, and support links. Explore cheat modules, purchase options, FAQ answers, and blog guides from the navigation on this site.')}
      ${p('All Zadeyo subscriptions include external ESP, World ESP wallhack, exploit modules, HWID Spoofer, Cosmetic Unlocker, StreamProof, loader updates, and Discord support. Visit the buy page for pricing or the cheats page for the full module list.')}
    </article>`
}

export function buildStaticBody(route) {
  if (route.path === '/') return homeStaticHtml()
  if (route.path === '/faq') return faqStaticHtml(route)
  if (route.path === '/cheats') return cheatsStaticHtml(route)
  if (route.path === '/buy') return buyStaticHtml(route)
  if (route.type === 'article') return articleStaticHtml(route)
  return genericStaticHtml(route)
}
