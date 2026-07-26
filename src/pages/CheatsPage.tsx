import { Breadcrumbs } from '../components/layout/Breadcrumbs'
import { PageLayout } from '../components/layout/PageLayout'
import { SeoHead } from '../components/seo/SeoHead'
import { breadcrumbSchema, cheatsItemListSchema, globalSchemas, webPageSchema } from '../components/seo/schema'
import {
  CheatsCategoriesSection,
  CheatsCtaSection,
  CheatsHeroSection,
  CheatsHighlightsSection,
} from '../components/sections/cheats'
import { pageSeo } from '../data/seo'

export function CheatsPage() {
  return (
    <PageLayout>
      <SeoHead
        seo={pageSeo.cheats}
        jsonLd={[
          ...globalSchemas(),
          webPageSchema(pageSeo.cheats.title, pageSeo.cheats.description, pageSeo.cheats.path),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Zadeyo DBD Cheats', path: '/cheats' },
          ]),
          cheatsItemListSchema(),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Zadeyo DBD Cheats' },
        ]}
      />
      <CheatsHeroSection />
      <CheatsCategoriesSection />
      <CheatsHighlightsSection />
      <CheatsCtaSection />
    </PageLayout>
  )
}
