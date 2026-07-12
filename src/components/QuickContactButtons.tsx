import { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageCircle } from 'lucide-react';

export default function QuickContactButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
      <div className="flex flex-col gap-3" id="floating-actions-bar">
        <a
          href="tel:+254720219802"
          className="relative group w-14 h-14 bg-brand-600 hover:bg-brand-700 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-brand-600/30 transition-all duration-300"
          title="Call Emergency Plumber"
          id="floating-call-btn"
        >
          <span className="absolute inset-0 rounded-full bg-brand-500 animate-ping opacity-25"></span>
          <Phone className="w-6 h-6 text-white animate-pulse relative z-10" aria-hidden="true" />
          <span className="absolute right-16 bg-brand-950 text-white text-xs font-mono font-bold px-3.5 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Call: +254 720 219 802
          </span>
        </a>

        <a
          href="https://wa.me/254720219802"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group w-14 h-14 bg-[#128C7E] hover:bg-[#107262] text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-[#128C7E]/30 transition-all duration-300"
          title="WhatsApp Chat Support"
          id="floating-whatsapp-btn"
        >
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full"></span>
          <MessageCircle className="w-6.5 h-6.5 text-white relative z-10" aria-hidden="true" />
          <span className="absolute right-16 bg-brand-950 text-white text-xs font-mono font-bold px-3.5 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            WhatsApp Dispatcher
          </span>
        </a>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="group w-11 h-11 bg-white hover:bg-gray-100 text-gray-700 rounded-full border border-gray-100 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
            title="Back to Top"
            id="floating-back-to-top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}
