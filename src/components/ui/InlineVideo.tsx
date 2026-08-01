import { useState } from 'react'
import { assets } from '../../assets'
import { hasHeroVideo, loadHeroVideoUrl } from '../../assets/video'
import { getImageDimensions } from '../../assets/imageDimensions'
import { useClickToPlayVideo } from '../../hooks/useAutoplayVideo'
import { VideoMuteButton } from './VideoMuteButton'

interface InlineVideoProps {
  className?: string
  poster?: string
  label?: string
}

export function InlineVideo({
  className = '',
  poster = assets.atmosphere1,
  label = 'DBD cheat preview video',
}: InlineVideoProps) {
  const videoEnabled = hasHeroVideo()
  const [failed, setFailed] = useState(false)
  const { videoRef, playing, muted, toggleMute, setPlaying } = useClickToPlayVideo({
    onError: () => setFailed(true),
  })

  const handlePlayClick = async () => {
    const video = videoRef.current
    if (!video) return

    if (!video.src) {
      const url = await loadHeroVideoUrl()
      if (!url) {
        setFailed(true)
        return
      }
      video.src = url
    }

    try {
      video.muted = muted
      await video.play()
      setPlaying(true)
    } catch {
      setFailed(true)
    }
  }

  return (
    <div className={`inline-video ${className}`.trim()}>
      {!videoEnabled || failed ? (
        <img
          src={poster}
          alt={label}
          className="inline-video__media rounded-image"
          loading="lazy"
          width={getImageDimensions(poster).width}
          height={getImageDimensions(poster).height}
        />
      ) : (
        <>
          <video
            ref={videoRef}
            className="inline-video__media rounded-image"
            poster={poster}
            muted
            loop
            playsInline
            preload="none"
            aria-label={label}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onError={() => setFailed(true)}
          />
          {playing && <VideoMuteButton muted={muted} onToggle={toggleMute} />}
          {!playing && (
            <button
              type="button"
              className="inline-video__play"
              onClick={handlePlayClick}
              aria-label="Play video"
            >
              <span className="inline-video__play-icon" aria-hidden="true">
                ▶
              </span>
              <span>Click to play</span>
            </button>
          )}
        </>
      )}
      <div className="inline-video__overlay" aria-hidden="true" />
    </div>
  )
}
