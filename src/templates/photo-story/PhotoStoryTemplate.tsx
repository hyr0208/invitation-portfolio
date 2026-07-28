import type { InvitationData } from './types'
import { sampleInvitation } from './sampleData'
import { Cover } from './components/Cover'
import { PhotoStory } from './components/PhotoStory'
import { Greeting } from './components/Greeting'
import { Location } from './components/Location'
import { DateInfo } from './components/DateInfo'
import { Couple } from './components/Couple'
import { Account } from './components/Account'
import { ShareFooter } from './components/ShareFooter'
import { MusicPlayer } from '../../components/invitation/MusicPlayer'
import { Guestbook } from '../../components/invitation/Guestbook'
import { getInvitationFeatures } from '../../components/invitation/InvitationOptions'

interface PhotoStoryTemplateProps {
  data?: InvitationData
}

export default function PhotoStoryTemplate({ data = sampleInvitation }: PhotoStoryTemplateProps) {
  const features = getInvitationFeatures()
  return (
    <div className="min-h-screen bg-gallery-deep py-0 sm:py-10">
      <div className="mx-auto min-h-svh w-full max-w-[430px] bg-gallery shadow-none sm:min-h-0 sm:shadow-xl">
        <Cover data={data} />
        <PhotoStory />
        <Greeting data={data} />
        <Location data={data} />
        <DateInfo data={data} />
        <Couple data={data} />
        <Account data={data} />
        <Guestbook features={features} invitationId="photo-story" />
        <ShareFooter data={data} />
      </div>
      <MusicPlayer features={features} />
    </div>
  )
}
