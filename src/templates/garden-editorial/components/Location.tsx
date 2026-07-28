import { useState } from 'react'
import type { InvitationData } from '../types'
import { copyText } from '../utils/clipboard'
import { Section } from './Section'

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
    <Section eyebrow="Location" title="오시는 길" className="bg-garden">
      <div className="text-center">
        <p className="font-serif text-2xl text-garden-ink">{data.venueName}</p>
        <p className="mt-2 text-sm text-garden-ink-faint">{data.venueHall}</p>

        <div className="mt-5 flex items-center justify-center gap-2">
          <p className="text-sm text-garden-ink-faint">{data.venueAddress}</p>
          <button
            type="button"
            onClick={handleCopy}
            className="shrink-0 border border-garden-sage px-2.5 py-1 text-xs text-garden-ink-soft transition-colors hover:border-garden-tan hover:text-garden-tan"
          >
            {copied ? '복사됨' : '주소 복사'}
          </button>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2">
          {MAP_LINKS(data.mapQuery).map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="border border-garden-sage py-2.5 text-xs text-garden-ink-soft transition-colors hover:border-garden-tan hover:text-garden-tan"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mt-8 space-y-4 text-left text-sm text-garden-ink-soft">
          <div>
            <p className="mb-1 font-medium text-garden-ink">지하철</p>
            <p>7호선 청담역 8번 출구 도보 6분</p>
          </div>
          <div>
            <p className="mb-1 font-medium text-garden-ink">버스</p>
            <p>간선 141, 301 · 지선 4212 · 도산대로 정류장 하차</p>
          </div>
          <div>
            <p className="mb-1 font-medium text-garden-ink">주차</p>
            <p>건물 내 주차장 이용 · 3시간 무료 주차 지원</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
