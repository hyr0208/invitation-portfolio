import type { InvitationData } from './types'

export const sampleInvitation: InvitationData = {
  groom: {
    name: '노승우',
    role: '신랑',
    phone: '010-2323-4545',
  },
  bride: {
    name: '주영은',
    role: '신부',
    phone: '010-6767-8989',
  },
  weddingDateISO: '2026-10-31T12:00:00+09:00',
  weddingDateLabel: '2026년 10월 31일 토요일',
  weddingTimeLabel: '오후 12시',
  venueName: '더 그랜드홀',
  venueHall: '3층 그랜드홀',
  venueAddress: '서울특별시 강남구 논현로 428',
  mapQuery: '더 그랜드홀',
  greeting: [
    '서로 다른 두 페이지가',
    '한 권의 일기가 되려 합니다.',
    '',
    '앞으로 채워갈 이야기들을',
    '함께 지켜봐 주세요.',
  ],
  greetingQuote: '세상의 냉기를 막아주는, 서로의 안식처가 되어주기로 했습니다.',
  accounts: [
    { side: '신랑측', label: '신랑', bank: '국민은행', number: '123-456-7890123', holder: '노승우' },
    { side: '신랑측', label: '혼주', bank: '신한은행', number: '110-234-567890', holder: '노현우' },
    { side: '신부측', label: '신부', bank: '카카오뱅크', number: '3333-12-3456789', holder: '주영은' },
    { side: '신부측', label: '혼주', bank: '우리은행', number: '1002-123-456789', holder: '주지훈' },
  ],
  details: [
    {
      title: '대관 안내',
      body: '단독 대관으로 오후 12시부터 3시까지 여유롭게 예식을 즐기실 수 있습니다.\n실내와 야외에 좌석이 마련되어 있으니 예식이 끝난 뒤에도 편히 쉬어가세요.',
    },
    {
      title: '오시는 길',
      body: '예식장 특성상 주차 공간이 협소하니 대중교통으로 방문해 주세요.\n자차 이용 시 인근 공영 주차장을 이용해 주시면 감사하겠습니다.',
    },
    {
      title: '기타 안내',
      body: '예식장 촬영은 자유롭게 가능하니 소중한 순간을 함께 담아 주세요.\n필요하신 안내사항은 언제든 편히 물어봐 주세요.',
    },
  ],
}
