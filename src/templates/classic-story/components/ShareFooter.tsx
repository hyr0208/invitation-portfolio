import { useState } from 'react'
import { copyText } from '../utils/clipboard'
import type { InvitationData } from '../types'
import closingPhoto from '../assets/photos/gallery-3.jpg'

interface ShareFooterProps {
  data: InvitationData
}

export function ShareFooter({ data }: ShareFooterProps) {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = async () => {
    const ok = await copyText(window.location.href)
    if (ok) {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    }
  }

  return (
    <footer className="relative overflow-hidden px-6 py-20 text-center">
      <img src={closingPhoto} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-linear-to-b from-ink/70 via-ink/55 to-ink/80" />

      <div className="relative">
        <p className="font-serif-kr text-[15px] leading-relaxed text-cream">
          저희의 새로운 시작을
          <br />
          축하해 주셔서 감사합니다.
        </p>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={handleCopyLink}
            className="bg-terracotta px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-terracotta-dark"
          >
            {copied ? '링크가 복사되었습니다' : '청첩장 링크 복사하기'}
          </button>
        </div>

        <p className="font-serif-en mt-10 text-sm tracking-wide text-cream/70">
          {data.groom.shortName} ෆ {data.bride.shortName}
        </p>
        <p className="mt-1 text-[11px] text-cream/50">이 페이지는 샘플로 제작되었습니다.</p>
      </div>
    </footer>
  )
}
