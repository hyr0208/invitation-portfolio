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
    <Section eyebrow="Location" title="오시는 길" className="bg-midnight-soft">
      <div className="text-center">
        <p className="font-serif text-2xl text-midnight-ink">{data.venueName}</p>
        <p className="mt-2 text-sm text-midnight-ink-faint">{data.venueHall}</p>

        <div className="mt-5 flex items-center justify-center gap-2">
          <p className="text-sm text-midnight-ink-faint">{data.venueAddress}</p>
          <button
            type="button"
            onClick={handleCopy}
            className="shrink-0 border border-gold-dark/60 px-2.5 py-1 text-xs text-midnight-ink-soft transition-colors hover:border-gold hover:text-gold"
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
              className="border border-gold-dark/60 py-2.5 text-xs text-midnight-ink-soft transition-colors hover:border-gold hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mt-8 space-y-4 text-left text-sm text-midnight-ink-soft">
          <div>
            <p className="mb-1 font-medium text-midnight-ink">지하철</p>
            <p>2호선 을지로입구역 5번 출구 도보 4분</p>
          </div>
          <div>
            <p className="mb-1 font-medium text-midnight-ink">버스</p>
            <p>간선 100, 152 · 지선 7011 · 소공로 정류장 하차</p>
          </div>
          <div>
            <p className="mb-1 font-medium text-midnight-ink">주차</p>
            <p>건물 내 발렛 주차 · 3시간 무료 지원</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
