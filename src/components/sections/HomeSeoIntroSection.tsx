import { Link } from 'react-router-dom'
import { homeSeoIntro } from '../../data/content'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

export function HomeSeoIntroSection() {
  return (
    <section id="dbd-cheats-guide" className="home-section home-seo-intro">
      <div className="container home-seo-intro__inner">
        <ScrollReveal>
          <span className="section-label">{homeSeoIntro.label}</span>
          <SectionHeading as="h2">{homeSeoIntro.title}</SectionHeading>
          <span className="accent-line" />
          {homeSeoIntro.paragraphs.map((p) => (
            <p key={p.slice(0, 48)} className="body-text">
              {p}
            </p>
          ))}
          <p className="body-text home-seo-intro__links">
            <Link to="/cheats">DBD cheat modules</Link>
            {' · '}
            <Link to="/buy">Pricing &amp; buy</Link>
            {' · '}
            <Link to="/blog/best-dbd-cheat-2026">Best DBD cheats 2026</Link>
            {' · '}
            <Link to="/faq">DBD cheats FAQ</Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
