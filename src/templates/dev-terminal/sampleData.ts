import type { InvitationData } from './types'

export const sampleInvitation: InvitationData = {
  groom: {
    name: '이도현',
    role: '신랑',
    phone: '010-2323-4545',
  },
  bride: {
    name: '한서연',
    role: '신부',
    phone: '010-6767-8989',
  },
  weddingDateISO: '2026-11-14T13:00:00+09:00',
  weddingDateLabel: '2026년 11월 14일 토요일',
  weddingTimeLabel: '오후 1시',
  venueName: '더 스테이지 강남',
  venueHall: '3층 그랜드홀',
  venueAddress: '서울특별시 강남구 테헤란로 123',
  mapQuery: '더 스테이지 강남',
  greeting: [
    '두 개의 브랜치로 살아온 시간,',
    '이제 하나의 main으로 합칩니다.',
    '',
    '충돌 없이, 되돌릴 일 없이',
    '평생을 함께 커밋하겠습니다.',
    '',
    '축하의 마음으로 pull request를',
    '보내주시면 감사히 merge하겠습니다.',
  ],
  accounts: [
    { side: '신랑측', label: '신랑', bank: '국민은행', number: '123-456-7890123', holder: '이도현' },
    { side: '신랑측', label: '혼주', bank: '신한은행', number: '110-234-567890', holder: '이현우' },
    { side: '신부측', label: '신부', bank: '카카오뱅크', number: '3333-12-3456789', holder: '한서연' },
    { side: '신부측', label: '혼주', bank: '우리은행', number: '1002-123-456789', holder: '한지민' },
  ],
}
