import { Link } from 'react-router-dom'
import { clusterLinks } from '../../data/content'
import { siteConfig } from '../../data/navigation'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

export function ClusterLinksSection() {
  return (
    <section className="home-section cluster-section">
      <div className="container cluster-section__inner">
        <ScrollReveal>
          <SectionHeading className="cluster-section__title">
            Zadeyo DBD Cheat Resources
          </SectionHeading>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <ul className="cluster-section__list">
            {clusterLinks.map((link) => (
              <li key={link.href}>
                {'external' in link && link.external ? (
                  <a href={siteConfig.checkoutUrl} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.href}>{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}
