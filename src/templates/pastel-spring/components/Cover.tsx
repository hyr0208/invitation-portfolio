import type { InvitationData } from '../types'
import coverBg from '../../minimal-mono/assets/photos/cover-bg.jpg'

interface CoverProps {
  data: InvitationData
}

export function Cover({ data }: CoverProps) {
  const date = new Date(data.weddingDateISO)
  const dateNumeric = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(
    date.getDate(),
  ).padStart(2, '0')}`

  return (
    <section className="bg-spring px-6 pt-10 pb-14 text-center">
      <p className="text-[11px] tracking-[0.3em] text-spring-blossom-dark uppercase">
        Spring Wedding
      </p>

      <div className="mt-6 overflow-hidden rounded-[2rem] border border-spring-line">
        <div className="aspect-3/4 w-full overflow-hidden">
          <img src={coverBg} alt="" className="h-full w-full object-cover" />
        </div>
      </div>

      <h1 className="font-serif-kr mt-8 text-[32px] leading-[1.4] text-spring-ink">
        {data.groom.name}
        <span className="mx-2 text-spring-blossom-dark">&</span>
        {data.bride.name}
      </h1>

      <p className="font-serif-en mt-5 text-base tracking-[0.2em] text-spring-ink-soft">
        {dateNumeric}
      </p>

      <div className="mt-4 flex flex-col items-center gap-1 text-sm text-spring-ink-soft">
        <p>{data.weddingDateLabel}</p>
        <p>
          {data.weddingTimeLabel} · {data.venueName} {data.venueHall}
        </p>
      </div>

      <div className="mt-10 flex flex-col items-center gap-1 text-spring-ink-faint">
        <span className="animate-bounce text-lg leading-none">⌄</span>
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
      </div>
    </section>
  )
}
