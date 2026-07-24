import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface SectionProps {
  index: string
  title: string
  className?: string
  children: ReactNode
}

export function Section({ index, title, className = '', children }: SectionProps) {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      className={`px-6 py-14 transition-all duration-700 ease-out ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } ${className}`}
    >
      <div className="mb-8 flex items-baseline gap-3">
        <span className="text-xs font-medium tracking-widest text-neutral-300">{index}</span>
        <span className="h-px flex-1 bg-neutral-200" />
        <h2 className="text-base font-bold tracking-tight text-neutral-900">{title}</h2>
      </div>
      {children}
    </section>
  )
}
