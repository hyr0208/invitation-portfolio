import { Section } from './Section'
import { HeartPhoto } from './HeartPhoto'
import type { InvitationData } from '../types'
import locketPhoto from '../../photo-story/assets/photos/story-1.jpg'

interface GreetingProps {
  data: InvitationData
}

export function Greeting({ data }: GreetingProps) {
  return (
    <Section title="Dear you" kicker="초대의 말씀" tone="burgundy">
      <div className="torn-edge bg-diary-cream-soft px-6 py-8 shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
        <div className="space-y-1.5 text-center text-[15px] leading-loose text-diary-ink">
          {data.greeting.map((line, index) =>
            line === '' ? <div key={index} className="h-2" /> : <p key={index}>{line}</p>,
          )}
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center">
        <HeartPhoto src={locketPhoto} alt={`${data.groom.name}와 ${data.bride.name}`} className="w-44" />
        <p className="mt-6 max-w-[280px] text-center text-sm leading-relaxed text-diary-cream-deep italic">
          “{data.greetingQuote}”
        </p>
      </div>
    </Section>
  )
}
