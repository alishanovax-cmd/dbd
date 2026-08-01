import { PageLayout } from '../components/layout/PageLayout'
import { SeoHead } from '../components/seo/SeoHead'
import { breadcrumbSchema, cheatsItemListSchema, faqSchema, globalSchemas, productSchema, softwareApplicationSchema, webPageSchema } from '../components/seo/schema'
import {
  CheatOverviewSection,
  ClusterLinksSection,
  CoverageSection,
  ExperienceSection,
  FeaturesSection,
  HappyClientsSection,
  HomeSeoFaqSection,
  HomeSeoIntroSection,
  HeroSection,
  HowItWorksSection,
  ProductInfoSection,
  SupportSection,
  TrustSection,
  VisualsSection,
  WhyChooseSection,
} from '../components/sections'
import { SectionDivider } from '../components/ui/SectionDivider'
import { pageSeo } from '../data/seo'
import { siteConfig } from '../data/navigation'

export function HomePage() {
  return (
    <PageLayout>
      <SeoHead
        seo={pageSeo.home}
        jsonLd={[
          ...globalSchemas(),
          breadcrumbSchema([{ name: 'DBD Cheats', path: '/' }]),
          webPageSchema(pageSeo.home.title, pageSeo.home.description, pageSeo.home.path, {
            dateModified: siteConfig.lastUpdated,
          }),
          productSchema(),
          softwareApplicationSchema(),
          faqSchema(),
          cheatsItemListSchema(),
        ]}
      />
      <HeroSection />
      <SectionDivider variant="wave" />
      <HomeSeoIntroSection />
      <WhyChooseSection />
      <ProductInfoSection />
      <SectionDivider variant="dots" />
      <CheatOverviewSection />
      <FeaturesSection />
      <TrustSection />
      <CoverageSection />
      <SectionDivider variant="slash" />
      <SupportSection />
      <ExperienceSection />
      <HomeSeoFaqSection />
      <ClusterLinksSection />
      <VisualsSection />
      <HowItWorksSection />
      <HappyClientsSection />
    </PageLayout>
  )
}
