import type { InvitationData } from './types'
import { sampleInvitation } from './sampleData'
import { Cover } from './components/Cover'
import { Gallery } from './components/Gallery'
import { Greeting } from './components/Greeting'
import { Info } from './components/Info'
import { PhotoMoment } from './components/PhotoMoment'
import { Location } from './components/Location'
import { Account } from './components/Account'
import { ShareFooter } from './components/ShareFooter'
import { MusicPlayer } from '../../components/invitation/MusicPlayer'
import { Guestbook } from '../../components/invitation/Guestbook'
import { getInvitationFeatures } from '../../components/invitation/InvitationOptions'

interface RetroFilmProps {
  data?: InvitationData
}

export default function RetroFilm({ data = sampleInvitation }: RetroFilmProps) {
  const features = getInvitationFeatures()
  return (
    <div className="min-h-screen bg-film-paper-soft py-0 sm:py-10">
      <div className="mx-auto min-h-svh w-full max-w-[430px] bg-film-paper shadow-none sm:min-h-0 sm:shadow-xl">
        <Cover data={data} />
        <Gallery />
        <Greeting data={data} />
        <Info data={data} />
        <PhotoMoment frame="FRAME 24A" />
        <Location data={data} />
        <Account data={data} />
        <Guestbook features={features} invitationId="retro-film" />
        <ShareFooter data={data} />
      </div>
      <MusicPlayer features={features} />
    </div>
  )
}
