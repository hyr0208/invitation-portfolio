import { useInView } from '../hooks/useInView'
import type { InvitationData } from '../types'
import { Sparkle } from './Sparkle'
import veilPhoto from '../../classic-story/assets/photos/gallery-3.jpg'

interface GreetingProps {
  data: InvitationData
}

export function Greeting({ data }: GreetingProps) {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      className={`bg-field-ivory px-6 py-20 text-center transition-all duration-700 ease-out ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <div className="relative inline-block">
        <p className="font-pen text-[52px] leading-none text-field-forest">저희, 결혼합니다!</p>
        <svg
          viewBox="0 0 220 14"
          className="mx-auto mt-1 h-3 w-56 text-field-olive"
          fill="none"
          aria-hidden
        >
          <path
            d="M2 9c30-6 60-7 90-3s70 5 126-3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="240"
            strokeDashoffset={inView ? 0 : 240}
            style={{ transition: 'stroke-dashoffset 1.4s ease-out 0.4s' }}
          />
        </svg>
        <span className="absolute -top-3 -right-5 text-field-olive">
          <Sparkle size={18} />
        </span>
        <span className="absolute top-6 -left-6 text-field-sage">
          <Sparkle size={12} delay={1.2} />
        </span>
      </div>
      <p className="mt-3 font-script text-2xl text-field-ink-soft">Welcome to our wedding</p>

      <div className="mx-auto mt-10 w-52 overflow-hidden rounded-t-full border-[6px] border-field-ivory-soft shadow-[0_10px_30px_rgba(31,35,28,0.18)]">
        <img src={veilPhoto} alt="" loading="lazy" className="aspect-3/4 w-full object-cover" />
      </div>

      <div className="mt-10 space-y-1.5 text-[15px] leading-loose text-field-ink">
        {data.greeting.map((line, index) =>
          line === '' ? <div key={index} className="h-3" /> : <p key={index}>{line}</p>,
        )}
      </div>

      <div className="mt-10 flex items-center justify-center gap-4 text-field-ink">
        <span className="text-[15px] font-medium">{data.groom.name}</span>
        <span className="text-field-olive">♡</span>
        <span className="text-[15px] font-medium">{data.bride.name}</span>
      </div>
    </section>
  )
}
