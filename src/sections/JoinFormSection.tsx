import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, User, School, Calendar, Heart, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const minatOptions = [
  'Fashion & Style',
  'Motor & Riding',
  'Study & Belajar',
  'Gym & Fitness',
  'Gaming & Konten',
  'Travel & Muncak',
];

const komunitasOptions = [
  'Gym Bareng',
  'Study Partner',
  'Motor & Riding',
  'Muncak & Nongkrong',
  'Game & Konten',
  'Tour Lombok',
];

const JoinFormSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    nama: '',
    sekolah: '',
    umur: '',
    minat: '',
    komunitas: [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const form = formRef.current;

    if (!section || !form) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        form,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: form,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Stagger fields
      const fields = form.querySelectorAll('.form-field');
      gsap.fromTo(
        fields,
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: form,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleKomunitasToggle = (komunitas: string) => {
    setFormData(prev => ({
      ...prev,
      komunitas: prev.komunitas.includes(komunitas)
        ? prev.komunitas.filter(k => k !== komunitas)
        : [...prev.komunitas, komunitas],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Redirect to WhatsApp with form data
    const message = `Halo KoLAnPE!%0A%0ASaya mau gabung:%0A%0ANama: ${formData.nama}%0ASekolah: ${formData.sekolah}%0AUmur: ${formData.umur}%0AMinat: ${formData.minat}%0AKomunitas: ${formData.komunitas.join(', ')}`;
    window.open(`https://wa.me/62881027056659?text=${message}`, '_blank');

    setIsSubmitting(false);
  };

  return (
    <section
      ref={sectionRef}
      id="join-form"
      className="section-flowing bg-kolanpe-charcoal relative z-90"
    >
      <div className="w-full px-6 lg:px-12 py-20 lg:py-28 flex items-center justify-center">
        {/* Form Card */}
        <div
          ref={formRef}
          className="w-full max-w-lg bg-kolanpe-black p-8 lg:p-10 border-l-4 border-b-4 border-kolanpe-lime"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="heading-section text-kolanpe-white mb-2">
              Mau Masuk <span className="text-kolanpe-lime">Circle Ini?</span>
            </h2>
            <p className="text-kolanpe-gray text-sm">
              Isi singkat. Langsung masuk grup.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nama */}
            <div className="form-field">
              <label className="flex items-center gap-2 text-kolanpe-gray text-sm mb-2">
                <User size={14} className="text-kolanpe-lime" />
                Nama Lengkap
              </label>
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleInputChange}
                placeholder="Masukkan nama kamu"
                className="input-kolanpe"
                required
              />
            </div>

            {/* Sekolah */}
            <div className="form-field">
              <label className="flex items-center gap-2 text-kolanpe-gray text-sm mb-2">
                <School size={14} className="text-kolanpe-lime" />
                Sekolah
              </label>
              <input
                type="text"
                name="sekolah"
                value={formData.sekolah}
                onChange={handleInputChange}
                placeholder="Nama sekolah / kampus"
                className="input-kolanpe"
                required
              />
            </div>

            {/* Umur */}
            <div className="form-field">
              <label className="flex items-center gap-2 text-kolanpe-gray text-sm mb-2">
                <Calendar size={14} className="text-kolanpe-lime" />
                Umur
              </label>
              <input
                type="number"
                name="umur"
                value={formData.umur}
                onChange={handleInputChange}
                placeholder="Berapa tahun?"
                className="input-kolanpe"
                min="13"
                max="30"
                required
              />
            </div>

            {/* Minat */}
            <div className="form-field">
              <label className="flex items-center gap-2 text-kolanpe-gray text-sm mb-2">
                <Heart size={14} className="text-kolanpe-lime" />
                Minat Utama
              </label>
              <select
                name="minat"
                value={formData.minat}
                onChange={handleInputChange}
                className="input-kolanpe"
                required
              >
                <option value="">Pilih minat kamu</option>
                {minatOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>

            {/* Komunitas */}
            <div className="form-field">
              <label className="flex items-center gap-2 text-kolanpe-gray text-sm mb-3">
                <Users size={14} className="text-kolanpe-lime" />
                Mau Gabung Komunitas Apa?
              </label>
              <div className="flex flex-wrap gap-2">
                {komunitasOptions.map((komunitas, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleKomunitasToggle(komunitas)}
                    className={`px-3 py-2 rounded text-xs font-medium transition-all ${
                      formData.komunitas.includes(komunitas)
                        ? 'bg-kolanpe-lime text-kolanpe-black'
                        : 'bg-kolanpe-charcoal text-kolanpe-gray hover:text-kolanpe-white'
                    }`}
                  >
                    {komunitas}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="form-field pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-neon-filled flex items-center justify-center gap-2 py-4 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Mengirim...</span>
                ) : (
                  <>
                    Kirim & Masuk KoLAnPE
                    <Send size={16} />
                  </>
                )}
              </button>
            </div>

            {/* Helper Text */}
            <p className="text-center text-kolanpe-gray text-xs">
              Atau langsung WA:{' '}
              <a
                href="https://wa.me/62881027056659"
                target="_blank"
                rel="noopener noreferrer"
                className="text-kolanpe-lime hover:underline"
              >
                0881-0270-56659
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinFormSection;
