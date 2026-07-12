import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_PROJECTS, GALLERY_ITEMS } from '../data';
import { 
  ArrowLeftRight, 
  Sparkles, 
  CheckCircle, 
  MapPin, 
  Calendar, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Eye, 
  MessageSquare, 
  Phone 
} from 'lucide-react';
import PageHero from './PageHero';

interface BeforeAfterSliderProps {
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
        <div className="absolute top-4 right-4 bg-gradient-to-r from-brand-500 to-brand-600 backdrop-blur-md text-white text-xs font-mono font-bold px-3 py-1.5 rounded-full z-10 pointer-events-none uppercase tracking-widest flex items-center gap-1 shadow-lg shadow-brand-500/25">
          <Sparkles className="w-3.5 h-3.5 fill-white text-yellow-300 animate-pulse" aria-hidden="true" />
          After Climate Tech
        </div>
      </div>

      {/* Slider Bar & Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-10 h-10 bg-brand-600 border-4 border-white rounded-full flex items-center justify-center text-white shadow-2xl pointer-events-auto active:scale-125 hover:scale-110 transition-transform duration-200">
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
  const [activeCategory, setActiveCategory] = useState<'All' | 'Sanitary' | 'Infrastructure' | 'Emergency' | 'Commercial'>('All');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const categories: ('All' | 'Sanitary' | 'Infrastructure' | 'Emergency' | 'Commercial')[] = [
    'All',
    'Sanitary',
    'Infrastructure',
    'Emergency',
    'Commercial'
  ];

  // Filter gallery items based on active category
  const filteredItems = activeCategory === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  // Lightbox controls
  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((selectedItemIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === 'Escape') setSelectedItemIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemIndex, filteredItems]);

  const activeLightboxItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  // Pre-filled WhatsApp link for inquiries on a specific project
  const getWhatsAppUrl = (title: string, location: string) => {
    const text = `Hi Climate Tech, I am looking at your "${title}" project completed in ${location} and would like to inquire about similar premium services.`;
    return `https://wa.me/254720219802?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <PageHero
        title="Our Portfolio of Transformations"
        subtitle="Explore our actual plumbing, sanitary installations, and emergency pipeline designs. Real jobs, real results across Nairobi."
        bgImage="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80"
        category="Completed Projects"
      />
      <section id="gallery" className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 scroll-mt-10 relative overflow-hidden">
        {/* Decorative colored glow spheres */}
        <div className="absolute top-12 left-1/3 w-96 h-96 bg-brand-100/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-12 right-1/4 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* --- PART 1: Interactive Before/After Compare --- */}
        <div className="mb-24">
          <div className="flex flex-col items-center mb-10">
            <h3 className="font-display font-bold text-lg text-gray-800 uppercase tracking-wide mb-4">
              ✨ Slider Case Studies (Before vs After)
            </h3>
            {/* Tab Selection Buttons for Slider */}
            <div className="flex flex-wrap justify-center gap-2 bg-gray-100 p-1.5 rounded-2xl" id="gallery-slider-tabs">
              {GALLERY_PROJECTS.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  className={`px-5 py-2.5 rounded-xl font-sans font-semibold text-xs sm:text-sm transition-all duration-200 focus:outline-none relative ${
                    activeProject.id === project.id
                      ? 'text-brand-950 font-bold'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                  id={`gallery-slider-tab-${project.id}`}
                >
                  {activeProject.id === project.id ? (
                    <motion.div 
                      layoutId="activeSliderTab"
                      className="absolute inset-0 bg-white shadow-md rounded-xl"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  ) : null}
                  <span className="relative z-10">{project.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Slider Display Frame */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50" 
              id="gallery-slider-showcase"
            >
              {/* Left Slider Component */}
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
                  Featured Challenge
                </span>
                <h4 className="font-display font-bold text-xl sm:text-2xl text-gray-900 tracking-tight leading-tight mb-4">
                  {activeProject.title}
                </h4>
                <div className="inline-flex self-start px-3 py-1 bg-brand-50 text-brand-700 font-sans font-semibold text-xs rounded-full mb-5 border border-brand-100">
                  {activeProject.category}
                </div>
                
                <p className="text-gray-600 font-sans leading-relaxed text-sm sm:text-base mb-6">
                  {activeProject.description}
                </p>

                {/* Quality Metrics checklist */}
                <div className="space-y-3.5 border-t border-gray-100 pt-5">
                  {[
                    'Certified plumbing safety standards',
                    'High-grade leak-free materials & pipes',
                    'Full satisfaction warranty guarantee'
                  ].map((metric, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 font-sans"
                    >
                      <CheckCircle className="w-5 h-5 text-brand-600 fill-brand-50 shrink-0" />
                      <span className="font-medium">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>


        {/* --- PART 2: Categorized Portfolio Grid --- */}
        <div className="border-t border-gray-100 pt-20">
          <div className="text-center mb-10">
            <h3 className="font-display font-bold text-2xl text-gray-900 tracking-tight mb-3">
              Browse Completed Works
            </h3>
            <p className="text-gray-500 font-sans text-sm max-w-lg mx-auto">
              Select a category below to filter our actual plumbing, sanitary, and pipeline projects executed across Nairobi.
            </p>
          </div>

          {/* Filtering chips */}
          <div className="flex flex-wrap justify-center gap-2 mb-12" id="gallery-category-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2.5 rounded-full font-sans font-semibold text-xs sm:text-sm transition-all duration-200 relative ${
                  activeCategory === cat
                    ? 'text-white font-bold'
                    : 'bg-white hover:bg-gray-50 border border-gray-200 text-gray-600'
                }`}
                id={`filter-chip-${cat}`}
              >
                {activeCategory === cat ? (
                  <motion.div 
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 bg-brand-600 rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                ) : null}
                <span className="relative z-10 flex items-center gap-1.5">
                  {cat === 'All' ? 'All Projects' : cat}
                </span>
              </button>
            ))}
          </div>

          {/* Masonry/Grid of Items */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            id="gallery-portfolio-grid"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => {
                // Find absolute index of this item in the filtered list
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={item.id}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
                    onClick={() => setSelectedItemIndex(index)}
                    id={`gallery-item-${item.id}`}
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      {/* Interactive Hover Overlay */}
                      <div className="absolute inset-0 bg-brand-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-full text-brand-950 scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                          <Eye className="w-5 h-5 stroke-[2.5]" />
                        </div>
                      </div>

                      {/* Floating Category Tag */}
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-brand-900 font-sans font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-brand-100 shadow-xs">
                        {item.category}
                      </div>
                    </div>

                    {/* Meta Details */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-display font-bold text-base text-gray-900 leading-tight mb-2 group-hover:text-brand-600 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-gray-500 font-sans text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-gray-50 pt-3 text-[11px] sm:text-xs font-mono text-gray-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-brand-500" />
                          {item.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-brand-500" />
                          {item.date}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>


        {/* --- PART 3: Advanced Lightbox Modal Component --- */}
        <AnimatePresence>
          {activeLightboxItem && selectedItemIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-brand-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
              onClick={() => setSelectedItemIndex(null)}
              id="gallery-lightbox-modal"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedItemIndex(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 bg-white/10 hover:bg-white/20 active:scale-95 rounded-full flex items-center justify-center text-white transition-all z-50 shadow-lg"
                aria-label="Close Lightbox"
                id="lightbox-close-btn"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation Left Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-6 w-12 h-12 bg-white/10 hover:bg-white/20 active:scale-95 rounded-full flex items-center justify-center text-white transition-all z-40"
                aria-label="Previous Image"
                id="lightbox-prev-btn"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Navigation Right Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-6 w-12 h-12 bg-white/10 hover:bg-white/20 active:scale-95 rounded-full flex items-center justify-center text-white transition-all z-40"
                aria-label="Next Image"
                id="lightbox-next-btn"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Main Dialog Window */}
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative z-30 border border-white/10"
                onClick={(e) => e.stopPropagation()} // Stop closing on dialog body click
                id="lightbox-dialog-body"
              >
                {/* Visual Section */}
                <div className="md:w-3/5 bg-black relative flex items-center justify-center aspect-[4/3] md:aspect-auto md:min-h-[400px]">
                  <img
                    src={activeLightboxItem.imageUrl}
                    alt={activeLightboxItem.title}
                    className="max-h-[75vh] w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating category */}
                  <span className="absolute top-4 left-4 bg-brand-600 text-white text-xs font-sans font-bold px-3.5 py-1.5 rounded-full shadow-lg">
                    {activeLightboxItem.category}
                  </span>
                </div>

                {/* Content Details Panel */}
                <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-white text-left">
                  <div>
                    {/* Header Details */}
                    <div className="flex flex-wrap items-center gap-3 text-[10px] sm:text-xs font-mono text-gray-400 mb-3">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                        {activeLightboxItem.location}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                        {activeLightboxItem.date}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-gray-900 tracking-tight leading-tight mb-4">
                      {activeLightboxItem.title}
                    </h3>
                    
                    <p className="text-gray-600 font-sans text-sm sm:text-base leading-relaxed mb-6">
                      {activeLightboxItem.description}
                    </p>
                  </div>

                  {/* Immediate Action CTA Box */}
                  <div className="border-t border-gray-100 pt-6 space-y-3">
                    <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                      Inquire about a similar setup:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={getWhatsAppUrl(activeLightboxItem.title, activeLightboxItem.location)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] active:scale-95 text-white font-sans font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md transition-all duration-200"
                        id="lightbox-whatsapp-action"
                      >
                        <MessageSquare className="w-4 h-4 fill-white" />
                        <span>WhatsApp Now</span>
                      </a>
                      <a
                        href="tel:+254720219802"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 active:scale-95 text-white font-sans font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md transition-all duration-200"
                        id="lightbox-call-action"
                      >
                        <Phone className="w-4 h-4 fill-current" />
                        <span>Call Us</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
    </>
  );
}
