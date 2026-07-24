import { Section } from "./Section";
import { Divider } from "./Divider";
import type { InvitationData } from "../types";

interface GreetingProps {
  data: InvitationData;
}

export function Greeting({ data }: GreetingProps) {
  return (
    <Section eyebrow="Invitation" title="모시는 글">
      <div className="mx-auto max-w-xs space-y-1.5 text-center text-[15px] leading-loose text-ink-soft mb-4">
        {data.greeting.map((line, index) =>
          line === "" ? (
            <div key={index} className="h-2" />
          ) : (
            <p key={index}>{line}</p>
          ),
        )}
      </div>

      <Divider />

      <div className="flex flex-col items-center gap-5">
        <div className="text-center">
          <p className="font-serif-en text-[11px] tracking-[0.25em] text-terracotta uppercase">
            Groom
          </p>
          <p className="mt-1.5 text-sm text-ink-soft">
            {data.groom.parents.father} · {data.groom.parents.mother}의 아들
          </p>
          <p className="font-serif-kr mt-1 text-xl font-medium text-ink">
            {data.groom.name}
          </p>
        </div>

        <span className="h-px w-10 bg-line" />

        <div className="text-center">
          <p className="font-serif-en text-[11px] tracking-[0.25em] text-terracotta uppercase">
            Bride
          </p>
          <p className="mt-1.5 text-sm text-ink-soft">
            {data.bride.parents.father} · {data.bride.parents.mother}의 딸
          </p>
          <p className="font-serif-kr mt-1 text-xl font-medium text-ink">
            {data.bride.name}
          </p>
        </div>
      </div>
    </Section>
  );
}
