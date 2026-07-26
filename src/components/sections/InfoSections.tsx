import { assets } from '../../assets'
import { getImageDimensions, imageDimensions } from '../../assets/imageDimensions'
import {
  coverageSection,
  experienceSection,
  features,
  supportSection,
  trustSection,
} from '../../data/content'
import { siteConfig } from '../../data/navigation'
import { Button } from '../ui/Button'
import { FeatureTicker } from '../ui/FeatureTicker'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

interface TextSectionProps {
  label: string
  title: string
  paragraphs: readonly string[]
  reverse?: boolean
  image?: string
  imageAlt?: string
  belowCtaImage?: string
  belowCtaImageAlt?: string
  showCta?: boolean
  headingButton?: { label: string; href: string }
}

function TextSplitSection({
  label,
  title,
  paragraphs,
  reverse,
  image,
  imageAlt,
  belowCtaImage,
  belowCtaImageAlt,
  showCta,
  headingButton,
}: TextSectionProps) {
  return (
    <section
      className={`home-section split-section ${reverse ? 'split-section--reverse' : ''} ${!image ? 'split-section--text-only' : ''}`}
    >
      <div className="container split-section__grid">
        <ScrollReveal className="split-section__text">
          <span className="section-label">{label}</span>
          <div className="split-section__heading-row">
            {headingButton && (
              <Button href={headingButton.href} external className="split-section__heading-btn">
                {headingButton.label}
              </Button>
            )}
            <SectionHeading>{title}</SectionHeading>
          </div>
          <span className="accent-line" />
          {paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="body-text">
              {p}
            </p>
          ))}
          {showCta && (
            <div className="split-section__cta">
              <Button href={siteConfig.checkoutUrl} external>
                Purchase Now
              </Button>
              <Button href={siteConfig.discordUrl} external variant="ghost">
                Join Discord Support
              </Button>
            </div>
          )}
          {belowCtaImage && (
            <img
              src={belowCtaImage}
              alt={belowCtaImageAlt ?? title}
              loading="lazy"
              decoding="async"
              width={imageDimensions.trustMap.width}
              height={imageDimensions.trustMap.height}
              className="rounded-image split-section__below-cta-image"
            />
          )}
        </ScrollReveal>
        {image && (
          <ScrollReveal className="split-section__media" delay={100}>
            <img
              src={image}
              alt={imageAlt ?? title}
              loading="lazy"
              width={getImageDimensions(image).width}
              height={getImageDimensions(image).height}
              className="rounded-image"
            />
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}

export function TrustSection() {
  return (
    <TextSplitSection
      label={trustSection.label}
      title={trustSection.title}
      paragraphs={trustSection.paragraphs}
      belowCtaImage={assets.trustMap}
      belowCtaImageAlt="Dead by Daylight map overview — official Behaviour Interactive artwork"
      showCta
    />
  )
}

export function CoverageSection() {
  return (
    <section className="home-section coverage-section">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">{coverageSection.label}</span>
          <SectionHeading>{coverageSection.title}</SectionHeading>
          <span className="accent-line" />
          {coverageSection.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="body-text">
              {p}
            </p>
          ))}
        </ScrollReveal>
      </div>
      <FeatureTicker items={features} />
    </section>
  )
}

export function SupportSection() {
  return (
    <TextSplitSection
      label={supportSection.label}
      title={supportSection.title}
      paragraphs={supportSection.paragraphs}
      reverse
      image={assets.supportHunt}
      imageAlt="Dead by Daylight hunt objective in-game screenshot"
      headingButton={{ label: 'Get Support', href: siteConfig.supportUrl }}
    />
  )
}

export function ExperienceSection() {
  return (
    <TextSplitSection
      label={experienceSection.label}
      title={experienceSection.title}
      paragraphs={experienceSection.paragraphs}
    />
  )
}
