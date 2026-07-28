import { Suspense, useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { templateComponents } from '../templates/registry'
import { InvitationOptions } from '../components/invitation/InvitationOptions'

export default function PreviewPage() {
  const [, refresh] = useState(0)
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
    <>
      <InvitationOptions onChange={() => refresh((value) => value + 1)} />
      <Suspense fallback={null}>
      <TemplateComponent />
      </Suspense>
    </>
  )
}
