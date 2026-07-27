import { Section } from './Section'
import type { InvitationData } from '../types'

interface GreetingProps {
  data: InvitationData
}

export function Greeting({ data }: GreetingProps) {
  return (
    <Section scene="SCENE 03" eyebrow="Diary" title="모시는 글">
      <div className="space-y-1.5 border-l-2 border-film-orange/50 pl-5 font-mono text-[13px] leading-loose text-film-ink-soft">
        {data.greeting.map((line, index) =>
          line === '' ? (
            <div key={index} className="h-2" />
          ) : (
            <p key={index}>{line}</p>
          ),
        )}
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-dashed border-film-line pt-5 font-mono text-xs tracking-wide text-film-ink">
        <span>
          <span className="text-film-ink-faint">GROOM</span> {data.groom.name}
        </span>
        <span>
          <span className="text-film-ink-faint">BRIDE</span> {data.bride.name}
        </span>
      </div>
    </Section>
  )
}
