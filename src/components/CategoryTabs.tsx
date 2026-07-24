import { CATEGORY_LABEL, type TemplateCategory } from '../types/template'

export type CategoryFilter = TemplateCategory | 'all'

const CATEGORIES: CategoryFilter[] = [
  'all',
  'minimal',
  'classic',
  'romantic',
  'unique',
  'photo',
]

export default function CategoryTabs({
  value,
  onChange,
}: {
  value: CategoryFilter
  onChange: (category: CategoryFilter) => void
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {CATEGORIES.map((category) => {
        const isActive = value === category
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              isActive
                ? 'border-neutral-900 bg-neutral-900 text-white'
                : 'border-stone-200 bg-white text-neutral-600 hover:border-neutral-400'
            }`}
          >
            {category === 'all' ? '전체' : CATEGORY_LABEL[category]}
          </button>
        )
      })}
    </div>
  )
}
