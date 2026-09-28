import { useEffect, useMemo, useState } from 'react'

export interface Countdown {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function useCountdown(targetISO: string): Countdown {
  const targetMs = useMemo(() => new Date(targetISO).getTime(), [targetISO])
  const [remaining, setRemaining] = useState(() => targetMs - Date.now())

  useEffect(() => {
    const id = setInterval(() => setRemaining(targetMs - Date.now()), 1000)
    return () => clearInterval(id)
  }, [targetMs])

  const clamped = Math.max(remaining, 0)
  return {
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  }
}
