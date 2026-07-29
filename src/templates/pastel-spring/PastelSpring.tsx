import type { InvitationData } from './types'
import { sampleInvitation } from './sampleData'
import { Cover } from './components/Cover'
import { Greeting } from './components/Greeting'
import { Couple } from './components/Couple'
import { PhotoMoment } from './components/PhotoMoment'
import { DateInfo } from './components/DateInfo'
import { Gallery } from './components/Gallery'
import { Location } from './components/Location'
import { Account } from './components/Account'
import { ShareFooter } from './components/ShareFooter'
import { MusicPlayer } from '../../components/invitation/MusicPlayer'
import { Guestbook } from '../../components/invitation/Guestbook'
import { getInvitationFeatures } from '../../components/invitation/InvitationOptions'

interface PastelSpringProps {
  data?: InvitationData
}

export default function PastelSpring({ data = sampleInvitation }: PastelSpringProps) {
  const features = getInvitationFeatures()
  return (
    <div className="min-h-screen bg-spring-deep py-0 sm:py-10">
      <div className="mx-auto min-h-svh w-full max-w-[430px] bg-spring shadow-none sm:min-h-0 sm:shadow-xl">
        <Cover data={data} />
        <Greeting data={data} />
        <Couple data={data} />
        <PhotoMoment caption="Our first spring together" />
        <DateInfo data={data} />
        <Gallery />
        <Location data={data} />
        <Account data={data} />
        <Guestbook features={features} invitationId="pastel-spring" />
        <ShareFooter data={data} />
      </div>
      <MusicPlayer features={features} />
    </div>
  )
}
