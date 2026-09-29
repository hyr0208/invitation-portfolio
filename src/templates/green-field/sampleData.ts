import type { InvitationData } from './types'

export const sampleInvitation: InvitationData = {
  groom: {
    name: '한도윤',
    role: '신랑',
    phone: '010-3141-5926',
  },
  bride: {
    name: '서하린',
    role: '신부',
    phone: '010-2718-2818',
  },
  weddingDateISO: '2026-11-14T13:00:00+09:00',
  weddingDateLabel: '2026년 11월 14일 토요일',
  weddingTimeLabel: '오후 1시',
  venueName: '포레스트 가든',
  venueHall: '야외 가든홀',
  venueAddress: '경기도 양평군 서종면 북한강로 211',
  mapQuery: '포레스트 가든 양평',
  greeting: [
    '바람이 부드럽게 불던 초록의 계절,',
    '저희 두 사람이 같은 길을 걷기로 했습니다.',
    '',
    '넓은 들판처럼 서로를 품으며',
    '오래도록 함께 걸어가겠습니다.',
    '',
    '귀한 걸음으로 축복해 주세요.',
  ],
  greetingQuote: 'Together is a wonderful place to be.',
  accounts: [
    { side: '신랑측', label: '신랑', bank: '국민은행', number: '274-21-0493-118', holder: '한도윤' },
    { side: '신랑측', label: '혼주', bank: '농협은행', number: '352-0917-4421-83', holder: '한정민' },
    { side: '신부측', label: '신부', bank: '토스뱅크', number: '1000-3824-7710', holder: '서하린' },
    { side: '신부측', label: '혼주', bank: '하나은행', number: '218-910447-20307', holder: '서영석' },
  ],
  details: [
    {
      title: '야외 예식 안내',
      body: '예식은 잔디 정원에서 진행됩니다.\n굽이 낮은 신발을 추천드리며, 쌀쌀할 수 있으니 겉옷을 챙겨 주세요.',
    },
    {
      title: '셔틀버스',
      body: '양수역 1번 출구 앞에서 예식 1시간 전부터\n20분 간격으로 셔틀버스가 운행됩니다.',
    },
    {
      title: '피로연',
      body: '예식 후 가든 테라스에서 뷔페가 준비되어 있습니다.\n여유롭게 머물다 가세요.',
    },
  ],
}
