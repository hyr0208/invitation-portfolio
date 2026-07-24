export type TemplateCategory =
  | 'minimal'
  | 'classic'
  | 'romantic'
  | 'unique'
  | 'photo'

export interface Template {
  id: string
  title: string
  category: TemplateCategory
  description: string
  colorFrom: string
  colorTo: string
  isNew?: boolean
  isPopular?: boolean
  price: number
}

export const CATEGORY_LABEL: Record<TemplateCategory, string> = {
  minimal: '미니멀',
  classic: '클래식',
  romantic: '로맨틱',
  unique: '유니크',
  photo: '포토',
}
