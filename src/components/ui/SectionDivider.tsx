interface SectionDividerProps {
  variant?: 'slash' | 'wave' | 'dots'
}

export function SectionDivider({ variant = 'slash' }: SectionDividerProps) {
  return (
    <div className={`section-divider section-divider--${variant}`} aria-hidden="true">
      {variant === 'wave' && (
        <svg viewBox="0 0 1200 48" preserveAspectRatio="none" className="section-divider__svg">
          <path d="M0,24 Q300,0 600,24 T1200,24 L1200,48 L0,48 Z" fill="currentColor" />
        </svg>
      )}
      {variant === 'dots' && (
        <div className="section-divider__dots">
          <span />
          <span />
          <span />
        </div>
      )}
    </div>
  )
}
