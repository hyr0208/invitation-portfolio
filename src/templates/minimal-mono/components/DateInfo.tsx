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
    <Section index="04" title="SAVE THE DATE">
      <p className="text-[15px] text-neutral-900">
        {data.weddingDateLabel} {data.weddingTimeLabel}
      </p>

      <div className="mt-6 border border-neutral-900 p-6">
        <div className="mb-4 flex items-baseline justify-between">
          <p className="text-base font-bold tracking-widest text-neutral-900">
            {year}.{String(month + 1).padStart(2, '0')}
          </p>
          <p className="text-xs font-medium tracking-widest text-neutral-400">{ddayLabel}</p>
        </div>
        <div className="grid grid-cols-7 gap-y-3 text-sm">
          {WEEKDAYS.map((w) => (
            <span key={w} className="text-neutral-300">
              {w}
            </span>
          ))}
          {weeks.map((week, wi) =>
            week.map((cell, ci) => {
              const isTarget = cell === day
              return (
                <span
                  key={`${wi}-${ci}`}
                  className={`flex h-9 w-9 items-center justify-center justify-self-center ${
                    isTarget
                      ? 'bg-neutral-900 font-medium text-white'
                      : cell === 0
                        ? ''
                        : 'text-neutral-600'
                  }`}
                >
                  {cell !== 0 ? cell : ''}
                </span>
              )
            }),
          )}
        </div>
      </div>
    </Section>
  )
}
