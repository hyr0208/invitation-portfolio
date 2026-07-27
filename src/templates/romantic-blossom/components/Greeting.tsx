import { Section } from './Section'
import type { InvitationData } from '../types'

interface GreetingProps {
  data: InvitationData
}

export function Greeting({ data }: GreetingProps) {
  return (
    <Section index="01" eyebrow="Invitation" title="모시는 글">
      <div className="space-y-1.5 text-[15px] leading-loose text-rose-ink-soft">
        {data.greeting.map((line, index) =>
          line === '' ? (
            <div key={index} className="h-2" />
          ) : (
            <p key={index}>{line}</p>
          ),
        )}
      </div>

      <div className="mt-10 divide-y divide-blossom-line border-t border-b border-blossom-line">
        <div className="flex items-center justify-between py-4">
          <span className="text-[11px] tracking-[0.2em] text-rose-ink-faint uppercase">Groom</span>
          <span className="text-right text-sm text-rose-ink">
            {data.groom.parents.father} · {data.groom.parents.mother}의 아들{' '}
            <span className="font-serif-kr text-base">{data.groom.name}</span>
          </span>
        </div>
        <div className="flex items-center justify-between py-4">
          <span className="text-[11px] tracking-[0.2em] text-rose-ink-faint uppercase">Bride</span>
          <span className="text-right text-sm text-rose-ink">
            {data.bride.parents.father} · {data.bride.parents.mother}의 딸{' '}
            <span className="font-serif-kr text-base">{data.bride.name}</span>
          </span>
        </div>
      </div>
    </Section>
  )
}
