import type { InvitationData } from './types'

export const sampleInvitation: InvitationData = {
  groom: {
    name: '이도윤',
    shortName: '도윤',
    role: '신랑',
    parents: {
      father: '이성재',
      mother: '한유경',
      fatherPhone: '010-2233-4455',
      motherPhone: '010-3344-5566',
    },
    phone: '010-1234-5678',
  },
  bride: {
    name: '한서아',
    shortName: '서아',
    role: '신부',
    parents: {
      father: '한지훈',
      mother: '오미소',
      fatherPhone: '010-4455-6677',
      motherPhone: '010-5566-7788',
    },
    phone: '010-8765-4321',
  },
  weddingDateISO: '2027-04-24T13:00:00+09:00',
  weddingDateLabel: '2027년 4월 24일 토요일',
  weddingTimeLabel: '오후 1시',
  venueName: '라포레 웨딩가든',
  venueHall: '2층 글라스하우스',
  venueAddress: '서울특별시 서초구 양재대로 210',
  mapQuery: '라포레 웨딩가든',
  greeting: [
    '연둣빛 새싹이 돋아나던 계절,',
    '우리는 처음 마주 보고 웃었습니다.',
    '',
    '햇살 가득한 봄날을 닮은 두 사람이',
    '이제 하나의 계절로 피어나려 합니다.',
    '',
    '저희의 첫 봄에 함께해 주시면',
    '큰 힘이 되겠습니다.',
  ],
  accounts: [
    { side: '신랑측', label: '신랑', bank: '국민은행', number: '234-5678-9012', holder: '이도윤' },
    { side: '신랑측', label: '아버지', bank: '신한은행', number: '110-345-678901', holder: '이성재' },
    { side: '신랑측', label: '어머니', bank: '농협은행', number: '352-2222-3333-44', holder: '한유경' },
    { side: '신부측', label: '신부', bank: '카카오뱅크', number: '3333-01-2345678', holder: '한서아' },
    { side: '신부측', label: '아버지', bank: '우리은행', number: '1002-222-333444', holder: '한지훈' },
    { side: '신부측', label: '어머니', bank: '하나은행', number: '567-890123-456', holder: '오미소' },
  ],
}
