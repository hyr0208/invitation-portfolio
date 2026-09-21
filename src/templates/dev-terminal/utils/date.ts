export function getDday(target: Date): number {
  const now = new Date()
  const t = new Date(target.getFullYear(), target.getMonth(), target.getDate())
  const n = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  return Math.round((t.getTime() - n.getTime()) / (1000 * 60 * 60 * 24))
}

export function getMonthMatrix(year: number, month: number): number[][] {
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const cells: number[] = Array.from({ length: firstDay }, () => 0)
  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(day)
  }
  while (cells.length % 7 !== 0) {
    cells.push(0)
  }

  const weeks: number[][] = []
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7))
  }
  return weeks
}
