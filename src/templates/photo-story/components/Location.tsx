import { useState } from "react";
import { Section } from "./Section";
import { copyText } from "../utils/clipboard";
import type { InvitationData } from "../types";

interface LocationProps {
  data: InvitationData;
}

const MAP_LINKS = (query: string) => [
  {
    label: "카카오맵",
    href: `https://map.kakao.com/link/search/${encodeURIComponent(query)}`,
  },
  {
    label: "네이버지도",
    href: `https://map.naver.com/p/search/${encodeURIComponent(query)}`,
  },
  {
    label: "티맵",
    href: `https://tmap.life/search/${encodeURIComponent(query)}`,
  },
];

export function Location({ data }: LocationProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const ok = await copyText(data.venueAddress);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <Section eyebrow="Location" title="오시는 길">
      <p className="text-[15px] text-gallery-ink">{data.venueName}</p>
      <p className="mt-1 text-sm text-gallery-ink-soft">{data.venueHall}</p>

      <div
        className="mt-6 flex aspect-4/3 w-full items-center justify-center bg-gallery-soft"
        role="img"
        aria-label="예식장 위치 지도 영역"
      >
        <span className="text-xs text-gallery-ink-faint">
          MAP AREA (SAMPLE)
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <p className="text-sm text-gallery-ink-soft">{data.venueAddress}</p>
        <button
          type="button"
          onClick={handleCopy}
          className="shrink-0 text-xs text-gallery-ink-soft underline decoration-gallery-line underline-offset-4 hover:text-gallery-navy"
        >
          {copied ? "복사됨" : "주소 복사"}
        </button>
      </div>

      <div className="mt-5 flex gap-6">
        {MAP_LINKS(data.mapQuery).map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-gallery-ink-soft underline decoration-gallery-line underline-offset-4 hover:text-gallery-navy"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="mt-10 space-y-4 text-sm text-gallery-ink-soft">
        <div>
          <p className="mb-1 text-gallery-ink font-semibold">지하철</p>
          <p>6호선 한강진역 3번 출구 도보 5분</p>
        </div>
        <div>
          <p className="mb-1 text-gallery-ink font-semibold">버스</p>
          <p>간선 402, 405 · 지선 0211 · 한남동 정류장 하차</p>
        </div>
        <div>
          <p className="mb-1 text-gallery-ink font-semibold">주차</p>
          <p>건물 내 주차 공간 협소 · 대중교통 이용 권장</p>
        </div>
      </div>
    </Section>
  );
}
