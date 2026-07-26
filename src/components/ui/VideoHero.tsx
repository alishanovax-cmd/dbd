import { useState } from 'react'
import { assets } from '../../assets'
import { imageDimensions } from '../../assets/imageDimensions'
import { useClickToPlayVideo } from '../../hooks/useAutoplayVideo'
import { VideoMuteButton } from './VideoMuteButton'

interface VideoHeroProps {
  className?: string
}

export function VideoHero({ className = '' }: VideoHeroProps) {
  const [failed, setFailed] = useState(false)
  const { videoRef, playing, muted, toggleMute, setPlaying } = useClickToPlayVideo({
    onError: () => setFailed(true),
  })

  const handlePlayClick = async () => {
    const video = videoRef.current
    if (!video) return

    if (!video.src) {
      video.src = assets.heroVideo
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
    <div className={`video-hero ${className}`.trim()}>
      {!failed ? (
        <>
          <video
            ref={videoRef}
            className="video-hero__media"
            poster={assets.atmosphere1}
            muted
            loop
            playsInline
            preload="none"
            aria-label="Zadeyo DBD cheat preview video"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onError={() => setFailed(true)}
          />
          {playing && (
            <VideoMuteButton muted={muted} onToggle={toggleMute} className="video-hero__mute" />
          )}
          {!playing && (
            <button
              type="button"
              className="video-hero__play"
              onClick={handlePlayClick}
              aria-label="Play video"
            >
              <span className="video-hero__play-icon" aria-hidden="true">
                ▶
              </span>
              <span>Click to play</span>
            </button>
          )}
        </>
      ) : (
        <img
          src={assets.atmosphere1}
          alt="Dead by Daylight atmospheric scene"
          className="video-hero__media"
          width={imageDimensions.atmosphere1.width}
          height={imageDimensions.atmosphere1.height}
        />
      )}
      <div className="video-hero__overlay" aria-hidden="true" />
      <div className="video-hero__vignette" aria-hidden="true" />
    </div>
  )
}
