import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'ghost'

interface ButtonProps {
  variant?: Variant
  children: ReactNode
  className?: string
  href?: string
  external?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  href,
  external = false,
  type = 'button',
  onClick,
}: ButtonProps) {
  const classes = `${variant === 'primary' ? 'btn-primary' : 'btn-ghost'} ${className}`.trim()

  if (href && external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
