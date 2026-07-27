import { Suspense, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { templateComponents } from '../templates/registry'

export default function PreviewPage() {
  const { id } = useParams<{ id: string }>()
  const TemplateComponent = id ? templateComponents[id] : undefined

  useEffect(() => {
    document.documentElement.classList.add('hide-scrollbar')
    return () => document.documentElement.classList.remove('hide-scrollbar')
  }, [])

  if (!TemplateComponent) {
    return <Navigate to="/" replace />
  }

  return (
    <Suspense fallback={null}>
      <TemplateComponent />
    </Suspense>
  )
}
