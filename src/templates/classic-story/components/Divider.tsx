export function Divider() {
  return (
    <div className="mx-auto flex w-20 items-center gap-2 py-1" aria-hidden="true">
      <span className="h-px flex-1 bg-line" />
      <span className="h-1.5 w-1.5 rotate-45 bg-terracotta" />
      <span className="h-px flex-1 bg-line" />
    </div>
  )
}
