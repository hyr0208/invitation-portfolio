export function getDday(target: Date): number {
  const now = new Date()
  const t = new Date(target.getFullYear(), target.getMonth(), target.getDate())
  const n = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  return Math.round((t.getTime() - n.getTime()) / (1000 * 60 * 60 * 24))
}
