import { Link } from 'react-router-dom'

interface Crumb {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: Crumb[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="container py-4">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 && (
              <span style={{ color: 'var(--text-muted)' }} aria-hidden="true">
                /
              </span>
            )}
            {item.href ? (
              <Link
                to={item.href}
                className="transition-colors hover:text-[var(--accent-bright)]"
                style={{ color: 'var(--text-secondary)' }}
              >
                {item.label}
              </Link>
            ) : (
              <span style={{ color: 'var(--text-primary)' }}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
