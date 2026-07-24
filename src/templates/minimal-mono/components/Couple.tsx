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

function PersonRow({ person }: { person: PersonInfo }) {
  return (
    <div className="flex items-center justify-between border-b border-neutral-100 py-4 last:border-0">
      <div>
        <p className="text-[10px] font-medium tracking-widest text-neutral-300 uppercase">
          {person.role === '신랑' ? 'Groom' : 'Bride'}
        </p>
        <p className="mt-1 text-sm font-medium text-neutral-900">{person.name}</p>
      </div>
      <div className="flex items-center gap-1.5">
        <a
          href={`tel:${person.phone}`}
          aria-label={`${person.name}에게 전화하기`}
          className="flex h-8 w-8 items-center justify-center border border-neutral-900 text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
        >
          <ContactIcon type="call" />
        </a>
        <a
          href={`sms:${person.phone}`}
          aria-label={`${person.name}에게 문자 보내기`}
          className="flex h-8 w-8 items-center justify-center border border-neutral-900 text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
        >
          <ContactIcon type="sms" />
        </a>
      </div>
    </div>
  )
}

export function Couple({ data }: CoupleProps) {
  return (
    <Section index="02" title="CONTACT">
      <div>
        <PersonRow person={data.groom} />
        <PersonRow person={data.bride} />
      </div>
    </Section>
  )
}
