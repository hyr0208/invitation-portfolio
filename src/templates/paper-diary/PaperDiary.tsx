import type { InvitationData } from './types'
import { sampleInvitation } from './sampleData'
import { Cover } from './components/Cover'
import { Greeting } from './components/Greeting'
import { Couple } from './components/Couple'
import { Gallery } from './components/Gallery'
import { DateInfo } from './components/DateInfo'
import { Location } from './components/Location'
import { Detail } from './components/Detail'
import { Account } from './components/Account'
import { SharePhotos } from './components/SharePhotos'
import { ShareFooter } from './components/ShareFooter'
import { MusicPlayer } from '../../components/invitation/MusicPlayer'
import { Guestbook } from '../../components/invitation/Guestbook'
import { getInvitationFeatures } from '../../components/invitation/InvitationOptions'

interface PaperDiaryProps {
  data?: InvitationData
}

export default function PaperDiary({ data = sampleInvitation }: PaperDiaryProps) {
  const features = getInvitationFeatures()
  return (
    <div className="min-h-screen bg-diary-burgundy-dark py-0 sm:py-10">
      <div className="mx-auto min-h-svh w-full max-w-[430px] bg-diary-cream shadow-none sm:min-h-0 sm:shadow-xl">
        <Cover data={data} />
        <Greeting data={data} />
        <Couple data={data} />
        <Gallery />
        <DateInfo data={data} />
        <Location data={data} />
        <Detail details={data.details} />
        <Account data={data} />
        <SharePhotos />
        <Guestbook features={features} invitationId="paper-diary" />
        <ShareFooter data={data} />
      </div>
      <MusicPlayer features={features} />
    </div>
  )
}
