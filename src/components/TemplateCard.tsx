import { Link } from 'react-router-dom'
import type { Template } from '../types/template'
import { CATEGORY_LABEL } from '../types/template'

export default function TemplateCard({ template }: { template: Template }) {
  return (
    <Link
      to={`/templates/${template.id}`}
      className="group block overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div
        className="relative flex aspect-[3/4] items-center justify-center"
        style={{
          background: `linear-gradient(160deg, ${template.colorFrom}, ${template.colorTo})`,
        }}
      >
        <div className="absolute left-2 top-2 flex gap-1">
          {template.isNew && (
            <span className="rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-rose-500">
              NEW
            </span>
          )}
          {template.isPopular && (
            <span className="rounded-full bg-rose-500/90 px-2 py-0.5 text-xs font-medium text-white">
              인기
            </span>
          )}
        </div>
        <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700">
          {CATEGORY_LABEL[template.category]}
        </span>
      </div>
      <div className="space-y-1 p-3">
        <h3 className="truncate text-sm font-medium text-neutral-800">
          {template.title}
        </h3>
        <p className="text-xs text-neutral-500">
          {template.price === 0 ? '무료' : `${template.price.toLocaleString()}원`}
        </p>
      </div>
    </Link>
  )
}
