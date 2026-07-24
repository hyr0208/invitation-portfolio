import { useState } from 'react'
import { Section } from './Section'
import { copyText } from '../utils/clipboard'
import type { AccountInfo, InvitationData } from '../types'

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
        <p className="text-sm text-ink">
          <span className="mr-2 text-ink-faint">{account.label}</span>
          {account.holder}
        </p>
        <p className="mt-0.5 text-xs text-ink-soft">
          {account.bank} {account.number}
        </p>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="shrink-0 border border-line px-3 py-1.5 text-xs text-ink-soft transition-colors hover:border-terracotta hover:text-terracotta-dark"
      >
        {copied ? '복사됨' : '복사'}
      </button>
    </div>
  )
}

function AccountGroup({ side, accounts }: { side: string; accounts: AccountInfo[] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="overflow-hidden border border-line">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between bg-cream px-5 py-4 text-sm font-medium text-ink"
      >
        {side}
        <span className={`transition-transform duration-300 ease-out ${open ? 'rotate-180' : ''}`}>
          ⌄
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`divide-y divide-line/70 bg-cream-soft px-5 transition-opacity duration-300 ${
              open ? 'opacity-100 delay-100' : 'opacity-0'
            }`}
          >
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
    <Section eyebrow="Gift" title="마음 전하실 곳">
      <p className="mx-auto mb-6 max-w-[260px] text-center text-sm leading-relaxed text-ink-soft">
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
