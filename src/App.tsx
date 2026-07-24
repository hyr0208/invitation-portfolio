import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import GalleryPage from './pages/GalleryPage'
import TemplateDetailPage from './pages/TemplateDetailPage'
import PreviewPage from './pages/PreviewPage'

function App() {
  return (
    <Routes>
      <Route path="/preview/:id" element={<PreviewPage />} />
      <Route
        path="/*"
        element={
          <Layout>
            <Routes>
              <Route path="/" element={<GalleryPage />} />
              <Route path="/templates/:id" element={<TemplateDetailPage />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  )
}

export default App
