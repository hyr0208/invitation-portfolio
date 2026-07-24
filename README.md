# 청첩장갤러리

모바일 청첩장 템플릿을 모아 보여주는 갤러리 서비스입니다. 템플릿을 둘러보고 마음에 드는 디자인을 골라 제작을 문의하는 방식으로, 사용자가 직접 데이터를 입력해 만드는 셀프빌더는 아닙니다.

React + Vite + TypeScript + Tailwind CSS로 만들었고, 모바일/데스크톱 모두 지원합니다.

## 시작하기

```bash
npm install
npm run dev
```

## 주요 화면

- **템플릿 갤러리** (`/`) — 카테고리(미니멀/클래식/로맨틱/유니크/포토)별로 템플릿을 필터링해 둘러볼 수 있습니다.
- **템플릿 상세** (`/templates/:id`) — 템플릿 정보와 폰 목업 미리보기, "제작 문의하기" 모달 폼을 제공합니다. 실제 컴포넌트로 만들어진 템플릿은 목업 안에 실제 페이지가 그대로 렌더링됩니다.
- **라이브 프리뷰** (`/preview/:id`) — 실제 템플릿을 목업 없이 풀페이지로 확인하는 라우트입니다.

## 템플릿 구조

`src/data/templates.ts`에 갤러리에 노출되는 템플릿 목록(제목, 카테고리, 설명, 가격, 썸네일 등)이 있습니다.

일부 템플릿은 그래디언트 플레이스홀더로만 존재하고, 일부는 `src/templates/{템플릿명}/` 아래에 실제 React 컴포넌트로 구현되어 있습니다. 실제 컴포넌트가 있는 템플릿은 `src/templates/registry.ts`에 id로 등록해야 상세 페이지 프리뷰(iframe)와 `/preview/:id` 라우트에서 렌더링됩니다.

현재 라이브 템플릿:

- `classic-story` — 내추럴 크림톤 + 세리프 타이포의 스토리텔링형 청첩장 (`src/templates/classic-story`)
- `minimal-mono` — 그레이스케일 사진과 좌측 정렬 에디토리얼 타이포그래피로 완성한 블랙앤화이트 미니멀 청첩장 (`src/templates/minimal-mono`)

새 라이브 템플릿을 추가하려면:

1. `src/templates/{새 템플릿}/`에 컴포넌트를 작성합니다.
2. `src/templates/registry.ts`의 `templateComponents`에 id와 `lazy(() => import(...))`를 등록합니다.
3. `src/data/templates.ts`에 같은 id로 갤러리 카드용 메타데이터를 추가합니다.

## 문의 폼 (EmailJS)

"제작 문의하기" 모달은 [EmailJS](https://www.emailjs.com/)로 이메일을 직접 전송합니다(별도 백엔드 없음). 사용하려면:

1. EmailJS에서 이메일 서비스와 템플릿을 만듭니다. 템플릿에는 `{{template_name}}`, `{{name}}`, `{{phone}}`, `{{wedding_date}}`, `{{venue}}`, `{{message}}` 변수를 사용하고, 받는 주소는 템플릿/서비스 설정에서 지정합니다.
2. 프로젝트 루트에 `.env.local`을 만들고 `.env.example`을 참고해 Service ID, Template ID, Public Key를 채웁니다.
3. 개발 서버를 재시작하면 반영됩니다.

`.env.local`은 git에 커밋되지 않습니다.
