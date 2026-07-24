import { lazy } from 'react'

export const templateComponents: Record<string, ReturnType<typeof lazy>> = {
  'classic-story': lazy(() => import('./classic-story/ClassicStory')),
  'minimal-mono': lazy(() => import('./minimal-mono/MinimalMono')),
}

export function hasLiveDemo(id: string): boolean {
  return id in templateComponents
}
