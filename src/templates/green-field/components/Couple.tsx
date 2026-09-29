import { Section } from './Section'
import type { InvitationData, PersonInfo } from '../types'

interface CoupleProps {
  data: InvitationData
}

function ContactIcon({ type }: { type: 'call' | 'sms' }) {
  if (type === 'call') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M6.6 10.8c1.3 2.6 3.3 4.6 5.9 5.9l2-2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6c0-.6.4-1 1-1h3.9c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1l-2 2.3Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path
        d="M4 5h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H8l-4 3.5V17H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PersonCard({ person }: { person: PersonInfo }) {
  return (
    <div className="flex items-center justify-between rounded-sm border border-field-line bg-field-ivory-soft px-5 py-4 shadow-[0_2px_6px_rgba(59,42,34,0.08)]">
      <div>
        <p className="font-script text-3xl leading-none text-field-olive">
          {person.role === '신랑' ? 'Groom' : 'Bride'}
        </p>
        <p className="mt-1.5 text-sm font-medium text-field-ink">{person.name}</p>
      </div>
      <div className="flex items-center gap-1.5">
        <a
          href={`tel:${person.phone}`}
          aria-label={`${person.name}에게 전화하기`}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-field-forest text-field-forest transition-colors hover:bg-field-forest hover:text-field-ivory-soft"
        >
          <ContactIcon type="call" />
        </a>
        <a
          href={`sms:${person.phone}`}
          aria-label={`${person.name}에게 문자 보내기`}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-field-forest text-field-forest transition-colors hover:bg-field-forest hover:text-field-ivory-soft"
        >
          <ContactIcon type="sms" />
        </a>
      </div>
    </div>
  )
}

export function Couple({ data }: CoupleProps) {
  return (
    <Section title="Contact" kicker="연락하기">
      <div className="space-y-3">
        <PersonCard person={data.groom} />
        <PersonCard person={data.bride} />
      </div>
    </Section>
  )
}
