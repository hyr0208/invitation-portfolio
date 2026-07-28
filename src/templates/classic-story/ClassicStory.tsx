import type { InvitationData } from './types'
import { sampleInvitation } from './sampleData'
import { Cover } from './components/Cover'
import { Greeting } from './components/Greeting'
import { PhotoMoment } from './components/PhotoMoment'
import { Couple } from './components/Couple'
import { DateInfo } from './components/DateInfo'
import { Gallery } from './components/Gallery'
import { Location } from './components/Location'
import { Account } from './components/Account'
import { ShareFooter } from './components/ShareFooter'
import { MusicPlayer } from '../../components/invitation/MusicPlayer'
import { Guestbook } from '../../components/invitation/Guestbook'
import { getInvitationFeatures } from '../../components/invitation/InvitationOptions'

interface ClassicStoryProps {
  data?: InvitationData
}

export default function ClassicStory({ data = sampleInvitation }: ClassicStoryProps) {
  const features = getInvitationFeatures()
  return (
    <div className="min-h-screen bg-cream-deep py-0 sm:py-10">
      <div className="mx-auto min-h-svh w-full max-w-[430px] bg-cream shadow-none sm:min-h-0 sm:shadow-xl">
        <Cover data={data} />
        <Greeting data={data} />
        <PhotoMoment caption="Our story continues together" />
        <Couple data={data} />
        <DateInfo data={data} />
        <Gallery />
        <Location data={data} />
        <Account data={data} />
        <Guestbook features={features} invitationId="classic-story" />
        <ShareFooter data={data} />
      </div>
      <MusicPlayer features={features} />
    </div>
  )
}
