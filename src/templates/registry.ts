import { lazy } from 'react'

export const templateComponents: Record<string, ReturnType<typeof lazy>> = {
  'classic-story': lazy(() => import('./classic-story/ClassicStory')),
  'minimal-mono': lazy(() => import('./minimal-mono/MinimalMono')),
  'romantic-blossom': lazy(() => import('./romantic-blossom/RomanticBlossom')),
}

export function hasLiveDemo(id: string): boolean {
  return id in templateComponents
}
