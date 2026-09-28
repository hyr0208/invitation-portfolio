import { useState } from 'react'
import { copyText } from '../utils/clipboard'
import type { InvitationData } from '../types'

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
    <footer className="bg-diary-burgundy px-6 py-20 text-center">
      <span className="text-lg text-diary-cream-deep">♥</span>
      <p className="font-hand text-4xl leading-none text-diary-cream-soft">Thank you</p>
      <p className="mt-6 text-[15px] leading-relaxed text-diary-cream-soft">
        저희 두 사람의 새로운 시작을
        <br />
        축하해 주셔서 감사합니다.
      </p>

      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={handleCopyLink}
          className="rounded-full border border-diary-cream-soft/50 px-6 py-3 text-sm font-medium text-diary-cream-soft transition-colors hover:border-diary-cream-soft"
        >
          {copied ? '링크가 복사되었습니다' : '청첩장 링크 복사하기'}
        </button>
      </div>

      <p className="mt-10 text-sm tracking-[0.2em] text-diary-cream-deep">
        {data.groom.name} · {data.bride.name}
      </p>
      <p className="mt-1 text-[11px] text-diary-cream-deep/60">이 페이지는 샘플로 제작되었습니다.</p>
    </footer>
  )
}
