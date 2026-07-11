import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, CheckCircle } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Our Process', href: '#process' },
    { name: 'Before & After', href: '#gallery' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
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

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-gray-100'
          : 'bg-white py-4 border-b border-gray-50'
      }`}
    >
      {/* Top Banner (Desktop only) */}
      <div className={`hidden md:block transition-all duration-300 overflow-hidden ${
        isScrolled ? 'max-h-0 opacity-0 mb-0' : 'max-h-10 opacity-100 mb-2 pb-2 border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs text-gray-500 font-sans">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-brand-600" aria-hidden="true" />
              ✓ Licensed & Insured Plumbers
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-brand-600" aria-hidden="true" />
              ✓ Same-Day & 24/7 Service Guarantee
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>Email: <a href="mailto:carolinekariuki065@gmail.com" className="hover:text-brand-600 font-medium transition-colors">carolinekariuki065@gmail.com</a></span>
            <span className="h-3 w-px bg-gray-200"></span>
            <span>Hours: Mon - Sun · Closes 5 PM (24/7 Sanitary Emergency)</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center gap-2 group" id="nav-logo">
          <div className="relative flex items-center justify-center w-10 h-10 bg-brand-50 rounded-xl group-hover:bg-brand-100 transition-all duration-300">
            {/* Water drop graphic */}
            <svg
              className="w-6 h-6 text-brand-600 group-hover:scale-110 transition-transform duration-300"
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
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-brand-600 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-xl leading-tight text-gray-900 tracking-tight">
              Clifix<span className="text-brand-600">Plumbing</span>
            </span>
            <span className="text-[10px] tracking-widest uppercase text-slate-600 font-mono font-medium -mt-0.5">
              Sanitary & Water Infrastructure
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-600 rounded-lg hover:bg-gray-50 transition-all duration-200"
              id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden sm:flex items-center gap-4">
            <a
            href="tel:0103304493"
            className="flex items-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 active:scale-95 text-white font-sans font-semibold text-sm rounded-xl shadow-lg shadow-brand-600/15 hover:shadow-brand-600/25 transition-all duration-200"
            id="nav-call-button"
          >
            <Phone className="w-4 h-4 fill-white text-brand-600 animate-pulse" aria-hidden="true" />
            <span>0103 304493</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 lg:hidden rounded-lg hover:bg-gray-100 text-gray-600 focus:outline-none"
          aria-label="Toggle navigation menu"
          id="mobile-menu-toggle"
        >
          {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Drawer menu */}
      <div
        className={`fixed top-[73px] left-0 w-full h-[calc(100vh-73px)] bg-white/98 backdrop-blur-md z-40 transition-transform duration-300 lg:hidden border-t border-gray-100 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="mobile-drawer"
      >
        <div className="flex flex-col p-6 h-full justify-between">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-3 text-lg font-semibold text-gray-800 hover:text-brand-600 rounded-xl hover:bg-brand-50 transition-all"
                id={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-t border-gray-100 pt-6 pb-12">
            <div className="text-center">
              <p className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-2">Need Emergency Support?</p>
              <a
                href="tel:0103304493"
                className="flex items-center justify-center gap-2 w-full py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg rounded-2xl shadow-lg shadow-brand-600/20"
                id="mobile-drawer-call"
              >
                <Phone className="w-5 h-5 fill-white text-brand-600" />
                <span>Call 0103 304 493</span>
              </a>
            </div>
            <a
              href="https://wa.me/254103304493"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-lg rounded-2xl shadow-lg shadow-[#25D366]/20"
              id="mobile-drawer-whatsapp"
            >
              {/* WhatsApp custom icon */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.588 2.023 14.111.993 11.486.994c-5.44 0-9.866 4.372-9.87 9.802 0 1.637.45 3.238 1.303 4.654l-.45 1.623 1.677-.44zm14.156-7.391c-.267-.134-1.58-.78-1.823-.867-.243-.088-.419-.133-.596.134-.176.267-.683.867-.837 1.045-.155.178-.309.2-.576.066-.267-.134-1.127-.416-2.148-1.327-.793-.708-1.329-1.582-1.485-1.849-.155-.267-.017-.411.117-.544.12-.12.267-.311.4-.467.135-.156.179-.267.269-.445.09-.178.044-.334-.022-.467-.067-.134-.596-1.436-.816-1.97-.215-.518-.432-.448-.596-.456-.153-.008-.33-.01-.507-.01-.177 0-.464.067-.707.311-.243.244-.928.907-.928 2.21 0 1.302.947 2.56 1.08 2.738.132.178 1.864 2.846 4.515 3.992.631.272 1.123.435 1.507.557.633.201 1.21.173 1.665.105.508-.076 1.58-.646 1.802-1.237.222-.593.222-1.101.155-1.206-.067-.105-.244-.156-.511-.29z" />
              </svg>
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
