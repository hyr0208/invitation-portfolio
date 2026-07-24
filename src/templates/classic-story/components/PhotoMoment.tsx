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
      <img src={momentPhoto} alt="" className="h-full w-full object-cover" />
      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/60 to-transparent px-6 py-6">
        <p className="font-serif-en text-center text-xs tracking-[0.2em] text-cream/90 italic">
          {caption}
        </p>
      </div>
    </section>
  )
}
