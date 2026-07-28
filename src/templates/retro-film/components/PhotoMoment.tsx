import { useInView } from '../hooks/useInView'
import momentPhoto from '../assets/photos/moment.jpg'

interface PhotoMomentProps {
  frame: string
}

export function PhotoMoment({ frame }: PhotoMomentProps) {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      className={`px-4 py-4 transition-all duration-700 ease-out ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <div className="relative aspect-4/5 w-full overflow-hidden border border-film-ink/15">
        <img
          src={momentPhoto}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover filter-[sepia(0.3)_saturate(0.8)_contrast(1.05)]"
        />
        <span className="absolute top-3 left-3 border border-film-paper/70 px-1.5 py-0.5 font-mono text-[10px] tracking-widest text-film-paper uppercase">
          {frame}
        </span>
      </div>
    </section>
  )
}
