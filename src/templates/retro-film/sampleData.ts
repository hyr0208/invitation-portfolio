import type { InvitationData } from './types'

export const sampleInvitation: InvitationData = {
  groom: {
    name: '한도윤',
    shortName: '도윤',
    role: '신랑',
    parents: {
      father: '한재국',
      mother: '임서연',
      fatherPhone: '010-2244-6688',
      motherPhone: '010-3355-7799',
    },
    phone: '010-5522-1188',
  },
  bride: {
    name: '오하린',
    shortName: '하린',
    role: '신부',
    parents: {
      father: '오정민',
      mother: '배수아',
      fatherPhone: '010-4466-8822',
      motherPhone: '010-5577-9933',
    },
    phone: '010-6633-2299',
  },
  weddingDateISO: '2027-10-16T11:30:00+09:00',
  weddingDateLabel: '2027년 10월 16일 토요일',
  weddingTimeLabel: '오전 11시 30분',
  venueName: '필름앤코 하우스',
  venueHall: '1층 스튜디오홀',
  venueAddress: '서울특별시 마포구 연남로 12',
  mapQuery: '필름앤코 하우스',
  greeting: [
    '어느 여름, 우연히 마주친 순간을',
    '필름 한 장에 담아두었습니다.',
    '',
    '그날의 장면이 이어지고 이어져',
    '이제는 같은 이야기를 써 내려가려 합니다.',
    '',
    '저희 두 사람의 다음 장면에',
    '함께해 주시면 감사하겠습니다.',
  ],
  accounts: [
    { side: '신랑측', label: '신랑', bank: '카카오뱅크', number: '3333-12-3456789', holder: '한도윤' },
    { side: '신랑측', label: '아버지', bank: '국민은행', number: '234-56-7890123', holder: '한재국' },
    { side: '신랑측', label: '어머니', bank: '신한은행', number: '110-345-678901', holder: '임서연' },
    { side: '신부측', label: '신부', bank: '토스뱅크', number: '1000-9876-5432', holder: '오하린' },
    { side: '신부측', label: '아버지', bank: '우리은행', number: '1002-234-567890', holder: '오정민' },
    { side: '신부측', label: '어머니', bank: '하나은행', number: '567-890123-456', holder: '배수아' },
  ],
}
