import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface SectionProps {
  index?: string
  eyebrow?: string
  title?: string
  bleed?: boolean
  children: ReactNode
}

export function Section({ index, eyebrow, title, bleed = false, children }: SectionProps) {
  const { ref, inView } = useInView<HTMLElement>()

  const header = (eyebrow || title) && (
    <div className="mb-9">
      {eyebrow && (
        <div className="mb-4 flex items-center gap-3">
          {index && <span className="text-[11px] tracking-[0.2em] text-rose-ink-faint">{index}</span>}
          <span className="h-px flex-1 bg-blossom-line" />
          <span className="text-[11px] tracking-[0.2em] text-rose-ink-faint uppercase">{eyebrow}</span>
        </div>
      )}
      {title && <h2 className="font-serif-kr text-2xl text-rose-ink">{title}</h2>}
    </div>
  )

  return (
    <section
      ref={ref}
      className={`py-14 transition-all duration-700 ease-out ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } ${bleed ? '' : 'px-7'}`}
    >
      {bleed ? (
        <>
          <div className="px-7">{header}</div>
          {children}
        </>
      ) : (
        <>
          {header}
          {children}
        </>
      )}
    </section>
  )
}
