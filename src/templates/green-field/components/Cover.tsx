import type { InvitationData } from '../types'
import { ScriptText } from './ScriptText'
import { Sparkle } from './Sparkle'
import coverBg from '../../garden-editorial/assets/photos/gallery-1.jpg'

interface CoverProps {
  data: InvitationData
}

const SPARKLES = [
  { top: '22%', left: '12%', size: 14, delay: 0 },
  { top: '30%', left: '82%', size: 18, delay: 0.8 },
  { top: '46%', left: '8%', size: 10, delay: 1.4 },
  { top: '16%', left: '64%', size: 11, delay: 2 },
]

export function Cover({ data }: CoverProps) {
  const date = new Date(data.weddingDateISO)
  const dotDate = `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`
  const weekday = date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()

  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden bg-field-forest-dark text-field-ivory-soft">
      <img
        src={coverBg}
        alt=""
        className="animate-fade-in absolute inset-0 h-full w-full scale-105 object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/35 via-black/5 to-black/55" />

      <p className="animate-fade-up relative pt-10 text-center text-[10px] tracking-[0.35em] opacity-0">
        THE WEDDING OF {data.groom.name} &amp; {data.bride.name}
      </p>

      <div className="relative flex flex-1 flex-col justify-center px-6">
        <h1 className="text-[76px] leading-[0.95] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
          <ScriptText text="Our" className="-rotate-6" delay={0.4} duration={1} />
          <br />
          <ScriptText text="Wedding" className="ml-10 -rotate-6" delay={1.2} duration={1.6} />
          <br />
          <ScriptText text="Day" className="ml-28 -rotate-6" delay={2.6} duration={1} />
        </h1>
      </div>

      <div
        className="animate-fade-up relative pb-12 text-center opacity-0"
        style={{ animationDelay: '3.2s' }}
      >
        <p className="text-[13px] tracking-[0.25em]">
          {dotDate}. {weekday} · {data.weddingTimeLabel}
        </p>
        <p className="mt-2 text-[11px] tracking-[0.2em] text-field-ivory/80">
          {data.venueName} {data.venueHall}
        </p>
      </div>

      {SPARKLES.map((s, i) => (
        <span key={i} className="absolute text-field-ivory-soft" style={{ top: s.top, left: s.left }}>
          <Sparkle size={s.size} delay={s.delay} />
        </span>
      ))}
    </section>
  )
}
