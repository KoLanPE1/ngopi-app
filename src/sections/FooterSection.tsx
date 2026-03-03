import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FooterSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const brand = brandRef.current;
    const content = contentRef.current;

    if (!section || !brand || !content) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        brand,
        { scale: 0.96, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: brand,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        content,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: content,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      ref={sectionRef}
      id="footer"
      className="section-flowing bg-kolanpe-black relative z-100 border-t border-kolanpe-charcoal"
    >
      <div className="w-full px-6 lg:px-12 py-16 lg:py-24">
        {/* Brand */}
        <div ref={brandRef} className="text-center mb-16">
          <h2 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl text-transparent bg-clip-text"
            style={{
              WebkitTextStroke: '2px #D7FF3B',
              color: 'transparent',
            }}
          >
            KoLAnPE
          </h2>
          <p className="mt-4 text-kolanpe-lime font-display text-lg uppercase tracking-widest">
            Tempat Semua Anak Lombok Naik Level.
          </p>
        </div>

        {/* Content Grid */}
        <div
          ref={contentRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto"
        >
          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-kolanpe-white uppercase mb-6">
              Kontak
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/62881027056659"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-kolanpe-gray hover:text-kolanpe-lime transition-colors"
                >
                  <Phone size={18} />
                  0881-0270-56659
                </a>
              </li>
              <li>
                <a
                  href="mailto:Kolanpe01@gmail.com"
                  className="flex items-center gap-3 text-kolanpe-gray hover:text-kolanpe-lime transition-colors"
                >
                  <Mail size={18} />
                  Kolanpe01@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/Kolanpe_belanja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-kolanpe-gray hover:text-kolanpe-lime transition-colors"
                >
                  <Instagram size={18} />
                  @Kolanpe_belanja
                </a>
              </li>
              <li className="flex items-center gap-3 text-kolanpe-gray">
                <MapPin size={18} />
                Mataram, Lombok
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-kolanpe-white uppercase mb-6">
              Menu
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('product-fashion')}
                  className="text-kolanpe-gray hover:text-kolanpe-lime transition-colors"
                >
                  Produk
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('community')}
                  className="text-kolanpe-gray hover:text-kolanpe-lime transition-colors"
                >
                  Komunitas
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('events')}
                  className="text-kolanpe-gray hover:text-kolanpe-lime transition-colors"
                >
                  Event
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('programs')}
                  className="text-kolanpe-gray hover:text-kolanpe-lime transition-colors"
                >
                  Program
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('join-form')}
                  className="text-kolanpe-gray hover:text-kolanpe-lime transition-colors"
                >
                  Gabung
                </button>
              </li>
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h3 className="font-display font-bold text-kolanpe-white uppercase mb-6">
              Link
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/62881027056659"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-kolanpe-gray hover:text-kolanpe-lime transition-colors"
                >
                  WhatsApp Business
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/Kolanpe_belanja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-kolanpe-gray hover:text-kolanpe-lime transition-colors"
                >
                  Instagram Shop
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://tokopedia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-kolanpe-gray hover:text-kolanpe-lime transition-colors"
                >
                  Tokopedia
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://shopee.co.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-kolanpe-gray hover:text-kolanpe-lime transition-colors"
                >
                  Shopee
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-kolanpe-charcoal text-center">
          <p className="text-kolanpe-gray text-sm">
            Dibuat untuk menghimpun seluruh Gen Z Lombok jadi satu kekuatan.
          </p>
          <p className="text-kolanpe-gray/60 text-xs mt-2">
            © 2024 KoLAnPE Ngerumpi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
