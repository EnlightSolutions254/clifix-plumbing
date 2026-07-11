import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Our Process', href: '#process' },
    { name: 'Before & After', href: '#gallery' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  const servicesLinks = [
    { name: 'Emergency Plumbing', href: '#services' },
    { name: 'Leak Detection', href: '#services' },
    { name: 'Drain Cleaning', href: '#services' },
    { name: 'Water Heaters', href: '#services' },
    { name: 'Pipe Repairs', href: '#services' },
    { name: 'Bathroom Reno', href: '#services' },
  ];

  return (
    <footer className="bg-brand-950 text-white border-t border-brand-900 pt-16 pb-8" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Grid Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-brand-900">
          
          {/* Logo & Narrative Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 group">
              <div className="flex items-center justify-center w-9 h-9 bg-brand-900 rounded-lg">
                <svg
                  className="w-5.5 h-5.5 text-brand-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
                  />
                </svg>
              </div>
              <span className="font-display font-extrabold text-lg tracking-tight">
                Clifix<span className="text-brand-500">Plumbing</span>
              </span>
            </div>

            <p className="text-sm text-brand-200/80 font-sans leading-relaxed max-w-sm">
              Clifix Plumbing is Nairobi’s premier sanitary works contractor and water infrastructure designer. Managed by Clinton Kiruki, we design, manage, and install water systems to perfection across Nairobi County.
            </p>

            {/* Social Handles */}
            <div className="flex items-center gap-3" id="footer-socials">
              <a href="#" className="w-9 h-9 bg-brand-900/50 hover:bg-brand-600 rounded-xl flex items-center justify-center text-brand-300 hover:text-white transition-all" aria-label="Facebook">
                <Facebook className="w-4 h-4 fill-current" aria-hidden="true" />
              </a>
              <a href="#" className="w-9 h-9 bg-brand-900/50 hover:bg-brand-600 rounded-xl flex items-center justify-center text-brand-300 hover:text-white transition-all" aria-label="Instagram">
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href="#" className="w-9 h-9 bg-brand-900/50 hover:bg-brand-600 rounded-xl flex items-center justify-center text-brand-300 hover:text-white transition-all" aria-label="Linkedin">
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href="#" className="w-9 h-9 bg-brand-900/50 hover:bg-brand-600 rounded-xl flex items-center justify-center text-brand-300 hover:text-white transition-all" aria-label="Twitter">
                <Twitter className="w-4 h-4 fill-current" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-brand-500">
              Navigation
            </p>
            <ul className="space-y-2 text-sm font-sans text-brand-200" id="footer-quick-links">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-brand-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-brand-500">
              Our Services
            </p>
            <ul className="space-y-2 text-sm font-sans text-brand-200" id="footer-services-links">
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-brand-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-brand-500">
              Office Contacts
            </p>
            <ul className="space-y-3.5 text-xs sm:text-sm font-sans text-brand-200/80">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-4.5 h-4.5 text-brand-500 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Thika road to Kangundo Rd, Nairobi, Kenya</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="w-4.5 h-4.5 text-brand-500 shrink-0 fill-current" aria-hidden="true" />
                <a href="tel:0103304493" className="hover:text-brand-400 font-bold transition-colors">
                  0103 304493
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="w-4.5 h-4.5 text-brand-500 shrink-0" aria-hidden="true" />
                <a href="mailto:carolinekariuki065@gmail.com" className="hover:text-brand-400 transition-colors">
                  carolinekariuki065@gmail.com
                </a>
              </li>
            </ul>
          </div>

</div>

        {/* Bottom copyright block */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-brand-200">
          <p id="footer-copyright">
            &copy; {currentYear} Clifix Plumbing. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-brand-200 hover:text-white">Privacy Policy</a>
            <span className="text-brand-200">&bull;</span>
            <a href="#" className="text-brand-200 hover:text-white">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
