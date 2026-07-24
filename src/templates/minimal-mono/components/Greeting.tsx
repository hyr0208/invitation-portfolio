import { Section } from './Section'
import type { InvitationData } from '../types'

interface GreetingProps {
  data: InvitationData
}

export function Greeting({ data }: GreetingProps) {
  return (
    <Section index="01" title="INVITATION">
      <div className="space-y-1.5 text-[15px] leading-loose text-neutral-600">
        {data.greeting.map((line, index) =>
          line === '' ? <div key={index} className="h-2" /> : <p key={index}>{line}</p>,
        )}
      </div>
      <p className="mt-6 text-sm font-medium tracking-wide text-neutral-900">
        {data.groom.name} · {data.bride.name}
      </p>
    </Section>
  )
}
