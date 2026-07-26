import { assets } from '../../assets'
import { imageDimensions } from '../../assets/imageDimensions'
import { productInfo } from '../../data/content'
import { siteConfig } from '../../data/navigation'
import { Button } from '../ui/Button'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

export function ProductInfoSection() {
  return (
    <section id="about-cheat" className="home-section centered-section">
      <div className="container centered-section__inner">
        <ScrollReveal>
          <span className="section-label">{productInfo.label}</span>
          <SectionHeading className="centered-section__title">{productInfo.title}</SectionHeading>
          <span className="accent-line centered-section__line" />
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="centered-section__media">
            <img
              src={assets.cheatMenu}
              alt="Zadeyo DBD cheat feature overview — ESP and wallhack modules"
              loading="lazy"
              width={imageDimensions.cheatMenu.width}
              height={imageDimensions.cheatMenu.height}
              className="rounded-image"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="centered-section__body">
            {productInfo.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="body-text">
                {p}
              </p>
            ))}
          </div>
          <div className="centered-section__actions">
            <Button href={siteConfig.checkoutUrl} external>
              Purchase Now
            </Button>
            <Button href="/cheats" variant="ghost">
              Features
            </Button>
            <Button href="#features" variant="ghost">
              See All Features
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
