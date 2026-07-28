import type { InvitationData } from '../types'
import { Section } from './Section'

interface GreetingProps {
  data: InvitationData
}

export function Greeting({ data }: GreetingProps) {
  return (
    <Section eyebrow="Invitation" title="모시는 글" className="bg-garden">
      <div className="mx-auto max-w-[290px] text-center text-[1.05rem] leading-[2] text-garden-ink-soft">
        {data.greeting.map((line, index) =>
          line === '' ? <div key={index} className="h-2" /> : <p key={index}>{line}</p>,
        )}
      </div>
      <div className="mx-auto mt-9 h-px w-12 bg-garden-sage" />
      <p className="mt-8 text-center text-sm leading-7 text-garden-ink-faint">
        소중한 분들을 모시고
        <br />
        저희의 새로운 계절을 시작하려 합니다.
      </p>
    </Section>
  )
}
