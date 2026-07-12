import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { Star, Quote, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50/50 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs tracking-widest font-mono uppercase font-bold text-brand-600 bg-brand-100/50 px-3 py-1 rounded-full">
            TRUSTED REVIEWS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight mt-4 mb-6">
            Hear What Our Customers Have to Say
          </h2>
          <p className="text-lg text-gray-600 font-sans">
            We take immense pride in helping our local neighbors restore comfort, efficiency, and safety. Here are verified reviews from happy customers.
          </p>
        </motion.div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="testimonials-grid">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ 
                y: -8, 
                scale: 1.04,
                borderColor: "#00d2ff",
                boxShadow: "0 20px 40px -10px rgba(0, 82, 255, 0.15), 0 0 15px rgba(0, 210, 255, 0.08)"
              }}
              whileTap={{
                scale: 0.97,
                borderColor: "#ff007a",
                boxShadow: "0 5px 15px -3px rgba(255, 0, 122, 0.25), 0 0 20px rgba(255, 0, 122, 0.15)"
              }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                default: { duration: 0.3 },
                delay: index * 0.05 
              }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm transition-all duration-300 flex flex-col justify-between relative group cursor-pointer overflow-hidden"
              id={`testimonial-card-${testimonial.id}`}
            >
              {/* Micro gradient strip on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00d2ff] via-[#0052ff] to-[#ff007a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Top Quote Mark Icon */}
              <div className="absolute top-6 right-8 text-brand-100 group-hover:text-brand-300/40 group-hover:scale-110 transition-all duration-300">
                <Quote className="w-10 h-10 fill-current rotate-180" />
              </div>

              {/* Text content */}
              <div className="relative z-10">
                {/* Stars Rating */}
                <div className="flex gap-1 mb-5 text-amber-400">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-current" aria-hidden="true" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-gray-600 font-sans italic leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Reviewer Profile Header */}
              <div className="flex items-center gap-3.5 border-t border-gray-100 pt-5 mt-auto">
                {/* Photo with lazy-load */}
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-brand-100 shadow-inner shrink-0 bg-brand-50">
                  <img
                    src={testimonial.imageUrl}
                    alt={`Photo of ${testimonial.name}, ${testimonial.role} — ${testimonial.location}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1">
                    <p className="font-display font-bold text-sm text-gray-900 leading-tight tracking-tight truncate">
                      {testimonial.name}
                    </p>
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-600 shrink-0 fill-brand-50" title="Verified Customer" aria-hidden="true" />
                  </div>
                  <p className="text-[11px] text-gray-500 font-sans mt-0.5">
                    {testimonial.role} &bull; <span className="text-gray-400 font-semibold">{testimonial.location}</span>
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
