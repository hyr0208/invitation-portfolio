import { useInView } from '../hooks/useInView'
import momentPhoto from '../assets/photos/moment.jpg'

interface PhotoMomentProps {
  index: string
}

export function PhotoMoment({ index }: PhotoMomentProps) {
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
        className="h-full w-full object-cover grayscale contrast-125"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
      <span className="absolute bottom-4 left-6 text-xs font-medium tracking-widest text-white/80">
        {index}
      </span>
    </section>
  )
}
