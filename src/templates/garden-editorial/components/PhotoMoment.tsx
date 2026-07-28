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
      className={`relative aspect-4/5 w-full overflow-hidden transition-all duration-700 ease-out ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <img
        src={momentPhoto}
        alt=""
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-garden-ink-dark/65 to-transparent" />
      <p className="absolute bottom-5 left-6 font-serif text-lg text-garden italic">{caption}</p>
    </section>
  )
}
