import { useMemo, useState } from 'react'
import { Breadcrumbs } from '../components/layout/Breadcrumbs'
import { PageLayout } from '../components/layout/PageLayout'
import { SeoHead } from '../components/seo/SeoHead'
import { breadcrumbSchema, blogItemListSchema, globalSchemas, webPageSchema } from '../components/seo/schema'
import { BackgroundOrbs } from '../components/ui/BackgroundOrbs'
import { BlogCard } from '../components/ui/BlogCard'
import { FilterPill } from '../components/ui/BlogCard'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { blogPosts } from '../data/blogArticles'
import { blogCategories, type BlogCategory } from '../data/navigation'
import { pageSeo } from '../data/seo'

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('all')

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'all') return blogPosts
    return blogPosts.filter((post) => post.category === activeCategory)
  }, [activeCategory])

  return (
    <PageLayout>
      <SeoHead
        seo={pageSeo.blog}
        jsonLd={[
          ...globalSchemas(),
          webPageSchema(pageSeo.blog.title, pageSeo.blog.description, pageSeo.blog.path),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Zadeyo DBD Cheat Guides', path: '/blog' },
          ]),
          blogItemListSchema(),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Zadeyo DBD Cheat Guides' },
        ]}
      />

      <section className="blog-hero">
        <BackgroundOrbs />
        <div className="blog-hero__glow grid-overlay" aria-hidden="true" />
        <div className="container blog-hero__inner">
          <ScrollReveal>
            <SectionHeading as="h1" className="blog-hero__title">
              Zadeyo DBD Cheat Guides
            </SectionHeading>
            <p className="blog-hero__subtitle gradient-text">
              ESP Setup, Spoofer &amp; Safety — Zadeyo
            </p>
            <p className="blog-hero__desc">
              Cheat setup guides, ESP configuration, HWID spoofer info, and patch-day update notes for Zadeyo DBD.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="blog-list home-section">
        <div className="container">
          <ScrollReveal>
            <div className="blog-filters" role="tablist" aria-label="Filter blog posts">
              {blogCategories.map((cat) => (
                <FilterPill
                  key={cat.id}
                  label={cat.label}
                  active={activeCategory === cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                />
              ))}
            </div>
          </ScrollReveal>

          <div className="blog-grid">
            {filteredPosts.map((post, index) => (
              <ScrollReveal key={post.slug} delay={index * 50}>
                <BlogCard post={post} />
              </ScrollReveal>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <p className="blog-empty">No articles in this category yet.</p>
          )}
        </div>
      </section>
    </PageLayout>
  )
}
