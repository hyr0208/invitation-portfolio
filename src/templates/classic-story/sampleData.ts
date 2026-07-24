import type { InvitationData } from './types'

export const sampleInvitation: InvitationData = {
  groom: {
    name: '이지훈',
    shortName: '지훈',
    role: '신랑',
    parents: {
      father: '이성민',
      mother: '한소영',
      fatherPhone: '010-2222-3333',
      motherPhone: '010-4444-5555',
    },
    phone: '010-1234-5678',
  },
  bride: {
    name: '김서연',
    shortName: '서연',
    role: '신부',
    parents: {
      father: '김도현',
      mother: '최은주',
      fatherPhone: '010-6666-7777',
      motherPhone: '010-8888-9999',
    },
    phone: '010-8765-4321',
  },
  weddingDateISO: '2026-11-14T13:00:00+09:00',
  weddingDateLabel: '2026년 11월 14일 토요일',
  weddingTimeLabel: '오후 1시',
  venueName: '더 라움 컨벤션',
  venueHall: '3층 그랜드홀',
  venueAddress: '서울특별시 강남구 테헤란로 123',
  mapQuery: '더 라움 컨벤션',
  greeting: [
    '서로 다른 길을 걸어온 두 사람이',
    '이제 같은 곳을 바라보며',
    '한 걸음씩 함께 나아가려 합니다.',
    '',
    '저희 두 사람이 걸어갈 새로운 시작에',
    '따뜻한 마음으로 함께해 주시면',
    '더없는 기쁨으로 간직하겠습니다.',
  ],
  accounts: [
    { side: '신랑측', label: '신랑', bank: '신한은행', number: '110-123-456789', holder: '이지훈' },
    { side: '신랑측', label: '아버지', bank: '국민은행', number: '123-45-6789012', holder: '이성민' },
    { side: '신랑측', label: '어머니', bank: '농협은행', number: '351-1234-5678-12', holder: '한소영' },
    { side: '신부측', label: '신부', bank: '카카오뱅크', number: '3333-01-2345678', holder: '김서연' },
    { side: '신부측', label: '아버지', bank: '신한은행', number: '110-987-654321', holder: '김도현' },
    { side: '신부측', label: '어머니', bank: '우리은행', number: '1002-345-678901', holder: '최은주' },
  ],
}
