import { useState } from 'react'
import { copyText } from '../utils/clipboard'
import type { InvitationData } from '../types'
import closingPhoto from '../assets/photos/closing.jpg'

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
    <footer>
      <div className="relative aspect-4/5 w-full overflow-hidden">
        <img src={closingPhoto} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-gallery-navy-dark/75 via-gallery-navy-dark/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-8 py-10">
          <p className="text-[15px] leading-relaxed text-gallery">
            저희 두 사람의 다음 장면에
            <br />
            함께해 주셔서 감사합니다.
          </p>
        </div>
      </div>

      <div className="px-8 py-14 text-center">
        <button
          type="button"
          onClick={handleCopyLink}
          className="w-full border border-gallery-navy py-4 text-xs tracking-[0.2em] text-gallery-navy uppercase transition-colors hover:bg-gallery-navy hover:text-gallery"
        >
          {copied ? 'Link Copied' : '청첩장 링크 복사하기'}
        </button>

        <p className="mt-10 text-sm tracking-[0.15em] text-gallery-ink-soft">
          {data.groom.shortName} / {data.bride.shortName}
        </p>
        <p className="mt-1 text-[11px] text-gallery-ink-faint">이 페이지는 샘플로 제작되었습니다.</p>
      </div>
    </footer>
  )
}
