import { useId } from 'react'

interface HeartPhotoProps {
  src: string
  alt: string
  className?: string
}

export function HeartPhoto({ src, alt, className = '' }: HeartPhotoProps) {
  const clipId = useId()

  return (
    <svg viewBox="0 0 100 92" className={className} role="img" aria-label={alt}>
      <defs>
        <clipPath id={clipId} clipPathUnits="objectBoundingBox">
          <path d="M0.5,0.98 C0.5,0.98 0.05,0.68 0.05,0.34 C0.05,0.14 0.2,0 0.36,0 C0.44,0 0.5,0.05 0.5,0.16 C0.5,0.05 0.56,0 0.64,0 C0.8,0 0.95,0.14 0.95,0.34 C0.95,0.68 0.5,0.98 0.5,0.98 Z" />
        </clipPath>
      </defs>
      <image
        href={src}
        width="100"
        height="92"
        preserveAspectRatio="xMidYMid slice"
        clipPath={`url(#${clipId})`}
      />
    </svg>
  )
}
