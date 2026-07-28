import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { CATEGORY_LABEL } from '../types/template'
import { templates } from '../data/templates'
import { hasLiveDemo } from '../templates/registry'
import InquiryModal from '../components/InquiryModal'

export default function TemplateDetailPage() {
  const { id } = useParams<{ id: string }>()
  const template = templates.find((t) => t.id === id)
  const [inquiryOpen, setInquiryOpen] = useState(false)

  if (!template) {
    return <Navigate to="/" replace />
  }

  const liveDemo = hasLiveDemo(template.id)

  return (
    <div className="grid gap-8 md:grid-cols-2 md:items-start">
      <div className="mx-auto w-full max-w-xs">
        <div className="rounded-[2.5rem] border-8 border-neutral-900 bg-neutral-900 shadow-xl">
          <div className="aspect-9/19 overflow-hidden rounded-[1.75rem] bg-white">
            {liveDemo ? (
              <iframe
                src={`/preview/${template.id}`}
                title={template.title}
                className="h-full w-full border-0"
              />
            ) : (
              <div
                className="flex h-full flex-col items-center justify-center gap-2 px-6 text-center"
                style={{
                  background: `linear-gradient(160deg, ${template.colorFrom}, ${template.colorTo})`,
                }}
              >
                <p className="text-xs tracking-widest text-white/80">
                  WEDDING INVITATION
                </p>
                <h2 className="text-lg font-semibold text-white">
                  {template.title}
                </h2>
                <p className="text-xs text-white/80">
                  {CATEGORY_LABEL[template.category]} 컨셉
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Link to="/" className="text-sm text-neutral-500 hover:text-neutral-900 hover:underline">
          ← 목록으로 돌아가기
        </Link>
        <div>
          <span className="rounded-full border border-stone-300 px-2 py-0.5 text-xs font-medium text-neutral-600">
            {CATEGORY_LABEL[template.category]}
          </span>
          <h1 className="mt-2 font-serif text-3xl tracking-wide text-neutral-900">
            {template.title}
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
            {template.description}
          </p>
        </div>
        <p className="text-lg font-semibold text-neutral-800">
          {template.price === 0 ? '무료' : `${template.price.toLocaleString()}원`}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setInquiryOpen(true)}
            className="flex-1 rounded-xl bg-[#304b3b] py-3 text-center text-sm font-medium text-white transition hover:bg-[#263d31]"
          >
            제작 문의하기
          </button>
          {liveDemo && (
            <a
              href={`/preview/${template.id}`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 rounded-xl border border-[#b9c9b3] py-3 text-center text-sm font-medium text-[#304b3b] transition hover:border-[#304b3b] hover:bg-[#f1f6ee]"
            >
              새 탭에서 크게 보기
            </a>
          )}
        </div>
      </div>

      {inquiryOpen && (
        <InquiryModal templateTitle={template.title} onClose={() => setInquiryOpen(false)} />
      )}
    </div>
  )
}
