import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { STATS } from '../data';
import { CheckCircle, Award, Users, Heart } from 'lucide-react';
import PageHero from './PageHero';

interface StatCounterProps {
  key?: string;
  number: number;
  suffix: string;
  label: string;
  iconName: string;
}

function StatCounter({ number, suffix, label, iconName }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = number;
    const duration = 2000; // 2 seconds animation
    const incrementTime = Math.max(Math.floor(duration / end), 10);
    
    // For large numbers like 2500, let's step by larger chunks to keep it smooth and fast
    const step = Math.max(Math.floor(end / (duration / 25)), 1);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [isInView, number]);

  const renderIcon = () => {
    const classStyle = "w-6 h-6 text-brand-600";
    switch (iconName) {
      case 'years':
        return <Award className={classStyle} aria-hidden="true" />;
      case 'customers':
        return <Users className={classStyle} aria-hidden="true" />;
      case 'support':
        return <CheckCircle className={classStyle} aria-hidden="true" />;
      case 'satisfaction':
        return <Heart className={classStyle} aria-hidden="true" />;
      default:
        return <Award className={classStyle} aria-hidden="true" />;
    }
  };

  return (
    <div ref={ref} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center gap-4 h-full w-full transition-all duration-300 group-hover:border-brand-200">
      <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 group-hover:bg-gradient-to-br group-hover:from-[#00d2ff] group-hover:to-[#0052ff] group-hover:text-white transition-all duration-300">
        {renderIcon()}
      </div>
      <div>
        <div className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-600 group-hover:to-pink-500 transition-colors">
          <span>{count.toLocaleString()}</span>
          <span className="text-brand-600 group-hover:text-pink-500 transition-colors">{suffix}</span>
        </div>
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 font-mono mt-1">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function About() {
  const highlights = [
    'Fully licensed and comprehensively insured teams.',
    'Equipped with state-of-the-art diagnostic leak finders.',
    'Upfront written quotes and absolute fixed flat pricing.',
    'Friendly, polite plumbers who clean up thoroughly after.'
  ];

  return (
    <>
      <PageHero
        title="About Climate Tech"
        subtitle="Managed by Clinton Kiruki, we design and build precision sanitary and water infrastructure systems across Nairobi with honest upfront flat rates."
        bgImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
        category="Our Story & Philosophy"
      />
      <section id="about" className="py-24 bg-gray-50/30 scroll-mt-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* About Image Collage / Panel */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="lg:col-span-5 relative"
            id="about-image-panel"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-100 rounded-full blur-3xl opacity-50"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <img
                src="/hero_plumber_1783767785831-800.webp"
                alt="Plumbing toolkit and expert diagnostic equipment"
                width={800}
                height={446}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 bg-brand-600 text-white font-sans font-bold text-xs px-3.5 py-1.5 rounded-full shadow-md uppercase tracking-wider">
                Since 2016
              </div>
            </div>

            {/* Micro decorative info card */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -bottom-6 -right-4 bg-brand-950 text-white p-5 rounded-2xl shadow-lg border border-brand-800 hidden sm:block max-w-xs"
            >
              <p className="text-xs font-mono tracking-widest text-brand-500 uppercase font-semibold mb-1">Our Standard</p>
              <p className="font-display font-bold text-sm leading-relaxed">
                "Zero leaks, zero worries, and absolute transparency from start to finish."
              </p>
            </motion.div>
          </motion.div>

          {/* About Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            <span className="text-xs tracking-widest font-mono uppercase font-bold text-brand-600 bg-brand-100/50 px-3 py-1 self-start rounded-full mb-4">
              ABOUT CLIMATE TECH
            </span>
            
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight mb-6">
              Dedicated to Setting the Standard in Plumbing & Sanitary Care
            </h2>

            <div className="space-y-4 text-base text-gray-600 font-sans leading-relaxed mb-8">
              <p>
                Founded and managed by Clinton Kiruki, Climate Tech has built a solid reputation in Nairobi as a premier contractor for sanitary fittings and water-related infrastructure systems. We specialize in designing, managing, and maintaining high-quality water supply networks for both residential and commercial properties.
              </p>
              <p>
                Whether it is diagnosing high-risk blockages, resolving stubborn water leaks, improving low pressure, or performing high-precision sanitary plumbing works to spec, our dedicated team delivers prompt and dependable workmanship at upfront, competitive rates.
              </p>
            </div>

            {/* Bullets List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10" id="about-highlights">
              {highlights.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className="flex gap-2.5 items-start"
                >
                  <div className="w-5 h-5 rounded-full bg-brand-50 flex items-center justify-center shrink-0 mt-0.5 animate-pulse">
                    <svg className="w-3.5 h-3.5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700 leading-tight">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Counters Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="about-stats-grid">
              {STATS.map((stat, idx) => (
                <motion.div
                  key={stat.id}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 20px 30px -10px rgba(0, 82, 255, 0.18), 0 0 15px rgba(0, 210, 255, 0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative cursor-pointer rounded-2xl overflow-hidden border border-transparent"
                >
                  <StatCounter
                    number={stat.number}
                    suffix={stat.suffix}
                    label={stat.label}
                    iconName={stat.id}
                  />
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
    </>
  );
}
