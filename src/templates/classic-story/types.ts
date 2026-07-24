export interface Parents {
  father: string
  mother: string
  fatherPhone: string
  motherPhone: string
}

export interface PersonInfo {
  name: string
  shortName: string
  role: '신랑' | '신부'
  parents: Parents
  phone: string
}

export interface AccountInfo {
  side: '신랑측' | '신부측'
  label: string
  bank: string
  number: string
  holder: string
}

export interface InvitationData {
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
  accounts: AccountInfo[]
}
