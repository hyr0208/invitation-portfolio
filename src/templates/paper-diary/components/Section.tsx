import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface SectionProps {
  title: string
  kicker?: string
  tone?: 'cream' | 'burgundy'
  className?: string
  children: ReactNode
}

export function Section({ title, kicker, tone = 'cream', className = '', children }: SectionProps) {
  const { ref, inView } = useInView<HTMLElement>()
  const isBurgundy = tone === 'burgundy'

  return (
    <section
      ref={ref}
      className={`px-6 py-14 transition-all duration-700 ease-out ${
        isBurgundy ? 'bg-diary-burgundy' : 'bg-diary-cream'
      } ${inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} ${className}`}
    >
      <div className="mb-8 text-center">
        <span className={`text-lg ${isBurgundy ? 'text-diary-cream-deep' : 'text-diary-burgundy-soft'}`}>
          ♥
        </span>
        <h2
          className={`font-hand text-5xl leading-none ${
            isBurgundy ? 'text-diary-cream-soft' : 'text-diary-burgundy'
          }`}
        >
          {title}
        </h2>
        {kicker && (
          <p
            className={`mt-2 text-xs tracking-[0.2em] ${
              isBurgundy ? 'text-diary-cream-deep' : 'text-diary-ink-soft'
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
