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
    <Section index="06" filename="location.env">
      <p className="text-[15px] font-medium text-white">{data.venueName}</p>
      <p className="mt-1 text-sm text-dev-text-soft">{data.venueHall}</p>

      <div
        className="mt-5 aspect-4/3 w-full rounded-md border border-dev-line bg-dev-bg-soft"
        role="img"
        aria-label="예식장 위치 지도 영역"
      >
        <div className="flex h-full flex-col items-center justify-center gap-1 text-dev-text-faint">
          <span className="text-xs">지도 영역 (샘플)</span>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm">
        <p className="text-dev-text-soft">
          <span className="text-dev-blue">ADDRESS</span>
          <span className="text-dev-text">=</span>
          <span className="text-dev-orange">"{data.venueAddress}"</span>
        </p>
        <button
          type="button"
          onClick={handleCopy}
          className="shrink-0 rounded border border-dev-green px-2.5 py-1 text-xs text-dev-green transition-colors hover:bg-dev-green hover:text-dev-bg-deep"
        >
          {copied ? '복사됨' : '$ pbcopy'}
        </button>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        {MAP_LINKS(data.mapQuery).map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded border border-dev-green py-2.5 text-center text-xs text-dev-green transition-colors hover:bg-dev-green hover:text-dev-bg-deep"
          >
            {link.label}
          </a>
        ))}
      </div>
    </Section>
  )
}
