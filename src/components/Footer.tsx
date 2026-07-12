import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import ClimateTechLogo from './ClimateTechLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (window.location.hash === href || (href === '#/' && (window.location.hash === '' || window.location.hash === '#/home'))) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const footerLinks = [
    { name: 'Home', href: '#/' },
    { name: 'Services', href: '#/services' },
    { name: 'Pricing', href: '#/pricing' },
    { name: 'Gallery', href: '#/gallery' },
    { name: 'About Us', href: '#/about' },
    { name: 'Contact Us', href: '#/contact' },
  ];

  const servicesLinks = [
    { name: 'Emergency Plumbing', href: '#/services' },
    { name: 'Leak Detection', href: '#/services' },
    { name: 'Drain Cleaning', href: '#/services' },
    { name: 'Water Heaters', href: '#/services' },
    { name: 'Pipe Repairs', href: '#/services' },
    { name: 'Bathroom Reno', href: '#/services' },
  ];

  // Animation variants for columns
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <footer className="bg-brand-950 text-white border-t border-brand-900 pt-16 pb-8 overflow-hidden" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Grid Row */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-brand-900"
        >
          
          {/* Logo & Narrative Column (5 cols) */}
          <motion.div variants={columnVariants} className="lg:col-span-5 space-y-6 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex items-center gap-2 group hover:opacity-90 transition-opacity">
              <ClimateTechLogo theme="dark" iconSize="sm" />
            </div>

            <p className="text-sm text-brand-200/80 font-sans leading-relaxed max-w-sm">
              Climate Tech is Nairobi’s premier sanitary works contractor and water infrastructure designer. Managed by Clinton Kiruki, we design, manage, and install water systems to perfection across Nairobi County.
            </p>

            {/* Social Handles */}
            <div className="flex items-center justify-center lg:justify-start gap-3" id="footer-socials">
              <a href="https://web.facebook.com/climatetechltd?mibextid=qi2Omg&amp;rdid=whmLB79pa975pAQj&amp;share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F19HB4aGduY%2F%3Fmibextid%3Dqi2Omg%26_rdc%3D1%26_rdr#" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-brand-900/50 hover:bg-brand-600 rounded-xl flex items-center justify-center text-brand-300 hover:text-white hover:scale-110 transition-all duration-200" aria-label="Facebook">
                <Facebook className="w-4 h-4 fill-current" aria-hidden="true" />
              </a>
              <a href="#" className="w-9 h-9 bg-brand-900/50 hover:bg-brand-600 rounded-xl flex items-center justify-center text-brand-300 hover:text-white hover:scale-110 transition-all duration-200" aria-label="Instagram">
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href="#" className="w-9 h-9 bg-brand-900/50 hover:bg-brand-600 rounded-xl flex items-center justify-center text-brand-300 hover:text-white hover:scale-110 transition-all duration-200" aria-label="Linkedin">
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href="https://x.com/climatetech_ltd?s=09" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-brand-900/50 hover:bg-brand-600 rounded-xl flex items-center justify-center text-brand-300 hover:text-white hover:scale-110 transition-all duration-200" aria-label="Twitter">
                <Twitter className="w-4 h-4 fill-current" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links Column (2 cols) */}
          <motion.div variants={columnVariants} className="lg:col-span-2 space-y-4 flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-brand-500">
              Navigation
            </p>
            <ul className="space-y-2 text-sm font-semibold font-sans text-brand-200" id="footer-quick-links">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-brand-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Column (2 cols) */}
          <motion.div variants={columnVariants} className="lg:col-span-2 space-y-4 flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-brand-500">
              Our Services
            </p>
            <ul className="space-y-2 text-sm font-semibold font-sans text-brand-200" id="footer-services-links">
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-brand-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact details Column (3 cols) */}
          <motion.div variants={columnVariants} className="lg:col-span-3 space-y-4 flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-brand-500">
              Office Contacts
            </p>
            <ul className="space-y-3.5 text-xs sm:text-sm font-sans text-brand-200/80 flex flex-col items-center lg:items-start">
              <li className="flex gap-2.5 items-start justify-center lg:justify-start text-center lg:text-left">
                <MapPin className="w-4.5 h-4.5 text-brand-500 shrink-0 mt-0.5" aria-hidden="true" />
                <a 
                  href="https://www.google.com/maps/place/Climate+Tech+Plumbing+and+Renovators/@-1.2976188,31.8775412,6z/data=!4m6!3m5!1s0x182f3fc0a26c4fa3:0xf0b519d5f4f0ea7b!8m2!3d-1.2198227!4d36.8875903!16s%2Fg%2F11ptl7y97s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-400 transition-colors duration-200"
                >
                  Thika road to Kangundo Rd, Nairobi, Kenya
                </a>
              </li>
              <li className="flex gap-2.5 items-center justify-center lg:justify-start">
                <Phone className="w-4.5 h-4.5 text-brand-500 shrink-0 fill-current" aria-hidden="true" />
                <a href="tel:+254720219802" className="hover:text-brand-400 font-bold transition-colors duration-200">
                  +254 720 219 802
                </a>
              </li>
              <li className="flex gap-2.5 items-center justify-center lg:justify-start">
                <Mail className="w-4.5 h-4.5 text-brand-500 shrink-0" aria-hidden="true" />
                <a href="mailto:carolinekariuki065@gmail.com" className="hover:text-brand-400 transition-colors duration-200">
                  carolinekariuki065@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>

        </motion.div>

        {/* Bottom copyright block */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-brand-200 text-center sm:text-left"
        >
          <p id="footer-copyright">
            &copy; {currentYear} Climate Tech. All rights reserved.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#" className="text-brand-200 hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-brand-200">&bull;</span>
            <a href="#" className="text-brand-200 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
