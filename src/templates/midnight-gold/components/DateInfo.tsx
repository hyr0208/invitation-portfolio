import type { InvitationData } from '../types'
import { getDday, getMonthMatrix } from '../utils/date'
import { Section } from './Section'

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
    <Section eyebrow="Save the date" title="예식 일시">
      <div className="border border-gold-dark/60 bg-midnight-soft p-7 text-center">
        <p className="font-serif text-2xl text-midnight-ink">{data.weddingDateLabel}</p>
        <p className="mt-3 text-base text-midnight-ink-faint">{data.weddingTimeLabel}</p>

        <div className="mt-7 grid grid-cols-7 gap-y-2 text-sm">
          {WEEKDAYS.map((w) => (
            <span key={w} className="text-xs text-midnight-ink-faint">
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
                        ? 'rounded-full bg-gold text-midnight-deep'
                        : cell === 0
                          ? ''
                          : 'text-midnight-ink-soft'
                    }`}
                  >
                    {cell !== 0 ? cell : ''}
                  </span>
                </span>
              )
            }),
          )}
        </div>

        <p className="mt-6 text-sm tracking-[0.15em] text-gold">{ddayLabel}</p>
      </div>
    </Section>
  )
}
