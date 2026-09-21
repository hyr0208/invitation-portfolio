import { Section } from './Section'
import { getDday, getMonthMatrix } from '../utils/date'
import type { InvitationData } from '../types'

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

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
  const status = dday >= 0 ? 'pending' : 'merged'

  return (
    <Section index="04" filename="schedule.log">
      <p className="text-[13px] text-dev-text-soft">
        <span className="text-dev-green">$</span> cal {year}-{String(month + 1).padStart(2, '0')}
      </p>
      <p className="mt-1 text-[15px] text-dev-text">
        {data.weddingDateLabel} {data.weddingTimeLabel}
      </p>

      <div className="mt-6 rounded-md border border-dev-line bg-dev-bg-soft p-6">
        <div className="mb-4 flex items-baseline justify-between">
          <p className="text-base font-bold tracking-widest text-white">
            {year}.{String(month + 1).padStart(2, '0')}
          </p>
          <span
            className={`rounded px-2 py-0.5 text-[10px] font-medium tracking-widest uppercase ${
              status === 'pending'
                ? 'bg-dev-yellow/15 text-dev-yellow'
                : 'bg-dev-green/15 text-dev-green'
            }`}
          >
            {status} · {ddayLabel}
          </span>
        </div>
        <div className="grid grid-cols-7 gap-y-3 text-sm">
          {WEEKDAYS.map((w) => (
            <span key={w} className="text-dev-text-faint">
              {w}
            </span>
          ))}
          {weeks.map((week, wi) =>
            week.map((cell, ci) => {
              const isTarget = cell === day
              return (
                <span
                  key={`${wi}-${ci}`}
                  className={`flex h-9 w-9 items-center justify-center justify-self-center rounded ${
                    isTarget
                      ? 'bg-dev-green font-medium text-dev-bg-deep'
                      : cell === 0
                        ? ''
                        : 'text-dev-text'
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
