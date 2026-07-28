import { useCallback, useEffect, useState } from 'react'
import type { GardenPhoto } from '../types'
import { Reveal } from './Reveal'
import { Section } from './Section'

interface GalleryProps {
  photos: GardenPhoto[]
}

export function Gallery({ photos }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const selectedPhoto = selectedIndex === null ? null : photos[selectedIndex]
  const moveTo = useCallback(
    (direction: 1 | -1) =>
      setSelectedIndex((current) => (current === null ? 0 : (current + direction + photos.length) % photos.length)),
    [photos.length],
  )

  useEffect(() => {
    if (selectedIndex === null) return
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedIndex(null)
      if (event.key === 'ArrowRight') moveTo(1)
      if (event.key === 'ArrowLeft') moveTo(-1)
    }
    document.addEventListener('keydown', closeWithEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', closeWithEscape)
      document.body.style.overflow = ''
    }
  }, [selectedIndex, moveTo])

  return (
    <>
      <Section eyebrow="Gallery" title="우리의 순간" className="bg-garden-ink text-garden">
        <div className="mb-8 flex items-end justify-between">
          <p className="text-xs tracking-[0.22em] text-garden-sage-light uppercase">Our little archive</p>
          <span className="font-serif text-2xl">{String(photos.length).padStart(2, '0')}</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {photos.map((photo, index) => (
            <Reveal key={photo.src} delay={index * 100} className={index === 0 ? 'col-span-2' : ''}>
              <figure>
                <button
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className="group block w-full cursor-zoom-in text-left"
                  aria-label={`${photo.caption} 사진 크게 보기`}
                >
                  <span className="relative block overflow-hidden">
                    <img
                      src={photo.src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className={`w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03] ${
                        index === 0 ? 'aspect-[1.4]' : 'aspect-square'
                      }`}
                    />
                    <span className="absolute inset-0 bg-garden-ink/0 transition duration-500 group-hover:bg-garden-ink/20" />
                    <span className="absolute right-3 bottom-3 rounded-full border border-white/60 px-2 py-1 text-[9px] tracking-[0.18em] text-white opacity-0 transition duration-500 group-hover:opacity-100">
                      VIEW
                    </span>
                  </span>
                </button>
                <figcaption className="mt-2 text-[10px] tracking-[0.12em] text-garden-sage-light uppercase">
                  {photo.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      {selectedPhoto && selectedIndex !== null && (
        <div
          className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-garden-ink-dark/95 px-5 py-8"
          role="dialog"
          aria-modal="true"
          aria-label="사진 상세 보기"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="animate-scale-in relative flex w-full max-w-4xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex w-full items-center justify-between px-1 text-garden">
              <p className="text-xs tracking-[0.2em] uppercase">
                {String(selectedIndex + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
              </p>
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 text-2xl font-light transition hover:bg-white/10"
                aria-label="사진 상세 보기 닫기"
              >
                ×
              </button>
            </div>
            <div
              className="relative flex w-full items-center justify-center"
              onTouchStart={(event) => setTouchStart(event.changedTouches[0].clientX)}
              onTouchEnd={(event) => {
                if (touchStart === null) return
                const distance = event.changedTouches[0].clientX - touchStart
                if (Math.abs(distance) > 40) moveTo(distance < 0 ? 1 : -1)
                setTouchStart(null)
              }}
            >
              <button
                type="button"
                onClick={() => moveTo(-1)}
                className="absolute left-0 z-10 hidden h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border border-white/40 bg-garden-ink-dark/70 text-2xl text-white backdrop-blur transition hover:scale-105 hover:bg-garden-ink sm:flex"
                aria-label="이전 사진"
              >
                ←
              </button>
              <img
                key={selectedPhoto.src}
                src={selectedPhoto.src}
                alt=""
                className="animate-scale-in max-h-[76svh] w-auto max-w-[calc(100%-2rem)] object-contain shadow-2xl"
              />
              <button
                type="button"
                onClick={() => moveTo(1)}
                className="absolute right-0 z-10 hidden h-14 w-14 translate-x-1/2 items-center justify-center rounded-full border border-white/40 bg-garden-ink-dark/70 text-2xl text-white backdrop-blur transition hover:scale-105 hover:bg-garden-ink sm:flex"
                aria-label="다음 사진"
              >
                →
              </button>
            </div>
            <div className="mt-5 flex w-full items-end justify-between px-1 text-garden">
              <div>
                <p className="font-serif text-2xl">{selectedPhoto.caption}</p>
              </div>
              <div className="flex gap-2 sm:hidden">
                <button
                  type="button"
                  onClick={() => moveTo(-1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 text-xl transition hover:bg-white/10"
                  aria-label="이전 사진"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => moveTo(1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 text-xl transition hover:bg-white/10"
                  aria-label="다음 사진"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
