import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data';
import {
  AlertTriangle,
  Activity,
  Droplet,
  CheckSquare,
  Flame,
  Wrench,
  Hammer,
  Briefcase,
  ArrowRight,
  PhoneCall
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  AlertTriangle,
  Activity,
  Droplet,
  CheckSquare,
  Flame,
  Wrench,
  Hammer,
  Briefcase
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#e8f4fd]/60 via-[#f4f9ff]/70 to-[#e0f2fe]/40 scroll-mt-10 relative overflow-hidden">
      {/* Premium ambient decorative colorful light background glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs tracking-widest font-mono uppercase font-bold text-brand-600 bg-brand-100/50 px-3 py-1 rounded-full">
            OUR SPECIALIZED SOLUTIONS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight mt-4 mb-6">
            Complete Residential & Commercial Plumbing Services
          </h2>
          <p className="text-lg text-gray-600 font-sans">
            No job is too big or small for Clifix Plumbing. We combine certified plumbing expertise with modern tools to deliver long-term solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="services-grid">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Wrench;
            const isEmergency = service.id === 'emergency';

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.04,
                  borderColor: "#00d2ff",
                  boxShadow: "0 20px 40px -10px rgba(0, 82, 255, 0.25), 0 0 20px rgba(0, 210, 255, 0.15)"
                }}
                whileTap={{
                  scale: 0.97,
                  borderColor: "#ff007a",
                  boxShadow: "0 5px 15px -3px rgba(255, 0, 122, 0.35), 0 0 25px rgba(255, 0, 122, 0.25)"
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  default: { duration: 0.3 },
                  delay: index * 0.05 
                }}
                className={`group relative bg-white rounded-3xl p-8 border border-gray-100 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer ${
                  isEmergency ? 'border-brand-200 shadow-md' : ''
                }`}
                id={`service-card-${service.id}`}
              >
                {/* Decorative absolute top gradient strip on hover */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00d2ff] via-[#0052ff] to-[#ff007a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div>
                  {/* Icon Frame */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                    isEmergency 
                      ? 'bg-red-50 text-red-600 group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-orange-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-red-500/20' 
                      : 'bg-brand-50 text-brand-600 group-hover:bg-gradient-to-r group-hover:from-brand-500 group-hover:to-brand-700 group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-500/20'
                  }`}>
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl text-gray-900 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-600 group-hover:to-pink-500 transition-colors mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 font-sans leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom interactive link */}
                <div className="mt-8 pt-4 border-t border-gray-50 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-brand-600 transition-colors"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  {isEmergency && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-full animate-pulse">
                      <PhoneCall className="w-3 h-3 fill-red-600" />
                      24/7 Priority
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Callout banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="mt-16 bg-gradient-to-r from-brand-950 via-brand-900 to-[#020722] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl border border-brand-500/20"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#00d2ff] to-[#ff007a] rounded-full blur-3xl opacity-15 translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight mb-3">
                Need customized domestic or commercial plumbing solutions?
              </h3>
              <p className="text-brand-100 font-sans max-w-2xl leading-relaxed">
                Contact our customer support teams today to schedule a diagnostic inspection. We provide on-site audits, structured billing, and high-quality parts on every single project.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 210, 255, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                href="tel:0103304493"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-white to-brand-50 hover:to-white text-brand-950 font-sans font-bold rounded-2xl shadow-lg transition-all"
                id="services-cta-phone"
              >
                <PhoneCall className="w-5 h-5 text-brand-600 fill-brand-100" />
                <span>Call 0103 304 493</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
