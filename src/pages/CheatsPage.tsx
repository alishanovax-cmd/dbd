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
import { homeNavLink } from '../data/navigation'
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
            { name: homeNavLink.label, path: homeNavLink.href },
            { name: 'DBD Cheats Modules', path: '/cheats' },
          ]),
          cheatsItemListSchema(),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: homeNavLink.label, href: homeNavLink.href },
          { label: 'DBD Cheats Modules' },
        ]}
      />
      <CheatsHeroSection />
      <CheatsCategoriesSection />
      <CheatsHighlightsSection />
      <CheatsCtaSection />
    </PageLayout>
  )
}
