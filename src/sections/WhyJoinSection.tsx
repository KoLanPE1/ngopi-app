import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Dumbbell, BookOpen, Bike, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const whyJoinData = [
  {
    icon: Dumbbell,
    title: 'Jelek = Gym Bareng',
    description: 'Bukan body shaming. Ini upgrade station.',
    color: 'text-kolanpe-lime',
  },
  {
    icon: BookOpen,
    title: 'Bodoh = Partner Belajar',
    description: 'Ada Study Group & English Bareng.',
    color: 'text-kolanpe-cyan',
  },
  {
    icon: Bike,
    title: 'Motor = Upgrade Style',
    description: 'Pretelin? Kita sediain part & komunitasnya.',
    color: 'text-kolanpe-orange',
  },
  {
    icon: Users,
    title: 'Sendiri = Nongkrong & Muncak',
    description: 'Lo nggak sendirian lagi.',
    color: 'text-kolanpe-magenta',
  },
];

const WhyJoinSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current;

    if (!section || !title || !cards) return;

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        title,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards animation
      const cardElements = cards.querySelectorAll('.why-card');
      gsap.fromTo(
        cardElements,
        { y: 60, scale: 0.98, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cards,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-join"
      className="section-flowing bg-kolanpe-black relative z-20"
    >
      <div className="w-full px-6 lg:px-12 py-20 lg:py-28">
        {/* Title Block */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="heading-section text-kolanpe-white mb-4">
            Kenapa Harus <span className="text-kolanpe-lime">KoLAnPE?</span>
          </h2>
          <p className="text-kolanpe-gray text-lg max-w-xl mx-auto">
            Bukan cuma tongkrongan—ini sistem upgrade.
          </p>
          <div className="mt-4 w-32 h-1 bg-gradient-to-r from-kolanpe-lime to-kolanpe-cyan mx-auto" />
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {whyJoinData.map((item, index) => (
            <div
              key={index}
              className="why-card community-card group"
            >
              <div className={`w-14 h-14 rounded-lg bg-kolanpe-black flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <item.icon className={`w-7 h-7 ${item.color}`} />
              </div>
              <h3 className="font-display font-bold text-lg text-kolanpe-white mb-2 uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="text-kolanpe-gray text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
