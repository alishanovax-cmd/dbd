import { useState } from 'react'
import { assets } from '../../assets'
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
  label = 'Zadeyo DBD cheat preview video',
}: InlineVideoProps) {
  const [failed, setFailed] = useState(false)
  const { videoRef, playing, muted, handlePlay, toggleMute, setPlaying } = useClickToPlayVideo({
    onError: () => setFailed(true),
  })

  return (
    <div className={`inline-video ${className}`.trim()}>
      {!failed ? (
        <>
          <video
            ref={videoRef}
            className="inline-video__media rounded-image"
            src={assets.heroVideo}
            poster={poster}
            muted
            loop
            playsInline
            preload="metadata"
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
              onClick={handlePlay}
              aria-label="Play video"
            >
              <span className="inline-video__play-icon" aria-hidden="true">
                ▶
              </span>
              <span>Click to play</span>
            </button>
          )}
        </>
      ) : (
        <img
          src={poster}
          alt={label}
          className="inline-video__media rounded-image"
          loading="lazy"
          width={getImageDimensions(poster).width}
          height={getImageDimensions(poster).height}
        />
      )}
      <div className="inline-video__overlay" aria-hidden="true" />
    </div>
  )
}
