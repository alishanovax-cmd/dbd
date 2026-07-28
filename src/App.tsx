import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BlogArticlePage } from './pages/BlogArticlePage'
import { BlogPage } from './pages/BlogPage'
import { BuyPage } from './pages/BuyPage'
import { CheatsPage } from './pages/CheatsPage'
import { FaqPage } from './pages/FaqPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ReviewsPage } from './pages/ReviewsPage'

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '')

export default function App() {
  return (
    <BrowserRouter basename={routerBasename || undefined}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cheats" element={<CheatsPage />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogArticlePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
