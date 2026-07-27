import { useState } from "react";
import { Section } from "./Section";
import { getDday } from "../utils/date";
import type { InvitationData, PersonInfo } from "../types";

interface InfoProps {
  data: InvitationData;
}

function PersonRow({
  label,
  name,
  phone,
}: {
  label: string;
  name: string;
  phone: string;
}) {
  return (
    <div className="flex items-center justify-between py-3 gap-2">
      <p className="text-sm text-film-ink">
        <span className="mr-2 font-mono text-[11px] text-film-ink-faint">
          {label}
        </span>
        {name}
      </p>
      <div className="flex items-center gap-3 font-mono text-[11px] text-film-ink-soft">
        <a
          href={`tel:${phone}`}
          className="underline decoration-film-line underline-offset-4 hover:text-film-orange"
        >
          CALL
        </a>
        <a
          href={`sms:${phone}`}
          className="underline decoration-film-line underline-offset-4 hover:text-film-orange"
        >
          TEXT
        </a>
      </div>
    </div>
  );
}

function ContactBlock({ person }: { person: PersonInfo }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="py-1">
      <div className="flex items-center justify-between">
        <PersonRow
          label={person.role === "신랑" ? "GROOM" : "BRIDE"}
          name={person.name}
          phone={person.phone}
        />
      </div>
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="pb-2 font-mono text-[10px] text-film-ink-faint underline decoration-film-line underline-offset-4"
      >
        {expanded ? "CLOSE" : "PARENTS +"}
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`divide-y divide-dashed divide-film-line border-t border-dashed border-film-line transition-opacity duration-300 ${
              expanded ? "opacity-100 delay-100" : "opacity-0"
            }`}
          >
            <PersonRow
              label="아버지"
              name={person.parents.father}
              phone={person.parents.fatherPhone}
            />
            <PersonRow
              label="어머니"
              name={person.parents.mother}
              phone={person.parents.motherPhone}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Info({ data }: InfoProps) {
  const date = new Date(data.weddingDateISO);
  const dday = getDday(date);
  const ddayLabel =
    dday === 0 ? "D-DAY" : dday > 0 ? `D-${dday}` : `D+${Math.abs(dday)}`;

  const stamp = `'${String(date.getFullYear()).slice(2)} ${String(date.getMonth() + 1).padStart(2, "0")} ${String(
    date.getDate(),
  ).padStart(2, "0")}`;

  return (
    <Section scene="SCENE 04" eyebrow="Info" title="예식 안내">
      <div className="border border-film-ink/15">
        <div className="flex items-center justify-between bg-film-ink px-5 py-2 font-mono text-[10px] tracking-widest text-film-paper uppercase">
          <span>Date</span>
          <span className="text-film-orange">{ddayLabel}</span>
        </div>
        <div className="p-6 text-center">
          <p className="font-mono text-4xl tracking-wider text-film-orange">
            {stamp}
          </p>
          <p className="mt-3 text-sm text-film-ink-soft">
            {data.weddingDateLabel} {data.weddingTimeLabel}
          </p>
        </div>
        <div className="border-t border-dashed border-film-line px-5 py-2 font-mono text-[10px] tracking-widest text-film-ink-faint uppercase">
          Contact
        </div>
        <div className="divide-y divide-dashed divide-film-line px-5">
          <ContactBlock person={data.groom} />
          <ContactBlock person={data.bride} />
        </div>
      </div>
    </Section>
  );
}
