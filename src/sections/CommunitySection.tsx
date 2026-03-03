import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const communityData = [
  { name: 'Gym Bareng', desc: 'Untuk yang insecure', wa: '62881027056659' },
  { name: 'Study Partner', desc: 'Belajar bareng + English', wa: '62881027056659' },
  { name: 'Motor & Riding', desc: 'Pretel, modif, touring', wa: '62881027056659' },
  { name: 'Muncak & Nongkrong', desc: 'Healing + networking', wa: '62881027056659' },
  { name: 'Game & Konten', desc: 'Push rank + bikin konten', wa: '62881027056659' },
  { name: 'Tour Lombok', desc: 'Jelajahi Lombok bareng', wa: '62881027056659' },
];

const portraits = [
  '/images/community_portrait_1.jpg',
  '/images/community_portrait_2.jpg',
  '/images/community_portrait_3.jpg',
  '/images/community_portrait_4.jpg',
  '/images/community_portrait_1.jpg',
  '/images/community_portrait_2.jpg',
  '/images/community_portrait_3.jpg',
  '/images/community_portrait_4.jpg',
];

const CommunitySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const topCirclesRef = useRef<HTMLDivElement>(null);
  const bottomCirclesRef = useRef<HTMLDivElement>(null);
  const centerCardRef = useRef<HTMLDivElement>(null);
  const stickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const topCircles = topCirclesRef.current;
    const bottomCircles = bottomCirclesRef.current;
    const centerCard = centerCardRef.current;
    const sticker = stickerRef.current;

    if (!section || !topCircles || !bottomCircles || !centerCard || !sticker) return;

    const topCircleElements = topCircles.querySelectorAll('.portrait-circle');
    const bottomCircleElements = bottomCircles.querySelectorAll('.portrait-circle');

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // Phase 1 (0-30%): Entrance
      scrollTl
        .fromTo(topCircleElements,
          { y: '-30vh', opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.02, ease: 'power2.out' },
          0
        )
        .fromTo(bottomCircleElements,
          { y: '30vh', opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.02, ease: 'power2.out' },
          0.05
        )
        .fromTo(centerCard,
          { scale: 0.92, opacity: 0 },
          { scale: 1, opacity: 1, ease: 'power2.out' },
          0.1
        )
        .fromTo(sticker,
          { scale: 0.6, opacity: 0 },
          { scale: 1, opacity: 1, ease: 'back.out(1.7)' },
          0.2
        );

      // Phase 2 (30-70%): Settle

      // Phase 3 (70-100%): Exit
      scrollTl
        .to(centerCard,
          { y: '-12vh', opacity: 0.25, ease: 'power2.in' },
          0.7
        )
        .to(topCircleElements,
          { x: '10vw', opacity: 0, stagger: 0.01, ease: 'power2.in' },
          0.72
        )
        .to(bottomCircleElements,
          { x: '-10vw', opacity: 0, stagger: 0.01, ease: 'power2.in' },
          0.74
        )
        .to(sticker,
          { rotation: -15, opacity: 0, ease: 'power2.in' },
          0.78
        );

    }, section);

    return () => ctx.revert();
  }, []);

  const openWhatsApp = (waNumber: string) => {
    window.open(`https://wa.me/${waNumber}?text=Halo%20KoLAnPE%2C%20saya%20mau%20gabung%20komunitas`, '_blank');
  };

  return (
    <section
      ref={sectionRef}
      id="community"
      className="section-pinned flex items-center justify-center z-60"
      style={{ backgroundColor: '#0B0B0C' }}
    >
      {/* Top Circles Strip */}
      <div
        ref={topCirclesRef}
        className="absolute top-[6vh] left-[4vw] right-[4vw] h-[18vh] flex items-center justify-center gap-4 overflow-hidden"
      >
        {portraits.slice(0, 6).map((portrait, index) => (
          <div
            key={index}
            className="portrait-circle w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-kolanpe-charcoal flex-shrink-0"
            style={{
              marginLeft: index > 0 ? '-10px' : '0',
              zIndex: 6 - index,
            }}
          >
            <img
              src={portrait}
              alt={`Community member ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Center Message Card */}
      <div
        ref={centerCardRef}
        className="relative w-[min(85vw,920px)] bg-kolanpe-charcoal/95 p-8 lg:p-12 border-t-4 border-r-4 border-kolanpe-lime"
      >
        <h2 className="heading-section text-kolanpe-white mb-6 text-center">
          Bukan Cuma Produk.
          <span className="block text-kolanpe-lime">Ini Gerakan.</span>
        </h2>
        
        <p className="text-kolanpe-gray text-center max-w-2xl mx-auto mb-8">
          Gym bareng. Study bareng. Riding bareng. Muncak bareng. Push rank bareng.
        </p>

        {/* Community Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {communityData.map((item, index) => (
            <button
              key={index}
              onClick={() => openWhatsApp(item.wa)}
              className="group p-4 bg-kolanpe-black rounded-lg border border-transparent hover:border-kolanpe-lime transition-all text-left"
            >
              <h4 className="font-display font-bold text-kolanpe-white text-sm uppercase group-hover:text-kolanpe-lime transition-colors">
                {item.name}
              </h4>
              <p className="text-kolanpe-gray text-xs mt-1">{item.desc}</p>
            </button>
          ))}
        </div>

        {/* CTA */}
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

      {/* Bottom Circles Strip */}
      <div
        ref={bottomCirclesRef}
        className="absolute bottom-[6vh] left-[4vw] right-[4vw] h-[18vh] flex items-center justify-center gap-4 overflow-hidden"
      >
        {portraits.slice(2, 8).map((portrait, index) => (
          <div
            key={index}
            className="portrait-circle w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-kolanpe-charcoal flex-shrink-0"
            style={{
              marginLeft: index > 0 ? '-10px' : '0',
              zIndex: 6 - index,
            }}
          >
            <img
              src={portrait}
              alt={`Community member ${index + 7}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* JOIN Sticker */}
      <div
        ref={stickerRef}
        className="absolute right-[8vw] top-[30vh] bg-kolanpe-lime text-kolanpe-black px-4 py-2 rounded-full font-display font-bold text-sm flex items-center gap-2 rotate-6"
      >
        <MessageCircle size={14} />
        JOIN
      </div>
    </section>
  );
};

export default CommunitySection;
