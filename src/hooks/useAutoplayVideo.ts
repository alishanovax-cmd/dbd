import { useCallback, useEffect, useRef, useState } from 'react'

interface UseClickToPlayVideoOptions {
  onError?: () => void
}

export function useClickToPlayVideo({ onError }: UseClickToPlayVideoOptions = {}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.defaultMuted = true
  }, [])

  const handlePlay = useCallback(async () => {
    const video = videoRef.current
    if (!video) return

    try {
      video.muted = muted
      await video.play()
      setPlaying(true)
    } catch {
      onError?.()
    }
  }, [muted, onError])

  const toggleMute = useCallback(() => {
    const video = videoRef.current
    if (!video) return

    const nextMuted = !muted
    video.muted = nextMuted
    if (!nextMuted) {
      video.volume = 1
      void video.play().catch(() => {})
    }
    setMuted(nextMuted)
    setPlaying(!video.paused)
  }, [muted])

  return {
    videoRef,
    playing,
    muted,
    handlePlay,
    toggleMute,
    setPlaying,
  }
}

/** @deprecated Use useClickToPlayVideo */
export const useAutoplayVideo = useClickToPlayVideo
