import { useState } from 'react'
import { Section } from './Section'
import { copyText } from '../utils/clipboard'
import type { InvitationData } from '../types'

interface LocationProps {
  data: InvitationData
}

const MAP_LINKS = (query: string) => [
  { label: '카카오맵', href: `https://map.kakao.com/link/search/${encodeURIComponent(query)}` },
  { label: '네이버지도', href: `https://map.naver.com/p/search/${encodeURIComponent(query)}` },
  { label: '티맵', href: `https://tmap.life/search/${encodeURIComponent(query)}` },
]

export function Location({ data }: LocationProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const ok = await copyText(data.venueAddress)
    if (ok) {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    }
  }

  return (
    <Section scene="SCENE 05" eyebrow="Location" title="오시는 길">
      <p className="text-[15px] font-medium text-film-ink">{data.venueName}</p>
      <p className="mt-1 text-sm text-film-ink-soft">{data.venueHall}</p>

      <div
        className="mt-5 flex aspect-4/3 w-full items-center justify-center border border-dashed border-film-line"
        role="img"
        aria-label="예식장 위치 지도 영역"
      >
        <span className="font-mono text-[11px] text-film-ink-faint">MAP AREA (SAMPLE)</span>
      </div>

      <div className="flex items-center justify-between border-b border-dashed border-film-line py-4">
        <p className="text-sm text-film-ink-soft">{data.venueAddress}</p>
        <button
          type="button"
          onClick={handleCopy}
          className="shrink-0 font-mono text-[11px] text-film-ink-soft underline decoration-film-line underline-offset-4 hover:text-film-orange"
        >
          {copied ? 'COPIED' : 'COPY'}
        </button>
      </div>

      <div className="flex divide-x divide-dashed divide-film-line border-b border-dashed border-film-line">
        {MAP_LINKS(data.mapQuery).map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="flex-1 py-3 text-center text-xs text-film-ink-soft transition-colors hover:text-film-orange"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="mt-8 space-y-4 text-sm text-film-ink-soft">
        <div>
          <p className="mb-1 font-medium text-film-ink">지하철</p>
          <p>공항철도 홍대입구역 3번 출구 도보 6분</p>
        </div>
        <div>
          <p className="mb-1 font-medium text-film-ink">버스</p>
          <p>간선 210, 271 · 지선 7013 · 연남동 정류장 하차</p>
        </div>
        <div>
          <p className="mb-1 font-medium text-film-ink">주차</p>
          <p>건물 내 주차 공간 협소 · 대중교통 이용 권장</p>
        </div>
      </div>
    </Section>
  )
}
