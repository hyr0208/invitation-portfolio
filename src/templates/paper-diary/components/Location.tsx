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
    <Section title="Location" kicker="오시는 길">
      <p className="text-center text-[15px] font-medium text-diary-ink">{data.venueName}</p>
      <p className="mt-1 text-center text-sm text-diary-ink-soft">{data.venueHall}</p>

      <div
        className="mt-5 aspect-4/3 w-full rounded-md border border-diary-line bg-diary-cream-soft"
        role="img"
        aria-label="예식장 위치 지도 영역"
      >
        <div className="flex h-full flex-col items-center justify-center gap-1 text-diary-ink-faint">
          <span className="text-xs">지도 영역 (샘플)</span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        <p className="text-sm text-diary-ink-soft">{data.venueAddress}</p>
        <button
          type="button"
          onClick={handleCopy}
          className="shrink-0 rounded-full border border-diary-burgundy px-2.5 py-1 text-xs text-diary-burgundy transition-colors hover:bg-diary-burgundy hover:text-diary-cream-soft"
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
            className="rounded-full border border-diary-burgundy py-2.5 text-center text-xs text-diary-burgundy transition-colors hover:bg-diary-burgundy hover:text-diary-cream-soft"
          >
            {link.label}
          </a>
        ))}
      </div>
    </Section>
  )
}
