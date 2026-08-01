import { reviewsPage } from '../../../data/reviewsContent'
import { siteConfig } from '../../../data/navigation'
import { BackgroundOrbs } from '../../ui/BackgroundOrbs'
import { Button } from '../../ui/Button'
import { ScrollReveal } from '../../ui/ScrollReveal'
import { SectionHeading } from '../../ui/SectionHeading'
import { VideoHero } from '../../ui/VideoHero'

export function ReviewsHeroSection() {
  const { hero } = reviewsPage

  return (
    <section className="page-hero page-hero--reviews">
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
              View on official store
            </Button>
            <Button href={siteConfig.discordUrl} external variant="ghost">
              Join Discord
            </Button>
            <Button href="/faq" variant="ghost">
              FAQ &amp; safety
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export function ReviewsChannelsSection() {
  const { channels } = reviewsPage

  return (
    <section className="reviews-channels home-section">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">{channels.label}</span>
          <SectionHeading>{channels.title}</SectionHeading>
          <span className="accent-line" />
          <p className="body-text reviews-channels__intro">{channels.subtitle}</p>
        </ScrollReveal>

        <div className="reviews-channels__grid">
          {channels.items.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 70}>
              <article className="reviews-channel-card glass-card creative-card">
                <h3 className="reviews-channel-card__title">{item.title}</h3>
                <p className="body-text">{item.description}</p>
                <Button href={item.href} external variant="ghost" className="reviews-channel-card__btn">
                  {item.cta}
                </Button>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ReviewsHonestySection() {
  const { honesty } = reviewsPage

  return (
    <section className="reviews-honesty home-section">
      <div className="container reviews-honesty__inner glass-card">
        <ScrollReveal>
          <span className="section-label">{honesty.label}</span>
          <SectionHeading as="h2">{honesty.title}</SectionHeading>
          <span className="accent-line" />
          <ul className="reviews-honesty__list">
            {honesty.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}

export function ReviewsCtaSection() {
  const { cta } = reviewsPage

  return (
    <section className="page-cta home-section">
      <div className="container page-cta__inner glass-card">
        <ScrollReveal>
          <SectionHeading as="h2">{cta.title}</SectionHeading>
          <p className="body-text">{cta.description}</p>
          <div className="page-cta__actions">
            <Button href={siteConfig.checkoutUrl} external>
              Go to checkout
            </Button>
            <Button href="/cheats" variant="ghost">
              View cheat modules
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
