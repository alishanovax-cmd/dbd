import type { ReactNode } from 'react'

interface SectionLabelProps {
  children: ReactNode
}

export function SectionLabel({ children }: SectionLabelProps) {
  return <span className="section-label">{children}</span>
}

interface SectionHeadingProps {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3'
  gradient?: boolean
  className?: string
}

export function SectionHeading({
  children,
  as: Tag = 'h2',
  gradient = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <Tag className={`section-heading ${gradient ? 'gradient-text' : ''} ${className}`.trim()}>
      {children}
    </Tag>
  )
}

export function AccentLine() {
  return <span className="accent-line" aria-hidden="true" />
}
