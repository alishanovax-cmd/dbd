const publicBase = import.meta.env.BASE_URL

export function HeroBackground() {
  return (
    <div className="hero-section__bg" aria-hidden="true">
      <img
        className="hero-section__bg-media"
        src={`${publicBase}hero-poster.webp`}
        alt=""
        width={1280}
        height={720}
        decoding="async"
        fetchPriority="low"
        loading="eager"
      />
      <div className="hero-section__bg-overlay" />
      <div className="hero-section__bg-vignette" />
    </div>
  )
}
