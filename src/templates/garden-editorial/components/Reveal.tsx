import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.12 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`transform-gpu transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} ${className}`}>{children}</div>
}
