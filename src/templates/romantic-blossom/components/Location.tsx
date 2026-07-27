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
      <p className="text-[15px] font-medium text-rose-ink">{data.venueName}</p>
      <p className="mt-1 text-sm text-rose-ink-soft">{data.venueHall}</p>

      <div
        className="mt-6 flex aspect-4/3 w-full items-center justify-center border-y border-blossom-line"
        role="img"
        aria-label="예식장 위치 지도 영역"
      >
        <span className="text-xs text-rose-ink-faint">지도 영역 (샘플)</span>
      </div>

      <div className="flex items-center justify-between border-b border-blossom-line py-4">
        <p className="text-sm text-rose-ink-soft">{data.venueAddress}</p>
        <button
          type="button"
          onClick={handleCopy}
          className="shrink-0 text-xs text-rose-ink-soft underline decoration-blossom-line underline-offset-4 hover:text-rose"
        >
          {copied ? '복사됨' : '주소 복사'}
        </button>
      </div>

      <div className="flex divide-x divide-blossom-line border-b border-blossom-line">
        {MAP_LINKS(data.mapQuery).map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="flex-1 py-3 text-center text-xs text-rose-ink-soft transition-colors hover:text-rose"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="mt-8 space-y-4 text-sm text-rose-ink-soft">
        <div>
          <p className="mb-1 font-medium text-rose-ink">지하철</p>
          <p>수인분당선 청담역 4번 출구 도보 7분</p>
        </div>
        <div>
          <p className="mb-1 font-medium text-rose-ink">버스</p>
          <p>간선 143, 401 · 지선 3213 · 삼성로 정류장 하차</p>
        </div>
        <div>
          <p className="mb-1 font-medium text-rose-ink">주차</p>
          <p>본관 지하 1~2층 이용 · 2시간 무료 주차 지원</p>
        </div>
      </div>
    </Section>
  )
}
