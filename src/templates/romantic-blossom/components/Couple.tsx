import { useState } from 'react'
import { Section } from './Section'
import type { InvitationData, PersonInfo } from '../types'

interface CoupleProps {
  data: InvitationData
}

function PersonRow({ label, name, phone }: { label: string; name: string; phone: string }) {
  return (
    <div className="flex items-center justify-between py-3.5">
      <p className="text-sm text-rose-ink">
        <span className="mr-2 text-rose-ink-faint">{label}</span>
        {name}
      </p>
      <div className="flex items-center gap-3 text-xs tracking-wide text-rose-ink-soft">
        <a href={`tel:${phone}`} className="underline decoration-blossom-line underline-offset-4 hover:text-rose">
          전화
        </a>
        <a href={`sms:${phone}`} className="underline decoration-blossom-line underline-offset-4 hover:text-rose">
          문자
        </a>
      </div>
    </div>
  )
}

function CoupleBlock({ person }: { person: PersonInfo }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="border-b border-blossom-line py-5 last:border-b-0">
      <div className="flex items-center justify-between">
        <span className="text-[11px] tracking-[0.2em] text-rose-ink-faint uppercase">
          {person.role === '신랑' ? 'Groom' : 'Bride'}
        </span>
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="text-[11px] text-rose-ink-faint underline decoration-blossom-line underline-offset-4"
        >
          {expanded ? '접기' : '부모님 연락처'}
        </button>
      </div>
      <div className="mt-2">
        <PersonRow label={person.role} name={person.name} phone={person.phone} />
      </div>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`divide-y divide-blossom-line/70 border-t border-blossom-line/70 transition-opacity duration-300 ${
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
    </div>
  )
}

export function Couple({ data }: CoupleProps) {
  return (
    <Section index="02" eyebrow="Contact" title="연락하기">
      <div className="border-t border-blossom-line">
        <CoupleBlock person={data.groom} />
        <CoupleBlock person={data.bride} />
      </div>
    </Section>
  )
}
