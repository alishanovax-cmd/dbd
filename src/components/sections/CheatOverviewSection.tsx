import { assets } from '../../assets'
import { imageDimensions } from '../../assets/imageDimensions'
import { cheatOverview } from '../../data/content'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

export function CheatOverviewSection() {
  return (
    <section className="home-section split-section split-section--reverse">
      <div className="container split-section__grid">
        <ScrollReveal className="split-section__media">
          <img
            src={assets.cheatOverviewImage}
            alt="Dead by Daylight in-game desktop — DBD cheat package preview"
            loading="lazy"
            decoding="async"
            width={imageDimensions.cheatOverviewImage.width}
            height={imageDimensions.cheatOverviewImage.height}
            className="rounded-image"
          />
        </ScrollReveal>
        <ScrollReveal className="split-section__text" delay={100}>
          <span className="section-label">{cheatOverview.label}</span>
          <SectionHeading>{cheatOverview.title}</SectionHeading>
          <span className="accent-line" />
          {cheatOverview.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="body-text">
              {p}
            </p>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
