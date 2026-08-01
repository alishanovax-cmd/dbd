import { assets } from '../assets'
import type { BlogCategory } from './navigation'

export type BlogContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }

export type BlogPostMeta = {
  slug: string
  title: string
  excerpt: string
  category: Exclude<BlogCategory, 'all'>
  date: string
  readTime: string
  image: string
}

export type BlogArticle = BlogPostMeta & {
  content: BlogContentBlock[]
}

/** Unique cover image per blog post — matched to guide topic. */
const blogImages = {
  espGuide: assets.espWallhack,
  worldEsp: assets.trustMap,
  beginners: assets.cheatMenu,
  hwid: assets.heroHuntressPoster,
  patches: assets.cheatOverviewImage,
  comparison: assets.whyChooseImage,
  aimbot: assets.atmosphere1,
  anticheat: assets.supportHunt,
  external: assets.blogExternal,
  streamproof: assets.blogStreamproof,
} as const

export const blogArticles: BlogArticle[] = [
  {
    slug: 'dbd-esp-guide',
    title: 'DBD ESP Setup Guide — Box, Name & Aura Wallhack',
    excerpt: 'Configure Player ESP — Box ESP, Name ESP, distance, held item, and aura wallhack settings.',
    category: 'esp',
    date: 'May 13, 2024',
    readTime: '5 min read',
    image: blogImages.espGuide,
    content: [
      {
        type: 'p',
        text: 'Player ESP is the core of the DBD cheat. Enable Box ESP for 2D bounding boxes on every survivor and killer through walls. Add Name ESP to show character names on the overlay.',
      },
      {
        type: 'h2',
        text: 'Core Player ESP Features',
      },
      {
        type: 'p',
        text: 'Distance ESP displays exact range to each player. Held Item ESP reveals med-kits, toolboxes, flashlights, and keys before you engage. Player Aura adds glow outlines through terrain for instant tracking.',
      },
      {
        type: 'h2',
        text: 'Configure ESP in the cheat menu',
      },
      {
        type: 'p',
        text: 'Open the cheat menu with your Menu Key bind. Navigate to Player ESP tab. Toggle each feature individually and assign custom colors per player type — survivor, killer, hooked.',
      },
      {
        type: 'h2',
        text: 'Save Profiles for Survivor and Killer',
      },
      {
        type: 'p',
        text: 'Save your config after setup. official stores profiles locally so you can swap between Survivor ESP and Killer ESP layouts without reconfiguring every session.',
      },
    ],
  },
  {
    slug: 'world-esp-guide',
    title: 'World ESP — Generator, Totem & Hook Wallhack',
    excerpt: 'Enable and configure every World ESP object in the cheat menu.',
    category: 'esp',
    date: 'Jun 2, 2024',
    readTime: '6 min read',
    image: blogImages.worldEsp,
    content: [
      {
        type: 'p',
        text: 'World ESP wallhacks every interactive object in DBD: generators, chests, exits, pallets, totems, hatches, hooks, traps, and windows.',
      },
      {
        type: 'h2',
        text: 'Enable World ESP Object Types',
      },
      {
        type: 'p',
        text: 'In the cheat menu, open World ESP and enable each object type. Assign distinct colors — yellow for generators, red for totems, green for exits — so labels never overlap visually.',
      },
      {
        type: 'h2',
        text: 'Generator, Hook, and Totem Tracking',
      },
      {
        type: 'p',
        text: 'Generator ESP shows repair progress percentage through walls. Hook ESP marks scourge hooks and active sacrifice points. Totem ESP reveals both dull and hex totems through terrain.',
      },
      {
        type: 'h2',
        text: 'Combine With Player ESP',
      },
      {
        type: 'p',
        text: 'Combine World ESP with player ESP for the full wallhack experience. Both modules run from the same external overlay with zero extra cost.',
      },
    ],
  },
  {
    slug: 'dbd-beginners-guide',
    title: 'DBD Cheat — First-Time Setup Guide',
    excerpt: 'Buy, install, and activate the loader. Enable your first ESP features in under 10 minutes.',
    category: 'guide',
    date: 'Jul 8, 2024',
    readTime: '8 min read',
    image: blogImages.beginners,
    content: [
      {
        type: 'p',
        text: 'Step 1: Purchase through checkout — $35/month or $150 lifetime. Your order page shows the loader download immediately after payment.',
      },
      {
        type: 'h2',
        text: 'System Requirements and Windows Settings',
      },
      {
        type: 'p',
        text: 'Step 2: Verify system requirements — HVCI, Core Isolation, TPM, and Secure Boot must be ON. The setup guide walks through each Windows setting.',
      },
      {
        type: 'h2',
        text: 'Loader Injection and Menu Access',
      },
      {
        type: 'p',
        text: 'Step 3: Run the loader as administrator. Inject the external overlay, launch DBD, and press your Menu Key in the lobby.',
      },
      {
        type: 'h2',
        text: 'First ESP Features to Enable',
      },
      {
        type: 'p',
        text: 'Step 4: Enable Box ESP, Name ESP, and Generator ESP first. Avoid SpeedHack and High Jump until you confirm the cheat is stable on your system. Join Discord for live setup help.',
      },
    ],
  },
  {
    slug: 'hwid-spoofer-explained',
    title: 'HWID Spoofer — Bypass Hardware Bans',
    excerpt: 'How the included HWID Spoofer protects your PC from hardware bans.',
    category: 'spoofing',
    date: 'Aug 1, 2024',
    readTime: '4 min read',
    image: blogImages.hwid,
    content: [
      {
        type: 'p',
        text: 'Hardware bans tie restrictions to your PC components — not just your game account. The HWID Spoofer masks disk serials, motherboard ID, and MAC address before you launch DBD.',
      },
      {
        type: 'h2',
        text: 'When to Enable HWID Spoofer',
      },
      {
        type: 'p',
        text: 'Enable HWID Spoofer in the cheat menu before every session if you have a prior ban history. The spoofer runs alongside the ESP overlay from the same loader — no extra purchase required.',
      },
      {
        type: 'h2',
        text: 'Maintenance After System Changes',
      },
      {
        type: 'p',
        text: 'Restart the spoofer after Windows updates or hardware changes. Discord support can verify your spoofer is active if you are unsure.',
      },
      {
        type: 'h2',
        text: 'Combine With External ESP for Safety',
      },
      {
        type: 'p',
        text: 'HWID spoofing reduces ban risk but does not make you immune. Combine with external ESP and conservative exploit settings for the safest long-term setup.',
      },
    ],
  },
  {
    slug: 'staying-updated-after-patches',
    title: 'loader Updates After DBD Patches',
    excerpt: 'Keep your  cheat build current after every DBD patch day.',
    category: 'safety',
    date: 'Sep 12, 2024',
    readTime: '5 min read',
    image: blogImages.patches,
    content: [
      {
        type: 'p',
        text: 'DBD patches can break cheat offsets. Updates ship loader updates as fast as possible after every Behaviour patch — check your order page and Discord on patch days.',
      },
      {
        type: 'h2',
        text: 'Signs Your Build Is Outdated',
      },
      {
        type: 'p',
        text: 'Symptoms of an outdated loader build: missing ESP boxes, frozen overlay, or loader failing to attach. Do not play on an old build — update first.',
      },
      {
        type: 'h2',
        text: 'Patch-Day Best Practices',
      },
      {
        type: 'p',
        text: 'Best practice: pause ranked sessions on patch day, download the new loader, test in a private match, then re-enable your full ESP and exploit config.',
      },
      {
        type: 'h2',
        text: 'Stay Notified on Discord',
      },
      {
        type: 'p',
        text: 'Discord posts update notifications with download links. Enable notifications so you never miss a critical patch-day build.',
      },
    ],
  },
  {
    slug: 'best-dbd-cheat-2026',
    title: 'Best DBD Cheat 2026 — Why This Package Wins',
    excerpt: 'Compare DBD cheat providers.  external ESP, full feature list, and pricing breakdown.',
    category: 'comparison',
    date: 'Jan 15, 2026',
    readTime: '7 min read',
    image: blogImages.comparison,
    content: [
      {
        type: 'p',
        text: 'The best DBD cheat in 2026 needs external architecture, full ESP coverage, exploit modules, unlocker, spoofer, and fast patch support — This package delivers all of this at $35/month.',
      },
      {
        type: 'h2',
        text: 'Feature Comparison vs Competitors',
      },
      {
        type: 'p',
        text: 'Competitors often lock Cosmetic Unlocker or HWID Spoofer behind premium tiers. Every plan includes every feature in one subscription — World ESP, Box ESP, Auto Skill Check, SpeedHack, StreamProof, Cloud-DMA.',
      },
      {
        type: 'h2',
        text: 'What to Compare Before Buying',
      },
      {
        type: 'p',
        text: 'Compare on: external vs internal, update speed after patches, Discord support quality, and honest product documentation. No cheat is ban-proof — Official docs describe features transparently on the official store.',
      },
      {
        type: 'h2',
        text: 'Why This Package Is a Strong Choice in 2026',
      },
      {
        type: 'p',
        text: 'External safety, instant delivery, and full feature coverage at $35/month make this a leading DBD cheat option — confirm current details through official checkout before buying.',
      },
    ],
  },
  {
    slug: 'aimbot-setup-guide',
    title: 'Auto Skill Check & Exploit Setup',
    excerpt: 'Configure Auto Skill Check, Instant Animation, SpeedHack, and High Jump in Checkout.',
    category: 'aimbot',
    date: 'Feb 3, 2025',
    readTime: '5 min read',
    image: blogImages.aimbot,
    content: [
      {
        type: 'p',
        text: 'Every plan includes Auto Skill Check for automatic great skill check hits during generator repairs and healing. Enable it in the Exploits tab of the cheat menu.',
      },
      {
        type: 'h2',
        text: 'Exploit Modules Overview',
      },
      {
        type: 'p',
        text: 'Instant Animation removes Killer weapon wind-up delay. SpeedHack increases movement speed. High Jump adds vertical mobility. All three are toggleable with adjustable values.',
      },
      {
        type: 'h2',
        text: 'Safe SpeedHack Values',
      },
      {
        type: 'p',
        text: 'Use conservative SpeedHack values (1.1x–1.3x) to reduce report risk. Enable StreamProof if recording or streaming with the cheat active.',
      },
      {
        type: 'h2',
        text: 'FOV Changer and Role Configs',
      },
      {
        type: 'p',
        text: 'FOV Changer is in the same Exploits tab — expand your view beyond default game limits. Save configs per role (Survivor vs Killer) for quick switching.',
      },
    ],
  },
  {
    slug: 'behaviour-anticheat-analysis',
    title: 'DBD Anti-Cheat vs External DBD Cheats Cheat',
    excerpt: 'Why DBD Cheats external architecture beats internal injectors for DBD safety.',
    category: 'anti-cheat',
    date: 'Mar 20, 2025',
    readTime: '6 min read',
    image: blogImages.anticheat,
    content: [
      {
        type: 'p',
        text: 'DBD anti-cheat scans the game process for injected code and known cheat signatures. Internal cheats inject directly into the process — the highest-risk architecture.',
      },
      {
        type: 'h2',
        text: 'Why External Beats Internal',
      },
      {
        type: 'p',
        text: 'The cheat runs external: a separate overlay process reads game memory and draws ESP without touching the game executable. This bypasses most process-level scans.',
      },
      {
        type: 'h2',
        text: 'Report Systems Still Apply',
      },
      {
        type: 'p',
        text: 'Report systems and replay review still apply regardless of architecture. Blatant SpeedHack or impossible skill check streaks will get flagged — cheat smart, not reckless.',
      },
      {
        type: 'h2',
        text: 'The Complete Safety Stack',
      },
      {
        type: 'p',
        text: 'The stack combines external architecture with regular signature updates, HWID Spoofer, and StreamProof — the complete safety stack for DBD cheating.',
      },
    ],
  },
  {
    slug: 'external-cheat-architecture',
    title: 'Why External Architecture Works External Cheat Architecture',
    excerpt: 'External vs internal cheats for DBD — how external cheats keep detection risk low.',
    category: 'technical',
    date: 'Apr 10, 2025',
    readTime: '5 min read',
    image: blogImages.external,
    content: [
      {
        type: 'p',
        text: 'External cheats like this run as a standalone process. They read DBD memory externally and render an overlay on top of the game window — no code injection into the game.',
      },
      {
        type: 'h2',
        text: 'Internal vs External Detection Risk',
      },
      {
        type: 'p',
        text: 'Internal cheats hook game functions directly, leaving detectable traces that anti-cheat scans target first. External mode avoids this entirely with external architecture.',
      },
      {
        type: 'h2',
        text: 'Cloud-DMA for Advanced Users',
      },
      {
        type: 'p',
        text: 'The loader also supports Cloud-DMA for advanced users who want hardware-level memory access. This adds another layer of separation between the cheat and the game process.',
      },
      {
        type: 'h2',
        text: 'Patch-Day Offset Updates',
      },
      {
        type: 'p',
        text: 'Trade-off: external cheats need offset updates after patches. The package ships loader updates quickly on patch day to keep ESP and exploits working on the latest build.',
      },
    ],
  },
  {
    slug: 'streamproof-guide',
    title: 'StreamProof — Hide Cheat From OBS',
    excerpt: 'Enable StreamProof in the cheat menu to hide the ESP overlay from recording software.',
    category: 'guide',
    date: 'May 5, 2025',
    readTime: '4 min read',
    image: blogImages.streamproof,
    content: [
      {
        type: 'p',
        text: 'StreamProof is built into every subscription. Toggle it in the cheat menu before starting OBS or Streamlabs — the entire ESP overlay becomes invisible to capture software.',
      },
      {
        type: 'h2',
        text: 'How StreamProof Works',
      },
      {
        type: 'p',
        text: 'You still see all ESP boxes, wallhack tags, and exploit indicators on your screen. Viewers and recording software see clean gameplay without any overlay elements.',
      },
      {
        type: 'h2',
        text: 'Test Before Going Live',
      },
      {
        type: 'p',
        text: 'Test StreamProof with a local OBS recording before going live. Confirm no ESP elements appear in the captured footage.',
      },
      {
        type: 'h2',
        text: 'StreamProof Does Not Hide Gameplay',
      },
      {
        type: 'p',
        text: 'StreamProof hides visuals but not suspicious gameplay. Keep exploit values moderate on stream even with StreamProof enabled.',
      },
    ],
  },
]

export const blogPosts: BlogPostMeta[] = blogArticles.map(
  ({ content: _content, ...meta }) => meta,
)

export function getBlogArticle(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug)
}
