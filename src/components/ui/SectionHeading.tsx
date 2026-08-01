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
  id?: string
}

export function SectionHeading({
  children,
  as: Tag = 'h2',
  gradient = false,
  className = '',
  id,
}: SectionHeadingProps) {
  return (
    <Tag id={id} className={`section-heading ${gradient ? 'gradient-text' : ''} ${className}`.trim()}>
      {children}
    </Tag>
  )
}

export function AccentLine() {
  return <span className="accent-line" aria-hidden="true" />
}
