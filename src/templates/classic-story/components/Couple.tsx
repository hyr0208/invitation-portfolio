import { useState } from 'react'
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

function PersonRow({ label, name, phone }: { label: string; name: string; phone: string }) {
  return (
    <div className="flex items-center justify-between py-2.5">
      <p className="text-sm text-ink-soft">
        <span className="mr-2 text-ink-faint">{label}</span>
        {name}
      </p>
      <div className="flex items-center gap-1.5">
        <a
          href={`tel:${phone}`}
          aria-label={`${name}에게 전화하기`}
          className="flex h-8 w-8 items-center justify-center border border-line text-ink-soft transition-colors hover:border-terracotta hover:text-terracotta-dark"
        >
          <ContactIcon type="call" />
        </a>
        <a
          href={`sms:${phone}`}
          aria-label={`${name}에게 문자 보내기`}
          className="flex h-8 w-8 items-center justify-center border border-line text-ink-soft transition-colors hover:border-terracotta hover:text-terracotta-dark"
        >
          <ContactIcon type="sms" />
        </a>
      </div>
    </div>
  )
}

function CoupleCard({ person }: { person: PersonInfo }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="border border-line bg-cream px-5 py-4">
      <p className="font-serif-en text-[11px] tracking-[0.25em] text-terracotta uppercase">
        {person.role === '신랑' ? 'Groom' : 'Bride'}
      </p>
      <div className="mt-3">
        <PersonRow label={person.role} name={person.name} phone={person.phone} />
      </div>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`divide-y divide-line/70 border-t border-line/70 transition-opacity duration-300 ${
              expanded ? 'opacity-100 delay-100' : 'opacity-0'
            }`}
          >
            <PersonRow
              label="아버지"
              name={person.parents.father}
              phone={person.parents.fatherPhone}
            />
            <PersonRow
              label="어머니"
              name={person.parents.mother}
              phone={person.parents.motherPhone}
            />
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="mt-2 w-full text-center text-xs text-ink-faint underline decoration-line underline-offset-4"
      >
        {expanded ? '부모님 연락처 접기' : '부모님 연락처 보기'}
      </button>
    </div>
  )
}

export function Couple({ data }: CoupleProps) {
  return (
    <Section eyebrow="Contact" title="연락하기">
      <div className="grid grid-cols-1 gap-4">
        <CoupleCard person={data.groom} />
        <CoupleCard person={data.bride} />
      </div>
    </Section>
  )
}
