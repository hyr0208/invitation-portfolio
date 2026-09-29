import { useInView } from '../hooks/useInView'
import { ScriptText } from './ScriptText'
import { Sparkle } from './Sparkle'
import momentPhoto from '../../garden-editorial/assets/photos/moment.jpg'

export function Moment() {
  const { ref, inView } = useInView<HTMLElement>(0.35)

  return (
    <section ref={ref} className="relative aspect-3/4 overflow-hidden bg-field-forest-dark">
      <img
        src={momentPhoto}
        alt=""
        loading="lazy"
        className={`h-full w-full object-cover transition-transform duration-[2400ms] ease-out ${
          inView ? 'scale-100' : 'scale-110'
        }`}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/10" />

      <div className="absolute inset-x-0 bottom-14 px-6 text-field-ivory-soft">
        <p className="text-[64px] leading-[0.9] drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
          <ScriptText text="We're" active={inView} delay={0.2} duration={0.9} className="-rotate-8" />
          <br />
          <ScriptText
            text="getting Married!"
            active={inView}
            delay={1}
            duration={1.8}
            className="ml-8 -rotate-8"
          />
        </p>
      </div>
      <span className="absolute top-[18%] right-[14%] text-field-ivory-soft">
        <Sparkle size={20} />
      </span>
      <span className="absolute top-[28%] right-[26%] text-field-ivory-soft">
        <Sparkle size={11} delay={1.1} />
      </span>
    </section>
  )
}
