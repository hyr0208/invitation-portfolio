import type { ReactNode } from "react";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-6">{children}</main>
      <footer className="mx-auto max-w-5xl px-4 py-10 text-center text-xs tracking-wide text-stone-400">
        © {new Date().getFullYear()} 청첩장갤러리. All rights reserved. <br />
        Made with ෆ by yyyerin
      </footer>
    </div>
  );
}
