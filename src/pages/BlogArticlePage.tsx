import { Link, useParams } from 'react-router-dom'
import { getImageDimensions } from '../assets/imageDimensions'
import { Breadcrumbs } from '../components/layout/Breadcrumbs'
import { PageLayout } from '../components/layout/PageLayout'
import { SeoHead } from '../components/seo/SeoHead'
import { articleSchema, breadcrumbSchema, globalSchemas, webPageSchema } from '../components/seo/schema'
import { Button } from '../components/ui/Button'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { getBlogArticle, blogPosts } from '../data/blogArticles'
import { siteConfig } from '../data/navigation'
import { blogArticleSeo, pageSeo } from '../data/seo'

export function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogArticle(slug) : undefined

  if (!post) {
    const missingPath = slug ? `/blog/${slug}` : '/blog'
    return (
      <PageLayout>
        <SeoHead
          seo={{
            ...pageSeo.notFound,
            path: missingPath,
          }}
        />
        <section className="page-placeholder">
          <SectionHeading as="h1">Article Not Found</SectionHeading>
          <p>The requested blog post does not exist.</p>
          <Button href="/blog" variant="ghost">
            Back to Blog
          </Button>
        </section>
      </PageLayout>
    )
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3)
  const seo = blogArticleSeo(post.slug)!
  const coverDimensions = getImageDimensions(post.image)

  return (
    <PageLayout>
      <SeoHead
        seo={seo}
        jsonLd={[
          ...globalSchemas(),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Zadeyo DBD Cheat Guides', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          articleSchema(post),
          webPageSchema(seo.title, seo.description, seo.path),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]}
      />

      <article className="blog-article">
        <div className="container blog-article__inner">
          <ScrollReveal>
            <span className="blog-article__tag">{post.category.toUpperCase()}</span>
            <SectionHeading as="h1">{post.title}</SectionHeading>
            <p className="blog-article__meta">
              {post.date} · {post.readTime}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="blog-article__hero-media">
              <img
                src={post.image}
                alt={`${post.title} — Zadeyo DBD cheat guide illustration`}
                className="rounded-image"
                loading="eager"
                width={coverDimensions.width}
                height={coverDimensions.height}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="blog-article__content">
              {post.content.map((block) =>
                block.type === 'h2' ? (
                  <h2 key={block.text} className="blog-article__heading">
                    {block.text}
                  </h2>
                ) : (
                  <p key={block.text.slice(0, 48)} className="body-text">
                    {block.text}
                  </p>
                ),
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div className="blog-article__cta glass-card">
              <h2 className="blog-article__cta-title">Get Zadeyo DBD Cheat — Instant Delivery</h2>
              <p className="body-text">
                Full ESP, exploits, Cosmetic Unlocker, HWID Spoofer, and StreamProof. $35/month on Zadeyo.
              </p>
              <div className="blog-article__cta-actions">
                <Button href={siteConfig.checkoutUrl} external>
                  Purchase Now
                </Button>
                <Button href={siteConfig.checkoutUrl} external variant="ghost">
                  See Pricing
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {related.length > 0 && (
            <ScrollReveal delay={200}>
              <div className="blog-article__related">
                <h2 className="blog-article__related-title">Related Guides</h2>
                <ul>
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link to={`/blog/${item.slug}`}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          )}

          <Link to="/blog" className="btn-ghost blog-article__back">
            ← Back to Blog
          </Link>
        </div>
      </article>
    </PageLayout>
  )
}
