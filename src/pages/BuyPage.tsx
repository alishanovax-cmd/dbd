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
import { pageSeo } from '../data/seo'

export function BuyPage() {
  return (
    <PageLayout>
      <SeoHead
        seo={pageSeo.buy}
        jsonLd={[...globalSchemas(), breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Buy Zadeyo DBD Cheat', path: '/buy' },
        ]), webPageSchema(pageSeo.buy.title, pageSeo.buy.description, pageSeo.buy.path), productSchema()]}
      />
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Buy Zadeyo DBD Cheat' },
        ]}
      />
      <BuyHeroSection />
      <BuyFeaturesSection />
      <BuyRequirementsSection />
      <BuyCtaSection />
    </PageLayout>
  )
}
