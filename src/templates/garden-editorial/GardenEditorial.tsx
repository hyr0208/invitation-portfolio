import type { InvitationData } from './types'
import { sampleGardenInvitation } from './sampleData'
import { Cover } from './components/Cover'
import { Greeting } from './components/Greeting'
import { DateInfo } from './components/DateInfo'
import { Gallery } from './components/Gallery'
import { PhotoMoment } from './components/PhotoMoment'
import { Couple } from './components/Couple'
import { Location } from './components/Location'
import { Account } from './components/Account'
import { ShareFooter } from './components/ShareFooter'
import { MusicPlayer } from '../../components/invitation/MusicPlayer'
import { Guestbook } from '../../components/invitation/Guestbook'
import { getInvitationFeatures } from '../../components/invitation/InvitationOptions'

interface GardenEditorialProps {
  data?: InvitationData
}

export default function GardenEditorial({ data = sampleGardenInvitation }: GardenEditorialProps) {
  const features = getInvitationFeatures()

  return (
    <div className="min-h-screen bg-garden-deep py-0 font-serif text-garden-ink sm:py-10">
      <main className="mx-auto max-w-[430px] overflow-hidden bg-garden shadow-2xl sm:rounded-xs">
        <Cover data={data} />
        <Greeting data={data} />
        <DateInfo data={data} />
        <Gallery photos={data.photos} />
        <PhotoMoment caption="the field we found" />
        <Couple data={data} />
        <Location data={data} />
        <Account data={data} />
        <Guestbook features={features} invitationId="garden-editorial" />
        <ShareFooter data={data} />
      </main>
      <MusicPlayer features={features} />
    </div>
  )
}
