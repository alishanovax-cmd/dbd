import { assets } from '../../assets'
import { imageDimensions } from '../../assets/imageDimensions'

export function HeroBackground() {
  return (
    <div className="hero-section__bg" aria-hidden="true">
      <img
        className="hero-section__bg-media"
        src={assets.heroHuntressPoster}
        alt=""
        width={imageDimensions.heroHuntressPoster.width}
        height={imageDimensions.heroHuntressPoster.height}
        decoding="async"
        fetchPriority="low"
      />
      <div className="hero-section__bg-overlay" />
      <div className="hero-section__bg-vignette" />
    </div>
  )
}
