import { useState } from 'react'
import { copyText } from '../utils/clipboard'
import { useInView } from '../hooks/useInView'
import { ScriptText } from './ScriptText'
import type { InvitationData } from '../types'
import closingPhoto from '../../classic-story/assets/photos/gallery-1.jpg'

interface ShareFooterProps {
  data: InvitationData
}

export function ShareFooter({ data }: ShareFooterProps) {
  const [copied, setCopied] = useState(false)
  const { ref, inView } = useInView<HTMLElement>(0.3)

  const handleCopyLink = async () => {
    const ok = await copyText(window.location.href)
    if (ok) {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    }
  }

  return (
    <footer ref={ref} className="relative overflow-hidden bg-field-forest-dark text-center text-field-ivory-soft">
      <img src={closingPhoto} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/30 to-black/70" />

      <div className="relative flex min-h-[640px] flex-col justify-end px-6 pt-24 pb-16">
        <p className="text-[56px] leading-[1.05] drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
          <ScriptText text={'Together,\nalways'} active={inView} duration={2.4} />
        </p>
        <p className="mx-auto mt-5 max-w-[280px] text-[13px] leading-relaxed text-field-ivory/85 italic">
          “{data.greetingQuote}”
        </p>
        <p className="mt-6 text-[15px] leading-relaxed">
          저희 두 사람의 새로운 시작을
          <br />
          축하해 주셔서 감사합니다.
        </p>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={handleCopyLink}
            className="rounded-full border border-field-ivory-soft/60 bg-black/15 px-6 py-3 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-field-ivory-soft hover:text-field-forest"
          >
            {copied ? '링크가 복사되었습니다' : '청첩장 링크 복사하기'}
          </button>
        </div>

        <p className="mt-10 text-sm tracking-[0.2em] text-field-ivory/90">
          {data.groom.name} &amp; {data.bride.name}
        </p>
        <p className="mt-1 text-[11px] text-field-ivory/60">이 페이지는 샘플로 제작되었습니다.</p>
      </div>
    </footer>
  )
}
