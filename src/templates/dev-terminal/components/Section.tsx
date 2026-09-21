import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface SectionProps {
  index: string
  filename: string
  className?: string
  children: ReactNode
}

export function Section({ index, filename, className = '', children }: SectionProps) {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      className={`bg-dev-bg px-6 py-14 font-mono transition-all duration-700 ease-out ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } ${className}`}
    >
      <div className="mb-8 flex items-baseline gap-2 text-xs">
        <span className="text-dev-text-faint">{index}</span>
        <span className="text-dev-purple">import</span>
        <span className="text-dev-text">{'{'}</span>
        <span className="text-dev-yellow">{filename}</span>
        <span className="text-dev-text">{'}'}</span>
        <span className="h-px flex-1 bg-dev-line" />
      </div>
      {children}
    </section>
  )
}
