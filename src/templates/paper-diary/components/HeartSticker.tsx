import type { CSSProperties } from 'react'

interface HeartStickerProps {
  className?: string
  size?: number
  rotate?: number
  style?: CSSProperties
  absolute?: boolean
}

export function HeartSticker({
  className = '',
  size = 32,
  rotate = 0,
  style,
  absolute = true,
}: HeartStickerProps) {
  return (
    <svg
      viewBox="0 0 32 29"
      width={size}
      height={size}
      className={`pointer-events-none drop-shadow-[0_3px_2px_rgba(59,42,34,0.25)] ${absolute ? 'absolute' : ''} ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
      aria-hidden="true"
    >
      <path
        d="M16 28 C16 28 1 18.5 1 9.5 C1 4.3 5 1 9.2 1 C12.2 1 14.7 2.8 16 5.4 C17.3 2.8 19.8 1 22.8 1 C27 1 31 4.3 31 9.5 C31 18.5 16 28 16 28 Z"
        fill="#7a1c2b"
      />
      <path
        d="M16 28 C16 28 1 18.5 1 9.5 C1 4.3 5 1 9.2 1 C12.2 1 14.7 2.8 16 5.4"
        fill="none"
        stroke="#4a0f1a"
        strokeWidth="0.6"
        opacity="0.4"
      />
    </svg>
  )
}
