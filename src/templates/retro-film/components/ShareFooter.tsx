import { useState } from 'react'
import { copyText } from '../utils/clipboard'
import type { InvitationData } from '../types'
import closingPhoto from '../assets/photos/gallery-4.jpg'

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
    <footer className="bg-film-paper px-4 pt-4 pb-12 text-center">
      <div className="relative aspect-video w-full overflow-hidden border border-film-ink/15">
        <img
          src={closingPhoto}
          alt=""
          className="absolute inset-0 h-full w-full object-cover filter-[sepia(0.3)_saturate(0.8)_contrast(1.05)]"
        />
        <div className="absolute inset-0 bg-film-ink/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
          <p className="font-serif-kr text-[15px] leading-relaxed text-film-paper">
            저희의 다음 장면을
            <br />
            함께 채워주셔서 감사합니다.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <button
          type="button"
          onClick={handleCopyLink}
          className="w-full border border-dashed border-film-orange py-4 font-mono text-xs tracking-[0.2em] text-film-orange uppercase transition-colors hover:bg-film-orange hover:text-film-paper"
        >
          {copied ? 'Link Copied' : '▸ 청첩장 링크 복사하기'}
        </button>

        <p className="font-serif-en mt-10 text-sm tracking-[0.15em] text-film-ink-soft">
          {data.groom.shortName} × {data.bride.shortName}
        </p>
        <p className="mt-1 font-mono text-[10px] text-film-ink-faint">
          THIS PAGE IS A SAMPLE.
        </p>
      </div>
    </footer>
  )
}
