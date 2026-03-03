import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, MessageCircle } from 'lucide-react'

// IMPORT GAMBAR (INI YANG PENTING)
import p1 from '@/assets/community_portrait_1.jpg'
import p2 from '@/assets/community_portrait_2.jpg'
import p3 from '@/assets/community_portrait_3.jpg'
import p4 from '@/assets/community_portrait_4.jpg'

gsap.registerPlugin(ScrollTrigger)

const communityData = [
  { name: 'Gym Bareng', desc: 'Untuk yang insecure', wa: '62881027056659' },
  { name: 'Study Partner', desc: 'Belajar bareng + English', wa: '62881027056659' },
  { name: 'Motor & Riding', desc: 'Pretel, modif, touring', wa: '62881027056659' },
  { name: 'Muncak & Nongkrong', desc: 'Healing + networking', wa: '62881027056659' },
  { name: 'Game & Konten', desc: 'Push rank + bikin konten', wa: '62881027056659' },
  { name: 'Tour Lombok', desc: 'Jelajahi Lombok bareng', wa: '62881027056659' },
]

// SEKARANG AMAN
const portraits = [p1, p2, p3, p4, p1, p2, p3, p4]

const CommunitySection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const topCirclesRef = useRef<HTMLDivElement>(null)
  const bottomCirclesRef = useRef<HTMLDivElement>(null)
  const centerCardRef = useRef<HTMLDivElement>(null)
  const stickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const topCircles = topCirclesRef.current
    const bottomCircles = bottomCirclesRef.current
    const centerCard = centerCardRef.current
    const sticker = stickerRef.current

    if (!section || !topCircles || !bottomCircles || !centerCard || !sticker) return

    const topCircleElements = topCircles.querySelectorAll('.portrait-circle')
    const bottomCircleElements = bottomCircles.querySelectorAll('.portrait-circle')

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      })

      scrollTl
        .fromTo(
          topCircleElements,
          { y: '-30vh', opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.02, ease: 'power2.out' },
          0
        )
        .fromTo(
          bottomCircleElements,
          { y: '30vh', opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.02, ease: 'power2.out' },
          0.05
        )
        .fromTo(
          centerCard,
          { scale: 0.92, opacity: 0 },
          { scale: 1, opacity: 1, ease: 'power2.out' },
          0.1
        )
        .fromTo(
          sticker,
          { scale: 0.6, opacity: 0 },
          { scale: 1, opacity: 1, ease: 'back.out(1.7)' },
          0.2
        )
        .to(centerCard, { y: '-12vh', opacity: 0.25, ease: 'power2.in' }, 0.7)
        .to(topCircleElements, { x: '10vw', opacity: 0, stagger: 0.01 }, 0.72)
        .to(bottomCircleElements, { x: '-10vw', opacity: 0, stagger: 0.01 }, 0.74)
        .to(sticker, { rotation: -15, opacity: 0 }, 0.78)
    }, section)

    return () => ctx.revert()
  }, [])

  const openWhatsApp = (waNumber: string) => {
    window.open(
      `https://wa.me/${waNumber}?text=Halo%20KoLAnPE%2C%20saya%20mau%20gabung%20komunitas`,
      '_blank'
    )
  }

  return (
    <section
      ref={sectionRef}
      id="community"
      className="section-pinned flex items-center justify-center z-60"
      style={{ backgroundColor: '#0B0B0C' }}
    >
      {/* TOP */}
      <div
        ref={topCirclesRef}
        className="absolute top-[6vh] left-[4vw] right-[4vw] h-[18vh] flex items-center justify-center gap-4 overflow-hidden"
      >
        {portraits.slice(0, 6).map((portrait, index) => (
          <div
            key={index}
            className="portrait-circle w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-kolanpe-charcoal flex-shrink-0"
            style={{ marginLeft: index > 0 ? '-10px' : '0', zIndex: 6 - index }}
          >
            <img src={portrait} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* CENTER CARD */}
      <div
        ref={centerCardRef}
        className="relative w-[min(85vw,920px)] bg-kolanpe-charcoal/95 p-8 lg:p-12 border-t-4 border-r-4 border-kolanpe-lime"
      >
        <h2 className="heading-section text-kolanpe-white mb-6 text-center">
          Bukan Cuma Produk.
          <span className="block text-kolanpe-lime">Ini Gerakan.</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {communityData.map((item, index) => (
            <button
              key={index}
              onClick={() => openWhatsApp(item.wa)}
              className="group p-4 bg-kolanpe-black rounded-lg hover:border-kolanpe-lime border"
            >
              <h4 className="font-bold text-white text-sm uppercase">
                {item.name}
              </h4>
              <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
            </button>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => openWhatsApp('62881027056659')}
            className="btn-neon-filled flex items-center gap-2"
          >
            Gabung Grup
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* BOTTOM */}
      <div
        ref={bottomCirclesRef}
        className="absolute bottom-[6vh] left-[4vw] right-[4vw] h-[18vh] flex items-center justify-center gap-4 overflow-hidden"
      >
        {portraits.slice(2, 8).map((portrait, index) => (
          <div
            key={index}
            className="portrait-circle w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-kolanpe-charcoal flex-shrink-0"
            style={{ marginLeft: index > 0 ? '-10px' : '0', zIndex: 6 - index }}
          >
            <img src={portrait} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* STICKER */}
      <div
        ref={stickerRef}
        className="absolute right-[8vw] top-[30vh] bg-kolanpe-lime text-black px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 rotate-6"
      >
        <MessageCircle size={14} />
        JOIN
      </div>
    </section>
  )
}

export default CommunitySection
