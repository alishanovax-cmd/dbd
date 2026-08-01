import { faqs } from '../../../data/content'
import { faqPage } from '../../../data/faqContent'
import { siteConfig } from '../../../data/navigation'
import { BackgroundOrbs } from '../../ui/BackgroundOrbs'
import { Button } from '../../ui/Button'
import { FAQAccordion } from '../../ui/FAQAccordion'
import { ScrollReveal } from '../../ui/ScrollReveal'
import { SectionHeading } from '../../ui/SectionHeading'
import { VideoHero } from '../../ui/VideoHero'

export function FaqHeroSection() {
  const { hero } = faqPage

  return (
    <section className="page-hero page-hero--faq">
      <VideoHero className="page-hero__video" />
      <BackgroundOrbs />
      <div className="page-hero__glow grid-overlay" aria-hidden="true" />

      <div className="container page-hero__inner">
        <ScrollReveal>
          <p className="page-hero__eyebrow">{hero.eyebrow}</p>
          <SectionHeading as="h1" className="page-hero__title">
            <span className="gradient-text">{hero.titleLine1}</span>
            <span className="page-hero__title-line2">{hero.titleLine2}</span>
          </SectionHeading>
          <p className="page-hero__desc">{hero.description}</p>
          <div className="page-hero__actions">
            <Button href={siteConfig.checkoutUrl} external>
              Purchase Now
            </Button>
            <Button href={siteConfig.checkoutUrl} external variant="ghost">
              Pricing &amp; requirements
            </Button>
            <Button href={siteConfig.supportUrl} external variant="ghost">
              Get support
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export function FaqListSection() {
  const { list } = faqPage

  return (
    <section id="faq" className="faq-page__list home-section">
      <div className="container faq-page__list-inner">
        <ScrollReveal>
          <span className="section-label">{list.label}</span>
          <SectionHeading>{list.title}</SectionHeading>
          <span className="accent-line" />
          <p className="body-text faq-page__intro">{list.subtitle}</p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <FAQAccordion items={faqs} />
        </ScrollReveal>
      </div>
    </section>
  )
}

export function FaqCtaSection() {
  const { cta } = faqPage

  return (
    <section className="faq-page__cta home-section">
      <div className="container faq-page__cta-inner glass-card">
        <ScrollReveal>
          <SectionHeading as="h2">{cta.title}</SectionHeading>
          <p className="body-text">{cta.description}</p>
          <div className="faq-page__cta-actions">
            <Button href={siteConfig.discordUrl} external>
              Join Discord
            </Button>
            <Button href={siteConfig.supportUrl} external variant="ghost">
              Support portal
            </Button>
            <Button href={siteConfig.checkoutUrl} external variant="ghost">
              Buy page
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
