import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface SectionProps {
  eyebrow?: string
  title?: string
  className?: string
  children: ReactNode
}

export function Section({ eyebrow, title, children, className = '' }: SectionProps) {
  const { ref, inView } = useInView<HTMLElement>(0.12)

  return (
    <section
      ref={ref}
      className={`px-7 py-16 transition-all duration-700 ease-out ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      } ${className}`}
    >
      {(eyebrow || title) && (
        <div className="mb-9 text-center">
          {eyebrow && (
            <p className="mb-2 text-xs tracking-[0.3em] text-garden-tan uppercase">{eyebrow}</p>
          )}
          {title && <h2 className="font-serif text-[1.45rem] text-garden-ink">{title}</h2>}
        </div>
      )}
      {children}
    </section>
  )
}
