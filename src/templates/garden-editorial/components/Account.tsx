import { useState } from 'react'
import type { AccountInfo, InvitationData } from '../types'
import { copyText } from '../utils/clipboard'
import { Section } from './Section'

interface AccountProps {
  data: InvitationData
}

function AccountRow({ account }: { account: AccountInfo }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const ok = await copyText(account.number)
    if (ok) {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    }
  }

  return (
    <div className="flex items-center justify-between py-3">
      <div>
        <p className="text-sm text-garden-ink">
          <span className="mr-2 text-garden-ink-faint">{account.label}</span>
          {account.holder}
        </p>
        <p className="mt-0.5 text-xs text-garden-ink-faint">
          {account.bank} {account.number}
        </p>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="shrink-0 border border-garden-sage px-3 py-1.5 text-xs text-garden-ink-soft transition-colors hover:border-garden-tan hover:text-garden-tan"
      >
        {copied ? '복사됨' : '복사'}
      </button>
    </div>
  )
}

function AccountGroup({ side, accounts }: { side: string; accounts: AccountInfo[] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="overflow-hidden border border-garden-sage">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between bg-garden px-5 py-4 text-sm font-medium text-garden-ink"
      >
        {side}
        <span className={`transition-transform duration-300 ease-out ${open ? 'rotate-180' : ''}`}>⌄</span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="divide-y divide-garden-sage/70 bg-garden-soft px-5">
            {accounts.map((account) => (
              <AccountRow key={`${account.label}-${account.number}`} account={account} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Account({ data }: AccountProps) {
  const groomAccounts = data.accounts.filter((a) => a.side === '신랑측')
  const brideAccounts = data.accounts.filter((a) => a.side === '신부측')

  return (
    <Section eyebrow="Gift" title="마음 전하실 곳" className="bg-garden">
      <p className="mx-auto mb-6 max-w-65 text-center text-sm leading-relaxed text-garden-ink-soft">
        참석이 어려우신 분들을 위해
        <br />
        계좌번호를 안내드립니다.
      </p>
      <div className="space-y-3">
        <AccountGroup side="신랑측" accounts={groomAccounts} />
        <AccountGroup side="신부측" accounts={brideAccounts} />
      </div>
    </Section>
  )
}
