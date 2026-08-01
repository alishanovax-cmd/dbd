import { Breadcrumbs } from '../components/layout/Breadcrumbs'
import { PageLayout } from '../components/layout/PageLayout'
import { SeoHead } from '../components/seo/SeoHead'
import { breadcrumbSchema, globalSchemas, productSchema, webPageSchema } from '../components/seo/schema'
import {
  BuyCtaSection,
  BuyFeaturesSection,
  BuyHeroSection,
  BuyRequirementsSection,
} from '../components/sections/buy'
import { homeNavLink } from '../data/navigation'
import { pageSeo } from '../data/seo'

export function BuyPage() {
  return (
    <PageLayout>
      <SeoHead
        seo={pageSeo.buy}
        jsonLd={[...globalSchemas(), breadcrumbSchema([
          { name: homeNavLink.label, path: homeNavLink.href },
          { name: 'Buy DBD Cheats', path: '/buy' },
        ]), webPageSchema(pageSeo.buy.title, pageSeo.buy.description, pageSeo.buy.path), productSchema()]}
      />
      <Breadcrumbs
        items={[
          { label: homeNavLink.label, href: homeNavLink.href },
          { label: 'Buy DBD Cheats' },
        ]}
      />
      <BuyHeroSection />
      <BuyFeaturesSection />
      <BuyRequirementsSection />
      <BuyCtaSection />
    </PageLayout>
  )
}
