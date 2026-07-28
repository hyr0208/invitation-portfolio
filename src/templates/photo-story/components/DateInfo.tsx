import { Section } from './Section'
import { getDday, getMonthMatrix } from '../utils/date'
import type { InvitationData } from '../types'

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토']

interface DateInfoProps {
  data: InvitationData
}

export function DateInfo({ data }: DateInfoProps) {
  const date = new Date(data.weddingDateISO)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const weeks = getMonthMatrix(year, month)
  const dday = getDday(date)
  const ddayLabel = dday === 0 ? 'D-DAY' : dday > 0 ? `D-${dday}` : `D+${Math.abs(dday)}`

  return (
    <Section eyebrow="Save the Date" title="예식 일시">
      <div className="flex items-end gap-4">
        <p className="text-6xl font-light text-gallery-ink">
          {String(month + 1).padStart(2, '0')}.{String(day).padStart(2, '0')}
        </p>
        <p className="pb-2 text-xs tracking-[0.2em] text-gallery-navy uppercase">{ddayLabel}</p>
      </div>
      <p className="mt-3 text-sm text-gallery-ink-soft">
        {data.weddingDateLabel} {data.weddingTimeLabel}
      </p>

      <div className="mt-10">
        <div className="grid grid-cols-7 gap-y-3 text-sm">
          {WEEKDAYS.map((w) => (
            <span key={w} className="text-center text-xs text-gallery-ink-faint">
              {w}
            </span>
          ))}
          {weeks.map((week, wi) =>
            week.map((cell, ci) => {
              const isTarget = cell === day
              return (
                <span key={`${wi}-${ci}`} className="flex items-center justify-center">
                  <span
                    className={`flex h-8 w-8 items-center justify-center ${
                      isTarget
                        ? 'rounded-full bg-gallery-navy text-gallery'
                        : cell === 0
                          ? ''
                          : 'text-gallery-ink-soft'
                    }`}
                  >
                    {cell !== 0 ? cell : ''}
                  </span>
                </span>
              )
            }),
          )}
        </div>
      </div>
    </Section>
  )
}
