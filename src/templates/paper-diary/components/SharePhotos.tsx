import { useEffect, useRef, useState } from 'react'
import { Section } from './Section'
import { HeartPhoto } from './HeartPhoto'
import heroPhoto from '../../minimal-mono/assets/photos/gallery-3.jpg'

const MAX_PHOTOS = 10

export function SharePhotos() {
  const [previews, setPreviews] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const urlsRef = useRef<string[]>([])

  useEffect(() => {
    const urls = urlsRef.current
    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url))
    }
  }, [])

  const handleFiles = (files: FileList | null) => {
    if (!files) return
    const next = Array.from(files)
      .slice(0, MAX_PHOTOS - previews.length)
      .map((file) => URL.createObjectURL(file))
    urlsRef.current.push(...next)
    setPreviews((prev) => [...prev, ...next])
  }

  return (
    <Section title="Share Moments" kicker="사진 나누기">
      <div className="flex justify-center">
        <HeartPhoto src={heroPhoto} alt="신랑 신부" className="w-48" />
      </div>
      <p className="mt-8 text-center text-sm leading-relaxed text-diary-ink-soft">
        결혼식 현장에서 찍은 사진들을
        <br />
        신랑 신부와 함께 나눠주세요. (최대 {MAX_PHOTOS}장)
      </p>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={previews.length >= MAX_PHOTOS}
        className="mx-auto mt-6 block rounded-full border border-diary-burgundy px-6 py-2.5 text-sm text-diary-burgundy transition-colors hover:bg-diary-burgundy hover:text-diary-cream-soft disabled:opacity-40"
      >
        사진 업로드
      </button>

      {previews.length > 0 && (
        <div className="mt-6 grid grid-cols-4 gap-2">
          {previews.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`업로드한 사진 ${i + 1}`}
              className="aspect-square rounded-sm object-cover"
            />
          ))}
        </div>
      )}

      <p className="mt-4 text-center text-[11px] text-diary-ink-faint">
        * 업로드한 사진은 이 화면을 벗어나면 사라지는 데모 기능입니다.
      </p>
    </Section>
  )
}
