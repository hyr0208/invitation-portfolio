import { useMemo, useState } from "react";
import CategoryTabs, { type CategoryFilter } from "../components/CategoryTabs";
import TemplateCard from "../components/TemplateCard";
import { templates } from "../data/templates";

export default function GalleryPage() {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [view, setView] = useState<"intro" | "templates">("intro");

  const filtered = useMemo(
    () =>
      category === "all"
        ? templates
        : templates.filter((t) => t.category === category),
    [category],
  );

  return (
    <div className="space-y-8">
      <nav
        className="mx-auto flex w-fit rounded-full border border-stone-200 bg-white p-1 text-sm shadow-sm"
        aria-label="페이지 메뉴"
      >
        <button
          type="button"
          onClick={() => setView("intro")}
          className={`rounded-full px-5 py-2 transition ${view === "intro" ? "bg-[#304b3b] text-white" : "text-stone-500 hover:text-stone-900"}`}
        >
          서비스 소개
        </button>
        <button
          type="button"
          onClick={() => setView("templates")}
          className={`rounded-full px-5 py-2 transition ${view === "templates" ? "bg-[#304b3b] text-white" : "text-stone-500 hover:text-stone-900"}`}
        >
          템플릿 보기
        </button>
      </nav>
      {view === "intro" ? (
        <div key="intro" className="animate-fade-up space-y-12">
          <section className="relative overflow-hidden rounded-[2rem] bg-[#304b3b] px-7 py-14 text-[#f8faf4] sm:px-14 sm:py-20">
            <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#c9d8c5]/20" />
            <div className="absolute -bottom-32 right-10 h-72 w-72 rounded-full border border-[#c9d8c5]/15" />
            <div className="relative max-w-xl">
              <p className="mb-5 text-xs tracking-[0.3em] text-[#c9d8c5] uppercase">
                For your once-in-a-lifetime day
              </p>
              <h1 className="font-serif text-4xl leading-tight tracking-tight sm:text-6xl">
                두 사람의 이야기가
                <br />
                청첩장이 되는 곳
              </h1>
              <p className="mt-6 max-w-md text-sm leading-7 text-[#d9e4d5]">
                사진과 문장, 그리고 두 사람만의 분위기를 담아 오래 기억될 모바일
                청첩장을 만나보세요.
              </p>
              <button
                type="button"
                onClick={() => setView("templates")}
                className="mt-9 inline-flex rounded-full bg-[#f8faf4] px-6 py-3 text-sm font-medium text-[#304b3b] transition hover:bg-[#dce8d7]"
              >
                템플릿 둘러보기 <span className="ml-2">→</span>
              </button>
            </div>
          </section>
          <section className="grid gap-3 sm:grid-cols-3">
            {[
              ["01", "고르고", "취향에 맞는 무드의 템플릿을 골라보세요."],
              ["02", "담고", "사진과 이야기를 담은 모습을 미리 확인해보세요."],
              ["03", "완성하고", "제작 문의로 나만의 청첩장을 완성하세요."],
            ].map(([number, title, description]) => (
              <article
                key={number}
                className="rounded-2xl border border-stone-200 bg-white p-5"
              >
                <p className="text-xs text-stone-400">{number}</p>
                <h2 className="mt-5 font-serif text-xl">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-stone-500">
                  {description}
                </p>
              </article>
            ))}
          </section>
          <section className="rounded-3xl border border-stone-200 bg-white px-7 py-9 sm:px-10">
            <p className="text-xs tracking-[0.25em] text-[#7c9b80] uppercase">
              Why invitation gallery
            </p>
            <h2 className="mt-3 font-serif text-2xl">
              예쁜 디자인에서 끝나지 않도록
            </h2>
            <p className="mt-3 text-sm leading-7 text-stone-500">
              모바일에 최적화된 화면과 사진 갤러리, 방명록, 배경음악, 지도
              안내까지 한 곳에 담았습니다. 원하는 분위기를 고른 뒤 두 사람의
              이야기만 채워보세요.
            </p>
          </section>
        </div>
      ) : (
        <div key="templates" className="animate-fade-up space-y-4">
          <div id="templates" className="scroll-mt-20 space-y-4">
            <div className="space-y-1 text-center">
              <h2 className="font-serif text-3xl tracking-wide text-neutral-900">
                모바일 청첩장 템플릿
              </h2>
              <p className="text-sm text-neutral-500">
                마음에 드는 템플릿을 둘러보고, 제작을 문의해보세요.
              </p>
            </div>
          </div>
          <CategoryTabs value={category} onChange={setCategory} />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {filtered.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
