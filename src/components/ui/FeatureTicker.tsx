interface FeatureTickerProps {
  items: readonly string[]
}

export function FeatureTicker({ items }: FeatureTickerProps) {
  const doubled = [...items, ...items]

  return (
    <div className="feature-ticker" aria-hidden="true">
      <div className="feature-ticker__track">
        {doubled.map((item, index) => (
          <span key={`${item}-${index}`} className="feature-ticker__item">
            <span className="feature-ticker__diamond" aria-hidden="true" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
