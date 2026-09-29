import { Section } from './Section'
import { useCountdown } from '../hooks/useCountdown'
import { getMonthMatrix } from '../utils/date'
import type { InvitationData } from '../types'

const WEEKDAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

interface DateInfoProps {
  data: InvitationData
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-3xl font-light text-field-ivory-soft tabular-nums">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-[10px] tracking-[0.2em] text-field-sage uppercase">{label}</span>
    </div>
  )
}

export function DateInfo({ data }: DateInfoProps) {
  const date = new Date(data.weddingDateISO)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const weeks = getMonthMatrix(year, month)
  const countdown = useCountdown(data.weddingDateISO)

  return (
    <Section title="Save the Date" kicker="예식 안내" tone="forest">
      <p className="text-center text-[15px] text-field-ivory-soft">
        {data.weddingDateLabel} {data.weddingTimeLabel}
      </p>

      <div className="mt-8 border-y border-field-ivory-soft/20 py-6">
        <p className="mb-5 text-center text-5xl font-extralight text-field-ivory-soft tabular-nums">
          {String(month + 1).padStart(2, '0')}
        </p>
        <div className="grid grid-cols-7 gap-y-2 text-center">
          {WEEKDAYS.map((w, i) => (
            <span
              key={w}
              className={`text-[9px] tracking-wider ${i === 0 ? 'text-[#d9a38f]' : 'text-field-sage'}`}
            >
              {w}
            </span>
          ))}
          {weeks.map((week, wi) =>
            week.map((cell, ci) => {
              const isTarget = cell === day
              return (
                <span key={`${wi}-${ci}`} className="flex h-9 items-center justify-center text-sm">
                  {cell !== 0 &&
                    (isTarget ? (
                      <span className="relative flex h-8 w-8 items-center justify-center font-semibold text-field-forest">
                        <svg viewBox="0 0 24 24" className="absolute inset-0 h-full w-full text-field-ivory-soft">
                          <path
                            d="M12 21s-7.5-4.6-9.3-9.2C1.4 8.4 3.6 5 7 5c2 0 3.6 1.1 5 3 1.4-1.9 3-3 5-3 3.4 0 5.6 3.4 4.3 6.8C19.5 16.4 12 21 12 21Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span className="relative -mt-0.5 text-[13px]">{cell}</span>
                      </span>
                    ) : (
                      <span className={ci === 0 ? 'text-[#d9a38f]' : 'text-field-ivory/75'}>{cell}</span>
                    ))}
                </span>
              )
            }),
          )}
        </div>
      </div>

      <div className="mt-8 flex items-start justify-center gap-5">
        <TimeBox value={countdown.days} label="Days" />
        <span className="pt-1 text-2xl text-field-sage">:</span>
        <TimeBox value={countdown.hours} label="Hours" />
        <span className="pt-1 text-2xl text-field-sage">:</span>
        <TimeBox value={countdown.minutes} label="Min" />
        <span className="pt-1 text-2xl text-field-sage">:</span>
        <TimeBox value={countdown.seconds} label="Sec" />
      </div>

      <p className="mt-6 text-center text-sm text-field-ivory/80">
        {data.groom.name}, {data.bride.name}의 결혼식이{' '}
        <span className="font-semibold text-field-ivory-soft">{countdown.days}일</span> 남았습니다.
      </p>
    </Section>
  )
}
