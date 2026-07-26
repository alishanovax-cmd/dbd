import { assets } from '../assets'

export const cheatsPage = {
  hero: {
    eyebrow: 'Zadeyo · DBD Cheat Suite',
    titleLine1: 'Zadeyo DBD Cheats',
    titleLine2: 'Full Module Breakdown',
    description:
      'Every Zadeyo cheat module in one place — player ESP, World ESP wallhack, exploit tools, HWID Spoofer, Cosmetic Unlocker, and StreamProof. External architecture. All features included at $35/month.',
    statusPills: [
      { label: '33+ Features', pulse: false },
      { label: 'External · Undetected', pulse: true },
      { label: 'No Feature Tiers', pulse: false },
    ],
  },
  categories: {
    label: 'Modules',
    title: 'Cheat Categories',
    subtitle:
      'Each Zadeyo module below is included in every subscription. Toggle them individually from the in-game menu — no premium tiers.',
    groups: [
      {
        id: 'esp',
        title: 'Player ESP',
        icon: '👁',
        image: assets.espWallhack,
        imageAlt: 'Zadeyo Player ESP — survivor and killer wallhack overlay in Dead by Daylight',
        description:
          'See every survivor and killer through walls before you commit to a chase or repair. Player ESP draws boxes, names, held items, distance, aura glow, and Borrowed Time indicators on the Zadeyo overlay so you always know who is near and what they carry.',
        features: [
          'Box ESP',
          'Name ESP',
          'Character Name',
          'Held Item',
          'Distance',
          'Player Aura',
          'Borrowed Time Indicator',
          'Custom Colors',
        ],
      },
      {
        id: 'world',
        title: 'World ESP',
        icon: '🗺',
        image: assets.trustMap,
        imageAlt: 'Zadeyo World ESP — generators, totems, and map object wallhack tags',
        description:
          'Full map wallhack for every interactable object. World ESP tags generators, totems, hooks, exits, hatches, chests, pallets, traps, and windows through terrain so you never walk blind into a loop or miss an objective.',
        features: ['Generators', 'Chests', 'Exits', 'Pallets', 'Totems', 'Hatches', 'Hooks', 'Traps', 'Windows'],
      },
      {
        id: 'exploits',
        title: 'Exploits',
        icon: '⚡',
        image: assets.cheatMenu,
        imageAlt: 'Zadeyo exploit modules — Auto Skill Check, SpeedHack, and FOV settings',
        description:
          'Gameplay advantage modules with adjustable values. Auto Skill Check hits great checks automatically, SpeedHack and High Jump extend movement, Instant Animation cuts weapon delay, and FOV Changer widens your view — all toggled from the Zadeyo menu with saved configs.',
        features: [
          'Auto Skill Check',
          'Instant Animation',
          'SpeedHack',
          'High Jump',
          'FOV Changer',
          'Configs',
          'Menu Key Bind',
        ],
      },
      {
        id: 'safety',
        title: 'Safety & Tools',
        icon: '🛡',
        image: assets.atmosphere1,
        imageAlt: 'Zadeyo safety stack — HWID Spoofer, Cosmetic Unlocker, and StreamProof overlay',
        description:
          'External safety tools bundled with every plan. HWID Spoofer masks hardware IDs after bans, Cosmetic Unlocker loads all skins without purchases, StreamProof hides the overlay from OBS, and patch-day loader updates keep offsets current after Behaviour updates.',
        features: [
          'HWID Spoofer',
          'Cosmetic Unlocker',
          'StreamProof',
          'External Safety',
          'Cloud-DMA Option',
          'Regular Updates',
          '24/7 Support',
        ],
      },
    ],
  },
  highlights: {
    label: 'Highlights',
    title: 'Why Zadeyo Cheats Stand Out',
    items: [
      {
        title: 'External Overlay',
        description: 'Reads memory outside the DBD process — no injection, lower detection surface than internal cheats.',
      },
      {
        title: 'Instant Delivery',
        description: 'Loader download on your Zadeyo order page the second checkout clears. In-lobby ESP in minutes.',
      },
      {
        title: 'Patch-Day Updates',
        description: 'Zadeyo pushes new builds fast after Behaviour patches so offsets never leave you blind.',
      },
      {
        title: 'One Price, Everything',
        description: 'No premium tier for unlocker, spoofer, or World ESP. Full cheat suite on every subscription.',
      },
    ],
  },
  cta: {
    title: 'Ready to Load Zadeyo?',
    description: 'Get the full cheat suite — ESP, exploits, unlocker, spoofer, and StreamProof included.',
  },
} as const
