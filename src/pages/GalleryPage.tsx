import { useMemo, useState } from 'react'
import CategoryTabs, { type CategoryFilter } from '../components/CategoryTabs'
import TemplateCard from '../components/TemplateCard'
import { templates } from '../data/templates'

export default function GalleryPage() {
  const [category, setCategory] = useState<CategoryFilter>('all')

  const filtered = useMemo(
    () =>
      category === 'all'
        ? templates
        : templates.filter((t) => t.category === category),
    [category],
  )

  return (
    <div className="space-y-4">
      <div className="space-y-1 text-center">
        <h1 className="text-xl font-semibold text-neutral-800">
          모바일 청첩장 템플릿
        </h1>
        <p className="text-sm text-neutral-500">
          마음에 드는 템플릿을 골라 나만의 청첩장을 만들어보세요.
        </p>
      </div>
      <CategoryTabs value={category} onChange={setCategory} />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {filtered.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </div>
  )
}
