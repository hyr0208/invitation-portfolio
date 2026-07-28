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

interface PhotoStoryTemplateProps {
  data?: InvitationData
}

export default function PhotoStoryTemplate({ data = sampleInvitation }: PhotoStoryTemplateProps) {
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
        <ShareFooter data={data} />
      </div>
    </div>
  )
}
