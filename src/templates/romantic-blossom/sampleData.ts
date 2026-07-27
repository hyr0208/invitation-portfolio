import type { InvitationData } from './types'

export const sampleInvitation: InvitationData = {
  groom: {
    name: '박지호',
    shortName: '지호',
    role: '신랑',
    parents: {
      father: '박준영',
      mother: '오하나',
      fatherPhone: '010-2345-6677',
      motherPhone: '010-3456-7788',
    },
    phone: '010-1111-2222',
  },
  bride: {
    name: '윤소민',
    shortName: '소민',
    role: '신부',
    parents: {
      father: '윤태식',
      mother: '강미래',
      fatherPhone: '010-4567-8899',
      motherPhone: '010-5678-9900',
    },
    phone: '010-3333-4444',
  },
  weddingDateISO: '2027-04-10T14:00:00+09:00',
  weddingDateLabel: '2027년 4월 10일 토요일',
  weddingTimeLabel: '오후 2시',
  venueName: '더채플앳청담',
  venueHall: '2층 가든홀',
  venueAddress: '서울특별시 강남구 삼성로 456',
  mapQuery: '더채플앳청담',
  greeting: [
    '봄바람이 꽃잎을 흩날리던 날,',
    '우리는 서로를 알아보았습니다.',
    '',
    '이제 그 사람과 함께',
    '평생의 봄을 만들어가려 합니다.',
    '',
    '저희 두 사람의 새로운 시작을',
    '축복해 주시면 감사하겠습니다.',
  ],
  accounts: [
    { side: '신랑측', label: '신랑', bank: '국민은행', number: '123-4567-8901', holder: '박지호' },
    { side: '신랑측', label: '아버지', bank: '신한은행', number: '110-234-567890', holder: '박준영' },
    { side: '신랑측', label: '어머니', bank: '농협은행', number: '352-1111-2222-33', holder: '오하나' },
    { side: '신부측', label: '신부', bank: '토스뱅크', number: '1000-1234-5678', holder: '윤소민' },
    { side: '신부측', label: '아버지', bank: '우리은행', number: '1002-111-222333', holder: '윤태식' },
    { side: '신부측', label: '어머니', bank: '하나은행', number: '456-789012-345', holder: '강미래' },
  ],
}
