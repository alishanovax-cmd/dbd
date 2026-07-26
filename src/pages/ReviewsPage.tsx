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
            { name: 'Home', path: '/' },
            { name: 'Customer Feedback', path: '/reviews' },
          ]),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Customer Feedback' },
        ]}
      />
      <ReviewsHeroSection />
      <ReviewsChannelsSection />
      <ReviewsHonestySection />
      <ReviewsCtaSection />
    </PageLayout>
  )
}
