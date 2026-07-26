import { useState } from 'react'
import { assets } from '../../assets'
import { imageDimensions } from '../../assets/imageDimensions'

export function HeroBackground() {
  const [usePoster, setUsePoster] = useState(false)

  return (
    <div className="hero-section__bg" aria-hidden="true">
      {!usePoster ? (
        <video
          className="hero-section__bg-media"
          src={assets.heroVideo}
          poster={assets.heroHuntressPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setUsePoster(true)}
        />
      ) : (
        <img
          className="hero-section__bg-media"
          src={assets.heroHuntressPoster}
          alt=""
          width={imageDimensions.heroHuntressPoster.width}
          height={imageDimensions.heroHuntressPoster.height}
        />
      )}
      <div className="hero-section__bg-overlay" />
      <div className="hero-section__bg-vignette" />
    </div>
  )
}
