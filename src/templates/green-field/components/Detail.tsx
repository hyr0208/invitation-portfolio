import { Section } from './Section'
import type { DetailNotice } from '../types'

interface DetailProps {
  details: DetailNotice[]
}

export function Detail({ details }: DetailProps) {
  return (
    <Section title="Information" kicker="안내사항">
      <ol className="space-y-3">
        {details.map((notice, i) => (
          <li
            key={notice.title}
            className="flex gap-4 rounded-sm border border-field-line bg-field-ivory-soft px-5 py-5"
          >
            <span className="font-script text-3xl leading-none text-field-olive">{i + 1}</span>
            <div>
              <p className="text-[15px] font-semibold text-field-forest">{notice.title}</p>
              <p className="mt-2 text-[13px] leading-relaxed whitespace-pre-line text-field-ink-soft">
                {notice.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
