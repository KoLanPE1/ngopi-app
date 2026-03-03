import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/62881027056659?text=Halo%20KoLAnPE%2C%20saya%20mau%20tanya-tanya', '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
    </button>
  );
};

export default WhatsAppFloat;
