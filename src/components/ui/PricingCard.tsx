import { useState } from 'react'
import { pricingPlans } from '../../data/content'
import { siteConfig } from '../../data/navigation'
import { Button } from './Button'

interface PricingCardProps {
  trustBadges: readonly { icon: string; label: string }[]
}

export function PricingCard({ trustBadges }: PricingCardProps) {
  const [selected, setSelected] = useState<(typeof pricingPlans)[number]['id']>('monthly')
  const plan = pricingPlans.find((p) => p.id === selected) ?? pricingPlans[0]

  return (
    <div className="pricing-card glass-card">
      <p className="pricing-card__label">Pricing &amp; Delivery</p>

      <div className="pricing-card__plans">
        {pricingPlans.map((p) => (
          <button
            key={p.id}
            type="button"
            className={`pricing-card__plan ${selected === p.id ? 'is-selected' : ''}`}
            onClick={() => setSelected(p.id)}
          >
            <span className="pricing-card__plan-badge">{p.badge}</span>
            <span className="pricing-card__plan-name">{p.label}</span>
            <span className="pricing-card__plan-duration">{p.duration}</span>
            <span className="pricing-card__plan-price">
              ${p.price}
              <small>{p.period}</small>
            </span>
          </button>
        ))}
      </div>

      <div className="pricing-card__total">
        <span className="pricing-card__amount">${plan.price}</span>
        <span className="pricing-card__period">{plan.period.trim()}</span>
      </div>

      <Button href={siteConfig.checkoutUrl} external className="pricing-card__cta">
        Buy Now — ${plan.price}
      </Button>

      <ul className="pricing-card__trust">
        {trustBadges.map((badge) => (
          <li key={badge.label}>
            <span aria-hidden="true">{badge.icon}</span> {badge.label}
          </li>
        ))}
      </ul>

      <p className="pricing-card__note">Secure payment · Instant loader access</p>
    </div>
  )
}
