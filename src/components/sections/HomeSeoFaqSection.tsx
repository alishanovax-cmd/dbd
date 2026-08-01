import { Link } from 'react-router-dom'
import { faqs } from '../../data/content'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

const homeFaqs = faqs.slice(0, 6)

export function HomeSeoFaqSection() {
  return (
    <section id="dbd-cheats-faq" className="faq-page__list home-section" aria-labelledby="home-faq-heading">
      <div className="container faq-page__list-inner">
        <ScrollReveal>
          <span className="section-label">DBD Cheats FAQ</span>
          <SectionHeading id="home-faq-heading">
            DBD Cheats — Aimbot, ESP, Wallhack &amp; Safety
          </SectionHeading>
          <span className="accent-line" />
          <p className="body-text faq-page__intro">
            DBD cheats for Dead by Daylight on PC — external aimbot, ESP, wallhack, World ESP, Auto Skill Check,
            HWID spoofer, and StreamProof. Read quick answers below, then explore{' '}
            <Link to="/cheats">cheat modules</Link>, <Link to="/buy">pricing</Link>, and the{' '}
            <Link to="/blog/best-dbd-cheat-2026">best DBD cheats guide</Link>.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <div className="home-seo-faq">
            {homeFaqs.map((item) => (
              <article key={item.question} className="home-seo-faq__item">
                <h3 className="home-seo-faq__question">{item.question}</h3>
                <p className="body-text home-seo-faq__answer">{item.answer}</p>
              </article>
            ))}
          </div>
          <p className="body-text home-seo-faq__more">
            <Link to="/faq">Full DBD cheats FAQ</Link>
            {' · '}
            <Link to="/blog/dbd-esp-guide">ESP setup guide</Link>
            {' · '}
            <Link to="/blog/hwid-spoofer-explained">HWID spoofer explained</Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
