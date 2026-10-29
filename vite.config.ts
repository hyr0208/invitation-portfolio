import { readFileSync } from 'node:fs'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const SITE_URL = 'https://invite.yyyerin.co.kr'

// 템플릿 목록(src/data/templates.ts)에서 활성화된 id를 읽어 sitemap.xml 생성
function sitemap(): Plugin {
  return {
    name: 'sitemap',
    apply: 'build',
    generateBundle() {
      const source = readFileSync('src/data/templates.ts', 'utf-8')
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/^\s*\/\/.*$/gm, '')
      const ids = [...source.matchAll(/\bid:\s*['"]([^'"]+)['"]/g)].map((m) => m[1])
      const urls = ['/', ...ids.map((id) => `/templates/${id}`)]
      const body = urls.map((path) => `  <url><loc>${SITE_URL}${path}</loc></url>`).join('\n')
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), sitemap()],
})
