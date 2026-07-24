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
    <section className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-neutral-900 px-6 py-12">
      <img
        src={coverBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover grayscale contrast-125"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-black/10" />

      <div className="relative flex justify-between text-[10px] tracking-[0.3em] text-white/60 uppercase">
        <span>Wedding Invitation</span>
        <span>{dateNumeric}</span>
      </div>

      <div className="relative mt-auto">
        <h1 className="text-5xl leading-[1.05] font-black tracking-tight text-white">
          {data.groom.name}
          <br />
          {data.bride.name}
        </h1>
        <p className="mt-6 text-sm text-white/70">
          {data.weddingDateLabel}
          <br />
          {data.weddingTimeLabel} · {data.venueName} {data.venueHall}
        </p>
      </div>
    </section>
  )
}
