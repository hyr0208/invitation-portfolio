import { Section } from './Section'
import { useCountdown } from '../hooks/useCountdown'
import { getMonthMatrix } from '../utils/date'
import type { InvitationData } from '../types'

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토']

interface DateInfoProps {
  data: InvitationData
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-md bg-diary-burgundy px-3 py-3 text-diary-cream-soft shadow-[0_3px_8px_rgba(59,42,34,0.25)]">
      <span className="text-2xl font-bold tabular-nums">{String(value).padStart(2, '0')}</span>
      <span className="text-[10px] tracking-widest text-diary-cream-deep uppercase">{label}</span>
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
    <Section title="Save the Date" kicker="예식 안내">
      <div className="rounded-md border border-diary-line bg-diary-cream-soft p-6 shadow-[0_4px_12px_rgba(59,42,34,0.1)]">
        <p className="mb-4 text-center text-lg font-semibold tracking-wide text-diary-ink">
          {year}년 {month + 1}월
        </p>
        <div className="grid grid-cols-7 gap-y-3 text-center text-sm">
          {WEEKDAYS.map((w) => (
            <span key={w} className="text-diary-ink-faint">
              {w}
            </span>
          ))}
          {weeks.map((week, wi) =>
            week.map((cell, ci) => {
              const isTarget = cell === day
              return (
                <span key={`${wi}-${ci}`} className="flex h-9 items-center justify-center">
                  {cell !== 0 &&
                    (isTarget ? (
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-diary-burgundy text-sm font-semibold text-diary-cream-soft">
                        {cell}
                      </span>
                    ) : (
                      <span className="text-diary-ink-soft">{cell}</span>
                    ))}
                </span>
              )
            }),
          )}
        </div>
      </div>

      <p className="mt-8 text-center text-[15px] text-diary-ink">
        {data.weddingDateLabel} {data.weddingTimeLabel}
      </p>

      <div className="mt-4 grid grid-cols-4 gap-2">
        <TimeBox value={countdown.days} label="Days" />
        <TimeBox value={countdown.hours} label="Hours" />
        <TimeBox value={countdown.minutes} label="Min" />
        <TimeBox value={countdown.seconds} label="Sec" />
      </div>

      <p className="mt-4 text-center text-sm text-diary-ink-soft">
        {data.groom.name} ♥ {data.bride.name}의 결혼식이{' '}
        <span className="font-semibold text-diary-burgundy">{countdown.days}일</span> 남았습니다.
      </p>
    </Section>
  )
}
