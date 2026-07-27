import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface SectionProps {
  scene: string
  eyebrow?: string
  title?: string
  children: ReactNode
}

export function Section({ scene, eyebrow, title, children }: SectionProps) {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      className={`px-7 py-14 transition-all duration-700 ease-out ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <div className="mb-7 flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase">
        <span className="border border-film-orange px-1.5 py-0.5 text-film-orange">{scene}</span>
        <span className="h-px flex-1 bg-film-line" />
        {eyebrow && <span className="text-film-ink-faint">{eyebrow}</span>}
      </div>
      {title && <h2 className="font-serif-kr mb-8 text-2xl text-film-ink">{title}</h2>}
      {children}
    </section>
  )
}
