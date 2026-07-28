import { lazy } from 'react'

export const templateComponents: Record<string, ReturnType<typeof lazy>> = {
  'classic-story': lazy(() => import('./classic-story/ClassicStory')),
  'minimal-mono': lazy(() => import('./minimal-mono/MinimalMono')),
  'romantic-blossom': lazy(() => import('./romantic-blossom/RomanticBlossom')),
  'retro-film': lazy(() => import('./retro-film/RetroFilm')),
  'photo-story': lazy(() => import('./photo-story/PhotoStoryTemplate')),
  'garden-editorial': lazy(() => import('./garden-editorial/GardenEditorial')),
}

export function hasLiveDemo(id: string): boolean {
  return id in templateComponents
}
