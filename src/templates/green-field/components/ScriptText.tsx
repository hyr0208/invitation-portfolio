import type { CSSProperties } from 'react'

interface ScriptTextProps {
  text: string
  active?: boolean
  duration?: number
  delay?: number
  className?: string
  style?: CSSProperties
}

/** 좌→우로 잉크가 번지듯 드러나며 손글씨로 써지는 듯한 스크립트 문구 */
export function ScriptText({
  text,
  active = true,
  duration = 2.2,
  delay = 0.3,
  className = '',
  style,
}: ScriptTextProps) {
  return (
    <span
      className={`inline-block px-2 font-script whitespace-pre-line ${className}`}
      style={{
        ...style,
        clipPath: 'inset(-20% 100% -20% 0)',
        animation: active ? `script-write ${duration}s cubic-bezier(0.55, 0.1, 0.35, 1) ${delay}s forwards` : 'none',
      }}
    >
      {text}
    </span>
  )
}
