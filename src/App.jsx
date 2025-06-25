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

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App w-full min-h-screen bg-black">
      <WhatsAppWidget />
      <div className="w-full min-h-screen">
        <Header />
        <MobileNav />
        {/* Main Content */}
        <div id="page-content" className="w-full">
          <main id="home" className="page-section active w-full">
            <HeroSection />
            <AboutSection />
            <hr className="break" />
            <div className="accreditations animate-in space" id="accreditations-container"></div>
            <hr className="break" />
            <h2 className="section-title brand-name acd" >We Provide Best Internships For You</h2>
            <FeaturesSection />
            <ProgramsSection />
          </main>
          <TestimonialsSection />
          <ContactSection />
          <FAQSection />
          <Footer />
          {/* ...rest of your sections/components go here... */}
        </div>
      </div>
    </div>
  );
}

export default App;
