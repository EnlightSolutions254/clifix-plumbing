import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_PROJECTS } from '../data';
import { ArrowLeftRight, Sparkles, CheckCircle } from 'lucide-react';

interface BeforeAfterSliderProps {
  key?: string;
  beforeUrl: string;
  afterUrl: string;
  title: string;
}

function BeforeAfterSlider({ beforeUrl, afterUrl, title }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0-100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-gray-200 rounded-3xl overflow-hidden select-none cursor-ew-resize border border-gray-100 shadow-xl"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onTouchStart={() => setIsDragging(true)}
      id={`before-after-slider-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Before Image (Background) */}
      <img
        src={beforeUrl}
        alt={`${title} Before`}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs font-mono font-bold px-3 py-1.5 rounded-full z-10 pointer-events-none uppercase tracking-widest">
        Before Upgrade
      </div>

      {/* After Image (Foreground sliding clip) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img
          src={afterUrl}
          alt={`${title} After`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          referrerPolicy="no-referrer"
          style={{ width: containerRef.current?.offsetWidth || '100%' }}
        />
          <div className="absolute top-4 right-4 bg-gradient-to-r from-[#00d2ff] via-[#0052ff] to-[#ff007a] backdrop-blur-md text-white text-xs font-mono font-bold px-3 py-1.5 rounded-full z-10 pointer-events-none uppercase tracking-widest flex items-center gap-1 shadow-lg shadow-brand-500/25">
          <Sparkles className="w-3.5 h-3.5 fill-white text-brand-600 animate-spin-slow" aria-hidden="true" />
          After Clifix
        </div>
      </div>

      {/* Slider Bar & Handle */}
        <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-10 h-10 bg-gradient-to-r from-[#00d2ff] via-[#0052ff] to-[#ff007a] border-4 border-white rounded-full flex items-center justify-center text-white shadow-2xl pointer-events-auto active:scale-125 hover:scale-110 transition-transform duration-200">
          <ArrowLeftRight className="w-4.5 h-4.5" aria-hidden="true" />
        </div>
      </div>

      {/* Helper click/drag instruction */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-medium tracking-wide flex items-center gap-2 pointer-events-none animate-pulse">
        <span>← Drag Slider to Compare →</span>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [activeProject, setActiveProject] = useState(GALLERY_PROJECTS[0]);

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-[#f0fdfa]/70 via-white to-[#fdf4ff]/60 scroll-mt-10 relative overflow-hidden">
      {/* Decorative colored glow spheres */}
      <div className="absolute top-12 left-1/3 w-96 h-96 bg-teal-300/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-12 right-1/4 w-96 h-96 bg-fuchsia-300/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs tracking-widest font-mono uppercase font-bold text-brand-600 bg-brand-100/50 px-3 py-1 rounded-full">
            REAL WORK COMPARISONS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight mt-4 mb-6">
            Witness the Clifix Quality Transformation
          </h2>
          <p className="text-lg text-gray-600 font-sans">
            Slide the divider left and right on each project to inspect our meticulous plumbing craftsmanship. Real projects, real results.
          </p>
        </motion.div>

        {/* Tab Selection Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" id="gallery-tabs">
          {GALLERY_PROJECTS.map((project) => (
            <motion.button
              key={project.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveProject(project)}
              className={`px-6 py-3 rounded-2xl font-display font-semibold text-sm transition-all duration-200 focus:outline-none relative overflow-hidden ${
                activeProject.id === project.id
                  ? 'text-white shadow-xl shadow-brand-600/20'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
              id={`gallery-tab-${project.id}`}
            >
              {activeProject.id === project.id ? (
                <motion.div 
                  layoutId="activeTabGlow"
                  className="absolute inset-0 bg-gradient-to-r from-[#0052ff] via-[#00d2ff] to-[#ff007a] -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              ) : null}
              {project.title}
            </motion.button>
          ))}
        </div>

        {/* Active Comparison Canvas & Details with smooth cross-fade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-12 gap-12 items-center" 
            id="gallery-slider-showcase"
          >
            {/* Left Slider Frame */}
            <div className="lg:col-span-7">
              <BeforeAfterSlider
                beforeUrl={activeProject.beforeUrl}
                afterUrl={activeProject.afterUrl}
                title={activeProject.title}
              />
            </div>

            {/* Right Narrative Card */}
            <div className="lg:col-span-5 flex flex-col justify-center text-left">
              <span className="text-[11px] font-bold font-mono tracking-widest text-brand-600 uppercase mb-2">
                Featured Case Study
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 tracking-tight leading-tight mb-4">
                {activeProject.title}
              </h3>
              <div className="inline-flex self-start px-3 py-1 bg-brand-50 text-brand-700 font-sans font-semibold text-xs rounded-full mb-6">
                Category: {activeProject.category}
              </div>
              
              <p className="text-gray-600 font-sans leading-relaxed text-base mb-6">
                {activeProject.description}
              </p>

              {/* Quality Metrics checklist */}
              <div className="space-y-3.5 border-t border-gray-100 pt-6">
                {['Completed on-schedule inside 48 hours', '100% rust-free premium piping materials', 'Includes our robust 3-year labor warranty'].map((metric, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-center gap-2.5 text-sm text-gray-700 font-sans"
                  >
                    <CheckCircle className="w-5 h-5 text-brand-600 fill-brand-50" />
                    <span className="font-medium">{metric}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
