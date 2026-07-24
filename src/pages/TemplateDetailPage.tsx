import { Link, Navigate, useParams } from 'react-router-dom'
import { CATEGORY_LABEL } from '../types/template'
import { templates } from '../data/templates'

export default function TemplateDetailPage() {
  const { id } = useParams<{ id: string }>()
  const template = templates.find((t) => t.id === id)

  if (!template) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 md:items-start">
      <div className="mx-auto w-full max-w-xs">
        <div className="rounded-[2.5rem] border-8 border-neutral-900 bg-neutral-900 shadow-xl">
          <div
            className="flex aspect-9/19 flex-col items-center justify-center gap-2 overflow-hidden rounded-[1.75rem] px-6 text-center"
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
            className="flex-1 rounded-xl bg-neutral-900 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            이 템플릿으로 만들기
          </button>
        </div>
      </div>
    </div>
  )
}
