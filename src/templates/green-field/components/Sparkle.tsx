interface SparkleProps {
  size?: number
  delay?: number
  className?: string
}

export function Sparkle({ size = 16, delay = 0, className = '' }: SparkleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden
      className={`pointer-events-none ${className}`}
      style={{ animation: 'sparkle-twinkle 2.6s ease-in-out infinite', animationDelay: `${delay}s` }}
    >
      <path
        d="M12 2c.6 4.8 2.9 7.3 8 8-5.1.8-7.4 3.2-8 10-.6-6.8-2.9-9.2-8-10 5.1-.7 7.4-3.2 8-8Z"
        fill="currentColor"
      />
    </svg>
  )
}
