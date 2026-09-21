import { Section } from './Section'
import type { InvitationData } from '../types'

interface GreetingProps {
  data: InvitationData
}

export function Greeting({ data }: GreetingProps) {
  return (
    <Section index="01" filename="invitation.ts">
      <div className="rounded-md border border-dev-line bg-dev-bg-soft p-5">
        <p className="text-[13px] text-dev-green-soft">/**</p>
        <div className="mt-1.5 space-y-1.5 text-[14px] leading-loose text-dev-text">
          {data.greeting.map((line, index) =>
            line === '' ? (
              <p key={index} className="text-dev-green-soft"> *</p>
            ) : (
              <p key={index} className="text-dev-green-soft">
                {' '}
                * <span className="text-dev-text">{line}</span>
              </p>
            ),
          )}
        </div>
        <p className="mt-1.5 text-[13px] text-dev-green-soft"> */</p>
      </div>
      <p className="mt-6 text-sm font-medium tracking-wide text-white">
        <span className="text-dev-purple">export default</span> {data.groom.name} · {data.bride.name}
      </p>
    </Section>
  )
}
