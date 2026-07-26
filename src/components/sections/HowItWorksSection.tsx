import { howItWorks } from '../../data/content'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

export function HowItWorksSection() {
  return (
    <section className="home-section steps-section steps-section--creative">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">{howItWorks.label}</span>
          <SectionHeading>{howItWorks.title}</SectionHeading>
          <span className="accent-line" />
        </ScrollReveal>

        <div className="steps-section__timeline">
          {howItWorks.steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 80}>
              <article className="step-card glass-card creative-card">
                <span className="step-card__num">{index + 1}</span>
                <div className="step-card__connector" aria-hidden="true" />
                <h3 className="step-card__title">{step.title}</h3>
                <p className="body-text">{step.description}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
