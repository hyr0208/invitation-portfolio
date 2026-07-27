import type { Template } from '../types/template'
import classicStoryThumb from '../templates/classic-story/assets/photos/cover-bg.jpg'
import minimalMonoThumb from '../templates/minimal-mono/assets/photos/cover-bg.jpg'
import romanticBlossomThumb from '../templates/romantic-blossom/assets/photos/cover-bg.jpg'

export const templates: Template[] = [
  /*
  {
    id: 'minimal-01',
    title: '심플 화이트',
    category: 'minimal',
    description: '군더더기 없이 깔끔한 화이트 톤의 미니멀 청첩장입니다.',
    colorFrom: '#f5f5f4',
    colorTo: '#d6d3d1',
    isPopular: true,
    price: 0,
  },
  {
    id: 'minimal-02',
    title: '베이지 라인',
    category: 'minimal',
    description: '얇은 라인 아트와 베이지 컬러가 어우러진 담백한 디자인.',
    colorFrom: '#f5e9dd',
    colorTo: '#e0c9a6',
    isNew: true,
    price: 9900,
  },
  */
  {
    id: 'minimal-mono',
    title: '미니멀 모노톤',
    category: 'minimal',
    description:
      '그레이스케일 사진과 굵은 타이포그래피, 좌측 정렬 레이아웃으로 완성한 에디토리얼한 블랙앤화이트 청첩장. 실제 컴포넌트로 만들어진 라이브 데모입니다.',
    colorFrom: '#fafafa',
    colorTo: '#171717',
    thumbnail: minimalMonoThumb,
    thumbnailFilter: 'grayscale(1) contrast(1.15)',
    isNew: true,
    price: 0,
  },
  /*
  {
    id: 'classic-01',
    title: '엘레강스 골드',
    category: 'classic',
    description: '골드 프레임과 세리프 서체로 완성한 클래식한 무드.',
    colorFrom: '#f6e9c9',
    colorTo: '#caa54d',
    price: 15000,
  },
  {
    id: 'classic-02',
    title: '네이비 모던',
    category: 'classic',
    description: '깊은 네이비 컬러로 품격 있는 분위기를 연출합니다.',
    colorFrom: '#93a5c9',
    colorTo: '#2c3e6b',
    isPopular: true,
    price: 15000,
  },
  */
  {
    id: 'classic-story',
    title: '클래식 스토리',
    category: 'classic',
    description:
      '내추럴 크림톤과 세리프 타이포로 완성한 정갈한 스토리텔링형 청첩장. 실제 컴포넌트로 만들어진 라이브 데모입니다.',
    colorFrom: '#efe4d2',
    colorTo: '#bd7355',
    thumbnail: classicStoryThumb,
    isPopular: true,
    price: 0,
  },
  /*
  {
    id: 'romantic-01',
    title: '핑크 블라썸',
    category: 'romantic',
    description: '벚꽃을 닮은 파스텔 핑크 톤의 사랑스러운 청첩장.',
    colorFrom: '#fbcfe8',
    colorTo: '#f472b6',
    isNew: true,
    price: 9900,
  },
  {
    id: 'romantic-02',
    title: '라벤더 가든',
    category: 'romantic',
    description: '라벤더와 그린이 어우러진 은은한 가든 컨셉.',
    colorFrom: '#e9d5ff',
    colorTo: '#c4b5fd',
    price: 12000,
  },
  */
  {
    id: 'romantic-blossom',
    title: '핑크 블라썸 스토리',
    category: 'romantic',
    description:
      '벚꽃이 흩날리는 봄날의 무드를 담은 블러쉬 핑크 톤의 로맨틱한 청첩장. 실제 컴포넌트로 만들어진 라이브 데모입니다.',
    colorFrom: '#fdedf0',
    colorTo: '#e1728c',
    thumbnail: romanticBlossomThumb,
    isNew: true,
    price: 0,
  },
  /*
  {
    id: 'unique-01',
    title: '레트로 필름',
    category: 'unique',
    description: '필름 카메라 감성을 담은 개성 있는 레트로 디자인.',
    colorFrom: '#fde68a',
    colorTo: '#f59e0b',
    price: 15000,
  },
  {
    id: 'unique-02',
    title: '팝 아트',
    category: 'unique',
    description: '비비드한 컬러와 팝아트 그래픽으로 완성한 유니크 템플릿.',
    colorFrom: '#a7f3d0',
    colorTo: '#34d399',
    isNew: true,
    price: 18000,
  },
  {
    id: 'photo-01',
    title: '풀스크린 포토',
    category: 'photo',
    description: '사진 한 장을 꽉 채워 감동을 극대화하는 포토 중심 디자인.',
    colorFrom: '#bfdbfe',
    colorTo: '#60a5fa',
    isPopular: true,
    price: 12000,
  },
  {
    id: 'photo-02',
    title: '갤러리 콜라주',
    category: 'photo',
    description: '여러 장의 사진을 갤러리 형태로 보여주는 콜라주 템플릿.',
    colorFrom: '#fecaca',
    colorTo: '#f87171',
    price: 12000,
  },
  */
]
