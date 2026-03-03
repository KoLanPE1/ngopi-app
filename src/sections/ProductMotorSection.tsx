import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Tag } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProductMotorSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineCardRef = useRef<HTMLDivElement>(null);
  const productCard1Ref = useRef<HTMLDivElement>(null);
  const productCard2Ref = useRef<HTMLDivElement>(null);
  const textCardRef = useRef<HTMLDivElement>(null);
  const stickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const headlineCard = headlineCardRef.current;
    const productCard1 = productCard1Ref.current;
    const productCard2 = productCard2Ref.current;
    const textCard = textCardRef.current;
    const sticker = stickerRef.current;

    if (!section || !headlineCard || !productCard1 || !productCard2 || !textCard || !sticker) return;

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
        .fromTo(headlineCard,
          { x: '-50vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0
        )
        .fromTo(productCard1,
          { x: '50vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0.05
        )
        .fromTo(productCard2,
          { y: '40vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.1
        )
        .fromTo(textCard,
          { y: '40vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.15
        )
        .fromTo(sticker,
          { scale: 0.5, opacity: 0 },
          { scale: 1, opacity: 1, ease: 'back.out(1.7)' },
          0.2
        );

      // Phase 2 (30-70%): Settle

      // Phase 3 (70-100%): Exit
      scrollTl
        .to(headlineCard,
          { y: '-10vh', scale: 0.97, opacity: 0.25, ease: 'power2.in' },
          0.7
        )
        .to(productCard1,
          { y: '-10vh', scale: 0.97, opacity: 0.25, ease: 'power2.in' },
          0.72
        )
        .to(productCard2,
          { y: '-10vh', scale: 0.97, opacity: 0.25, ease: 'power2.in' },
          0.74
        )
        .to(textCard,
          { y: '-10vh', scale: 0.97, opacity: 0.25, ease: 'power2.in' },
          0.76
        )
        .to(sticker,
          { y: '-5vh', opacity: 0, ease: 'power2.in' },
          0.78
        );

    }, section);

    return () => ctx.revert();
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/62881027056659?text=Halo%20KoLAnPE%2C%20saya%20mau%20lihat%20part%20motornya', '_blank');
  };

  return (
    <section
      ref={sectionRef}
      id="product-motor"
      className="section-pinned flex items-center justify-center z-50"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/motor_lifestyle_bg.jpg"
          alt="Motor lifestyle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-kolanpe-black/80 via-kolanpe-black/60 to-kolanpe-black/90" />
      </div>

      {/* Content Grid */}
      <div className="relative w-full h-full px-6 lg:px-12 py-20">
        {/* Top Left Headline Card */}
        <div
          ref={headlineCardRef}
          className="absolute left-[6vw] top-[10vh] w-[46vw] max-w-[500px] h-[34vh] bg-kolanpe-charcoal/95 p-6 lg:p-8 border-l-4 border-kolanpe-orange flex flex-col justify-center"
        >
          <span className="text-micro mb-2">Kategori 03</span>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-kolanpe-white uppercase leading-tight">
            Aksesoris Motor
            <span className="block text-kolanpe-orange">& Gaya</span>
          </h2>
          <p className="mt-4 text-kolanpe-gray text-sm max-w-xs">
            Spion custom, striping, stiker Lombok Pride, lampu LED.
          </p>
        </div>

        {/* Top Right Product Card */}
        <div
          ref={productCard1Ref}
          className="absolute right-[6vw] top-[10vh] w-[38vw] max-w-[400px] h-[34vh] product-card"
        >
          <img
            src="/images/motor_product_1.jpg"
            alt="Motor mirror product"
            className="w-full h-full object-cover product-image"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-kolanpe-black to-transparent p-4">
            <span className="text-kolanpe-orange font-display font-bold">Spion Custom</span>
            <span className="block text-kolanpe-white text-sm">Rp 155.000</span>
          </div>
        </div>

        {/* Bottom Left Product Card */}
        <div
          ref={productCard2Ref}
          className="absolute left-[6vw] bottom-[10vh] w-[38vw] max-w-[400px] h-[34vh] product-card"
        >
          <img
            src="/images/motor_product_2.jpg"
            alt="Motor LED product"
            className="w-full h-full object-cover product-image"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-kolanpe-black to-transparent p-4">
            <span className="text-kolanpe-orange font-display font-bold">Lampu LED Motor</span>
            <span className="block text-kolanpe-white text-sm">Rp 195.000</span>
          </div>
        </div>

        {/* Bottom Right Text Card */}
        <div
          ref={textCardRef}
          className="absolute right-[6vw] bottom-[10vh] w-[46vw] max-w-[500px] h-[34vh] bg-kolanpe-charcoal/95 p-6 lg:p-8 flex flex-col justify-center"
        >
          <p className="text-kolanpe-gray text-sm mb-4">
            Pretel bareng, modif bareng, touring bareng.
          </p>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-kolanpe-lime flex items-center justify-center text-kolanpe-black text-xs font-bold">
                R
              </div>
              <div className="w-8 h-8 rounded-full bg-kolanpe-cyan flex items-center justify-center text-kolanpe-black text-xs font-bold">
                M
              </div>
              <div className="w-8 h-8 rounded-full bg-kolanpe-orange flex items-center justify-center text-kolanpe-black text-xs font-bold">
                V
              </div>
            </div>
            <span className="text-kolanpe-gray text-xs">+120 riders aktif</span>
          </div>
          <button
            onClick={openWhatsApp}
            className="btn-neon w-fit flex items-center gap-2 text-sm"
            style={{ borderColor: '#FF6A00', color: '#FF6A00' }}
          >
            Lihat Part Motor
            <ArrowRight size={14} />
          </button>
        </div>

        {/* DISKON Sticker */}
        <div
          ref={stickerRef}
          className="absolute right-[4vw] top-[8vh] bg-kolanpe-orange text-kolanpe-black px-4 py-2 rounded-lg font-display font-bold text-sm flex items-center gap-2 rotate-3"
        >
          <Tag size={14} />
          DISKON 15%
        </div>
      </div>
    </section>
  );
};

export default ProductMotorSection;
