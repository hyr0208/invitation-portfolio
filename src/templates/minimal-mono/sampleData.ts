import type { InvitationData } from './types'

export const sampleInvitation: InvitationData = {
  groom: {
    name: '박준서',
    role: '신랑',
    phone: '010-2345-6789',
  },
  bride: {
    name: '오하은',
    role: '신부',
    phone: '010-9876-5432',
  },
  weddingDateISO: '2026-10-17T12:00:00+09:00',
  weddingDateLabel: '2026년 10월 17일 토요일',
  weddingTimeLabel: '정오 12시',
  venueName: '더 채플 앳 청담',
  venueHall: '2층 채플홀',
  venueAddress: '서울특별시 강남구 도산대로 45',
  mapQuery: '더 채플 앳 청담',
  greeting: [
    '단정하고 조용한 하루,',
    '두 사람이 하나의 이름으로',
    '함께 걸어가려 합니다.',
    '',
    '귀한 걸음으로 축복해 주신다면',
    '오래 간직하겠습니다.',
  ],
  accounts: [
    { side: '신랑측', label: '신랑', bank: '국민은행', number: '123-456-7890123', holder: '박준서' },
    { side: '신랑측', label: '혼주', bank: '신한은행', number: '110-234-567890', holder: '박정호' },
    { side: '신부측', label: '신부', bank: '카카오뱅크', number: '3333-12-3456789', holder: '오하은' },
    { side: '신부측', label: '혼주', bank: '우리은행', number: '1002-123-456789', holder: '오영준' },
  ],
}
