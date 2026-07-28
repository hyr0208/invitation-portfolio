import type { InvitationData } from './types'

export const sampleInvitation: InvitationData = {
  groom: {
    name: '임재현',
    shortName: '재현',
    role: '신랑',
    parents: {
      father: '임동혁',
      mother: '고은서',
      fatherPhone: '010-2277-4488',
      motherPhone: '010-3388-5599',
    },
    phone: '010-7744-1122',
  },
  bride: {
    name: '문소예',
    shortName: '소예',
    role: '신부',
    parents: {
      father: '문기석',
      mother: '유하영',
      fatherPhone: '010-4499-6611',
      motherPhone: '010-5511-7722',
    },
    phone: '010-8855-3300',
  },
  weddingDateISO: '2027-06-19T12:30:00+09:00',
  weddingDateLabel: '2027년 6월 19일 토요일',
  weddingTimeLabel: '오후 12시 30분',
  venueName: '더 갤러리 한남',
  venueHall: '3층 화이트홀',
  venueAddress: '서울특별시 용산구 한남대로 32',
  mapQuery: '더 갤러리 한남',
  greeting: [
    '사진 한 장 한 장을 넘기듯,',
    '저희 두 사람이 함께 걸어온 시간을',
    '이 자리에 펼쳐 놓습니다.',
    '',
    '앞으로 채워갈 페이지들도',
    '가까이에서 함께 지켜봐 주시면',
    '큰 힘이 되겠습니다.',
  ],
  accounts: [
    { side: '신랑측', label: '신랑', bank: '신한은행', number: '110-456-789012', holder: '임재현' },
    { side: '신랑측', label: '아버지', bank: '국민은행', number: '345-67-8901234', holder: '임동혁' },
    { side: '신랑측', label: '어머니', bank: '농협은행', number: '353-2222-3333-44', holder: '고은서' },
    { side: '신부측', label: '신부', bank: '카카오뱅크', number: '3333-45-6789012', holder: '문소예' },
    { side: '신부측', label: '아버지', bank: '우리은행', number: '1002-345-678901', holder: '문기석' },
    { side: '신부측', label: '어머니', bank: '하나은행', number: '678-901234-567', holder: '유하영' },
  ],
}
