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
    <footer className="bg-dev-bg-deep px-6 py-20 text-center font-mono">
      <p className="text-[13px] text-dev-text-soft">
        <span className="text-dev-green">$</span> git commit -m "새로운 시작"
      </p>
      <p className="mt-6 text-[15px] leading-relaxed text-white">
        저희의 새로운 시작을
        <br />
        축하해 주셔서 감사합니다.
      </p>

      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={handleCopyLink}
          className="rounded border border-dev-green/50 px-6 py-3 text-sm font-medium text-dev-green transition-colors hover:border-dev-green"
        >
          {copied ? '링크가 복사되었습니다' : '$ copy invite-link'}
        </button>
      </div>

      <p className="mt-10 text-sm tracking-[0.3em] text-dev-text-soft uppercase">
        {data.groom.name} · {data.bride.name}
      </p>
      <p className="mt-1 text-[11px] text-dev-text-faint">이 페이지는 샘플로 제작되었습니다.</p>
    </footer>
  )
}
