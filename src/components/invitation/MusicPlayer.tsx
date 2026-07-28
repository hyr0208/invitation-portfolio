import { useRef, useState } from 'react'
import type { InvitationFeatures } from '../../types/invitation'

export function MusicPlayer({ features }: { features?: InvitationFeatures }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  if (!features?.musicEnabled || !features.musicUrl) return null

  const toggle = async () => {
    if (!audioRef.current) return
    if (playing) audioRef.current.pause()
    else await audioRef.current.play()
    setPlaying(!playing)
  }

  return (
    <div className="fixed right-4 bottom-4 z-20">
      <audio ref={audioRef} src={features.musicUrl} loop onEnded={() => setPlaying(false)} />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? '음악 일시정지' : '음악 재생'}
        className="rounded-full bg-black/75 px-4 py-2 text-xs tracking-wide text-white shadow-lg backdrop-blur"
      >
        {playing ? 'Ⅱ 음악 정지' : '♪ 음악 재생'}
      </button>
    </div>
  )
}
