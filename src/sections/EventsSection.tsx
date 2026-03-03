import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const eventsData = [
  {
    title: 'Sunset Ride',
    location: 'Senggigi',
    date: 'Sabtu',
    time: '17:00 WIB',
    image: '/images/event_ride.jpg',
    color: 'border-kolanpe-orange',
  },
  {
    title: 'Study Jam',
    location: 'Mataram',
    date: 'Minggu',
    time: '09:00 WIB',
    image: '/images/program_english.jpg',
    color: 'border-kolanpe-cyan',
  },
  {
    title: 'Gumuk Bareng',
    location: 'Sembalun',
    date: 'Minggu',
    time: '05:30 WIB',
    image: '/images/event_muncak.jpg',
    color: 'border-kolanpe-lime',
  },
  {
    title: 'Konten Clinic',
    location: 'Online',
    date: 'Rabu',
    time: '20:00 WIB',
    image: '/images/event_content.jpg',
    color: 'border-kolanpe-magenta',
  },
];

const EventsSection = () => {
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
      const cardElements = cards.querySelectorAll('.event-card-item');
      gsap.fromTo(
        cardElements,
        { y: 80, scale: 0.98, opacity: 0 },
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

  const openWhatsApp = () => {
    window.open('https://wa.me/62881027056659?text=Halo%20KoLAnPE%2C%20saya%20mau%20ikut%20eventnya', '_blank');
  };

  return (
    <section
      ref={sectionRef}
      id="events"
      className="section-flowing bg-kolanpe-black relative z-70"
    >
      <div className="w-full px-6 lg:px-12 py-20 lg:py-28">
        {/* Title Block */}
        <div ref={titleRef} className="mb-16">
          <span className="text-micro mb-2 block">Jadwal Kegiatan</span>
          <h2 className="heading-section text-kolanpe-white mb-4">
            Event & <span className="text-kolanpe-lime">Meetup</span>
          </h2>
          <p className="text-kolanpe-gray text-lg max-w-xl">
            Tongkrongan yang beneran ngumpul.
          </p>
        </div>

        {/* Events Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl"
        >
          {eventsData.map((event, index) => (
            <div
              key={index}
              className={`event-card-item event-card bg-kolanpe-charcoal border-l-4 ${event.color}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover event-image"
                />
                <div className="absolute top-4 left-4 bg-kolanpe-black/80 backdrop-blur-sm px-3 py-1 rounded">
                  <span className="text-kolanpe-lime font-mono text-xs font-bold">
                    {event.date}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-xl text-kolanpe-white uppercase mb-3">
                  {event.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-kolanpe-gray">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} className="text-kolanpe-lime" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} className="text-kolanpe-lime" />
                    {event.time}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <button
            onClick={openWhatsApp}
            className="btn-neon flex items-center gap-2"
          >
            <Calendar size={16} />
            Lihat Semua Event
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
