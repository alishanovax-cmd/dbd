import { Link } from 'react-router-dom'
import { getImageDimensions } from '../../assets/imageDimensions'
import type { BlogPostMeta } from '../../data/blogArticles'
import type { BlogCategory } from '../../data/navigation'

interface FilterPillProps {
  label: string
  active: boolean
  onClick: () => void
}

export function FilterPill({ label, active, onClick }: FilterPillProps) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      className={`filter-pill ${active ? 'is-active' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

interface BlogCardProps {
  post: BlogPostMeta
}

export function BlogCard({ post }: BlogCardProps) {
  const { width, height } = getImageDimensions(post.image)

  return (
    <article className="blog-card glass-card">
      <Link to={`/blog/${post.slug}`} className="blog-card__link">
        <div className="blog-card__media">
          <img src={post.image} alt={post.title} loading="lazy" width={width} height={height} />
          <span className="blog-card__tag">{post.category.toUpperCase()}</span>
        </div>
        <div className="blog-card__body">
          <p className="blog-card__meta">
            {post.date} · {post.readTime}
          </p>
          <h2 className="blog-card__title">{post.title}</h2>
          <p className="blog-card__excerpt">{post.excerpt}</p>
        </div>
      </Link>
    </article>
  )
}

export type { BlogCategory }
