import { assets } from '../../../assets'
import { getImageDimensions, imageDimensions } from '../../../assets/imageDimensions'
import { cheatsPage } from '../../../data/cheatsContent'
import { siteConfig } from '../../../data/navigation'
import { BackgroundOrbs } from '../../ui/BackgroundOrbs'
import { Badge } from '../../ui/Badge'
import { Button } from '../../ui/Button'
import { InlineVideo } from '../../ui/InlineVideo'
import { ScrollReveal } from '../../ui/ScrollReveal'
import { SectionHeading } from '../../ui/SectionHeading'
import { VideoHero } from '../../ui/VideoHero'

export function CheatsHeroSection() {
  const { hero } = cheatsPage

  return (
    <section className="page-hero page-hero--cheats">
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
              See pricing
            </Button>
            <Button href="/reviews" variant="ghost">
              Feedback hub
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="page-hero__gallery page-hero__gallery--duo">
            <figure className="page-hero__gallery-item">
              <img
                src={assets.cheatMenu}
                alt="DBD cheat menu — ESP and exploit modules"
                loading="eager"
                width={imageDimensions.cheatMenu.width}
                height={imageDimensions.cheatMenu.height}
                className="rounded-image"
              />
            </figure>
            <figure className="page-hero__gallery-item">
              <img
                src={assets.atmosphere1}
                alt="DBD ESP wallhack in match"
                loading="lazy"
                width={imageDimensions.atmosphere1.width}
                height={imageDimensions.atmosphere1.height}
                className="rounded-image"
              />
            </figure>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={140}>
          <div className="page-hero__pills">
            {hero.statusPills.map((pill) => (
              <Badge key={pill.label} pulse={'pulse' in pill && pill.pulse}>
                {pill.label}
              </Badge>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export function CheatsCategoriesSection() {
  const { categories } = cheatsPage

  return (
    <section className="cheats-modules home-section">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">{categories.label}</span>
          <SectionHeading>{categories.title}</SectionHeading>
          <span className="accent-line" />
          <p className="body-text cheats-modules__intro">{categories.subtitle}</p>
        </ScrollReveal>

        <div className="cheats-modules__grid">
          {categories.groups.map((group, index) => (
            <ScrollReveal key={group.id} delay={index * 70}>
              <article className="cheats-module-card glass-card creative-card">
                <figure className="cheats-module-card__media">
                  <img
                    src={group.image}
                    alt={group.imageAlt}
                    loading="lazy"
                    decoding="async"
                    width={getImageDimensions(group.image).width}
                    height={getImageDimensions(group.image).height}
                    className="cheats-module-card__image"
                  />
                </figure>
                <div className="cheats-module-card__body">
                  <div className="cheats-module-card__head">
                    <span className="cheats-module-card__icon" aria-hidden="true">
                      {group.icon}
                    </span>
                    <h3 className="cheats-module-card__title">{group.title}</h3>
                  </div>
                  <p className="body-text cheats-module-card__desc">{group.description}</p>
                  <ul className="cheats-module-card__tags">
                    {group.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <Button href={siteConfig.checkoutUrl} external className="cheats-module-card__buy">
                    Buy {group.title}
                  </Button>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CheatsHighlightsSection() {
  const { highlights } = cheatsPage

  return (
    <section className="cheats-highlights home-section">
      <div className="container cheats-highlights__grid">
        <ScrollReveal className="cheats-highlights__media">
          <InlineVideo
            poster={assets.atmosphere1}
            label="DBD cheat modules — live ESP and wallhack preview"
          />
        </ScrollReveal>
        <ScrollReveal className="cheats-highlights__copy" delay={100}>
          <span className="section-label">{highlights.label}</span>
          <SectionHeading>{highlights.title}</SectionHeading>
          <span className="accent-line" />
          <ul className="cheats-highlights__list">
            {highlights.items.map((item) => (
              <li key={item.title} className="cheats-highlights__item glass-card">
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}

export function CheatsCtaSection() {
  const { cta } = cheatsPage

  return (
    <section className="page-cta home-section">
      <div className="container page-cta__inner glass-card">
        <ScrollReveal>
          <SectionHeading as="h2">{cta.title}</SectionHeading>
          <p className="body-text">{cta.description}</p>
          <div className="page-cta__actions">
            <Button href={siteConfig.checkoutUrl} external>
              Buy Now — $35
            </Button>
            <Button href={siteConfig.checkoutUrl} external variant="ghost">
              See pricing
            </Button>
            <Button href="/faq" variant="ghost">
              FAQ
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
