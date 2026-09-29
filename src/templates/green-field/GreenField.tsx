import type { InvitationData } from './types'
import { sampleInvitation } from './sampleData'
import { Cover } from './components/Cover'
import { Greeting } from './components/Greeting'
import { FilmStrip } from './components/FilmStrip'
import { Couple } from './components/Couple'
import { Moment } from './components/Moment'
import { DateInfo } from './components/DateInfo'
import { Gallery } from './components/Gallery'
import { Location } from './components/Location'
import { Detail } from './components/Detail'
import { Account } from './components/Account'
import { ShareFooter } from './components/ShareFooter'
import { MusicPlayer } from '../../components/invitation/MusicPlayer'
import { Guestbook } from '../../components/invitation/Guestbook'
import { getInvitationFeatures } from '../../components/invitation/InvitationOptions'

interface GreenFieldProps {
  data?: InvitationData
}

export default function GreenField({ data = sampleInvitation }: GreenFieldProps) {
  const features = getInvitationFeatures()
  return (
    <div className="min-h-screen bg-field-forest-dark py-0 sm:py-10">
      <div className="mx-auto min-h-svh w-full max-w-[430px] overflow-hidden bg-field-ivory shadow-none sm:min-h-0 sm:shadow-xl">
        <Cover data={data} />
        <Greeting data={data} />
        <FilmStrip />
        <Couple data={data} />
        <Moment />
        <DateInfo data={data} />
        <Gallery />
        <Location data={data} />
        <Detail details={data.details} />
        <Account data={data} />
        <Guestbook features={features} invitationId="green-field" />
        <ShareFooter data={data} />
      </div>
      <MusicPlayer features={features} />
    </div>
  )
}
