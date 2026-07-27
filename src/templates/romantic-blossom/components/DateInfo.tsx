import { Section } from './Section'
import { getDday } from '../utils/date'
import type { InvitationData } from '../types'

interface DateInfoProps {
  data: InvitationData
}

export function DateInfo({ data }: DateInfoProps) {
  const date = new Date(data.weddingDateISO)
  const dday = getDday(date)
  const ddayLabel = dday === 0 ? 'D-DAY' : dday > 0 ? `D-${dday}` : `D+${Math.abs(dday)}`

  return (
    <Section index="03" eyebrow="Save the Date" title="예식 일시">
      <div className="text-center">
        <p className="font-serif-en text-7xl leading-none text-rose-dark">
          {String(date.getMonth() + 1).padStart(2, '0')}
          <span className="text-rose">.</span>
          {String(date.getDate()).padStart(2, '0')}
        </p>

        <p className="mt-4 text-sm text-rose-ink-soft">
          {data.weddingDateLabel} {data.weddingTimeLabel}
        </p>

        <p className="mt-7 inline-block border-t border-b border-blossom-line px-5 py-1.5 text-xs tracking-[0.2em] text-rose">
          {ddayLabel}
        </p>
      </div>
    </Section>
  )
}
