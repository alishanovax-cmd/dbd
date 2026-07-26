type BrandLogoProps = {
  className?: string
}

export function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <svg
      className={`brand-logo ${className}`.trim()}
      viewBox="0 0 148 36"
      width={148}
      height={36}
      aria-label="Zadeyo"
      role="img"
    >
      <defs>
        <linearGradient id="zadeyo-mark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="zadeyo-text" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e9d5ff" />
          <stop offset="45%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <rect x="0" y="2" width="32" height="32" rx="8" fill="url(#zadeyo-mark)" />
      <path
        fill="#060409"
        d="M9 10h14v3.5H13.5L22 24.5h-4.2l-6.2-8.2V24.5H9V10z"
      />
      <text
        x="42"
        y="25"
        fill="url(#zadeyo-text)"
        fontFamily="Arial Narrow, Arial, sans-serif"
        fontSize="22"
        fontWeight="800"
        letterSpacing="-0.02em"
      >
        Zadeyo
      </text>
    </svg>
  )
}
