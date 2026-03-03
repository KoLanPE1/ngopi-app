import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const posterRef = useRef<HTMLDivElement>(null);
  const leftPhotoRef = useRef<HTMLDivElement>(null);
  const rightHeadlineRef = useRef<HTMLDivElement>(null);
  const bottomPhotoRef = useRef<HTMLDivElement>(null);
  const stickersRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const poster = posterRef.current;
    const leftPhoto = leftPhotoRef.current;
    const rightHeadline = rightHeadlineRef.current;
    const bottomPhoto = bottomPhotoRef.current;
    const stickers = stickersRef.current;
    const cta = ctaRef.current;

    if (!section || !poster || !leftPhoto || !rightHeadline || !bottomPhoto || !stickers || !cta) return;

    const ctx = gsap.context(() => {
      // Initial state
      gsap.set([poster, leftPhoto, rightHeadline, bottomPhoto, stickers, cta], { opacity: 0 });
      gsap.set(poster, { y: 40, scale: 0.98 });
      gsap.set(leftPhoto, { x: -60 });
      gsap.set(rightHeadline, { x: 60 });
      gsap.set(bottomPhoto, { y: 40 });
      gsap.set(stickers, { scale: 0.6, rotation: -10 });
      gsap.set(cta, { y: 12 });

      // Entrance animation timeline
      const entranceTl = gsap.timeline({ delay: 0.3 });

      entranceTl
        .to(poster, { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power2.out' })
        .to(leftPhoto, { opacity: 1, x: 0, duration: 0.7, ease: 'power2.out' }, '-=0.5')
        .to(rightHeadline, { opacity: 1, x: 0, duration: 0.7, ease: 'power2.out' }, '-=0.6')
        .to(bottomPhoto, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.5')
        .to(stickers, { opacity: 1, scale: 1, rotation: 0, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.3')
        .to(cta, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2');

      // Scroll-driven animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset all elements when scrolling back to top
            gsap.to([poster, leftPhoto, rightHeadline, bottomPhoto, stickers, cta], {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.3,
            });
          },
        },
      });

      // Phase 1 (0-70%): Hold - elements stay visible
      // Phase 2 (70-100%): Exit
      scrollTl
        .fromTo(poster, 
          { y: 0, scale: 1, opacity: 1 },
          { y: '-18vh', scale: 0.96, opacity: 0.25, ease: 'power2.in' },
          0.7
        )
        .fromTo(stickers,
          { x: 0, opacity: 1 },
          { x: '10vw', opacity: 0, ease: 'power2.in' },
          0.75
        )
        .fromTo(cta,
          { opacity: 1 },
          { opacity: 0, ease: 'power2.in' },
          0.8
        );

    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById('product-fashion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="section-pinned flex items-center justify-center z-10"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero_scooter_bg.jpg"
          alt="Street background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-kolanpe-black/70 via-kolanpe-black/50 to-kolanpe-black/90" />
      </div>

      {/* Poster Card */}
      <div
        ref={posterRef}
        className="relative w-[min(90vw,1100px)] h-[min(75vh,640px)] bg-kolanpe-charcoal/95 border-lime-accent rounded-sm overflow-hidden"
        style={{ boxShadow: '0 25px 80px rgba(0,0,0,0.6)' }}
      >
        {/* Left Photo Block */}
        <div
          ref={leftPhotoRef}
          className="absolute left-[4%] top-[8%] w-[44%] h-[84%] rounded-xl overflow-hidden"
        >
          <img
            src="/images/hero_collage_left.jpg"
            alt="Youth portrait"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Headline Block */}
        <div
          ref={rightHeadlineRef}
          className="absolute right-[4%] top-[8%] w-[44%] h-[45%] flex flex-col justify-center"
        >
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-kolanpe-white uppercase leading-none tracking-tight">
            KoLAnPE
            <span className="block text-kolanpe-lime mt-1">Ngerumpi</span>
          </h1>
          <div className="mt-4 w-24 h-1 bg-kolanpe-lime" />
          <p className="mt-4 text-kolanpe-gray text-sm md:text-base font-body">
            Tempat semua anak Lombok naik level.
          </p>
        </div>

        {/* Bottom Right Photo Block */}
        <div
          ref={bottomPhotoRef}
          className="absolute right-[4%] bottom-[8%] w-[44%] h-[35%] rounded-xl overflow-hidden"
        >
          <img
            src="/images/hero_collage_bottom_right.jpg"
            alt="Scooter detail"
            className="w-full h-full object-cover"
          />
        </div>

        {/* CTA Button */}
        <button
          ref={ctaRef}
          onClick={scrollToProducts}
          className="absolute right-[4%] bottom-[8%] translate-y-[-140%] btn-neon-filled flex items-center gap-2 text-sm"
        >
          Gabung Sekarang
          <ArrowRight size={16} />
        </button>

        {/* Microcopy */}
        <p className="absolute left-[4%] bottom-[4%] text-micro">
          Komunitas + Produk Lokal. Online & Offline.
        </p>
      </div>

      {/* Stickers */}
      <div ref={stickersRef} className="absolute inset-0 pointer-events-none">
        {/* SERU! Starburst */}
        <div className="sticker left-[5vw] top-[15vh] w-16 h-16 md:w-20 md:h-20 sticker-starburst text-xs md:text-sm">
          SERU!
        </div>

        {/* Join Chat Bubble */}
        <div className="sticker right-[5vw] top-[18vh] bg-kolanpe-lime text-kolanpe-black px-4 py-2 rounded-full font-display font-bold text-xs md:text-sm flex items-center gap-2 rotate-6">
          <MessageCircle size={14} />
          Join grup
        </div>

        {/* Arrow */}
        <div className="sticker right-[8vw] bottom-[20vh] text-kolanpe-lime rotate-12">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="w-12 h-12 md:w-16 md:h-16">
            <path d="M10 30L45 30M45 30L35 20M45 30L35 40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* TOP Badge */}
        <div className="sticker left-[8vw] bottom-[22vh] bg-kolanpe-charcoal border-2 border-kolanpe-lime text-kolanpe-lime px-3 py-1 rounded font-mono text-xs font-bold -rotate-6">
          TOP
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
