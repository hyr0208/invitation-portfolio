import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface SectionProps {
  eyebrow?: string
  title?: string
  className?: string
  children: ReactNode
}

export function Section({ eyebrow, title, className = '', children }: SectionProps) {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      className={`px-6 py-14 transition-all duration-700 ease-out ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } ${className}`}
    >
      {(eyebrow || title) && (
        <div className="mb-9 text-center">
          {eyebrow && (
            <p className="font-serif-en mb-2 text-xs tracking-[0.3em] text-terracotta uppercase">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="font-serif-kr text-[19px] font-medium text-ink">{title}</h2>
          )}
        </div>
      )}
      {children}
    </section>
  )
}
