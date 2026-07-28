import { Section } from './Section'
import type { InvitationData } from '../types'

interface GreetingProps {
  data: InvitationData
}

export function Greeting({ data }: GreetingProps) {
  return (
    <Section eyebrow="Invitation" title="모시는 글">
      <div className="space-y-1.5 text-[15px] leading-loose text-gallery-ink-soft">
        {data.greeting.map((line, index) =>
          line === '' ? (
            <div key={index} className="h-2" />
          ) : (
            <p key={index}>{line}</p>
          ),
        )}
      </div>

      <div className="mt-10 flex gap-10">
        <div>
          <p className="text-[11px] tracking-[0.2em] text-gallery-ink-faint uppercase">Groom</p>
          <p className="mt-1.5 text-base text-gallery-ink">{data.groom.name}</p>
          <p className="mt-1 text-xs text-gallery-ink-soft">
            {data.groom.parents.father} · {data.groom.parents.mother}의 아들
          </p>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.2em] text-gallery-ink-faint uppercase">Bride</p>
          <p className="mt-1.5 text-base text-gallery-ink">{data.bride.name}</p>
          <p className="mt-1 text-xs text-gallery-ink-soft">
            {data.bride.parents.father} · {data.bride.parents.mother}의 딸
          </p>
        </div>
      </div>
    </Section>
  )
}
