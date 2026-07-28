import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface SectionProps {
  eyebrow?: string
  title?: string
  children: ReactNode
}

export function Section({ eyebrow, title, children }: SectionProps) {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      className={`px-8 py-16 transition-all duration-700 ease-out ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      {(eyebrow || title) && (
        <div className="mb-10">
          {eyebrow && (
            <p className="mb-3 text-[11px] tracking-[0.35em] text-gallery-ink-faint uppercase">
              {eyebrow}
            </p>
          )}
          {title && <h2 className="text-2xl text-gallery-ink">{title}</h2>}
        </div>
      )}
      {children}
    </section>
  )
}
