import { getImageDimensions } from '../../assets/imageDimensions'

interface FeatureCardProps {
  title: string
  description?: string
  image?: string
  imageAlt?: string
  children?: React.ReactNode
}

export function FeatureCard({ title, description, image, imageAlt, children }: FeatureCardProps) {
  const dimensions = image ? getImageDimensions(image) : null

  return (
    <article className="feature-card glass-card creative-card">
      <h3 className="feature-card__title">{title}</h3>
      {image && (
        <div className="feature-card__media">
          <img
            src={image}
            alt={imageAlt ?? title}
            loading="lazy"
            width={dimensions!.width}
            height={dimensions!.height}
          />
        </div>
      )}
      {description && <p className="feature-card__text">{description}</p>}
      {children}
    </article>
  )
}
