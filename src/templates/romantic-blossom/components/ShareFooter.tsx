import { useState } from 'react'
import { copyText } from '../utils/clipboard'
import type { InvitationData } from '../types'
import closingPhoto from '../assets/photos/gallery-2.jpg'

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
    <footer className="text-center">
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={closingPhoto}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-rose-ink/50 via-rose-ink/20 to-rose-ink/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
          <p className="font-serif-kr text-[15px] leading-relaxed text-blossom">
            저희의 새로운 봄날을
            <br />
            축하해 주셔서 감사합니다.
          </p>
        </div>
      </div>

      <div className="px-7 py-14">
        <button
          type="button"
          onClick={handleCopyLink}
          className="w-full border border-rose-dark py-4 text-xs tracking-[0.2em] text-rose-dark uppercase transition-colors hover:bg-rose-dark hover:text-blossom"
        >
          {copied ? '링크가 복사되었습니다' : '청첩장 링크 복사하기'}
        </button>

        <p className="font-serif-en mt-10 text-sm tracking-[0.15em] text-rose-ink-soft">
          {data.groom.shortName} & {data.bride.shortName}
        </p>
        <p className="mt-1 text-[11px] text-rose-ink-faint">이 페이지는 샘플로 제작되었습니다.</p>
      </div>
    </footer>
  )
}
