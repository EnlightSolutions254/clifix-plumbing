import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQAccordionItemProps {
  key?: string;
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQAccordionItem({ question, answer, isOpen, onToggle }: FAQAccordionItemProps) {
  return (
    <div className="border-b border-gray-100 last:border-none py-4 sm:py-5">
      <button
        onClick={onToggle}
        className="flex w-full justify-between items-start gap-4 text-left font-display font-semibold text-base sm:text-lg text-gray-900 hover:text-brand-600 transition-colors py-2 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="leading-snug">{question}</span>
        <div className={`w-8 h-8 rounded-full bg-brand-50 hover:bg-brand-100/75 text-brand-600 flex items-center justify-center shrink-0 transition-transform duration-300 ${
          isOpen ? 'rotate-180 bg-brand-100' : ''
        }`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>

      {/* Slide down animation using motion */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed pt-2 pb-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-24 bg-gradient-to-b from-[#f0fdf4]/60 via-[#fdfdfd] to-[#e0f2fe]/40 scroll-mt-10 relative overflow-hidden">
      {/* Decorative colored glow spheres */}
      <div className="absolute top-0 right-10 w-80 h-80 bg-emerald-300/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-sky-300/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs tracking-widest font-mono uppercase font-bold text-brand-600 bg-brand-100/50 px-3 py-1 rounded-full flex items-center gap-1.5 justify-center w-fit mx-auto">
            <HelpCircle className="w-4.5 h-4.5 text-brand-600" />
            COMMON QUESTIONS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight mt-4 mb-6">
            Frequently Asked Plumbing Questions
          </h2>
          <p className="text-lg text-gray-600 font-sans">
            Have a question? We have answers. If your plumbing query isn’t listed here, feel free to contact us 24/7 for expert guidance.
          </p>
        </motion.div>

        {/* Accordion List Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm" 
          id="faqs-accordion-container"
        >
          {FAQS.map((faq) => (
            <FAQAccordionItem
              key={faq.id}
              id={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </motion.div>

        {/* Final CTA Prompt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="text-center mt-12 bg-white rounded-2xl py-6 border border-gray-100 shadow-xs"
        >
          <p className="text-sm text-gray-500 font-sans">
            Still need assistance? Talk directly with an expert now.{' '}
            <a href="tel:0103304493" className="text-brand-600 font-bold hover:underline">
              Call 0103 304493
            </a>{' '}
            or chat with us on{' '}
            <a href="https://wa.me/254103304493" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-bold hover:underline">
              WhatsApp
            </a>.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
