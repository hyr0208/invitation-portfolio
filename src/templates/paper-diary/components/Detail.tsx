import { useRef, useState } from 'react'
import { Section } from './Section'
import type { DetailNotice } from '../types'

interface DetailProps {
  details: DetailNotice[]
}

export function Detail({ details }: DetailProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const handleScroll = () => {
    const track = trackRef.current
    if (!track) return
    const index = Math.round(track.scrollLeft / track.clientWidth)
    setActive(Math.min(Math.max(index, 0), details.length - 1))
  }

  return (
    <Section title="Detail" kicker="안내사항" tone="burgundy">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="hide-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2"
      >
        {details.map((notice) => (
          <div
            key={notice.title}
            className="torn-edge flex w-full shrink-0 snap-center flex-col items-center bg-diary-cream-soft px-6 py-10 text-center shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
          >
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-diary-burgundy text-diary-cream-soft shadow-[inset_0_-3px_4px_rgba(0,0,0,0.3)]">
              <span className="text-lg">❦</span>
            </span>
            <p className="font-hand text-3xl leading-none text-diary-burgundy">{notice.title}</p>
            <p className="mt-4 text-sm leading-relaxed whitespace-pre-line text-diary-ink-soft">
              {notice.body}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {details.map((notice, i) => (
          <span
            key={notice.title}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? 'w-5 bg-diary-cream-soft' : 'w-1.5 bg-diary-cream-deep/50'
            }`}
          />
        ))}
      </div>
    </Section>
  )
}
