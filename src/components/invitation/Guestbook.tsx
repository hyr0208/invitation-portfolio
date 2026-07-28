import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import type { InvitationFeatures } from '../../types/invitation'

type Entry = { id: number; name: string; message: string; createdAt: string }

export function Guestbook({ features, invitationId }: { features?: InvitationFeatures; invitationId: string }) {
  const key = `invitation-guestbook-${invitationId}`
  const [entries, setEntries] = useState<Entry[]>([])
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem(key) ?? '[]')) } catch { setEntries([]) }
  }, [key])

  if (!features?.guestbookEnabled) return null

  const submit = (event: FormEvent) => {
    event.preventDefault()
    if (!name.trim() || !message.trim()) return
    const next = [{ id: Date.now(), name: name.trim(), message: message.trim(), createdAt: new Date().toLocaleDateString('ko-KR') }, ...entries]
    setEntries(next)
    localStorage.setItem(key, JSON.stringify(next))
    setName(''); setMessage('')
  }

  return (
    <section className="space-y-5 border-t border-black/10 px-6 py-12">
      <h2 className="text-center text-lg font-medium">방명록</h2>
      <form onSubmit={submit} className="space-y-2">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="이름" maxLength={20} required className="w-full border border-black/15 bg-transparent px-3 py-2 text-sm outline-none" />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="축하 메시지를 남겨주세요" maxLength={200} required rows={3} className="w-full resize-none border border-black/15 bg-transparent px-3 py-2 text-sm outline-none" />
        <button type="submit" className="w-full bg-black px-3 py-2 text-sm text-white">남기기</button>
      </form>
      <div className="space-y-3">
        {entries.map((entry) => <article key={entry.id} className="border-b border-black/10 pb-3 text-sm"><div className="flex justify-between"><strong>{entry.name}</strong><time className="text-xs opacity-50">{entry.createdAt}</time></div><p className="mt-1 whitespace-pre-wrap opacity-75">{entry.message}</p></article>)}
      </div>
    </section>
  )
}
