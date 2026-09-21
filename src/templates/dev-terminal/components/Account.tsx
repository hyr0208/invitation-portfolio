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
    <div className="flex items-center justify-between py-3 text-sm">
      <div>
        <p className="text-dev-text">
          <span className="text-dev-blue">{account.label.toUpperCase()}</span>
          <span className="text-dev-text">_HOLDER=</span>
          <span className="text-dev-orange">"{account.holder}"</span>
        </p>
        <p className="mt-0.5 text-xs text-dev-text-soft">
          {account.bank} {account.number}
        </p>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="shrink-0 rounded border border-dev-green px-3 py-1.5 text-xs text-dev-green transition-colors hover:bg-dev-green hover:text-dev-bg-deep"
      >
        {copied ? '복사됨' : 'copy'}
      </button>
    </div>
  )
}

function AccountGroup({ side, accounts }: { side: string; accounts: AccountInfo[] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-md border border-dev-line">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between px-5 py-4 text-sm font-medium text-white"
      >
        <span>
          <span className="text-dev-purple">##</span> {side}
        </span>
        <span className={`text-dev-green transition-transform duration-300 ease-out ${open ? 'rotate-180' : ''}`}>
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
            className={`divide-y divide-dev-line border-t border-dev-line px-5 transition-opacity duration-300 ${
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
    <Section index="07" filename="gift.env">
      <p className="mb-6 text-sm leading-relaxed text-dev-text-soft">
        <span className="text-dev-green-soft"># </span>
        참석이 어려우신 분들을 위해 계좌번호를 안내드립니다.
      </p>
      <div className="space-y-3">
        <AccountGroup side="신랑측" accounts={groomAccounts} />
        <AccountGroup side="신부측" accounts={brideAccounts} />
      </div>
    </Section>
  )
}
