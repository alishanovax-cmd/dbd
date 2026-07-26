import { buyPage } from '../../../data/buyContent'
import { systemRequirements } from '../../../data/content'
import { siteConfig } from '../../../data/navigation'
import { Button } from '../../ui/Button'
import { PricingCard } from '../../ui/PricingCard'
import { ScrollReveal } from '../../ui/ScrollReveal'
import { SectionHeading } from '../../ui/SectionHeading'

export function BuyFeaturesSection() {
  const { features, pricing } = buyPage

  return (
    <section id="buy-features" className="buy-features home-section">
      <div className="container buy-features__grid">
        <ScrollReveal className="buy-features__list-col">
          <span className="section-label">{features.label}</span>
          <SectionHeading>{features.title}</SectionHeading>
          <span className="accent-line" />
          <p className="body-text buy-features__subtitle">{features.subtitle}</p>

          <ul className="buy-features__list">
            {features.items.map((item) => (
              <li key={item.name} className="buy-features__item">
                <span className="buy-features__check" aria-hidden="true">
                  ✓
                </span>
                <div>
                  <strong>{item.name}</strong>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal className="buy-features__pricing-col" delay={100}>
          <PricingCard trustBadges={pricing.trustBadges} />
        </ScrollReveal>
      </div>
    </section>
  )
}

export function BuyRequirementsSection() {
  const { requirements } = buyPage

  return (
    <section className="buy-requirements home-section">
      <div className="container buy-requirements__inner">
        <ScrollReveal>
          <span className="section-label">{requirements.label}</span>
          <SectionHeading>{requirements.title}</SectionHeading>
          <span className="accent-line" />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <ul className="buy-requirements__list glass-card">
            {systemRequirements.map((req) => (
              <li key={req}>{req}</li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}

export function BuyCtaSection() {
  const { cta } = buyPage

  return (
    <section className="buy-cta home-section">
      <div className="container buy-cta__inner glass-card">
        <ScrollReveal>
          <SectionHeading as="h2">{cta.title}</SectionHeading>
          <p className="body-text">{cta.description}</p>
          <div className="buy-cta__actions">
            <Button href={siteConfig.checkoutUrl} external>
              Buy Now — $35
            </Button>
            <Button href="/faq" variant="ghost">
              Read FAQ
            </Button>
            <Button href={siteConfig.discordUrl} external variant="ghost">
              Join Discord Support
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
