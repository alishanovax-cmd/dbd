import { useState } from 'react'
import { assets } from '../../assets'
import { imageDimensions } from '../../assets/imageDimensions'
import { playerEspFeatures, visualsSection, worldEspFeatures } from '../../data/content'
import { FeatureCard } from '../ui/FeatureCard'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

export function VisualsSection() {
  const [role, setRole] = useState<'survivor' | 'killer'>('survivor')

  return (
    <section className="home-section visuals-section">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">{visualsSection.label}</span>
          <SectionHeading>{visualsSection.title}</SectionHeading>
          <span className="accent-line" />
          {visualsSection.intro.map((p) => (
            <p key={p.slice(0, 40)} className="body-text">
              {p}
            </p>
          ))}
        </ScrollReveal>

        <ScrollReveal delay={60}>
          <div className="visuals-section__toggle" role="tablist" aria-label="ESP role view">
            <button
              type="button"
              role="tab"
              aria-selected={role === 'survivor'}
              className={role === 'survivor' ? 'is-active' : ''}
              onClick={() => setRole('survivor')}
            >
              Survivor View
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={role === 'killer'}
              className={role === 'killer' ? 'is-active' : ''}
              onClick={() => setRole('killer')}
            >
              Killer View
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <img
            src={assets.espWallhack}
            alt="DBD ESP wallhack preview — survivor and killer overlay in Dead by Daylight"
            loading="lazy"
            decoding="async"
            width={imageDimensions.espWallhack.width}
            height={imageDimensions.espWallhack.height}
            className="rounded-image visuals-section__preview"
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h3 className="visuals-section__subtitle">{visualsSection.playerTitle}</h3>
          <p className="visuals-section__role-note">
            {role === 'survivor'
              ? 'Survivor ESP profile — Killer wallhack, objective tags, and teammate positions.'
              : 'Killer ESP profile — Survivor boxes, held items, and escape route intel.'}
          </p>
        </ScrollReveal>

        <div className="visuals-section__grid">
          {playerEspFeatures.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 50}>
              <FeatureCard title={feature.title} description={feature.description} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <h3 className="visuals-section__subtitle">{visualsSection.worldTitle}</h3>
          <p className="body-text">{visualsSection.worldIntro}</p>
          <ul className="visuals-section__list">
            {worldEspFeatures.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="body-text visuals-section__outro">{visualsSection.worldOutro}</p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="visuals-section__misc glass-card">
            <span className="section-label">Misc</span>
            <SectionHeading as="h3">{visualsSection.miscTitle}</SectionHeading>
            <span className="accent-line" />
            <p className="body-text">{visualsSection.miscIntro}</p>
            <ul className="visuals-section__list">
              <li>Customizable ESP Colors – Tune every ESP color to stay readable in fog, darkness, or busy chases.</li>
            </ul>
            <p className="body-text">{visualsSection.miscOutro}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
