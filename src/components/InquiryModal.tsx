import { useState } from 'react'
import type { FormEvent } from 'react'
import emailjs from '@emailjs/browser'

interface InquiryModalProps {
  templateTitle: string
  onClose: () => void
}

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function InquiryModal({ templateTitle, onClose }: InquiryModalProps) {
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sending')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          template_name: templateTitle,
          name: formData.get('name'),
          phone: formData.get('phone'),
          wedding_date: formData.get('weddingDate'),
          venue: formData.get('venue'),
          message: formData.get('message'),
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      )
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/50 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {status === 'sent' ? (
          <div className="space-y-3 py-4 text-center">
            <p className="text-lg font-medium text-neutral-900">문의가 접수되었습니다</p>
            <p className="text-sm text-neutral-500">빠른 시일 내에 연락드리겠습니다.</p>
            <button
              type="button"
              onClick={onClose}
              className="mt-2 w-full rounded-xl bg-[#304b3b] py-2.5 text-sm font-medium text-white transition hover:bg-[#263d31]"
            >
              닫기
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <h2 className="font-serif text-xl text-neutral-900">제작 문의하기</h2>
              <p className="mt-1 text-sm text-neutral-500">
                &ldquo;{templateTitle}&rdquo; 템플릿으로 문의를 남겨주세요.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="mb-1 block text-xs font-medium text-neutral-600">이름 *</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none focus:border-neutral-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-neutral-600">
                  연락처 *
                </label>
                <input
                  name="phone"
                  type="text"
                  required
                  placeholder="전화번호 또는 이메일"
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none focus:border-neutral-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-xs font-medium text-neutral-600">
                    예식일
                  </label>
                  <input
                    name="weddingDate"
                    type="date"
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none focus:border-neutral-500"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-neutral-600">
                    예식장
                  </label>
                  <input
                    name="venue"
                    type="text"
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none focus:border-neutral-500"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-neutral-600">
                  문의 내용
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="추가로 전달하고 싶은 내용이 있다면 적어주세요."
                  className="w-full resize-none rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none focus:border-neutral-500"
                />
              </div>
            </div>

            {status === 'error' && (
              <p className="text-sm text-red-600">
                전송에 실패했습니다. 잠시 후 다시 시도해주세요.
              </p>
            )}

            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 rounded-xl border border-[#b9c9b3] py-2.5 text-sm font-medium text-[#304b3b] transition hover:border-[#304b3b] hover:bg-[#f1f6ee]"
              >
                취소
              </button>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="flex-1 rounded-xl bg-[#304b3b] py-2.5 text-sm font-medium text-white transition hover:bg-[#263d31] disabled:opacity-60"
              >
                {status === 'sending' ? '전송 중...' : '문의 보내기'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
