import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    document.documentElement.classList.add('js-animate')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    const observeAll = () => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => observer.observe(el))
    }

    observeAll()
    const timer = window.setTimeout(observeAll, 100)

    return () => {
      window.clearTimeout(timer)
      observer.disconnect()
    }
  }, [])
}
