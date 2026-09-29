import { useInView } from '../hooks/useInView'
import film1 from '../../classic-story/assets/photos/gallery-4.jpg'
import film2 from '../../minimal-mono/assets/photos/gallery-3.jpg'
import film3 from '../../photo-story/assets/photos/story-4.jpg'
import film4 from '../../minimal-mono/assets/photos/gallery-5.jpg'
import film5 from '../../photo-story/assets/photos/story-2.jpg'
import film6 from '../../garden-editorial/assets/photos/gallery-3.jpg'

const LEFT = [film1, film2, film3]
const RIGHT = [film4, film5, film6]

function Strip({ photos, reverse }: { photos: string[]; reverse?: boolean }) {
  // 두 번 이어붙여 끊김 없이 흐르는 필름
  const frames = [...photos, ...photos]
  return (
    <div className="relative h-[460px] w-36 overflow-hidden bg-field-ink px-2.5">
      <div className="pointer-events-none absolute inset-y-0 left-0.5 w-1.5 bg-[repeating-linear-gradient(to_bottom,transparent_0_6px,var(--color-field-ivory)_6px_12px)] opacity-70" />
      <div className="pointer-events-none absolute inset-y-0 right-0.5 w-1.5 bg-[repeating-linear-gradient(to_bottom,transparent_0_6px,var(--color-field-ivory)_6px_12px)] opacity-70" />
      <div
        className="flex flex-col gap-2.5 py-2.5"
        style={{
          animation: `film-roll 24s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {frames.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            className="aspect-3/4 w-full object-cover grayscale contrast-125"
          />
        ))}
      </div>
    </div>
  )
}

export function FilmStrip() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      className={`overflow-hidden bg-field-ivory-soft px-6 py-16 transition-all duration-700 ease-out ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <p className="text-center font-script text-[44px] leading-none text-field-forest">Wedding Invitation</p>
      <p className="mt-3 text-center text-[11px] tracking-[0.3em] text-field-ink-soft">OUR LITTLE FILM</p>

      <div className="mt-10 flex justify-center gap-4">
        <div className="-rotate-3">
          <Strip photos={LEFT} />
        </div>
        <div className="mt-8 rotate-2">
          <Strip photos={RIGHT} reverse />
        </div>
      </div>
    </section>
  )
}
