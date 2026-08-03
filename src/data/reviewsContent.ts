import { siteConfig } from './navigation'

export const reviewsPage = {
  hero: {
    eyebrow: 'Feedback · DBD',
    titleLine1: 'Customer Feedback',
    titleLine2: 'Official Channels',
    description:
      'This site does not host fabricated reviews or inflated ratings. For real buyer feedback, use the official store listing, Discord community, and support portal.',
  },
  channels: {
    label: 'Where to check feedback',
    title: 'Official Feedback Sources',
    subtitle:
      'We only link to official channels. Do not trust review screenshots or star ratings published on unofficial sites.',
    items: [
      {
        title: 'official store Listing',
        description:
          'Product details, pricing, and checkout are on the official store. Check the store page for any buyer feedback shown there.',
        href: siteConfig.checkoutUrl,
        external: true,
        cta: 'Open official store',
      },
      {
        title: 'Discord',
        description:
          'Community setup help, patch-day updates, and buyer discussion happen in the official Discord. Ask questions before you purchase.',
        href: 'https://discord.gg/zadeyo',
        external: true,
        cta: 'Join Discord',
      },
      {
        title: 'Support',
        description:
          'Billing, loader access, and setup issues are handled through the official Support portal — not through this informational site.',
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
      'Purchases, refunds, and product support are handled only through official checkout.',
    ],
  },
  cta: {
    title: 'Ready to Check Out?',
    description: 'Review features on this site, then confirm pricing and checkout on the official store.',
  },
} as const
