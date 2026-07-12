import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import PageHero from './PageHero';
import { 
  Check, 
  HelpCircle, 
  DollarSign, 
  Calculator, 
  ShieldCheck, 
  Clock, 
  Wrench, 
  AlertTriangle, 
  CheckCircle2, 
  Droplet, 
  ChevronDown, 
  ArrowRight, 
  Phone 
} from 'lucide-react';

interface PricingTier {
  id: string;
  name: string;
  priceRange: string;
  unit: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  isPopular?: boolean;
}

const PRICING_TIERS: PricingTier[] = [
  {
    id: 'diagnostics',
    name: 'Diagnostic & Dispatch Call',
    priceRange: 'KES 1,500',
    unit: 'flat rate',
    description: 'Expert dispatch of a fully-equipped service vehicle to diagnose your plumbing issue and provide a complete written quote.',
    icon: Clock,
    features: [
      'Rapid 30-45 minute response in Nairobi',
      'Thorough inspection by registered plumber',
      'UPFRONT WRITTEN QUOTE before work',
      '100% WAIVED if you approve the repair work!'
    ]
  },
  {
    id: 'standard',
    name: 'Standard Plumbing Repairs',
    priceRange: 'KES 3,500 - 8,000',
    unit: 'per fixture / job',
    description: 'Perfect for typical household plumbing fixes, small leak repairs, and simple part replacements.',
    icon: Wrench,
    features: [
      'Faucets, taps, and showerhead leaks',
      'Running toilet repair & valve replacement',
      'Unblocking sinks, basins, and bathtubs',
      'PEX or copper pipe leak sealing',
      'Premium durable materials sourced'
    ],
    isPopular: true
  },
  {
    id: 'major',
    name: 'Major Infrastructure & Installs',
    priceRange: 'KES 8,000 - 25,000+',
    unit: 'custom estimate',
    description: 'Advanced installations, heavy-duty unclogging, and complex water pressure balancing systems.',
    icon: Droplet,
    features: [
      'Tankless or conventional water heater setup',
      'Electronic leak detection with acoustics',
      'Hydro-jetting for commercial or main drains',
      'Complete luxury toilet/basin installations',
      '1-Year guaranteed Climate Tech workmanship warranty'
    ]
  }
];

interface CalculatorOption {
  id: string;
  name: string;
  category: string;
  basePrice: string;
  complexityRanges: {
    simple: { price: string; time: string };
    moderate: { price: string; time: string };
    complex: { price: string; time: string };
  };
  whatsIncluded: string[];
}

const CALCULATOR_OPTIONS: CalculatorOption[] = [
  {
    id: 'clog',
    name: 'Blocked Drain / Sink Clog',
    category: 'Drainage',
    basePrice: 'KES 3,500',
    complexityRanges: {
      simple: { price: 'KES 3,500 - 5,000', time: '45 mins - 1 hour' },
      moderate: { price: 'KES 5,000 - 9,000', time: '1 - 2 hours' },
      complex: { price: 'KES 12,000 - 18,000', time: '2 - 3 hours (Hydro-Jetting)' }
    },
    whatsIncluded: [
      'Snaking or high-pressure clearance of blockage',
      'Camera inspection of line to check pipe status',
      'Flow testing & sanitization of workspace'
    ]
  },
  {
    id: 'leak',
    name: 'Water Pipe Leak Repair',
    category: 'Leaks & Piping',
    basePrice: 'KES 4,000',
    complexityRanges: {
      simple: { price: 'KES 3,500 - 6,000', time: '1 hour' },
      moderate: { price: 'KES 6,000 - 12,000', time: '1 - 2.5 hours' },
      complex: { price: 'KES 15,000 - 25,000+', time: 'Half day (In-wall/slab leak repair)' }
    },
    whatsIncluded: [
      'Acoustic leak detection (if source hidden)',
      'Replacement section of high-grade copper or PEX pipe',
      'Pressure testing to verify solid seal'
    ]
  },
  {
    id: 'toilet',
    name: 'Toilet System Repair or Install',
    category: 'Toilets',
    basePrice: 'KES 3,000',
    complexityRanges: {
      simple: { price: 'KES 3,000 - 5,500', time: '30 mins - 1 hour (Flush valves)' },
      moderate: { price: 'KES 6,000 - 10,000', time: '1 - 2 hours (Re-sealing/leak repairs)' },
      complex: { price: 'KES 12,000 - 18,000', time: '2 - 3 hours (New modern toilet installation)' }
    },
    whatsIncluded: [
      'Sourcing of premium leak-proof flappers or valves',
      'Professional alignment, mounting & high-tech wax ring seals',
      'Water-saving efficiency fine-tuning'
    ]
  },
  {
    id: 'heater',
    name: 'Water Heater Install / Repair',
    category: 'Water Heaters',
    basePrice: 'KES 4,500',
    complexityRanges: {
      simple: { price: 'KES 4,000 - 7,000', time: '1 hour (Thermostat / Element repair)' },
      moderate: { price: 'KES 8,000 - 15,000', time: '2 hours (Pressure relief / Servicing)' },
      complex: { price: 'KES 18,000 - 28,000+', time: '2 - 4 hours (Full tankless heater installation)' }
    },
    whatsIncluded: [
      'Electrical load check & safety grounding verification',
      'Secure heavy-duty wall-mounting support brackets',
      'Pressure relief valve setup & thermal testing'
    ]
  }
];

const PRICING_FAQS = [
  {
    q: 'Do you charge by the hour or by the job?',
    a: 'We charge exclusively by the job, using transparent flat-rate pricing. Hourly pricing can reward slow work and lead to unexpected surprises. With Climate Tech, you get a solid written quote upfront. Even if a repair takes longer than expected, you still pay exactly the quoted price!'
  },
  {
    q: 'What is your diagnostic dispatch fee?',
    a: 'Our dispatch and visual diagnostics fee is KES 1,500. This covers the cost of sending an expert plumber to your property, diagnosing the issue, and providing a written estimate. If you approve our recommended repair, this diagnostic fee is 100% waived!'
  },
  {
    q: 'Are materials and spare parts included in the price estimates?',
    a: 'In our custom upfront quotes, we will itemize both labor and premium materials. We only use high-grade copper, PEX, and certified sanitary parts to prevent recurring leaks, so you know exactly what goes into your home plumbing.'
  },
  {
    q: 'Do you offer warranty or guarantees on your pricing and work?',
    a: 'Absolutely. We stand behind our work. All our plumbing repairs and installations are backed by an industry-leading 1-year workmanship warranty. If our repair fails within that time, we will fix it at no extra cost to you.'
  }
];

// Motion Animation Constants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function Pricing() {
  const [selectedIssue, setSelectedIssue] = useState<string>('clog');
  const [selectedComplexity, setSelectedComplexity] = useState<'simple' | 'moderate' | 'complex'>('moderate');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const activeIssue = CALCULATOR_OPTIONS.find(opt => opt.id === selectedIssue) || CALCULATOR_OPTIONS[0];
  const activeEstimate = activeIssue.complexityRanges[selectedComplexity];

  return (
    <>
      <PageHero
        title="Transparent Plumbing Pricing"
        subtitle="We believe in complete pricing transparency. No hidden fees, no hourly tricks. Know the exact costs upfront before our wrenches touch your pipes."
        bgImage="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80"
        category="Upfront Flat-Rates"
      />
      <div className="bg-white min-h-screen py-12" id="pricing-page">
      
      {/* Main Pricing Cards Grid with stagger */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-24">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {PRICING_TIERS.map((tier) => {
            const Icon = tier.icon;
            return (
              <motion.div 
                key={tier.id}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
                className={`relative bg-white rounded-3xl border p-8 transition-shadow duration-300 ${
                  tier.isPopular 
                    ? 'border-brand-500 shadow-xl shadow-brand-100/50' 
                    : 'border-gray-200 shadow-md hover:shadow-lg'
                }`}
                id={`tier-card-${tier.id}`}
              >
                {tier.isPopular && (
                  <motion.span 
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-xs font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg"
                  >
                    Most Popular Service
                  </motion.span>
                )}
                
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-2xl ${tier.isPopular ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-600'}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-gray-900">{tier.name}</h3>
                    <p className="text-xs text-gray-500 font-medium">Flat / Itemized Pricing</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6 min-h-[48px]">
                  {tier.description}
                </p>

                <div className="mb-8 bg-gray-50/50 rounded-2xl p-4 border border-gray-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-display font-extrabold text-gray-900">{tier.priceRange}</span>
                    <span className="text-gray-500 text-xs font-medium">/ {tier.unit}</span>
                  </div>
                </div>

                <div className="space-y-3.5 mb-8">
                  <p className="text-xs font-extrabold text-gray-400 uppercase tracking-wider">What is included:</p>
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="mt-1 flex-shrink-0 w-4 h-4 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#/contact"
                  className={`w-full py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 group transition-all duration-300 ${
                    tier.isPopular 
                      ? 'bg-brand-600 text-white shadow-lg shadow-brand-200 hover:bg-brand-700' 
                      : 'bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700'
                  }`}
                >
                  <span>Request Booking</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Interactive Pricing Estimator Block */}
      <div className="bg-brand-950 text-white py-20 relative overflow-hidden" id="interactive-pricing-calculator">
        {/* Abstract background graphics */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/10 rounded-full filter blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-500/10 rounded-full filter blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-brand-900 text-brand-400 rounded-full text-xs font-bold uppercase tracking-wider mb-3"
            >
              <Calculator className="w-3.5 h-3.5 animate-spin-slow" /> Interactive Calculator
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-display font-extrabold"
            >
              Get an Instant <span className="text-brand-500">Service Cost Estimate</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brand-200 mt-3 max-w-xl mx-auto text-sm md:text-base"
            >
              Select your plumbing repair type and complexity below to generate a transparent price and arrival estimate instantly.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left Column: Select Options with fade-right */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="lg:col-span-7 bg-brand-900/50 border border-brand-800/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2 border-b border-brand-800 pb-3">
                  <span className="w-7 h-7 bg-brand-600 rounded-lg flex items-center justify-center text-xs font-extrabold text-white">1</span>
                  Select Your Plumbing Problem
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {CALCULATOR_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedIssue(opt.id)}
                      className={`p-4 rounded-2xl text-left border transition-all duration-200 ${
                        selectedIssue === opt.id
                          ? 'bg-brand-600/35 border-brand-500 text-white shadow-md'
                          : 'bg-brand-950/40 border-brand-800/50 text-brand-300 hover:border-brand-700/80 hover:bg-brand-900/40'
                      }`}
                    >
                      <span className="text-xs font-extrabold uppercase text-brand-400 tracking-wider block mb-1">
                        {opt.category}
                      </span>
                      <span className="font-bold block text-sm md:text-base">{opt.name}</span>
                    </button>
                  ))}
                </div>

                <h3 className="text-lg font-bold mb-6 flex items-center gap-2 border-b border-brand-800 pb-3">
                  <span className="w-7 h-7 bg-brand-600 rounded-lg flex items-center justify-center text-xs font-extrabold text-white">2</span>
                  Select Repair Complexity
                </h3>

                <div className="grid grid-cols-3 gap-3 md:gap-4">
                  {(['simple', 'moderate', 'complex'] as const).map((comp) => (
                    <button
                      key={comp}
                      onClick={() => setSelectedComplexity(comp)}
                      className={`py-3.5 px-2 rounded-2xl font-bold text-xs md:text-sm capitalize transition-all duration-200 border ${
                        selectedComplexity === comp
                          ? 'bg-brand-600 border-brand-500 text-white'
                          : 'bg-brand-950/40 border-brand-800/50 text-brand-300 hover:border-brand-700/80'
                      }`}
                    >
                      {comp}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="mt-8 flex items-start gap-3 bg-brand-950/60 rounded-2xl p-4 border border-brand-800 text-xs text-brand-200 leading-relaxed">
                <AlertTriangle className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                <p>
                  These values represent average ranges across Nairobi for typical works. The exact final price is confirmed with a firm upfront written guarantee by our expert plumber before turning a wrench.
                </p>
              </div>
            </motion.div>

            {/* Right Column: Output / Estimate Visualizer with scale/fade-left */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="lg:col-span-5 bg-gradient-to-br from-brand-900 to-brand-950 border border-brand-500/30 rounded-3xl p-8 flex flex-col justify-between shadow-xl relative overflow-hidden"
            >
              {/* Highlight badge */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-500/10 rounded-full filter blur-xl"></div>
              
              <div>
                <span className="text-xs font-extrabold uppercase text-brand-400 tracking-widest block mb-1">
                  Estimated Repair Cost
                </span>
                
                {/* Animate title changes */}
                <AnimatePresence mode="wait">
                  <motion.h4 
                    key={activeIssue.id + selectedComplexity}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.15 }}
                    className="text-sm font-semibold text-brand-200 mb-6 pb-4 border-b border-brand-800"
                  >
                    {activeIssue.name} ({selectedComplexity} repair)
                  </motion.h4>
                </AnimatePresence>

                <div className="mb-8">
                  <div className="text-sm text-brand-300 font-medium">Estimated Range</div>
                  
                  {/* Animate price numbers with scale-in bounce */}
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={activeEstimate.price}
                      initial={{ scale: 0.9, opacity: 0.5, y: 2 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      exit={{ scale: 0.9, opacity: 0.5, y: -2 }}
                      transition={{ type: "spring", stiffness: 120, damping: 12 }}
                      className="text-3xl md:text-4xl font-display font-black text-brand-400 tracking-tight mt-1"
                    >
                      {activeEstimate.price}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8 bg-brand-900/60 rounded-2xl p-4 border border-brand-800">
                  <div>
                    <span className="text-brand-400 text-xs font-bold block">Avg Duration</span>
                    <AnimatePresence mode="wait">
                      <motion.span 
                        key={activeEstimate.time}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-white font-bold text-sm flex items-center gap-1.5 mt-0.5"
                      >
                        <Clock className="w-3.5 h-3.5 text-brand-500" />
                        {activeEstimate.time}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <div>
                    <span className="text-brand-400 text-xs font-bold block">Dispatch Call</span>
                    <span className="text-emerald-400 font-bold text-sm flex items-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Waived
                    </span>
                  </div>
                </div>

                <div className="space-y-3.5">
                  <p className="text-xs font-bold uppercase text-brand-400 tracking-widest">Included Benefits:</p>
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={activeIssue.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ staggerChildren: 0.05 }}
                      className="space-y-2.5"
                    >
                      {activeIssue.whatsIncluded.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-brand-200">
                          <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-800">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href={`tel:+254720219802`}
                  className="w-full bg-brand-500 text-brand-950 font-bold py-4 px-6 rounded-2xl hover:bg-brand-400 transition-colors duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-brand-500/20"
                >
                  <Phone className="w-4 h-4 fill-brand-950" />
                  <span>Call to Book: +254 720 219 802</span>
                </motion.a>
                <p className="text-center text-xs text-brand-400 mt-3 font-medium">
                  Dispatching expert plumbers 24/7 across Nairobi
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pricing Guarantees Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-brand-50/50 rounded-3xl border border-brand-100 p-8 md:p-12"
        >
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-gray-900">
              The Climate Tech Pricing Promise
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-2">
              We understand that invite-a-stranger-to-fix-things anxiety. We have crafted our service agreements to provide maximum safety, trust, and predictability.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={scaleVariants} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center mb-4 font-bold">
                <DollarSign className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-lg text-gray-900 mb-2">Flat-Rate Quotations</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                No ticking clocks or sluggish hourly workers. Every quote is flat, written, and final before work starts.
              </p>
            </motion.div>

            <motion.div variants={scaleVariants} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center mb-4 font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-lg text-gray-900 mb-2">1-Year Warranty</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                If our installed part or repair fails within 12 months, we return to rectify the issue absolutely free. No fuss, no hassle.
              </p>
            </motion.div>

            <motion.div variants={scaleVariants} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center mb-4 font-bold">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-lg text-gray-900 mb-2">Zero-Risk Diagnostics</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                We waive the KES 1,500 callout/diagnostic fee completely once we perform the recommended repair.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Pricing Specific FAQs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-24" id="pricing-faq-section">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-extrabold text-gray-900"
          >
            Pricing Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 mt-2 text-sm md:text-base"
          >
            Have questions about fees, deposits, or commercial quotes? Let’s lay them out.
          </motion.p>
        </div>

        <div className="space-y-4">
          {PRICING_FAQS.map((faq, index) => {
            const isOpened = activeFaq === index;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                key={index} 
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  onClick={() => setActiveFaq(isOpened ? null : index)}
                  className="w-full text-left py-5 px-6 flex justify-between items-center font-bold text-gray-900 hover:text-brand-600 transition-colors focus:outline-none"
                >
                  <span className="text-sm md:text-base pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-250 ${isOpened ? 'rotate-180 text-brand-600' : ''}`} />
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpened && (
                    <motion.div 
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden border-t border-gray-100"
                    >
                      <p className="p-6 text-sm text-gray-600 leading-relaxed bg-gray-50/50">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
}
