import { assets } from '../../assets'
import { imageDimensions } from '../../assets/imageDimensions'
import { heroContent, whyChoose } from '../../data/content'
import { siteConfig } from '../../data/navigation'
import { HeroBackground } from '../ui/HeroBackground'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

export function HeroSection() {
  return (
    <section className="hero-section hero-section--split">
      <HeroBackground />
      <div className="hero-section__ambient grid-overlay" aria-hidden="true" />
      <div className="hero-section__glow hero-section__glow--left" aria-hidden="true" />

      <div className="container hero-section__layout">
        <div className="hero-section__split">
          <div className="hero-section__copy">
            <p className="hero-section__eyebrow">{heroContent.eyebrow}</p>
            <div className="hero-section__badges">
              {heroContent.badges.map((badge) => (
                <Badge key={badge} pulse={badge === 'Undetected'}>
                  {badge}
                </Badge>
              ))}
            </div>

            <SectionHeading as="h1" className="hero-section__title">
              <span className="hero-section__title-main gradient-text">
                {heroContent.titleLine1}
              </span>
            </SectionHeading>
            <p className="hero-section__subtitle">{heroContent.titleLine2}</p>

            <ul className="hero-section__chips" aria-label="Key cheat features">
              {heroContent.featureChips.map((chip) => (
                <li key={chip}>{chip}</li>
              ))}
            </ul>

            <p className="hero-section__desc">{heroContent.description}</p>
          </div>

          <div className="hero-section__visual">
            <div className="hero-visual">
              <div className="hero-visual__glow" aria-hidden="true" />
              <div className="hero-visual__frame">
                <span className="hero-visual__corner hero-visual__corner--tl" aria-hidden="true" />
                <span className="hero-visual__corner hero-visual__corner--tr" aria-hidden="true" />
                <span className="hero-visual__corner hero-visual__corner--bl" aria-hidden="true" />
                <span className="hero-visual__corner hero-visual__corner--br" aria-hidden="true" />
                <img
                  src={assets.cheatMenu}
                  alt="Zadeyo DBD cheat menu — ESP, wallhack, and exploit overlay"
                  className="hero-visual__image"
                  loading="eager"
                  decoding="sync"
                  fetchPriority="high"
                  width={imageDimensions.cheatMenu.width}
                  height={imageDimensions.cheatMenu.height}
                />
                <div className="hero-visual__scan" aria-hidden="true" />
              </div>
              <div className="hero-visual__badge hero-visual__badge--status glass-card">
                <span className="hero-visual__status-dot" />
                Undetected
              </div>
              <div className="hero-visual__badge hero-visual__badge--price glass-card">
                <span className="hero-visual__price-label">From</span>
                <span className="hero-visual__price-value">$35</span>
                <span className="hero-visual__price-period">/mo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-section__cta">
          <div className="hero-section__actions">
            <Button href={siteConfig.checkoutUrl} external>
              Purchase Now
            </Button>
            <Button href={siteConfig.checkoutUrl} external variant="ghost">
              See pricing &amp; features
            </Button>
            <Button href="#features" variant="ghost">
              See Features ↓
            </Button>
          </div>
          <p className="hero-section__compat">{heroContent.compatibility}</p>
        </div>
      </div>

      <a href="#why-choose" className="hero-section__scroll" aria-label="Scroll to features">
        <span className="hero-section__scroll-icon" />
      </a>
    </section>
  )
}

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="home-section why-choose-section">
      <div className="container why-choose-section__inner">
        <ScrollReveal className="why-choose-section__copy">
          <span className="section-label">{whyChoose.label}</span>
          <SectionHeading>{whyChoose.title}</SectionHeading>
          <span className="accent-line" />
          {whyChoose.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="body-text">
              {p}
            </p>
          ))}
        </ScrollReveal>
        <ScrollReveal className="why-choose-section__media" delay={100}>
          <img
            src={assets.whyChooseImage}
            alt="Dead by Daylight gameplay — why choose Zadeyo DBD cheats"
            loading="lazy"
            decoding="async"
            width={imageDimensions.whyChooseImage.width}
            height={imageDimensions.whyChooseImage.height}
            className="rounded-image why-choose-section__image"
          />
        </ScrollReveal>
      </div>
    </section>
  )
}
