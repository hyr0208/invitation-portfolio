import { useState } from 'react'
import type { InvitationData } from '../types'
import { copyText } from '../utils/clipboard'
import closingPhoto from '../assets/photos/closing.jpg'

interface ShareFooterProps {
  data: InvitationData
}

export function ShareFooter({ data }: ShareFooterProps) {
  const [copied, setCopied] = useState(false)

  const copyLink = async () => {
    const ok = await copyText(window.location.href)
    if (ok) {
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    }
  }

  return (
    <footer className="relative overflow-hidden bg-midnight-deep px-7 py-20 text-center text-midnight-ink">
      <img
        src={closingPhoto}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-25 grayscale contrast-125"
      />
      <div className="absolute inset-0 bg-midnight-deep/75" />
      <div className="relative">
        <p className="font-serif text-lg leading-8">
          저희의 첫 번째 밤을
          <br />
          함께 축하해 주셔서 감사합니다.
        </p>
        <button
          type="button"
          onClick={copyLink}
          className="mt-8 bg-gold px-6 py-4 text-sm text-midnight-deep transition-colors hover:bg-gold-soft"
        >
          {copied ? '링크가 복사되었습니다' : '청첩장 링크 복사하기'}
        </button>
        <p className="mt-10 text-sm tracking-[0.16em] text-gold-soft">
          {data.groom.name} &amp; {data.bride.name}
        </p>
      </div>
    </footer>
  )
}
