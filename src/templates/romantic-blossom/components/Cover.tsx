import type { InvitationData } from '../types'
import coverBg from '../assets/photos/cover-bg.jpg'

interface CoverProps {
  data: InvitationData
}

export function Cover({ data }: CoverProps) {
  const date = new Date(data.weddingDateISO)
  const dateNumeric = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(
    date.getDate(),
  ).padStart(2, '0')}`

  return (
    <section className="bg-blossom">
      <div className="aspect-3/4 w-full overflow-hidden">
        <img src={coverBg} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="px-8 py-14 text-center">
        <p className="text-[11px] tracking-[0.3em] text-rose-ink-faint uppercase">
          Wedding Invitation
        </p>

        <h1 className="font-serif-kr mt-7 text-[34px] leading-[1.4] text-rose-ink">
          {data.groom.name}
          <span className="mx-2 text-rose">&</span>
          {data.bride.name}
        </h1>

        <p className="font-serif-en mt-6 text-base tracking-[0.2em] text-rose-ink-soft">
          {dateNumeric}
        </p>

        <div className="mt-4 flex flex-col items-center gap-1 text-sm text-rose-ink-soft">
          <p>{data.weddingDateLabel}</p>
          <p>
            {data.weddingTimeLabel} · {data.venueName} {data.venueHall}
          </p>
        </div>
      </div>
    </section>
  )
}
