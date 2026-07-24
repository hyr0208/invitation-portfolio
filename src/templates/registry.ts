import { lazy } from 'react'

export const templateComponents: Record<string, ReturnType<typeof lazy>> = {
  'classic-story': lazy(() => import('./classic-story/ClassicStory')),
}

export function hasLiveDemo(id: string): boolean {
  return id in templateComponents
}
