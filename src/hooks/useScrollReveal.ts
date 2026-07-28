import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    let observer: IntersectionObserver | null = null
    let retryTimer: number | undefined

    const init = () => {
      document.documentElement.classList.add('js-animate')

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer?.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
      )

      const observeAll = () => {
        document.querySelectorAll('.reveal:not(.visible)').forEach((el) => observer?.observe(el))
      }

      observeAll()
      retryTimer = window.setTimeout(observeAll, 100)
    }

    let idleId: number | undefined
    let deferTimer: number | undefined

    const scheduleIdle = window.requestIdleCallback?.bind(window)
    if (scheduleIdle) {
      idleId = scheduleIdle(init)
    } else {
      deferTimer = window.setTimeout(init, 1)
    }

    return () => {
      if (idleId !== undefined) window.cancelIdleCallback(idleId)
      if (deferTimer !== undefined) window.clearTimeout(deferTimer)
      if (retryTimer !== undefined) window.clearTimeout(retryTimer)
      observer?.disconnect()
    }
  }, [])
}
