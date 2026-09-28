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
      <div className="text-sm text-diary-cream-soft">
        <p>
          <span className="text-diary-cream-deep">{account.label}</span> {account.holder}
        </p>
        <p className="mt-0.5 text-xs text-diary-cream-deep/80">
          {account.bank} {account.number}
        </p>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="shrink-0 rounded-full border border-diary-cream-soft/50 px-3 py-1.5 text-xs text-diary-cream-soft transition-colors hover:bg-diary-cream-soft hover:text-diary-burgundy"
      >
        {copied ? '복사됨' : '복사'}
      </button>
    </div>
  )
}

function AccountGroup({ side, accounts }: { side: string; accounts: AccountInfo[] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="overflow-hidden rounded-md bg-diary-burgundy-soft">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between px-5 py-4 text-sm font-medium text-diary-cream-soft"
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
            className={`divide-y divide-diary-cream-soft/15 border-t border-diary-cream-soft/15 px-5 transition-opacity duration-300 ${
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
    <Section title="Gift" kicker="마음 전하실 곳" tone="burgundy">
      <div className="space-y-3">
        <AccountGroup side="신랑측 계좌번호" accounts={groomAccounts} />
        <AccountGroup side="신부측 계좌번호" accounts={brideAccounts} />
      </div>
      <p className="mt-6 text-center text-xs leading-relaxed text-diary-cream-deep">
        참석이 어려우신 분들을 위해 조심스럽게 안내드립니다.
        <br />
        보내주시는 따뜻한 마음, 감사히 간직하겠습니다.
      </p>
    </Section>
  )
}
