import { Section } from './Section'
import story1 from '../assets/photos/story-1.jpg'
import story2 from '../assets/photos/story-2.jpg'
import story3 from '../assets/photos/story-3.jpg'
import story4 from '../assets/photos/story-4.jpg'
import story5 from '../assets/photos/story-5.jpg'

const PHOTOS = [
  { src: story1, aspect: 'aspect-4/5', caption: '빛이 스며들던 순간' },
  { src: story2, aspect: 'aspect-3/4', caption: '조용히 맞춘 스텝' },
  { src: story3, aspect: 'aspect-4/5', caption: '들꽃 사이에 눕다' },
  { src: story4, aspect: 'aspect-square', caption: '떠나기 전, 마지막 손질' },
  { src: story5, aspect: 'aspect-3/4', caption: '말없이 맞잡은 손' },
]

export function PhotoStory() {
  return (
    <Section eyebrow="Story" title="장면들">
      <div className="space-y-16">
        {PHOTOS.map((photo, i) => (
          <figure key={photo.src}>
            <div className={`w-full overflow-hidden ${photo.aspect}`}>
              <img
                src={photo.src}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-[11px] tracking-[0.2em] text-gallery-ink-faint uppercase">
              Photo {String(i + 1).padStart(2, '0')} — {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
