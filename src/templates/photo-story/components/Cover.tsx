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
    <section className="bg-gallery">
      <div className="px-8 pt-16 pb-8">
        <p className="text-[11px] tracking-[0.35em] text-gallery-ink-faint uppercase">
          Wedding Invitation
        </p>
        <h1 className="mt-5 text-[32px] leading-tight text-gallery-ink">
          {data.groom.name}
          <span className="mx-2 text-gallery-navy">/</span>
          {data.bride.name}
        </h1>
        <p className="mt-3 text-sm text-gallery-ink-soft">
          {dateNumeric} · {data.weddingTimeLabel}
        </p>
      </div>

      <div className="px-6">
        <div className="aspect-3/4 w-full overflow-hidden">
          <img src={coverBg} alt="" className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 py-10 text-gallery-ink-faint">
        <span className="animate-bounce text-lg leading-none">⌄</span>
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
      </div>
    </section>
  )
}
