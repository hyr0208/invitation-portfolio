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
    <div className="mb-9 text-center">
      {eyebrow && (
        <div className="mb-3 flex items-center justify-center gap-2 text-[11px] tracking-[0.25em] text-spring-ink-faint uppercase">
          {index && <span>{index}</span>}
          <span className="text-spring-blossom-dark">❀</span>
          <span>{eyebrow}</span>
        </div>
      )}
      {title && <h2 className="font-serif-kr text-2xl text-spring-ink">{title}</h2>}
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
