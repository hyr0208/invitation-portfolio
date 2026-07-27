import { useInView } from '../hooks/useInView'
import momentPhoto from '../assets/photos/moment.jpg'

interface PhotoMomentProps {
  caption: string
}

export function PhotoMoment({ caption }: PhotoMomentProps) {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <div className="aspect-4/5 w-full overflow-hidden">
        <img src={momentPhoto} alt="" className="h-full w-full object-cover" />
      </div>
      <p className="py-5 text-center text-[11px] tracking-[0.25em] text-rose-ink-faint uppercase">
        {caption}
      </p>
    </section>
  )
}
