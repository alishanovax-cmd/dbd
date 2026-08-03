import { Link } from 'react-router-dom'
import { homeSeoIntro } from '../../data/content'
import { siteConfig } from '../../data/navigation'
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
          <p className="body-text">{homeSeoIntro.paragraphs[0]}</p>
          <p className="body-text">
            Whether you search for{' '}
            <Link to="/">DBD cheats</Link>, <Link to="/cheats">Dead by Daylight cheats</Link>, or{' '}
            <Link to="/blog/dbd-esp-guide">ESP wallhack</Link> tools, the same stack applies: Steam,
            Epic, and Game Pass on Windows 10/11, patch-day loader updates, and 24/7 Discord support.
            Start with the <Link to="/blog/best-dbd-cheat-2026">best DBD cheats</Link> comparison
            guide or{' '}
            <a href={siteConfig.checkoutUrl} target="_blank" rel="noopener noreferrer">
              buy DBD cheats
            </a>{' '}
            when you are ready.
          </p>
          <p className="body-text home-seo-intro__links">
            <Link to="/cheats">DBD cheat modules</Link>
            {' · '}
            <a href={siteConfig.checkoutUrl} target="_blank" rel="noopener noreferrer">
              Pricing &amp; buy
            </a>
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
