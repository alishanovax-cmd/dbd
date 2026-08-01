import { Breadcrumbs } from '../components/layout/Breadcrumbs'
import { PageLayout } from '../components/layout/PageLayout'
import { SeoHead } from '../components/seo/SeoHead'
import { breadcrumbSchema, globalSchemas, webPageSchema } from '../components/seo/schema'
import {
  ReviewsChannelsSection,
  ReviewsCtaSection,
  ReviewsHeroSection,
  ReviewsHonestySection,
} from '../components/sections/reviews'
import { homeNavLink } from '../data/navigation'
import { pageSeo } from '../data/seo'

export function ReviewsPage() {
  return (
    <PageLayout>
      <SeoHead
        seo={pageSeo.reviews}
        jsonLd={[
          ...globalSchemas(),
          webPageSchema(pageSeo.reviews.title, pageSeo.reviews.description, pageSeo.reviews.path),
          breadcrumbSchema([
            { name: homeNavLink.label, path: homeNavLink.href },
            { name: 'DBD Cheats Reviews', path: '/reviews' },
          ]),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: homeNavLink.label, href: homeNavLink.href },
          { label: 'DBD Cheats Reviews' },
        ]}
      />
      <ReviewsHeroSection />
      <ReviewsChannelsSection />
      <ReviewsHonestySection />
      <ReviewsCtaSection />
    </PageLayout>
  )
}
