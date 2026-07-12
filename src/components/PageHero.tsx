import React from 'react';
import { motion } from 'motion/react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  bgImage: string;
  category?: string;
}

export default function PageHero({ title, subtitle, bgImage, category }: PageHeroProps) {
  return (
    <section className="relative h-[300px] sm:h-[360px] md:h-[440px] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Background Image - Crisp and clear */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/75 to-slate-950/90" />
      </div>

      {/* Ambient glow sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-brand-500/20 rounded-full blur-3xl pointer-events-none opacity-65" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {category && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 text-[10px] sm:text-xs font-mono uppercase tracking-widest font-bold text-brand-100 bg-brand-500/25 border border-brand-500/40 rounded-full mb-3 sm:mb-4 backdrop-blur-md shadow-lg"
          >
            {category}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-3 sm:mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="text-xs sm:text-sm md:text-base text-gray-300 font-sans max-w-2xl mx-auto leading-relaxed px-4"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
