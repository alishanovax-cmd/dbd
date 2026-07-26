interface VideoMuteButtonProps {
  muted: boolean
  onToggle: () => void
  className?: string
}

export function VideoMuteButton({ muted, onToggle, className = '' }: VideoMuteButtonProps) {
  return (
    <button
      type="button"
      className={`video-mute-btn ${className}`.trim()}
      onClick={onToggle}
      aria-label={muted ? 'Unmute video' : 'Mute video'}
      aria-pressed={!muted}
    >
      {muted ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M11 5 6 9H2v6h4l5 4V5Z" />
          <path d="m22 9-6 6M16 9l6 6" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M11 5 6 9H2v6h4l5 4V5Z" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      )}
    </button>
  )
}
