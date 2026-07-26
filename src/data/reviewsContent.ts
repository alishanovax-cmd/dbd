import { siteConfig } from './navigation'

export const reviewsPage = {
  hero: {
    eyebrow: 'Feedback · Zadeyo DBD',
    titleLine1: 'Customer Feedback',
    titleLine2: 'Official Zadeyo Channels',
    description:
      'This site does not host fabricated reviews or inflated ratings. For real buyer feedback, use the official Zadeyo store listing, Discord community, and support portal.',
  },
  channels: {
    label: 'Where to check feedback',
    title: 'Official Feedback Sources',
    subtitle:
      'We only link to Zadeyo-owned channels. Do not trust review screenshots or star ratings published on unofficial sites.',
    items: [
      {
        title: 'Zadeyo Store Listing',
        description:
          'Product details, pricing, and checkout are on the official Zadeyo store. Check the store page for any buyer feedback shown there.',
        href: siteConfig.checkoutUrl,
        external: true,
        cta: 'Open Zadeyo store',
      },
      {
        title: 'Zadeyo Discord',
        description:
          'Community setup help, patch-day updates, and buyer discussion happen in the official Discord. Ask questions before you purchase.',
        href: 'https://discord.gg/zadeyo',
        external: true,
        cta: 'Join Discord',
      },
      {
        title: 'Zadeyo Support',
        description:
          'Billing, loader access, and setup issues are handled through the official Zadeyo support portal — not through this informational site.',
        href: 'https://zadeyo.com/support',
        external: true,
        cta: 'Get support',
      },
    ],
  },
  honesty: {
    label: 'Transparency',
    title: 'What This Site Does Not Claim',
    points: [
      'No fabricated star ratings, order counts, or subscriber totals.',
      'No fake “verified purchase” review cards or “live updating” testimonial feeds.',
      'No guarantee of undetected status, rankings, or ban immunity — see the FAQ page for limitations.',
      'Purchases, refunds, and product support are handled only on zadeyo.com.',
    ],
  },
  cta: {
    title: 'Ready to Check Zadeyo?',
    description: 'Review features on this site, then confirm pricing and checkout on the official Zadeyo store.',
  },
} as const
