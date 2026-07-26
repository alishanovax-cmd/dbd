import { happyClients } from '../../data/content'
import { siteConfig } from '../../data/navigation'
import { Button } from '../ui/Button'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'
import { StatCard } from '../ui/StatCard'

export function HappyClientsSection() {
  return (
    <section className="home-section happy-section">
      <div className="container happy-section__inner">
        <ScrollReveal>
          <span className="section-label">{happyClients.label}</span>
          <SectionHeading className="happy-section__title">
            {happyClients.title[0]}{' '}
            <span className="gradient-text">{happyClients.title[1]}</span>
          </SectionHeading>
          <p className="body-text happy-section__desc">{happyClients.description}</p>
        </ScrollReveal>

        <div className="happy-section__stats stats-row-grid">
          {happyClients.stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 60}>
              <StatCard value={stat.value} label={stat.label} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={120}>
          <Button href={siteConfig.checkoutUrl} external>
            Shop Now
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
