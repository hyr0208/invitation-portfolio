import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-rose-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link to="/" className="text-lg font-semibold tracking-tight text-rose-500">
          청첩장갤러리
        </Link>
        <nav className="flex items-center gap-4 text-sm text-neutral-600">
          <Link to="/" className="hover:text-rose-500">
            템플릿
          </Link>
        </nav>
      </div>
    </header>
  )
}
