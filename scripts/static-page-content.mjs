import { readFileSync } from 'node:fs'
import { articlePages, faqs, siteConfig } from './seo-data.mjs'

const blogSource = readFileSync('src/data/blogArticles.ts', 'utf8')
const cheatsSource = readFileSync('src/data/cheatsContent.ts', 'utf8')
const buySource = readFileSync('src/data/buyContent.ts', 'utf8')

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/cheats', label: 'Cheats' },
  { href: '/buy', label: 'Buy' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
]

const keywordLinks = [
  { href: '/', label: 'Dead by Daylight Cheats' },
  { href: '/blog/dbd-esp-guide', label: 'DBD ESP' },
  { href: '/blog/world-esp-guide', label: 'DBD Wallhack' },
  { href: '/cheats', label: 'World ESP' },
  { href: '/blog/dbd-esp-guide', label: 'Box ESP' },
  { href: '/blog/hwid-spoofer-explained', label: 'HWID Spoofer' },
  { href: '/blog/streamproof-guide', label: 'StreamProof' },
  { href: '/blog/aimbot-setup-guide', label: 'Auto Skill Check' },
  { href: '/blog/external-cheat-architecture', label: 'External Cheat' },
  { href: '/blog/aimbot-setup-guide', label: 'DBD Aimbot' },
  { href: '/blog/behaviour-anticheat-analysis', label: 'Anti-Cheat Guide' },
]

const externalLinks = [
  { href: siteConfig.zadeyoUrl, label: 'Zadeyo Official Store' },
  { href: siteConfig.checkoutUrl, label: 'Zadeyo DBD Product Page' },
  { href: siteConfig.supportUrl, label: 'Zadeyo Support Portal' },
  { href: siteConfig.discordUrl, label: 'Zadeyo Discord Community' },
  { href: 'https://deadbydaylight.com', label: 'Dead by Daylight Official Site' },
  { href: 'https://store.steampowered.com/app/381210/Dead_by_Daylight/', label: 'DBD on Steam' },
  { href: 'https://www.behaviour.com/en', label: 'Behaviour Interactive' },
  { href: siteConfig.githubUrl, label: 'Site Source on GitHub' },
]

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

function pHtml(html) {
  return `<p>${html}</p>`
}

function h2(text) {
  return `<h2>${escapeHtml(text)}</h2>`
}

function h1(text) {
  return `<h1>${escapeHtml(text)}</h1>`
}

function link(href, text, external = false) {
  const rel = external ? ' rel="noopener noreferrer"' : ''
  const target = external ? ' target="_blank"' : ''
  return `<a href="${escapeHtml(href)}"${target}${rel}>${escapeHtml(text)}</a>`
}

function staticNavHtml(currentPath) {
  const items = navLinks
    .map(
      (item) =>
        `<li><a href="${escapeHtml(item.href)}"${item.href === currentPath ? ' aria-current="page"' : ''}>${escapeHtml(item.label)}</a></li>`,
    )
    .join('\n          ')

  return `<nav class="static-page-nav" aria-label="Site navigation">
        <ul>
          ${items}
        </ul>
      </nav>`
}

function staticExploreHtml(currentPath) {
  const pageLinks = navLinks
    .filter((item) => item.href !== currentPath)
    .map((item) => `<li>${link(item.href, item.label)}</li>`)
    .join('\n            ')

  const guideLinks = articlePages
    .filter((article) => article.path !== currentPath)
    .map((article) => `<li>${link(article.path, article.headline)}</li>`)
    .join('\n            ')

  const topicLinks = keywordLinks
    .map((item) => `<li>${link(item.href, item.label)}</li>`)
    .join('\n            ')

  const outboundLinks = externalLinks
    .map((item) => `<li>${link(item.href, item.label, true)}</li>`)
    .join('\n            ')

  return `<nav class="static-page-links" aria-label="Explore Zadeyo DBD Cheats">
        <h2>Explore Zadeyo DBD Cheats</h2>
        <div class="static-page-links__groups">
          <section>
            <h3>Site pages</h3>
            <ul>${pageLinks}</ul>
          </section>
          <section>
            <h3>Setup guides</h3>
            <ul>${guideLinks}</ul>
          </section>
          <section>
            <h3>Popular topics</h3>
            <ul>${topicLinks}</ul>
          </section>
          <section>
            <h3>Official external resources</h3>
            <ul>${outboundLinks}</ul>
          </section>
        </div>
      </nav>`
}

function wrapStaticPage(route, articleHtml) {
  return `${staticNavHtml(route.path)}
      ${articleHtml}
      ${staticExploreHtml(route.path)}`
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
      ${intro.map(pHtml).join('\n      ')}
      ${hero}
      ${sections.map((section) => `${h2(section.heading)}${section.paragraphs.map(pHtml).join('\n      ')}`).join('\n      ')}
    </article>`
}

function homeStaticHtml(route) {
  const article = wrapArticle(
    'Dead By Daylight Cheats — ESP, Aimbot & Wallhack for DBD',
    [
      `Premium Zadeyo external cheat with World ESP, Box ESP, Auto Skill Check, SpeedHack, Cosmetic Unlocker, HWID Spoofer, and StreamProof. Undetected external architecture with instant loader delivery at $35/month on ${link(siteConfig.zadeyoUrl, 'Zadeyo', true)}. Browse the ${link('/cheats', 'full cheat module list')} or see ${link('/buy', 'pricing and requirements')}.`,
      `Zadeyo DBD is built for players who want full wallhack coverage, exploit modules, and unlock tools in one private loader. Compatible with Steam, Epic Games, and Game Pass on Windows 10 and 11. Read the ${link('/faq', 'FAQ')} or start with the ${link('/blog/dbd-esp-guide', 'ESP setup guide')}.`,
    ],
    [
      {
        heading: 'Why Choose Zadeyo DBD Cheats?',
        paragraphs: [
          `Zadeyo DBD is a private external cheat built for reliability, safety, and full feature coverage at $35/month or $150 lifetime. External mode keeps the overlay outside the game process — significantly lower detection risk than internal cheats. Compare options on the ${link('/reviews', 'customer feedback hub')}.`,
          `Every subscription includes loader updates, HWID Spoofer, Cosmetic Unlocker, Cloud-DMA option, and 24/7 Discord support. Zadeyo pushes updates fast after every DBD patch so your build never falls behind. See ${link('/blog/staying-updated-after-patches', 'loader update guide')}.`,
          `Buy once on Zadeyo, download instantly, and configure ESP colors, exploit toggles, and StreamProof from a clean in-game menu. No feature tiers — the full cheat suite is included. ${link('/buy', 'Purchase Zadeyo DBD Cheat')}.`,
        ],
      },
      {
        heading: 'Zadeyo DBD Cheat — Full Feature Breakdown',
        paragraphs: [
          `Meet the ZADEYO private cheat for Dead by Daylight — external ESP, exploit modules, and unlock tools in one loader. Flexible ESP/WH customization lets you see survivors, killers, generators, exits, hatches, totems, traps, hooks, and more through walls. Configure ${link('/blog/world-esp-guide', 'World ESP')} and ${link('/blog/dbd-esp-guide', 'Player ESP')}.`,
          `Included out of the box: Cosmetic Unlocker for all skins, HWID Spoofer for hardware ban protection, StreamProof for hidden overlays on OBS, Auto Skill Check, Instant Animation, SpeedHack, High Jump, FOV Changer, and saved configs. Learn about ${link('/blog/hwid-spoofer-explained', 'HWID Spoofer')} and ${link('/blog/streamproof-guide', 'StreamProof')}.`,
          `ZADEYO operates in External mode — the safest architecture for DBD. Toggle every feature individually from the menu. English menu, Menu Key bind, and Cloud-DMA support for advanced setups. Read ${link('/blog/external-cheat-architecture', 'external cheat architecture guide')}.`,
        ],
      },
      {
        heading: 'What You Get With Zadeyo DBD',
        paragraphs: [
          `Zadeyo ships the complete DBD cheat package — no upsells, no locked tiers. World ESP, player ESP, exploit modules, spoofer, unlocker, and StreamProof all load from one external overlay. View every module on the ${link('/cheats', 'cheats page')}.`,
          `Player side: Box ESP, Name ESP, Character Name, Held Item, Borrowed Time Indicator, Distance, and Player Aura. World side: Generators, Chests, Exits, Pallets, Totems, Hatches, Hooks, Traps, and Windows — all wallhack-enabled. New to cheats? Start with the ${link('/blog/dbd-beginners-guide', 'beginner setup guide')}.`,
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

  return wrapStaticPage(route, article)
}

function faqStaticHtml(route) {
  const items = faqs
    .map(
      (item) =>
        `<section><h2>${escapeHtml(item.question)}</h2><p>${escapeHtml(item.answer)}</p></section>`,
    )
    .join('\n      ')

  const article = `<article class="static-page-content">
      ${h1('Zadeyo DBD Cheat FAQ')}
      ${pHtml(`${escapeHtml(route.description)} Need modules or pricing? Visit ${link('/cheats', 'cheat modules')} and ${link('/buy', 'buy page')}.`)}
      ${items}
    </article>`

  return wrapStaticPage(route, article)
}

function cheatsStaticHtml(route) {
  const article = `<article class="static-page-content">
      ${h1('Zadeyo DBD Cheats — Full Module Breakdown')}
      ${pHtml(`${escapeHtml(route.description)} Ready to purchase? See ${link('/buy', 'pricing')} or read ${link('/blog/dbd-beginners-guide', 'setup guide')}.`)}
      ${cheatsModuleSections()}
    </article>`

  return wrapStaticPage(route, article)
}

function buyStaticHtml(route) {
  const features = buyFeatureDescriptions()
  const article = `<article class="static-page-content">
      ${h1('Buy Zadeyo DBD Cheats')}
      ${pHtml(`${escapeHtml(route.description)} Review ${link('/cheats', 'all cheat modules')} and ${link('/faq', 'FAQ')} before checkout. Official store: ${link(siteConfig.checkoutUrl, 'Purchase on Zadeyo', true)}.`)}
      ${features
        .slice(0, 8)
        .map((text, index) => `<section><h2>Included Feature ${index + 1}</h2>${p(text)}</section>`)
        .join('\n      ')}
    </article>`

  return wrapStaticPage(route, article)
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

  const related = articlePages
    .filter((article) => article.slug !== route.slug)
    .slice(0, 5)
    .map((article) => `<li>${link(article.path, article.headline)}</li>`)
    .join('\n            ')

  const article = `<article class="static-page-content">
      ${h1(route.headline)}
      ${pHtml(`${escapeHtml(route.description)} ${link('/blog', 'All DBD cheat guides')} · ${link('/cheats', 'Cheat modules')} · ${link('/buy', 'Buy Zadeyo DBD')}.`)}
      ${body}
      <section class="static-page-related">
        <h2>Related Zadeyo DBD Guides</h2>
        <ul>${related}</ul>
      </section>
    </article>`

  return wrapStaticPage(route, article)
}

function genericStaticHtml(route) {
  const article = `<article class="static-page-content">
      ${h1(route.title.replace(/\s\|\sZADEYO$/, ''))}
      ${p(route.description)}
      ${pHtml(`Zadeyo DBD Cheats is an independent resource for Dead by Daylight external cheat features, setup guides, pricing, compatibility notes, and support links. Explore ${link('/cheats', 'cheat modules')}, ${link('/buy', 'purchase options')}, ${link('/faq', 'FAQ answers')}, and ${link('/blog', 'blog guides')}.`)}
      ${pHtml(`All Zadeyo subscriptions include external ESP, World ESP wallhack, exploit modules, HWID Spoofer, Cosmetic Unlocker, StreamProof, loader updates, and Discord support. Visit the ${link('/buy', 'buy page')} for pricing or the ${link('/cheats', 'cheats page')} for the full module list.`)}
    </article>`

  return wrapStaticPage(route, article)
}

export function buildStaticBody(route) {
  if (route.path === '/') return homeStaticHtml(route)
  if (route.path === '/faq') return faqStaticHtml(route)
  if (route.path === '/cheats') return cheatsStaticHtml(route)
  if (route.path === '/buy') return buyStaticHtml(route)
  if (route.type === 'article') return articleStaticHtml(route)
  return genericStaticHtml(route)
}
