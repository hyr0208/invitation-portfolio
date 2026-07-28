import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-stone-200 bg-stone-50/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link
          to="/"
          className="block font-serif text-xl leading-none tracking-wide text-neutral-900"
        >
          청첩장갤러리
        </Link>
        <nav className="flex items-center gap-4 text-sm text-neutral-500">
          <Link to="/" className="hover:text-neutral-900">
            템플릿
          </Link>
        </nav>
      </div>
    </header>
  )
}
