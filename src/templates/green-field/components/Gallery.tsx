import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Section } from './Section'
import gallery1 from '../../dev-terminal/assets/photos/gallery-4.jpg'
import gallery2 from '../../romantic-blossom/assets/photos/gallery-2.jpg'
import gallery3 from '../../garden-editorial/assets/photos/gallery-4.jpg'
import gallery4 from '../../photo-story/assets/photos/cover-bg.jpg'
import gallery5 from '../../photo-story/assets/photos/story-5.jpg'
import gallery6 from '../../garden-editorial/assets/photos/gallery-5.jpg'

const PHOTOS = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6]
// 첫 장은 가로로 크게, 나머지는 2열로 이어붙인 콜라주
const LAYOUT = ['col-span-2 aspect-4/3', 'aspect-3/4', 'aspect-3/4', 'aspect-3/4', 'aspect-3/4', 'col-span-2 aspect-4/3']

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  const close = () => setActive(null)
  const show = (delta: number) => {
    if (active === null) return
    setActive((active + delta + PHOTOS.length) % PHOTOS.length)
  }

  return (
    <Section title="Gallery" kicker="우리의 계절">
      <div className="grid grid-cols-2 gap-1.5">
        {PHOTOS.map((photo, i) => (
          <button
            key={photo}
            type="button"
            onClick={() => setActive(i)}
            className={`overflow-hidden bg-field-line ${LAYOUT[i]}`}
          >
            <img
              src={photo}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {active !== null &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-field-forest-dark" onClick={close}>
            <img
              key={active}
              src={PHOTOS[active]}
              alt=""
              className="animate-fade-in h-full w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute top-7 left-6 text-xs tracking-[0.2em] text-field-sage">
              {active + 1} / {PHOTOS.length}
            </p>
            <button
              type="button"
              aria-label="이전 사진"
              onClick={(e) => {
                e.stopPropagation()
                show(-1)
              }}
              className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full border border-field-ivory/40 text-field-ivory"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="다음 사진"
              onClick={(e) => {
                e.stopPropagation()
                show(1)
              }}
              className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full border border-field-ivory/40 text-field-ivory"
            >
              ›
            </button>
            <button
              type="button"
              aria-label="닫기"
              onClick={close}
              className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full border border-field-ivory/40 text-field-ivory"
            >
              ✕
            </button>
          </div>,
          document.body,
        )}
    </Section>
  )
}
