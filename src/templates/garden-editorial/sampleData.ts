import type { InvitationData } from './types'
import gallery1 from './assets/photos/gallery-1.jpg'
import gallery2 from './assets/photos/gallery-2.jpg'
import gallery3 from './assets/photos/gallery-3.jpg'
import gallery4 from './assets/photos/gallery-4.jpg'
import gallery5 from './assets/photos/gallery-5.jpg'
import gallery6 from './assets/photos/gallery-6.jpg'

export const sampleGardenInvitation: InvitationData = {
  groom: {
    name: '박준서',
    shortName: '준서',
    role: '신랑',
    parents: {
      father: '박형규',
      mother: '이수정',
      fatherPhone: '010-2323-4545',
      motherPhone: '010-3434-5656',
    },
    phone: '010-1212-3434',
  },
  bride: {
    name: '오하은',
    shortName: '하은',
    role: '신부',
    parents: {
      father: '오세훈',
      mother: '강나연',
      fatherPhone: '010-4545-6767',
      motherPhone: '010-5656-7878',
    },
    phone: '010-6767-8989',
  },
  weddingDateISO: '2026-10-17T12:00:00+09:00',
  weddingDateLabel: '2026년 10월 17일 토요일',
  weddingTimeLabel: '정오 12시',
  venueName: '더 채플 앳 청담',
  venueHall: '2층 가든홀',
  venueAddress: '서울특별시 강남구 도산대로 45',
  mapQuery: '더 채플 앳 청담',
  greeting: [
    '단정하고 조용한 하루,',
    '두 사람이 하나의 이름으로',
    '함께 걸어가려 합니다.',
    '',
    '오래 가꾼 정원처럼',
    '천천히, 오래도록 함께하겠습니다.',
  ],
  accounts: [
    { side: '신랑측', label: '신랑', bank: '국민은행', number: '123-45-6789012', holder: '박준서' },
    { side: '신랑측', label: '아버지', bank: '신한은행', number: '110-234-567890', holder: '박형규' },
    { side: '신랑측', label: '어머니', bank: '농협은행', number: '352-2222-3333-44', holder: '이수정' },
    { side: '신부측', label: '신부', bank: '카카오뱅크', number: '3333-56-7890123', holder: '오하은' },
    { side: '신부측', label: '아버지', bank: '우리은행', number: '1002-456-789012', holder: '오세훈' },
    { side: '신부측', label: '어머니', bank: '하나은행', number: '789-012345-678', holder: '강나연' },
  ],
  photos: [
    { src: gallery1, caption: 'a quiet morning' },
    { src: gallery2, caption: 'where we belong' },
    { src: gallery3, caption: 'our favorite days' },
    { src: gallery4, caption: 'still, together' },
    { src: gallery5, caption: 'the same season' },
    { src: gallery6, caption: 'ever since' },
  ],
}
