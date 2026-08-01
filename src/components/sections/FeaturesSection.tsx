import { assets } from '../../assets'
import { featureCards } from '../../data/content'
import { InlineVideo } from '../ui/InlineVideo'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

const cardIcons = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
    </svg>
  ),
] as const

export function FeaturesSection() {
  return (
    <section id="features" className="home-section features-stack features-stack--creative">
      <div className="features-stack__bg-text" aria-hidden="true">
        FEATURES
      </div>
      <div className="container">
        <ScrollReveal className="features-stack__header">
          <span className="section-label">Features</span>
          <SectionHeading>
            Built for every cheat user<span className="heading-dot">.</span>
          </SectionHeading>
          <span className="accent-line accent-line--wide" />
          <p className="body-text features-stack__intro">
            Watch the external overlay in action — ESP, wallhack, and exploit modules running live in DBD.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={60}>
          <figure className="features-stack__video-frame">
            <div className="features-stack__video-showcase">
              <div className="features-stack__video-glow" aria-hidden="true" />
              <div className="features-stack__video-border">
                <InlineVideo
                  className="features-stack__video"
                  poster={assets.atmosphere1}
                  label="DBD cheat features preview — ESP and wallhack demo"
                />
                <div className="features-stack__video-scan" aria-hidden="true" />
              </div>
              <div className="features-stack__video-badge glass-card">
                <span className="features-stack__video-badge-dot" />
                Live ESP preview
              </div>
            </div>
            <figcaption className="features-stack__video-caption">
              External cheat overlay — ESP, wallhack, and exploit modules running in Dead by Daylight.
            </figcaption>
          </figure>
        </ScrollReveal>

        <div className="features-stack__cards">
          {featureCards.map((card, index) => (
            <ScrollReveal key={card.title} delay={index * 80 + 100}>
              <article className="feature-stack-card glass-card creative-card">
                <span className="creative-card__index">{String(index + 1).padStart(2, '0')}</span>
                <div className="creative-card__icon">{cardIcons[index]}</div>
                <h3 className="feature-stack-card__title">{card.title}</h3>
                {card.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="body-text">
                    {p}
                  </p>
                ))}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
