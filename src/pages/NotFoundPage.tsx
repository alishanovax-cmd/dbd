import { useLocation } from 'react-router-dom'
import { PageLayout } from '../components/layout/PageLayout'
import { SeoHead } from '../components/seo/SeoHead'
import { Button } from '../components/ui/Button'
import { SectionHeading } from '../components/ui/SectionHeading'
import { pageSeo } from '../data/seo'

export function NotFoundPage() {
  const { pathname } = useLocation()

  return (
    <PageLayout>
      <SeoHead
        seo={{
          ...pageSeo.notFound,
          path: pathname,
        }}
      />
      <section className="page-placeholder">
        <SectionHeading as="h1">Page Not Found</SectionHeading>
        <p>The page you requested does not exist. Browse Zadeyo DBD cheat guides or return home.</p>
        <div className="page-placeholder__actions">
          <Button href="/">Back to Home</Button>
          <Button href="/blog" variant="ghost">
            Browse Guides
          </Button>
        </div>
      </section>
    </PageLayout>
  )
}
