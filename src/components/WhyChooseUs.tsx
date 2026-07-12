import React from 'react';
import { motion } from 'motion/react';
import { BENEFITS } from '../data';
import {
  Award,
  DollarSign,
  Zap,
  ShieldCheck,
  Cpu,
  Smile,
  ShieldAlert
} from 'lucide-react';

const benefitIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  DollarSign,
  Zap,
  ShieldCheck,
  Cpu,
  Smile
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-[#fff5f6]/80 via-white to-[#f4fdfa]/60 scroll-mt-10 relative overflow-hidden">
      {/* Decorative colored glow spheres */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs tracking-widest font-mono uppercase font-bold text-brand-600 bg-brand-100/50 px-3 py-1 rounded-full">
            THE CLIMATE TECH ADVANTAGE
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight mt-4 mb-6">
            Why Hundreds of Local Homes & Businesses Choose Us
          </h2>
          <p className="text-lg text-gray-600 font-sans">
            We are dedicated to elevating plumbing services through certified engineering expertise, absolute honesty, and world-class care.
          </p>
        </motion.div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="benefits-grid">
          {BENEFITS.map((benefit, index) => {
            const IconComponent = benefitIconMap[benefit.iconName] || ShieldAlert;

            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.04,
                  borderColor: "#00d2ff",
                  boxShadow: "0 20px 40px -10px rgba(0, 82, 255, 0.2), 0 0 15px rgba(0, 210, 255, 0.1)"
                }}
                whileTap={{
                  scale: 0.97,
                  borderColor: "#ff007a",
                  boxShadow: "0 5px 15px -3px rgba(255, 0, 122, 0.3), 0 0 20px rgba(255, 0, 122, 0.2)"
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  default: { duration: 0.3 },
                  delay: index * 0.05 
                }}
                className="bg-gradient-to-tr from-brand-50/10 via-white to-white rounded-3xl p-8 border border-gray-100 shadow-sm transition-all duration-300 group cursor-pointer relative overflow-hidden"
                id={`benefit-card-${benefit.id}`}
              >
                {/* Micro linear-gradient glow bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00d2ff] via-[#0052ff] to-[#ff007a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Icon Wrap */}
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#00d2ff] group-hover:via-[#0052ff] group-hover:to-[#ff007a] group-hover:text-white transition-all duration-300 shadow-xs">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Benefit Title */}
                <h3 className="font-display font-bold text-lg text-gray-900 tracking-tight mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0052ff] group-hover:to-[#ff007a] transition-all">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 font-sans leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
