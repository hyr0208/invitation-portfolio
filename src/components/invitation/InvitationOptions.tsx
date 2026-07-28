import { useState } from 'react'
import type { InvitationFeatures } from '../../types/invitation'

const STORAGE_KEY = 'invitation-options'

export function getInvitationFeatures(): InvitationFeatures {
  const defaults = { musicEnabled: false, guestbookEnabled: false }
  try { return { ...defaults, ...JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}') } } catch { return defaults }
}

export function InvitationOptions({ onChange }: { onChange: () => void }) {
  const [open, setOpen] = useState(false)
  const features = getInvitationFeatures()
  const toggle = (key: keyof InvitationFeatures) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...features, [key]: !features[key] }))
    onChange()
  }
  return (
    <aside className="fixed top-4 left-4 z-30">
      {open && <div className="absolute top-12 left-0 w-52 rounded-2xl border border-stone-200 bg-[#fffdfa] p-4 text-sm text-stone-700 shadow-[0_12px_35px_rgba(60,45,30,0.14)]">
        <p className="mb-3 text-[11px] font-medium tracking-[0.18em] text-stone-400 uppercase">Preview settings</p>
        <div className="space-y-3">
          {([['musicEnabled', '배경음악'], ['guestbookEnabled', '방명록']] as const).map(([key, label]) => <label key={key} className="flex cursor-pointer items-center justify-between"><span>{label}</span><input type="checkbox" checked={features[key]} onChange={() => toggle(key)} className="h-4 w-4 accent-stone-700" /></label>)}
        </div>
      </div>}
      <button type="button" onClick={() => setOpen(!open)} aria-label="미리보기 설정" className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-[#fffdfa]/90 text-stone-500 shadow-sm backdrop-blur transition hover:bg-white" aria-expanded={open}>
        <span className="text-base">{open ? '×' : '☼'}</span>
      </button>
    </aside>
  )
}
