import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { footerColumns, footerKeywordLinks, officialExternalLinks, siteConfig } from '../../data/navigation'
import { BrandLogo } from '../ui/BrandLogo'
import { Button } from '../ui/Button'
import { ShareButtons } from '../ui/ShareButtons'

function FooterLink({
  href,
  external,
  children,
}: {
  href: string
  external?: boolean
  children: ReactNode
}) {
  const className = 'site-footer__link'

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        <span className="site-footer__link-text">{children}</span>
        <span className="site-footer__link-arrow" aria-hidden="true">
          ↗
        </span>
      </a>
    )
  }

  return (
    <Link to={href} className={className}>
      <span className="site-footer__link-text">{children}</span>
      <span className="site-footer__link-arrow" aria-hidden="true">
        →
      </span>
    </Link>
  )
}

const footerStats = [
  { value: '33+', label: 'Cheat features' },
  { value: '$35', label: 'Per month' },
  { value: '24/7', label: 'Discord support' },
  { value: 'External', label: 'Undetected mode' },
] as const

export function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__glow site-footer__glow--left" aria-hidden="true" />
      <div className="site-footer__glow site-footer__glow--right" aria-hidden="true" />
      <div className="site-footer__grid grid-overlay" aria-hidden="true" />
      <div className="site-footer__slash" aria-hidden="true" />

      <div className="container site-footer__inner">
        <section className="site-footer__hero glass-card" aria-labelledby="footer-cta-heading">
          <div className="site-footer__hero-frame" aria-hidden="true" />
          <div className="site-footer__hero-head">
            <Link to="/" className="site-logo" aria-label="Zadeyo home">
              <BrandLogo className="brand-logo--footer" />
            </Link>
          </div>
          <div className="site-footer__hero-grid">
            <div className="site-footer__hero-copy">
              <span className="section-label site-footer__eyebrow">Dead by Daylight · Private External Cheat</span>
              <h2 id="footer-cta-heading" className="site-footer__tagline gradient-text">
                {siteConfig.tagline} for DBD
              </h2>
              <p className="site-footer__pitch">
                Zadeyo private external cheat for Dead by Daylight — World ESP, Box ESP, Auto Skill Check,
                SpeedHack, Cosmetic Unlocker, HWID Spoofer, and StreamProof. Instant loader delivery on
                Zadeyo.
              </p>
              <div className="site-footer__stats">
                {footerStats.map((stat) => (
                  <div key={stat.label} className="site-footer__stat">
                    <span className="site-footer__stat-value">{stat.value}</span>
                    <span className="site-footer__stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="site-footer__cta-actions">
              <Button href={siteConfig.checkoutUrl} external>
                Purchase Now — $35/mo
              </Button>
              <Button href={siteConfig.checkoutUrl} external variant="ghost">
                See Pricing & Features
              </Button>
              <Button href={siteConfig.discordUrl} external variant="ghost">
                Join Discord
              </Button>
              <Button href={siteConfig.supportUrl} external variant="ghost">
                Get Support
              </Button>
            </div>
          </div>
        </section>

        <nav className="site-footer__keywords" aria-label="DBD cheat features and guides">
          <span className="site-footer__keywords-label">Explore</span>
          <ul className="site-footer__keywords-list">
            {footerKeywordLinks.map((link) => (
              <li key={`${link.href}-${link.label}`}>
                {'external' in link && link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-footer__keyword-pill"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.href} className="site-footer__keyword-pill">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <nav className="site-footer__external" aria-label="Official external resources">
          <span className="site-footer__keywords-label">Official resources</span>
          <ul className="site-footer__keywords-list">
            {officialExternalLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-footer__keyword-pill"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__columns">
          {Object.values(footerColumns).map((column) => (
            <nav
              key={column.title}
              className="site-footer__column glass-card"
              aria-label={`${column.title} links`}
            >
              <div className="site-footer__column-head">
                <span className="site-footer__column-icon" aria-hidden="true">
                  {column.icon}
                </span>
                <h3 className="site-footer__column-title">{column.title}</h3>
              </div>
              <span className="site-footer__column-line" aria-hidden="true" />
              <ul className="site-footer__column-list">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href} external={'external' in link && link.external}>
                      {link.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="site-footer__trust glass-card">
          <p className="site-footer__trust-main">
            <strong>Zadeyo DBD Cheats</strong> — independent resource for Dead by Daylight external cheat
            features, setup guides, and pricing.             Purchases and refunds are handled on{' '}
            <a href={siteConfig.zadeyoUrl} target="_blank" rel="noopener noreferrer">
              zadeyo.com
            </a>{' '}
            via the{' '}
            <a href={siteConfig.checkoutUrl} target="_blank" rel="noopener noreferrer">
              official DBD product page
            </a>
            . Support via{' '}
            <a href={siteConfig.discordUrl} target="_blank" rel="noopener noreferrer">
              Zadeyo Discord
            </a>{' '}
            and the{' '}
            <a href={siteConfig.supportUrl} target="_blank" rel="noopener noreferrer">
              Zadeyo support portal
            </a>
            .
          </p>
          <p className="site-footer__trust-note">
            Not affiliated with Behaviour Interactive or Dead by Daylight. Cheat use may violate game
            terms of service. No ranking or safety guarantees — see{' '}
            <Link to="/faq">FAQ</Link> for limitations.
          </p>
        </div>

        <ShareButtons label="Share this page" compact className="site-footer__share" />

        <div className="site-footer__bar">
          <p className="site-footer__updated">
            Content last reviewed: <time dateTime="2026-07-24">{siteConfig.lastUpdated}</time>
          </p>
          <div className="site-footer__bar-divider" aria-hidden="true" />
          <p className="site-footer__copy">
            © {new Date().getFullYear()} {siteConfig.fullName}
          </p>
          <div className="site-footer__bar-divider" aria-hidden="true" />
          <Link to="/blog" className="site-footer__sitemap-link">
            All DBD cheat guides
          </Link>
        </div>
      </div>
    </footer>
  )
}
