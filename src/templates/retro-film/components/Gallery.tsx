import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Section } from './Section'
import gallery1 from '../assets/photos/gallery-1.jpg'
import gallery2 from '../assets/photos/gallery-2.jpg'
import gallery3 from '../assets/photos/gallery-3.jpg'
import gallery4 from '../assets/photos/gallery-4.jpg'
import gallery5 from '../assets/photos/gallery-5.jpg'
import gallery6 from '../assets/photos/gallery-6.jpg'

const CAPTIONS = [
  '그 여름의 우리',
  '우연 같은 필연',
  '나란히 걷는 길',
  '말없이 웃던 날',
  '조금씩 스며든 시간',
  '다음 장으로',
]

const PHOTOS = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6]
const ROTATIONS = ['-rotate-2', 'rotate-3', '-rotate-1', 'rotate-2', '-rotate-3', 'rotate-1']

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  const close = () => setActive(null)
  const show = (delta: number) => {
    if (active === null) return
    setActive((active + delta + PHOTOS.length) % PHOTOS.length)
  }

  return (
    <Section scene="SCENE 02" eyebrow="Gallery" title="필름 속 우리">
      <div className="grid grid-cols-2 gap-x-3 gap-y-6">
        {PHOTOS.map((photo, i) => (
          <button
            key={photo}
            type="button"
            onClick={() => setActive(i)}
            className={`border border-film-ink/10 bg-film-paper p-2 pb-4 shadow-md shadow-film-ink/10 transition-transform active:scale-95 ${ROTATIONS[i]}`}
          >
            <span className="block aspect-3/4 overflow-hidden">
              <img
                src={photo}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover filter-[sepia(0.3)_saturate(0.8)_contrast(1.05)]"
              />
            </span>
            <span className="font-serif-en mt-2 block text-center text-xs text-film-ink-soft italic">
              {CAPTIONS[i]}
            </span>
          </button>
        ))}
      </div>

      {active !== null &&
        createPortal(
          <div
            className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-film-ink p-8"
            onClick={close}
          >
            <div
              className="animate-scale-in flex max-h-full max-w-full flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex w-full justify-between px-1" aria-hidden="true">
                {Array.from({ length: 12 }).map((_, i) => (
                  <span key={i} className="h-2 w-1.5 bg-film-paper/60" />
                ))}
              </div>
              <div className="border-8 border-film-paper bg-film-paper">
                <img
                  key={active}
                  src={PHOTOS[active]}
                  alt=""
                  className="max-h-[65vh] max-w-[80vw] object-contain filter-[sepia(0.3)_saturate(0.8)_contrast(1.05)]"
                />
              </div>
              <div className="flex w-full justify-between px-1" aria-hidden="true">
                {Array.from({ length: 12 }).map((_, i) => (
                  <span key={i} className="h-2 w-1.5 bg-film-paper/60" />
                ))}
              </div>
              <p className="font-serif-en mt-4 text-xs tracking-wide text-film-paper italic">
                {CAPTIONS[active]}
              </p>
            </div>
            <button
              type="button"
              aria-label="이전 사진"
              onClick={(e) => {
                e.stopPropagation()
                show(-1)
              }}
              className="absolute left-4 flex h-10 w-10 items-center justify-center bg-film-paper/90 text-film-ink"
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
              className="absolute right-4 flex h-10 w-10 items-center justify-center bg-film-paper/90 text-film-ink"
            >
              ›
            </button>
            <button
              type="button"
              aria-label="닫기"
              onClick={close}
              className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center bg-film-paper/90 text-film-ink"
            >
              ✕
            </button>
          </div>,
          document.body,
        )}
    </Section>
  )
}
