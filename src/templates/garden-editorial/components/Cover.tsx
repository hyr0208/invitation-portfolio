import type { InvitationData } from "../types";
import coverBg from "../assets/photos/cover-bg.jpg";

interface CoverProps {
  data: InvitationData;
}

export function Cover({ data }: CoverProps) {
  const date = new Date(data.weddingDateISO);
  const year = date.getFullYear();

  return (
    <header className="relative flex min-h-svh flex-col overflow-hidden bg-garden-ink text-garden">
      <img
        src={coverBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-65 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-linear-to-b from-garden-ink-dark/80 via-transparent to-garden-ink-dark" />

      <div className="relative flex flex-1 flex-col justify-between px-7 py-8">
        <div className="flex items-center justify-between text-[10px] tracking-[0.28em] uppercase">
          <span>
            {data.groom.shortName} &amp; {data.bride.shortName} / {year}
          </span>
          <span>Invitation</span>
        </div>

        <div className="pb-3">
          <p className="mb-7 text-[11px] tracking-[0.35em] text-garden-sage-light uppercase">
            The beginning of forever
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,11vw,4rem)] leading-[0.9] tracking-[-0.03em]">
            {data.groom.name}
            <br />
            <i className="ml-12 text-[0.65em] font-normal text-garden-sage-light">
              &amp;
            </i>
            <br />
            {data.bride.name}
          </h1>
          <div className="mt-10 flex items-end justify-between border-t border-white/35 pt-4 text-xs">
            <span>{data.weddingDateLabel}</span>
            <span className="text-right">
              {data.venueName}
              <br />
              {data.weddingTimeLabel}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1 pt-10 text-garden-sage-light">
          <span className="animate-bounce text-lg leading-none">⌄</span>
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        </div>
      </div>
    </header>
  );
}
