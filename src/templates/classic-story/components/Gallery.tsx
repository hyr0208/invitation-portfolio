import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Section } from './Section'
import gallery1 from '../assets/photos/gallery-1.jpg'
import gallery2 from '../assets/photos/gallery-2.jpg'
import gallery3 from '../assets/photos/gallery-3.jpg'
import gallery4 from '../assets/photos/gallery-4.jpg'
import gallery5 from '../assets/photos/gallery-5.jpg'
import gallery6 from '../assets/photos/gallery-6.jpg'

const PHOTOS = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6]

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  const close = () => setActive(null)
  const show = (delta: number) => {
    if (active === null) return
    setActive((active + delta + PHOTOS.length) % PHOTOS.length)
  }

  return (
    <Section eyebrow="Gallery" title="우리의 순간">
      <div className="grid grid-cols-3 gap-1.5">
        {PHOTOS.map((photo, i) => (
          <button
            key={photo}
            type="button"
            onClick={() => setActive(i)}
            className="aspect-3/4 overflow-hidden transition-transform active:scale-95"
          >
            <img src={photo} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>

      {active !== null &&
        createPortal(
          <div
            className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-ink"
            onClick={close}
          >
            <img
              key={active}
              src={PHOTOS[active]}
              alt=""
              className="animate-scale-in h-full w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              type="button"
              aria-label="이전 사진"
              onClick={(e) => {
                e.stopPropagation()
                show(-1)
              }}
              className="absolute left-4 flex h-10 w-10 items-center justify-center bg-cream/90 text-ink"
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
              className="absolute right-4 flex h-10 w-10 items-center justify-center bg-cream/90 text-ink"
            >
              ›
            </button>
            <button
              type="button"
              aria-label="닫기"
              onClick={close}
              className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center bg-cream/90 text-ink"
            >
              ✕
            </button>
          </div>,
          document.body,
        )}
    </Section>
  )
}
