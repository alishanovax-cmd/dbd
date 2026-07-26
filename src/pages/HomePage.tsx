import { PageLayout } from '../components/layout/PageLayout'
import { SeoHead } from '../components/seo/SeoHead'
import { globalSchemas, webPageSchema } from '../components/seo/schema'
import { SectionDivider } from '../components/ui/SectionDivider'
import {
  CheatOverviewSection,
  ClusterLinksSection,
  CoverageSection,
  ExperienceSection,
  FeaturesSection,
  HappyClientsSection,
  HeroSection,
  HowItWorksSection,
  ProductInfoSection,
  SupportSection,
  TrustSection,
  VisualsSection,
  WhyChooseSection,
} from '../components/sections'
import { pageSeo } from '../data/seo'
import { siteConfig } from '../data/navigation'

export function HomePage() {
  return (
    <PageLayout>
      <SeoHead
        seo={pageSeo.home}
        jsonLd={[
          ...globalSchemas(),
          webPageSchema(pageSeo.home.title, pageSeo.home.description, pageSeo.home.path, {
            dateModified: siteConfig.lastUpdated,
          }),
        ]}
      />
      <HeroSection />
      <SectionDivider variant="wave" />
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
      <ClusterLinksSection />
      <VisualsSection />
      <HowItWorksSection />
      <HappyClientsSection />
    </PageLayout>
  )
}
