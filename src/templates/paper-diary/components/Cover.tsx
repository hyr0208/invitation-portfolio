import type { InvitationData } from '../types'
import { HeartSticker } from './HeartSticker'
import coverBg from '../../romantic-blossom/assets/photos/cover-bg.jpg'

interface CoverProps {
  data: InvitationData
}

function WriteInText({
  text,
  charDelay = 0.06,
  startDelay = 0.3,
}: {
  text: string
  charDelay?: number
  startDelay?: number
}) {
  return (
    <span className="inline-block whitespace-pre">
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="animate-fade-up inline-block opacity-0"
          style={{ animationDelay: `${startDelay + i * charDelay}s` }}
        >
          {char}
        </span>
      ))}
    </span>
  )
}

const FALLING_HEARTS = [
  { left: '6%', size: 20, tilt: -10, fallDuration: 13, fallDelay: -3, swayDuration: 4.5, swayDelay: -1 },
  { left: '18%', size: 16, tilt: 15, fallDuration: 10, fallDelay: -6, swayDuration: 3.5, swayDelay: -2 },
  { left: '30%', size: 26, tilt: -5, fallDuration: 15, fallDelay: -1, swayDuration: 5, swayDelay: -3 },
  { left: '44%', size: 18, tilt: 20, fallDuration: 11, fallDelay: -8, swayDuration: 4, swayDelay: -0.5 },
  { left: '58%', size: 24, tilt: -18, fallDuration: 14, fallDelay: -4, swayDuration: 6, swayDelay: -2.5 },
  { left: '70%', size: 16, tilt: 8, fallDuration: 9, fallDelay: -2, swayDuration: 3, swayDelay: -1.5 },
  { left: '82%', size: 22, tilt: -12, fallDuration: 12, fallDelay: -7, swayDuration: 4.5, swayDelay: -3.5 },
  { left: '92%', size: 28, tilt: 10, fallDuration: 16, fallDelay: -5, swayDuration: 5.5, swayDelay: -1 },
  { left: '50%', size: 14, tilt: -6, fallDuration: 10.5, fallDelay: -9, swayDuration: 3.8, swayDelay: -2.8 },
]

export function Cover({ data }: CoverProps) {
  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden bg-diary-cream">
      <div className="relative flex-1 overflow-hidden">
        <img src={coverBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-b from-diary-burgundy-dark/10 via-transparent to-diary-cream" />
      </div>

      <div className="relative px-6 pt-8 pb-12 text-center">
        <p className="font-hand text-6xl leading-none text-diary-burgundy">
          <WriteInText text="Our Wedding Day" />
        </p>
        <p className="mt-4 text-base text-diary-ink">
          {data.groom.name} · {data.bride.name}
        </p>
        <div className="mt-6 inline-block -rotate-2 rounded-sm bg-diary-cream-soft px-5 py-2.5 shadow-[0_3px_6px_rgba(59,42,34,0.18)]">
          <p className="text-sm font-medium text-diary-ink">
            {data.weddingDateLabel} · {data.weddingTimeLabel}
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        {FALLING_HEARTS.map((h, i) => (
          <div
            key={i}
            className="absolute top-0"
            style={{
              left: h.left,
              animation: `petal-sway ${h.swayDuration}s ease-in-out infinite`,
              animationDelay: `${h.swayDelay}s`,
            }}
          >
            <div
              style={{
                animation: `petal-fall ${h.fallDuration}s linear infinite`,
                animationDelay: `${h.fallDelay}s`,
              }}
            >
              <HeartSticker size={h.size} rotate={h.tilt} absolute={false} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
