import { Breadcrumbs } from '../components/layout/Breadcrumbs'
import { PageLayout } from '../components/layout/PageLayout'
import { SeoHead } from '../components/seo/SeoHead'
import { breadcrumbSchema, faqSchema, globalSchemas, webPageSchema } from '../components/seo/schema'
import { FaqCtaSection, FaqHeroSection, FaqListSection } from '../components/sections/faq'
import { homeNavLink } from '../data/navigation'
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
            { name: homeNavLink.label, path: homeNavLink.href },
            { name: 'DBD Cheats FAQ', path: '/faq' },
          ]),
          faqSchema(),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: homeNavLink.label, href: homeNavLink.href },
          { label: 'DBD Cheats FAQ' },
        ]}
      />
      <FaqHeroSection />
      <FaqListSection />
      <FaqCtaSection />
    </PageLayout>
  )
}
