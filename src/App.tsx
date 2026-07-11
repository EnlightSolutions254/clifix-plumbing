import React, { Suspense } from 'react';
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

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased selection:bg-brand-100 selection:text-brand-900" id="aquaflow-root">
      
      {/* 1. Header Sticky Navigation */}
      <Header />

      {/* Main Content Body */}
      <main id="main-content">
        {/* 2. Hero Section */}
        <Hero />

        {/* Lazy-loaded sections with lightweight fallback */}
        <Suspense fallback={<div aria-hidden="true" className="h-24" /> }>
          <Services />
          <WhyChooseUs />
          <About />
          <Process />
          <Gallery />
          <Testimonials />
          <FAQ />
          <ServiceAreas />
          <Contact />
        </Suspense>

      </main>

      {/* 12. Footer Directory */}
      <Footer />

      {/* 13. Floating Contacts & Scroll Top Buttons */}
      <QuickContactButtons />

    </div>
  );
}
