import type { ReactNode } from 'react'
import { CreativeBackdrop } from '../ui/CreativeBackdrop'
import { Footer } from './Footer'
import { Header } from './Header'

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
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
      <Footer />
    </>
  )
}
