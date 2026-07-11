import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICE_AREAS } from '../data';
import { MapPin, Search, Check, ShieldCheck, AlertCircle } from 'lucide-react';

export default function ServiceAreas() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState(SERVICE_AREAS[0]);
  const [searchResult, setSearchResult] = useState<{ found: boolean; message: string } | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setSearchResult(null);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    let foundArea = null;
    let matchedNeighborhood = '';

    for (const area of SERVICE_AREAS) {
      const match = area.neighborhoods.find((n) => n.toLowerCase().includes(query));
      if (match) {
        foundArea = area;
        matchedNeighborhood = match;
        break;
      }
      if (area.name.toLowerCase().includes(query)) {
        foundArea = area;
        break;
      }
    }

    if (foundArea) {
      setSelectedArea(foundArea);
      setSearchResult({
        found: true,
        message: `✓ Yes! We service "${matchedNeighborhood || foundArea.name}" with 45-minute rapid emergency dispatch.`
      });
    } else {
      setSearchResult({
        found: false,
        message: `⚠ Note: "${searchQuery}" is outside our standard 45-min rapid zone, but we may still accommodate scheduled visits! Please call 0111333599.`
      });
    }
  };

  return (
    <section id="service-areas" className="py-24 bg-white scroll-mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs tracking-widest font-mono uppercase font-bold text-brand-600 bg-brand-100/50 px-3 py-1 rounded-full flex items-center gap-1.5 justify-center w-fit mx-auto">
            <MapPin className="w-4.5 h-4.5 text-brand-600" />
            OUR COVERAGE ZONE
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight mt-4 mb-6">
            Where We Provide Our 45-Minute Rapid Response
          </h2>
          <p className="text-lg text-gray-600 font-sans">
            We operate fully stocked plumbing units strategically positioned across Nairobi and surrounding regions to guarantee speedy service.
          </p>
        </motion.div>

        {/* Interactive Coverage Box */}
        <div className="grid lg:grid-cols-12 gap-12 items-start" id="service-areas-explorer">
          
          {/* Left Column: Search & Quick Selection list */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Real-time search bar */}
            <div className="bg-brand-50/50 p-6 rounded-3xl border border-brand-100">
              <h3 className="font-display font-bold text-lg text-gray-900 tracking-tight mb-3">
                Check Your Area Instant Coverage
              </h3>
              <form onSubmit={handleSearch} className="relative flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter neighborhood (e.g. Parklands, Kileleshwa)"
                    className="w-full bg-white pl-10 pr-4 py-3 text-sm font-sans rounded-xl border border-gray-200 focus:outline-none focus:border-brand-600 transition-colors"
                  />
                  <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-5 py-3 bg-brand-600 hover:bg-brand-700 active:scale-95 text-white font-sans font-bold text-sm rounded-xl transition-all"
                >
                  Verify
                </motion.button>
              </form>

              {/* Live search feedback message */}
              <AnimatePresence mode="wait">
                {searchResult && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`mt-4 p-3.5 rounded-xl text-xs font-medium font-sans leading-relaxed ${
                      searchResult.found 
                        ? 'bg-emerald-50 border border-emerald-100 text-emerald-800'
                        : 'bg-amber-50 border border-amber-100 text-amber-800'
                    }`}
                  >
                    {searchResult.message}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick list selectors */}
            <div className="space-y-2.5" id="area-tabs">
              {SERVICE_AREAS.map((area) => (
                <motion.button
                  key={area.name}
                  whileHover={{ x: 6 }}
                  onClick={() => {
                    setSelectedArea(area);
                    setSearchResult(null);
                  }}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl text-left border transition-all duration-200 focus:outline-none relative ${
                    selectedArea.name === area.name
                      ? 'bg-brand-600 text-white border-brand-600 shadow-md shadow-brand-600/10'
                      : 'bg-white hover:bg-gray-50 border-gray-100 text-gray-800'
                  }`}
                  id={`area-tab-${area.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {selectedArea.name === area.name && (
                    <motion.div 
                      layoutId="activeAreaGlow"
                      className="absolute inset-0 bg-brand-600 rounded-2xl -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className="flex items-center gap-3">
                    <MapPin className={`w-5 h-5 shrink-0 ${
                      selectedArea.name === area.name ? 'text-white' : 'text-brand-600'
                    }`} />
                    <span className="font-display font-semibold text-sm sm:text-base leading-tight">
                      {area.name}
                    </span>
                  </div>
                  <div className={`text-[10px] font-bold uppercase tracking-wider font-mono px-2.5 py-1 rounded-full ${
                    selectedArea.name === area.name ? 'bg-white/20 text-white' : 'bg-brand-50 text-brand-700'
                  }`}>
                    Active
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Dynamic Zone Coverage Display Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-gray-50/50 rounded-3xl p-6 sm:p-10 border border-gray-100 relative overflow-hidden" 
            id="area-details-card"
          >
            {/* Watermark grid badge */}
            <div className="absolute top-6 right-6 w-16 h-16 opacity-10 text-brand-600 pointer-events-none">
              <MapPin className="w-full h-full" />
            </div>

            <span className="text-[10px] tracking-widest font-mono font-bold uppercase text-brand-600">
              Active Fleet Coverage
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedArea.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 tracking-tight mt-2 mb-6">
                  {selectedArea.name}
                </h3>

                {/* Specific Neighborhood list */}
                <div className="mb-8">
                  <p className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest mb-3.5">
                    Neighborhoods We Serve:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="neighborhoods-list">
                    {selectedArea.neighborhoods.map((hood, idx) => (
                      <motion.div 
                        key={hood} 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.04 }}
                        className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-gray-100 shadow-inner"
                      >
                        <div className="w-4.5 h-4.5 rounded-full bg-brand-50 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-brand-600" />
                        </div>
                        <span className="text-sm font-semibold text-gray-700 font-sans truncate">{hood}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Coverage stats block */}
                <div className="border-t border-gray-200/60 pt-6 flex flex-col sm:flex-row justify-between gap-4 text-xs font-mono font-medium text-gray-500">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Licensed Domestic Plumbing Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-brand-600 shrink-0" />
                    <span>45-Minute Emergency SLA active</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
