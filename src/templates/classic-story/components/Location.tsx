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
    <Section eyebrow="Location" title="오시는 길">
      <div className="mx-auto max-w-xs text-center">
        <p className="text-[15px] font-medium text-ink">{data.venueName}</p>
        <p className="mt-1 text-sm text-ink-soft">{data.venueHall}</p>

        <div className="mt-5 aspect-4/3 w-full border border-line bg-cream-soft" role="img" aria-label="예식장 위치 지도 영역">
          <div className="flex h-full flex-col items-center justify-center gap-1 text-ink-faint">
            <span className="text-xs">지도 영역 (샘플)</span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          <p className="text-sm text-ink-soft">{data.venueAddress}</p>
          <button
            type="button"
            onClick={handleCopy}
            className="shrink-0 border border-line px-2.5 py-1 text-xs text-ink-soft transition-colors hover:border-terracotta hover:text-terracotta-dark"
          >
            {copied ? '복사됨' : '주소 복사'}
          </button>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          {MAP_LINKS(data.mapQuery).map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="border border-line py-2.5 text-xs text-ink-soft transition-colors hover:border-terracotta hover:text-terracotta-dark"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mt-8 space-y-4 text-left text-sm text-ink-soft">
          <div>
            <p className="mb-1 font-medium text-ink">지하철</p>
            <p>2호선 강남역 3번 출구 도보 5분</p>
          </div>
          <div>
            <p className="mb-1 font-medium text-ink">버스</p>
            <p>간선 146, 302 · 지선 3412 · 테헤란로 정류장 하차</p>
          </div>
          <div>
            <p className="mb-1 font-medium text-ink">주차</p>
            <p>본관 지하 1~3층 이용 · 3시간 무료 주차 지원</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
