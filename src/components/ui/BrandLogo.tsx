import { siteConfig } from '../../data/navigation'

type BrandLogoProps = {
  className?: string
}

export function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}${siteConfig.logoFile}`}
      alt=""
      aria-hidden="true"
      className={`brand-logo ${className}`.trim()}
      width={64}
      height={64}
      decoding="async"
    />
  )
}
