import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Gift } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProductAccessoriesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const productCard1Ref = useRef<HTMLDivElement>(null);
  const headlineCardRef = useRef<HTMLDivElement>(null);
  const textCardRef = useRef<HTMLDivElement>(null);
  const productCard2Ref = useRef<HTMLDivElement>(null);
  const stickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const productCard1 = productCard1Ref.current;
    const headlineCard = headlineCardRef.current;
    const textCard = textCardRef.current;
    const productCard2 = productCard2Ref.current;
    const sticker = stickerRef.current;

    if (!section || !productCard1 || !headlineCard || !textCard || !productCard2 || !sticker) return;

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

      // Phase 1 (0-30%): Entrance with different directions
      scrollTl
        .fromTo(productCard1,
          { x: '-50vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0
        )
        .fromTo(headlineCard,
          { x: '50vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0.05
        )
        .fromTo(textCard,
          { y: '40vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.1
        )
        .fromTo(productCard2,
          { y: '40vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.15
        )
        .fromTo(sticker,
          { scale: 0.5, rotation: 15, opacity: 0 },
          { scale: 1, rotation: 0, opacity: 1, ease: 'back.out(1.7)' },
          0.2
        );

      // Phase 2 (30-70%): Settle

      // Phase 3 (70-100%): Exit
      scrollTl
        .to(productCard1,
          { x: '-8vw', opacity: 0.25, ease: 'power2.in' },
          0.7
        )
        .to(headlineCard,
          { x: '8vw', opacity: 0.25, ease: 'power2.in' },
          0.72
        )
        .to(textCard,
          { y: '-10vh', opacity: 0.25, ease: 'power2.in' },
          0.74
        )
        .to(productCard2,
          { y: '-10vh', opacity: 0.25, ease: 'power2.in' },
          0.76
        )
        .to(sticker,
          { rotation: -20, opacity: 0, ease: 'power2.in' },
          0.78
        );

    }, section);

    return () => ctx.revert();
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/62881027056659?text=Halo%20KoLAnPE%2C%20saya%20mau%20lihat%20aksesorisnya', '_blank');
  };

  return (
    <section
      ref={sectionRef}
      id="product-accessories"
      className="section-pinned flex items-center justify-center z-40"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/accessories_lifestyle_bg.jpg"
          alt="Accessories lifestyle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-kolanpe-black/80 via-kolanpe-black/60 to-kolanpe-black/90" />
      </div>

      {/* Content Grid */}
      <div className="relative w-full h-full px-6 lg:px-12 py-20">
        {/* Top Left Product Card */}
        <div
          ref={productCard1Ref}
          className="absolute left-[6vw] top-[10vh] w-[40vw] max-w-[420px] h-[34vh] product-card"
        >
          <img
            src="/images/accessories_product_1.jpg"
            alt="Headset product"
            className="w-full h-full object-cover product-image"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-kolanpe-black to-transparent p-4">
            <span className="text-kolanpe-lime font-display font-bold">Headset Gaming</span>
            <span className="block text-kolanpe-white text-sm">Rp 245.000</span>
          </div>
        </div>

        {/* Top Right Headline Card */}
        <div
          ref={headlineCardRef}
          className="absolute right-[6vw] top-[10vh] w-[44vw] max-w-[480px] h-[34vh] bg-kolanpe-charcoal/95 p-6 lg:p-8 border-r-4 border-kolanpe-cyan flex flex-col justify-center"
        >
          <span className="text-micro mb-2">Kategori 02</span>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-kolanpe-white uppercase leading-tight">
            Aksesoris &
            <span className="block text-kolanpe-cyan">Perlengkapan Sekolah</span>
          </h2>
          <p className="mt-4 text-kolanpe-gray text-sm max-w-xs">
            Headset, lampu LED, holder motor, planner, pulpen estetik.
          </p>
        </div>

        {/* Bottom Left Text Card */}
        <div
          ref={textCardRef}
          className="absolute left-[6vw] bottom-[10vh] w-[44vw] max-w-[480px] h-[34vh] bg-kolanpe-charcoal/95 p-6 lg:p-8 flex flex-col justify-center"
        >
          <p className="text-kolanpe-gray text-sm mb-4">
            Stok lokal. Pengiriman ke seluruh Indonesia.
          </p>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-400 text-xs font-mono">Ready Stock</span>
          </div>
          <button
            onClick={openWhatsApp}
            className="btn-neon w-fit flex items-center gap-2 text-sm"
            style={{ borderColor: '#2EC3E5', color: '#2EC3E5' }}
          >
            Cek Aksesoris
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Bottom Right Product Card */}
        <div
          ref={productCard2Ref}
          className="absolute right-[6vw] bottom-[10vh] w-[40vw] max-w-[420px] h-[34vh] product-card"
        >
          <img
            src="/images/accessories_product_2.jpg"
            alt="LED lamp product"
            className="w-full h-full object-cover product-image"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-kolanpe-black to-transparent p-4">
            <span className="text-kolanpe-cyan font-display font-bold">Lampu LED Meja</span>
            <span className="block text-kolanpe-white text-sm">Rp 125.000</span>
          </div>
        </div>

        {/* Gift Sticker */}
        <div
          ref={stickerRef}
          className="absolute left-[4vw] top-[8vh] bg-kolanpe-cyan text-kolanpe-black px-4 py-2 rounded-full font-display font-bold text-xs flex items-center gap-2"
        >
          <Gift size={14} />
          Cocok buat hadiah
        </div>
      </div>
    </section>
  );
};

export default ProductAccessoriesSection;
