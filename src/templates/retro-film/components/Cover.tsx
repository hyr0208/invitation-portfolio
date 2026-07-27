import type { InvitationData } from '../types'
import coverBg from '../assets/photos/cover-bg.jpg'

interface CoverProps {
  data: InvitationData
}

export function Cover({ data }: CoverProps) {
  const date = new Date(data.weddingDateISO)
  const stamp = `'${String(date.getFullYear()).slice(2)} ${String(date.getMonth() + 1).padStart(2, '0')} ${String(
    date.getDate(),
  ).padStart(2, '0')}`

  return (
    <section className="bg-film-paper px-4 pt-4 pb-10 text-center">
      <div className="relative aspect-3/4 w-full overflow-hidden border border-film-ink/15">
        <img
          src={coverBg}
          alt=""
          className="h-full w-full object-cover filter-[sepia(0.3)_saturate(0.8)_contrast(1.05)]"
        />
        <span className="absolute right-3 bottom-3 font-mono text-xs tracking-wider text-film-orange drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
          {stamp}
        </span>
      </div>

      <div className="my-6 flex items-center justify-center gap-1" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} className="h-2 w-1.5 bg-film-ink/15" />
        ))}
      </div>

      <p className="font-mono text-[11px] tracking-[0.3em] text-film-ink-faint uppercase">
        Film No. 001 · Wedding Invitation
      </p>

      <h1 className="font-serif-kr mt-5 text-[30px] leading-relaxed text-film-ink">
        {data.groom.name}
        <span className="mx-2 text-film-orange">×</span>
        {data.bride.name}
      </h1>

      <div className="mt-4 flex flex-col items-center gap-1 text-sm text-film-ink-soft">
        <p>{data.weddingDateLabel}</p>
        <p>
          {data.weddingTimeLabel} · {data.venueName} {data.venueHall}
        </p>
      </div>
    </section>
  )
}
