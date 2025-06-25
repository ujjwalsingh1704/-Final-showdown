import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import ProgramsSection from './components/ProgramsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import WhatsAppWidget from './components/WhatsAppWidget';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'programs', 'contact', 'faq'];
    const handleScroll = () => {
      let current = 'home';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App w-full min-h-screen bg-black">
      <WhatsAppWidget />
      <div className="w-full min-h-screen">
        <Header activeSection={activeSection} />
        <MobileNav activeSection={activeSection} />
        {/* Main Content */}
        <div id="page-content" className="w-full">
          <main id="home" className="page-section active w-full">
            <HeroSection />
            <section id="about"><AboutSection /></section>
            <hr className="break" />
            <div className="accreditations animate-in space" id="accreditations-container"></div>
            <hr className="break" />
            <h2 className="section-title brand-name acd" >We Provide Best Internships For You</h2>
            <FeaturesSection />
            <section id="programs"><ProgramsSection /></section>
          </main>
          <section id="testimonials"><TestimonialsSection /></section>
          <section id="contact"><ContactSection /></section>
          <section id="faq"><FAQSection /></section>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
