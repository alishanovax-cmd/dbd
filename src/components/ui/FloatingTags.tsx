import type { CSSProperties } from 'react'

interface FloatingTagsProps {
  tags: readonly string[]
  className?: string
}

export function FloatingTags({ tags, className = '' }: FloatingTagsProps) {
  return (
    <div className={`floating-tags ${className}`.trim()} aria-hidden="true">
      {tags.map((tag, index) => (
        <span
          key={tag}
          className="floating-tags__item"
          style={{ '--tag-index': index } as CSSProperties}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
