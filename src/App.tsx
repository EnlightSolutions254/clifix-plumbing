import React, { Suspense, useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import QuickContactButtons from './components/QuickContactButtons';

// Lazy-load heavier sections to reduce initial JS bundle
const Services = React.lazy(() => import('./components/Services'));
const WhyChooseUs = React.lazy(() => import('./components/WhyChooseUs'));
const About = React.lazy(() => import('./components/About'));
const Process = React.lazy(() => import('./components/Process'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const Gallery = React.lazy(() => import('./components/Gallery'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const ServiceAreas = React.lazy(() => import('./components/ServiceAreas'));
const Contact = React.lazy(() => import('./components/Contact'));
const Pricing = React.lazy(() => import('./components/Pricing'));

type Page = 'home' | 'services' | 'pricing' | 'about' | 'contact' | 'gallery';

function getInitialPage(): Page {
  const hash = window.location.hash;
  if (hash.startsWith('#/services')) return 'services';
  if (hash.startsWith('#/pricing')) return 'pricing';
  if (hash.startsWith('#/about')) return 'about';
  if (hash.startsWith('#/contact')) return 'contact';
  if (hash.startsWith('#/gallery')) return 'gallery';
  return 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(getInitialPage);

  useEffect(() => {
    const handleHashChange = () => {
      const page = getInitialPage();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased selection:bg-brand-100 selection:text-brand-900" id="aquaflow-root">
      
      {/* 1. Header Sticky Navigation */}
      <Header currentPage={currentPage} />

      {/* Main Content Body */}
      <main id="main-content" className="pt-[73px] md:pt-[113px]">
        
        {/* Lazy-loaded sections with lightweight fallback */}
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-gray-50/50">
            <div className="w-10 h-10 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin"></div>
          </div>
        }>
          {currentPage === 'home' && (
            <>
              <Hero />
              <WhyChooseUs />
              <Process />
              <Testimonials />
            </>
          )}

          {currentPage === 'services' && (
            <>
              <Services />
              <ServiceAreas />
            </>
          )}

          {currentPage === 'pricing' && (
            <Pricing />
          )}

          {currentPage === 'gallery' && (
            <Gallery />
          )}

          {currentPage === 'about' && (
            <>
              <About />
              <WhyChooseUs />
              <Process />
            </>
          )}

          {currentPage === 'contact' && (
            <>
              <Contact />
              <FAQ />
            </>
          )}
        </Suspense>

      </main>

      {/* 12. Footer Directory */}
      <Footer />

      {/* 13. Floating Contacts & Scroll Top Buttons */}
      <QuickContactButtons />

    </div>
  );
}
