import { lazy, Suspense, type ReactNode } from 'react'
import { PageLayout } from '../components/layout/PageLayout'
import { SeoHead } from '../components/seo/SeoHead'
import { globalSchemas, webPageSchema } from '../components/seo/schema'
import { HeroSection } from '../components/sections/HeroSection'
import { SectionDivider } from '../components/ui/SectionDivider'
import { pageSeo } from '../data/seo'
import { siteConfig } from '../data/navigation'

const WhyChooseSection = lazy(() =>
  import('../components/sections/HeroSection').then((m) => ({ default: m.WhyChooseSection })),
)
const ProductInfoSection = lazy(() =>
  import('../components/sections/ProductInfoSection').then((m) => ({ default: m.ProductInfoSection })),
)
const CheatOverviewSection = lazy(() =>
  import('../components/sections/CheatOverviewSection').then((m) => ({ default: m.CheatOverviewSection })),
)
const FeaturesSection = lazy(() =>
  import('../components/sections/FeaturesSection').then((m) => ({ default: m.FeaturesSection })),
)
const TrustSection = lazy(() =>
  import('../components/sections/InfoSections').then((m) => ({ default: m.TrustSection })),
)
const CoverageSection = lazy(() =>
  import('../components/sections/InfoSections').then((m) => ({ default: m.CoverageSection })),
)
const SupportSection = lazy(() =>
  import('../components/sections/InfoSections').then((m) => ({ default: m.SupportSection })),
)
const ExperienceSection = lazy(() =>
  import('../components/sections/InfoSections').then((m) => ({ default: m.ExperienceSection })),
)
const ClusterLinksSection = lazy(() =>
  import('../components/sections/ClusterLinksSection').then((m) => ({ default: m.ClusterLinksSection })),
)
const VisualsSection = lazy(() =>
  import('../components/sections/VisualsSection').then((m) => ({ default: m.VisualsSection })),
)
const HowItWorksSection = lazy(() =>
  import('../components/sections/HowItWorksSection').then((m) => ({ default: m.HowItWorksSection })),
)
const HappyClientsSection = lazy(() =>
  import('../components/sections/HappyClientsSection').then((m) => ({ default: m.HappyClientsSection })),
)

function LazyBelowFold({ children }: { children: ReactNode }) {
  return <Suspense fallback={null}>{children}</Suspense>
}

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
      <LazyBelowFold>
        <WhyChooseSection />
        <ProductInfoSection />
      </LazyBelowFold>
      <SectionDivider variant="dots" />
      <LazyBelowFold>
        <CheatOverviewSection />
        <FeaturesSection />
        <TrustSection />
        <CoverageSection />
      </LazyBelowFold>
      <SectionDivider variant="slash" />
      <LazyBelowFold>
        <SupportSection />
        <ExperienceSection />
        <ClusterLinksSection />
        <VisualsSection />
        <HowItWorksSection />
        <HappyClientsSection />
      </LazyBelowFold>
    </PageLayout>
  )
}
