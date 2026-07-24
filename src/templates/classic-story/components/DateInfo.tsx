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

  const ddayLabel = dday === 0 ? 'D-Day' : dday > 0 ? `D-${dday}` : `D+${Math.abs(dday)}`

  return (
    <Section eyebrow="Save the Date" title="예식 일시">
      <div className="mx-auto max-w-[340px] text-center">
        <p className="text-[15px] text-ink">
          {data.weddingDateLabel} {data.weddingTimeLabel}
        </p>

        <div className="mt-6 border border-line bg-cream p-6">
          <p className="font-serif-en mb-4 text-base tracking-widest text-ink-soft">
            {year}. {String(month + 1).padStart(2, '0')}
          </p>
          <div className="grid grid-cols-7 gap-y-3 text-sm">
            {WEEKDAYS.map((w) => (
              <span key={w} className="text-ink-faint">
                {w}
              </span>
            ))}
            {weeks.map((week, wi) =>
              week.map((cell, ci) => {
                const isTarget = cell === day
                return (
                  <span
                    key={`${wi}-${ci}`}
                    className={`flex h-9 w-9 items-center justify-center justify-self-center  ${
                      isTarget
                        ? 'bg-terracotta font-medium text-cream'
                        : cell === 0
                          ? ''
                          : 'text-ink-soft'
                    }`}
                  >
                    {cell !== 0 ? cell : ''}
                  </span>
                )
              }),
            )}
          </div>
        </div>

        <p className="mt-6 text-sm tracking-widest text-terracotta-dark">{ddayLabel}</p>
      </div>
    </Section>
  )
}
