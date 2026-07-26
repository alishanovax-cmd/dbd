import { Breadcrumbs } from '../components/layout/Breadcrumbs'
import { PageLayout } from '../components/layout/PageLayout'
import { SeoHead } from '../components/seo/SeoHead'
import { breadcrumbSchema, faqSchema, globalSchemas, webPageSchema } from '../components/seo/schema'
import { FaqCtaSection, FaqHeroSection, FaqListSection } from '../components/sections/faq'
import { pageSeo } from '../data/seo'

export function FaqPage() {
  return (
    <PageLayout>
      <SeoHead
        seo={pageSeo.faq}
        jsonLd={[
          ...globalSchemas(),
          webPageSchema(pageSeo.faq.title, pageSeo.faq.description, pageSeo.faq.path),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Zadeyo DBD Cheat FAQ', path: '/faq' },
          ]),
          faqSchema(),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'FAQ' },
        ]}
      />
      <FaqHeroSection />
      <FaqListSection />
      <FaqCtaSection />
    </PageLayout>
  )
}
