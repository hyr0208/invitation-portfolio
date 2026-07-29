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
    <Section index="05" eyebrow="Location" title="오시는 길">
      <p className="text-center text-[15px] font-medium text-spring-ink">{data.venueName}</p>
      <p className="mt-1 text-center text-sm text-spring-ink-soft">{data.venueHall}</p>

      <div
        className="mt-6 flex aspect-4/3 w-full items-center justify-center rounded-2xl border border-spring-line bg-spring-soft"
        role="img"
        aria-label="예식장 위치 지도 영역"
      >
        <span className="text-xs text-spring-ink-faint">지도 영역 (샘플)</span>
      </div>

      <div className="flex items-center justify-between border-b border-spring-line py-4">
        <p className="text-sm text-spring-ink-soft">{data.venueAddress}</p>
        <button
          type="button"
          onClick={handleCopy}
          className="shrink-0 text-xs text-spring-ink-soft underline decoration-spring-line underline-offset-4 hover:text-spring-blossom-dark"
        >
          {copied ? '복사됨' : '주소 복사'}
        </button>
      </div>

      <div className="flex divide-x divide-spring-line border-b border-spring-line">
        {MAP_LINKS(data.mapQuery).map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="flex-1 py-3 text-center text-xs text-spring-ink-soft transition-colors hover:text-spring-blossom-dark"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="mt-8 space-y-4 text-sm text-spring-ink-soft">
        <div>
          <p className="mb-1 font-medium text-spring-ink">지하철</p>
          <p>신분당선 양재역 3번 출구 도보 8분</p>
        </div>
        <div>
          <p className="mb-1 font-medium text-spring-ink">버스</p>
          <p>간선 401, 452 · 지선 4425 · 양재대로 정류장 하차</p>
        </div>
        <div>
          <p className="mb-1 font-medium text-spring-ink">주차</p>
          <p>웨딩가든 전용 주차장 이용 · 3시간 무료 주차 지원</p>
        </div>
      </div>
    </Section>
  )
}
