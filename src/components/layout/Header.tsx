import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { homeNavLink, navLinks, siteConfig } from '../../data/navigation'
import { BrandLogo } from '../ui/BrandLogo'
import { Button } from '../ui/Button'
import { DiscordIcon } from '../ui/DiscordIcon'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className="site-header z-50 border-b"
      style={{
        borderColor: 'var(--border-ghost)',
        background: '#060409ee',
      }}
    >
      <div className="container flex h-[72px] items-center justify-between gap-4">
        <Link
          to="/"
          className="site-logo"
          onClick={() => setMenuOpen(false)}
          aria-label={`${homeNavLink.label} home`}
        >
          <BrandLogo />
        </Link>

        <nav className="site-header__nav hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) =>
            'external' in link && link.external ? (
              <a
                key={link.label}
                href={link.href}
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
              >
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="site-header__actions flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="site-header__lang hidden rounded-md border px-3 py-2 sm:inline-flex"
            style={{ borderColor: 'var(--border-dim)', color: 'var(--text-secondary)' }}
            aria-label="Select language"
          >
            EN
          </button>
          <a
            href={siteConfig.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="site-header__discord hidden sm:inline-flex"
            aria-label="Join Discord"
          >
            <DiscordIcon className="site-header__discord-icon" />
          </a>
          <Button
            href={siteConfig.checkoutUrl}
            external
            className="site-header__btn site-header__btn--buy hidden !px-4 !py-2 !text-sm sm:inline-flex"
          >
            Buy Now
          </Button>
          <button
            type="button"
            className="mobile-menu-btn md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="mobile-nav md:hidden" aria-label="Mobile navigation">
          {navLinks.map((link) =>
            'external' in link && link.external ? (
              <a
                key={link.label}
                href={link.href}
                className="mobile-nav__link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === '/'}
                className={({ isActive }) => `mobile-nav__link ${isActive ? 'is-active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ),
          )}
          <Button
            href={siteConfig.checkoutUrl}
            external
            className="mobile-nav__buy"
          >
            Buy Now
          </Button>
          <Button
            href={siteConfig.discordUrl}
            external
            variant="ghost"
            className="mobile-nav__discord"
          >
            Join Discord
          </Button>
        </nav>
      )}
    </header>
  )
}
