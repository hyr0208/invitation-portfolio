import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface SectionProps {
  title: string
  kicker?: string
  tone?: 'ivory' | 'forest'
  className?: string
  children: ReactNode
}

export function Section({ title, kicker, tone = 'ivory', className = '', children }: SectionProps) {
  const { ref, inView } = useInView<HTMLElement>()
  const isForest = tone === 'forest'

  return (
    <section
      ref={ref}
      className={`px-6 py-16 transition-all duration-700 ease-out ${
        isForest ? 'bg-field-forest' : 'bg-field-ivory'
      } ${inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} ${className}`}
    >
      <div className="mb-9 text-center">
        <h2
          className={`font-script text-[44px] leading-none ${
            isForest ? 'text-field-ivory-soft' : 'text-field-forest'
          }`}
        >
          {title}
        </h2>
        {kicker && (
          <p
            className={`mt-3 text-[11px] tracking-[0.3em] ${
              isForest ? 'text-field-sage' : 'text-field-ink-soft'
            }`}
          >
            {kicker}
          </p>
        )}
      </div>
      {children}
    </section>
  )
}
