import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  pulse?: boolean
  className?: string
}

export function Badge({ children, pulse = false, className = '' }: BadgeProps) {
  return (
    <span
      className={`badge-pill inline-flex items-center gap-2 rounded-full border px-3 py-1 ${className}`}
      style={{
        borderColor: 'var(--border-dim)',
        background: 'var(--bg-surface)',
        color: 'var(--text-secondary)',
      }}
    >
      {pulse && (
        <span
          className="inline-block h-2 w-2 rounded-full"
          style={{
            background: 'var(--accent)',
            animation: 'pulse-dot 2s ease-in-out infinite',
          }}
        />
      )}
      {children}
    </span>
  )
}
