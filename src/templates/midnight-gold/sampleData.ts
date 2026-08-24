import type { InvitationData } from './types'
import gallery1 from './assets/photos/gallery-1.jpg'
import gallery2 from './assets/photos/gallery-2.jpg'
import gallery3 from './assets/photos/gallery-3.jpg'
import gallery4 from './assets/photos/gallery-4.jpg'
import gallery5 from './assets/photos/gallery-5.jpg'
import gallery6 from './assets/photos/gallery-6.jpg'

export const sampleInvitation: InvitationData = {
  groom: {
    name: '이도현',
    shortName: '도현',
    role: '신랑',
    parents: {
      father: '이상원',
      mother: '한소영',
      fatherPhone: '010-2323-4545',
      motherPhone: '010-3434-5656',
    },
    phone: '010-1212-3434',
  },
  bride: {
    name: '윤서아',
    shortName: '서아',
    role: '신부',
    parents: {
      father: '윤재국',
      mother: '임혜원',
      fatherPhone: '010-4545-6767',
      motherPhone: '010-5656-7878',
    },
    phone: '010-6767-8989',
  },
  weddingDateISO: '2026-11-28T18:00:00+09:00',
  weddingDateLabel: '2026년 11월 28일 토요일',
  weddingTimeLabel: '저녁 6시',
  venueName: '더 그랜드 오키드',
  venueHall: '3층 그랜드볼룸',
  venueAddress: '서울특별시 중구 소공로 63',
  mapQuery: '더 그랜드 오키드',
  greeting: [
    '어둠이 내리고 별이 뜨는 시간,',
    '두 사람이 서로의 빛이 되어',
    '한 걸음씩 함께 걸어가려 합니다.',
    '',
    '귀한 걸음으로 자리를 빛내주신다면',
    '평생 잊지 못할 밤으로 간직하겠습니다.',
  ],
  accounts: [
    { side: '신랑측', label: '신랑', bank: '국민은행', number: '123-45-6789012', holder: '이도현' },
    { side: '신랑측', label: '아버지', bank: '신한은행', number: '110-234-567890', holder: '이상원' },
    { side: '신랑측', label: '어머니', bank: '농협은행', number: '352-2222-3333-44', holder: '한소영' },
    { side: '신부측', label: '신부', bank: '카카오뱅크', number: '3333-56-7890123', holder: '윤서아' },
    { side: '신부측', label: '아버지', bank: '우리은행', number: '1002-456-789012', holder: '윤재국' },
    { side: '신부측', label: '어머니', bank: '하나은행', number: '789-012345-678', holder: '임혜원' },
  ],
  photos: [
    { src: gallery1, caption: 'under the same sky' },
    { src: gallery2, caption: 'a golden hour' },
    { src: gallery3, caption: 'quietly, forever' },
    { src: gallery4, caption: 'the night we knew' },
    { src: gallery5, caption: 'still shining' },
    { src: gallery6, caption: 'our midnight' },
  ],
}
