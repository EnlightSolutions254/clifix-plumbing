import { Phone, CheckCircle2, MessageCircle } from 'lucide-react';
import heroPlumber1600Jpg from '../assets/images/hero_plumber_1783767785831-1600.jpg';
import heroPlumber800Jpg from '../assets/images/hero_plumber_1783767785831-800.jpg';
import heroPlumber400Jpg from '../assets/images/hero_plumber_1783767785831-400.jpg';

const heroPlumber1600Webp = '/hero_plumber_1783767785831-1600.webp';
const heroPlumber800Webp = '/hero_plumber_1783767785831-800.webp';
const heroPlumber400Webp = '/hero_plumber_1783767785831-400.webp';

const trustBadges = [
  'Same-Day Service',
  'Licensed Professionals',
  'Affordable Flat Pricing'
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-36 pb-24 lg:pt-48 lg:pb-36 overflow-hidden bg-slate-950 text-white"
    >
      {/* Background image (use <img> so the browser can better prioritize and decode) */}
      <div className="absolute inset-0 z-0">
        <picture className="absolute inset-0 w-full h-full object-cover bg-center block">
          <source
            type="image/webp"
            srcSet={`${heroPlumber1600Webp} 1600w, ${heroPlumber800Webp} 800w, ${heroPlumber400Webp} 400w`}
            sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1600px"
          />
          <source
            type="image/jpeg"
            srcSet={`${heroPlumber1600Jpg} 1600w, ${heroPlumber800Jpg} 800w, ${heroPlumber400Jpg} 400w`}
            sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1600px"
          />
          <img
            src={heroPlumber800Jpg}
            alt="Plumber in a kitchen holding tools — professional plumbing services"
            decoding="async"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover bg-center"
          />
        </picture>
        {/* Dark vignette gradient overlay for pristine text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/65 to-slate-950/90" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-slate-950/10 to-slate-950/80 pointer-events-none" />
      </div>

      {/* Decorative premium ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Promo Tag */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-500/20 via-sky-500/20 to-pink-500/20 border border-brand-500/40 text-brand-100 font-sans font-semibold text-xs tracking-wide rounded-full mb-6 uppercase shadow-lg shadow-brand-500/10 backdrop-blur-md"
            id="hero-promo-tag"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-brand-400 animate-ping"></span>
            Emergency Plumbing? 24/7 Professional Dispatch
          </div>

          {/* Headline */}
          <h1
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-7xl text-white tracking-tight leading-tight mb-6 max-w-4xl mx-auto"
            id="hero-headline"
          >
            Flawless Sanitary & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-pink-400 font-black">
              Water Infrastructure
            </span> <br className="hidden sm:inline" />
            Designed to Perfection
          </h1>

          {/* Description */}
          <p
            className="text-lg sm:text-xl text-gray-300 font-sans leading-relaxed mb-10 max-w-2xl mx-auto"
            id="hero-description"
          >
            Climate Tech is your premier plumbing and sanitary contractor in Nairobi. Managed by Clinton Kiruki, we specialize in high-precision sanitary fittings, water infrastructure design, resolving severe blocks, and leak repairs at honest flat rates.
          </p>

          {/* Action CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-16 justify-center w-full sm:w-auto"
            id="hero-cta-container"
          >
            <a
              href="tel:+254720219802"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-brand-600 hover:bg-brand-500 active:scale-95 text-white font-sans font-bold text-base rounded-2xl shadow-xl shadow-brand-950/45 transition-all duration-200"
              id="hero-call-now"
            >
              <Phone className="w-5 h-5 fill-white text-brand-600" aria-hidden="true" />
              <span>Call Now: +254 720 219 802</span>
            </a>
            <a
              href="https://wa.me/254720219802"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-[#128C7E] hover:bg-[#0f7a67] active:scale-95 text-white font-sans font-bold text-base rounded-2xl shadow-xl shadow-[#128C7E]/20 transition-all duration-200"
              id="hero-whatsapp"
            >
              <MessageCircle className="w-5 h-5 fill-white" aria-hidden="true" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Trust Badges List */}
          <div
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-white/10 pt-8 w-full max-w-3xl mx-auto"
            id="hero-badges"
          >
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-sm sm:text-base text-gray-300 font-sans font-medium">
                <CheckCircle2 className="w-5 h-5 text-brand-400 fill-brand-950/40 shrink-0" aria-hidden="true" />
                <span>{badge}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
