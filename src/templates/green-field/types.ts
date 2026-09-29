import type { InvitationFeatures } from '../../types/invitation'

export interface PersonInfo {
  name: string
  role: '신랑' | '신부'
  phone: string
}

export interface AccountInfo {
  side: '신랑측' | '신부측'
  label: string
  bank: string
  number: string
  holder: string
}

export interface DetailNotice {
  title: string
  body: string
}

export interface InvitationData {
  features?: InvitationFeatures
  groom: PersonInfo
  bride: PersonInfo
  weddingDateISO: string
  weddingDateLabel: string
  weddingTimeLabel: string
  venueName: string
  venueHall: string
  venueAddress: string
  mapQuery: string
  greeting: string[]
  greetingQuote: string
  accounts: AccountInfo[]
  details: DetailNotice[]
}
