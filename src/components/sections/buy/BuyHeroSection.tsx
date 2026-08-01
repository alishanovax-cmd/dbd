import { assets } from '../../../assets'
import { getImageDimensions } from '../../../assets/imageDimensions'
import { buyPage } from '../../../data/buyContent'
import { BackgroundOrbs } from '../../ui/BackgroundOrbs'
import { Badge } from '../../ui/Badge'
import { ScrollReveal } from '../../ui/ScrollReveal'
import { SectionHeading } from '../../ui/SectionHeading'
import { VideoHero } from '../../ui/VideoHero'

const galleryImages = [
  { src: assets.atmosphere1, alt: 'DBD ESP wallhack — in-match survivor tracking' },
  { src: assets.cheatMenu, alt: 'DBD cheat menu — ESP and exploit overlay' },
] as const

export function BuyHeroSection() {
  const { hero } = buyPage

  return (
    <section className="buy-hero">
      <VideoHero className="buy-hero__video" />
      <BackgroundOrbs />
      <div className="buy-hero__glow grid-overlay" aria-hidden="true" />

      <div className="container buy-hero__inner">
        <ScrollReveal>
          <p className="buy-hero__eyebrow">{hero.eyebrow}</p>
          <SectionHeading as="h1" className="buy-hero__title">
            <span className="gradient-text">{hero.titleLine1}</span>
            <span className="buy-hero__title-line2">{hero.titleLine2}</span>
          </SectionHeading>
          <p className="buy-hero__desc">{hero.description}</p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="buy-hero__gallery">
            {galleryImages.map((img) => (
              <figure key={img.src} className="buy-hero__gallery-item">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={getImageDimensions(img.src).width}
                  height={getImageDimensions(img.src).height}
                  className="rounded-image"
                />
              </figure>
            ))}
          </div>
          <p className="buy-hero__caption">{hero.galleryCaption}</p>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="buy-hero__pills">
            {hero.statusPills.map((pill) => (
              <Badge key={pill.label} pulse={'pulse' in pill && pill.pulse}>
                {pill.label}
              </Badge>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
