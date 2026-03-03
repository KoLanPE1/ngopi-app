import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, GraduationCap, ShoppingCart, Video } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const programsData = [
  {
    icon: GraduationCap,
    title: 'English Basic Bareng',
    description: 'Speaking + writing praktis, no grammar nazis. Belajar santai tapi serius.',
    image: '/images/program_english.jpg',
    color: 'text-kolanpe-cyan',
    borderColor: 'border-kolanpe-cyan',
  },
  {
    icon: ShoppingCart,
    title: 'Cara Jualan Online',
    description: 'Foto produk, caption, chat customer. Dari nol sampai bisa jualan.',
    image: '/images/program_jualan.jpg',
    color: 'text-kolanpe-lime',
    borderColor: 'border-kolanpe-lime',
  },
  {
    icon: Video,
    title: 'Content Creator Starter',
    description: 'Ide konten, shoot HP, edit cepat. Bikin konten yang engage.',
    image: '/images/event_content.jpg',
    color: 'text-kolanpe-magenta',
    borderColor: 'border-kolanpe-magenta',
  },
];

const ProgramsSection = () => {
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

      // Cards animation with slide from left
      const cardElements = cards.querySelectorAll('.program-card');
      cardElements.forEach((card, index) => {
        gsap.fromTo(
          card,
          { x: '-10vw', opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            delay: index * 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Parallax on thumbnail
        const thumbnail = card.querySelector('.program-thumbnail');
        if (thumbnail) {
          gsap.fromTo(
            thumbnail,
            { y: 20 },
            {
              y: -20,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            }
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/62881027056659?text=Halo%20KoLAnPE%2C%20saya%20mau%20gabung%20programnya', '_blank');
  };

  return (
    <section
      ref={sectionRef}
      id="programs"
      className="section-flowing bg-kolanpe-black relative z-80"
    >
      <div className="w-full px-6 lg:px-12 py-20 lg:py-28">
        {/* Title Block */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="heading-section text-kolanpe-white mb-4">
            Dari Nongkrong ke <span className="text-kolanpe-lime">Penghasilan</span>
          </h2>
          <p className="text-kolanpe-gray text-lg max-w-xl mx-auto">
            Bootcamp mandiri, English bareng, cara jualan online.
          </p>
        </div>

        {/* Programs List */}
        <div ref={cardsRef} className="max-w-4xl mx-auto space-y-6">
          {programsData.map((program, index) => (
            <div
              key={index}
              className={`program-card flex flex-col md:flex-row bg-kolanpe-charcoal rounded-xl overflow-hidden border-l-4 ${program.borderColor}`}
            >
              {/* Thumbnail */}
              <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover program-thumbnail"
                />
              </div>

              {/* Content */}
              <div className="md:w-3/5 p-6 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-kolanpe-black flex items-center justify-center">
                    <program.icon className={`w-5 h-5 ${program.color}`} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-kolanpe-white uppercase">
                    {program.title}
                  </h3>
                </div>
                <p className="text-kolanpe-gray text-sm leading-relaxed mb-4">
                  {program.description}
                </p>
                <button
                  onClick={openWhatsApp}
                  className={`flex items-center gap-2 text-sm font-medium ${program.color} hover:underline w-fit`}
                >
                  Gabung Program
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
