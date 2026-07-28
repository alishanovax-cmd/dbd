import type { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

/** Renders immediately — no scroll-triggered hide/show delay. */
export function ScrollReveal({ children, className = '' }: ScrollRevealProps) {
  return <div className={className.trim()}>{children}</div>
}
