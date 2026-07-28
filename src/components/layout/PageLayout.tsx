import { lazy, Suspense, type ReactNode } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { CreativeBackdrop } from '../ui/CreativeBackdrop'
import { Header } from './Header'

const Footer = lazy(() => import('./Footer').then((m) => ({ default: m.Footer })))

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  useScrollReveal()

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <CreativeBackdrop />
      <Header />
      <main id="main-content" className="page-shell">
        {children}
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  )
}
