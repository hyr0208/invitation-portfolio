import { useState } from 'react'
import type { InvitationData, PersonInfo } from '../types'
import { Section } from './Section'

interface CoupleProps {
  data: InvitationData
}

function ContactRow({ label, name, phone }: { label: string; name: string; phone: string }) {
  return (
    <div className="flex items-center justify-between py-2.5">
      <p className="text-sm text-garden-ink-soft">
        <span className="mr-2 text-garden-ink-faint">{label}</span>
        {name}
      </p>
      <div className="flex items-center gap-3 text-xs text-garden-ink-soft">
        <a href={`tel:${phone}`} className="underline decoration-garden-sage underline-offset-4 hover:text-garden-tan">
          전화
        </a>
        <a href={`sms:${phone}`} className="underline decoration-garden-sage underline-offset-4 hover:text-garden-tan">
          문자
        </a>
      </div>
    </div>
  )
}

function CoupleCard({ person, number }: { person: PersonInfo; number: string }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="border border-garden-sage bg-garden px-5 py-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs tracking-[0.25em] text-garden-tan uppercase">
            {person.role === '신랑' ? 'Groom' : 'Bride'}
          </p>
          <p className="mt-2 font-serif text-2xl text-garden-ink">{person.name}</p>
          <p className="mt-1 text-sm text-garden-ink-faint">{person.role}</p>
        </div>
        <span className="font-serif text-3xl text-garden-tan">{number}</span>
      </div>

      <div className="mt-4 border-t border-garden-sage/70 pt-1">
        <ContactRow label={person.role} name={person.name} phone={person.phone} />
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="divide-y divide-garden-sage/70 border-t border-garden-sage/70">
            <ContactRow label="아버지" name={person.parents.father} phone={person.parents.fatherPhone} />
            <ContactRow label="어머니" name={person.parents.mother} phone={person.parents.motherPhone} />
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="mt-2 w-full text-center text-xs text-garden-ink-faint underline decoration-garden-sage underline-offset-4"
      >
        {expanded ? '부모님 연락처 접기' : '부모님 연락처 보기'}
      </button>
    </div>
  )
}

export function Couple({ data }: CoupleProps) {
  return (
    <Section eyebrow="Couple" title="두 사람에게 연락하기" className="bg-garden-soft">
      <div className="space-y-3">
        <CoupleCard person={data.groom} number="01" />
        <CoupleCard person={data.bride} number="02" />
      </div>
      <p className="mt-8 text-center text-sm leading-7 text-garden-ink-soft">
        서로의 가장 좋은 계절이 되어
        <br />
        오래도록 함께 걷겠습니다.
      </p>
    </Section>
  )
}
