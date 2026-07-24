import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import GalleryPage from './pages/GalleryPage'
import TemplateDetailPage from './pages/TemplateDetailPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<GalleryPage />} />
        <Route path="/templates/:id" element={<TemplateDetailPage />} />
      </Routes>
    </Layout>
  )
}

export default App
