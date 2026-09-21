import type { InvitationData } from '../types'
import coverBg from '../assets/photos/cover-bg.jpg'

interface CoverProps {
  data: InvitationData
}

export function Cover({ data }: CoverProps) {
  const date = new Date(data.weddingDateISO)
  const dateISO = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
    date.getDate(),
  ).padStart(2, '0')}`

  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden bg-dev-bg-deep font-mono">
      <div className="relative z-10 flex items-center gap-1.5 border-b border-dev-line bg-dev-bg-soft px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-3 text-[11px] tracking-wide text-dev-text-soft">wedding.sh — zsh</span>
      </div>

      <div className="relative flex flex-1 flex-col justify-end px-6 py-10">
        <img
          src={coverBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-linear-to-t from-dev-bg-deep via-dev-bg-deep/70 to-dev-bg-deep/20" />

        <div className="relative text-xs text-dev-text-soft">
          <p>
            <span className="text-dev-green">$</span> git log -1 --date=short --format=%cd
          </p>
          <p className="mt-1 text-dev-text-faint">{dateISO}</p>
        </div>

        <div className="relative mt-8">
          <p className="text-sm text-dev-text-soft">
            <span className="text-dev-purple">const</span> <span className="text-dev-blue">couple</span>{' '}
            <span className="text-dev-text">=</span> <span className="text-dev-text">{'{'}</span>
          </p>
          <h1 className="mt-2 pl-4 text-4xl leading-[1.2] font-bold tracking-tight text-white">
            <span className="text-dev-orange">"{data.groom.name}"</span>
            <span className="text-dev-text"> &amp;&amp;</span>
            <br />
            <span className="text-dev-orange">"{data.bride.name}"</span>
          </h1>
          <p className="mt-2 text-sm text-dev-text">{'}'}</p>
          <p className="mt-6 text-[13px] leading-relaxed text-dev-text-soft">
            <span className="text-dev-green-soft">// </span>
            {data.weddingDateLabel} · {data.weddingTimeLabel}
            <br />
            <span className="text-dev-green-soft">// </span>
            {data.venueName} {data.venueHall}
          </p>
        </div>

        <div className="relative mt-10 flex items-center gap-1.5 text-dev-text-faint">
          <span className="inline-block h-3.5 w-2 animate-pulse bg-dev-green" />
          <span className="text-[11px] tracking-widest uppercase">scroll to continue</span>
        </div>
      </div>
    </section>
  )
}
