import type { InvitationData } from './types'
import { sampleInvitation } from './sampleData'
import { Cover } from './components/Cover'
import { Greeting } from './components/Greeting'
import { Couple } from './components/Couple'
import { Gallery } from './components/Gallery'
import { DateInfo } from './components/DateInfo'
import { PhotoMoment } from './components/PhotoMoment'
import { Location } from './components/Location'
import { Account } from './components/Account'
import { ShareFooter } from './components/ShareFooter'
import { MusicPlayer } from '../../components/invitation/MusicPlayer'
import { Guestbook } from '../../components/invitation/Guestbook'
import { getInvitationFeatures } from '../../components/invitation/InvitationOptions'

interface DevTerminalProps {
  data?: InvitationData
}

export default function DevTerminal({ data = sampleInvitation }: DevTerminalProps) {
  const features = getInvitationFeatures()
  return (
    <div className="min-h-screen bg-dev-bg-deep py-0 sm:py-10">
      <div className="mx-auto min-h-svh w-full max-w-[430px] bg-dev-bg shadow-none sm:min-h-0 sm:shadow-xl">
        <Cover data={data} />
        <Greeting data={data} />
        <Couple data={data} />
        <Gallery />
        <DateInfo data={data} />
        <PhotoMoment index="05" />
        <Location data={data} />
        <Account data={data} />
        <Guestbook features={features} invitationId="dev-terminal" />
        <ShareFooter data={data} />
      </div>
      <MusicPlayer features={features} />
    </div>
  )
}
