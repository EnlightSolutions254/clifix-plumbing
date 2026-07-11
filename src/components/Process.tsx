import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data';
import { PhoneCall, Search, Sliders, Heart, ArrowRight } from 'lucide-react';

const processIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  PhoneCall,
  Search,
  Sliders,
  Heart
};

export default function Process() {
  return (
    <section id="process" className="py-24 bg-gradient-to-b from-[#f5f3ff]/70 via-white to-[#f0f9ff]/70 scroll-mt-10 relative overflow-hidden">
      {/* Decorative colored glow spheres */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-violet-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-sky-400/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Decorative linear flow background lines with self-drawing reveal */}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#00d2ff] via-[#0052ff] to-[#ff007a] -translate-y-1/2 hidden lg:block z-0 max-w-5xl mx-auto origin-left"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-xs tracking-widest font-mono uppercase font-bold text-brand-600 bg-brand-100/50 px-3 py-1 rounded-full">
            HOW WE WORK
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight mt-4 mb-6">
            Four Steps to a Worry-Free Plumbing Repair
          </h2>
          <p className="text-lg text-gray-600 font-sans">
            From the second you place a call to the final safety walkthrough, we prioritize clear communication, speed, and clean craftsmanship.
          </p>
        </motion.div>

        {/* Steps Flex/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative" id="process-steps-container">
          {PROCESS_STEPS.map((step, index) => {
            const IconComponent = processIconMap[step.iconName] || Search;
            
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  default: { duration: 0.5 },
                  delay: index * 0.1 
                }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left relative bg-white rounded-3xl p-6 lg:p-4 border border-gray-50 lg:border-none shadow-sm sm:shadow-none group cursor-pointer"
                id={`process-step-${step.step}`}
              >
                {/* Connecting Arrow for desktop (excluding last element) */}
                {index < 3 && (
                  <div className="hidden lg:flex absolute top-12 left-[80%] z-20 items-center justify-center text-brand-500">
                    <ArrowRight className="w-5 h-5 animate-bounce-horizontal" />
                  </div>
                )}

                {/* Step Circle Frame */}
                <div className="relative mb-6">
                  {/* Outer glow ring with gradient */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#00d2ff] via-[#0052ff] to-[#ff007a] rounded-full blur-md opacity-0 group-hover:opacity-75 scale-95 group-hover:scale-110 transition-all duration-300"></div>
                  
                  {/* Main Circle */}
                  <div className="relative w-16 h-16 bg-white rounded-full border-2 border-brand-500 shadow-md flex items-center justify-center text-brand-600 shrink-0 group-hover:border-transparent group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white transition-all duration-300">
                    <IconComponent className="w-6 h-6 group-hover:text-brand-600 transition-colors" />
                    
                    {/* Floating Step Number */}
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r from-[#00d2ff] to-[#0052ff] border-2 border-white text-white text-[10px] font-bold font-mono flex items-center justify-center shadow-sm">
                      0{step.step}
                    </span>
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="font-display font-bold text-lg text-gray-900 tracking-tight mb-2.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-600 group-hover:to-pink-500 transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-gray-500 font-sans leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
