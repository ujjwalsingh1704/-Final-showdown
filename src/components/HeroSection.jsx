import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

const fullText = 'Transform Your Career with INLIGHN TECH';

const HeroSection = () => {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // Split for coloring 'INLIGHN TECH' white
  const cyanPart = 'Transform Your Career with ';
  const whitePart = 'INLIGHN TECH';
  const cyanLength = cyanPart.length;

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between w-screen min-h-screen max-w-none bg-gradient-to-br from-black via-gray-960 to-cyan-950 px-6 py-16 overflow-hidden">
      <Spline
        scene="https://prod.spline.design/OIm1HAg1TEVDAwc6/scene.splinecode"
        style={{ position: 'absolute', inset: 0, width: '100vw', height: '100vh', zIndex: 0 }}
      />
      
    </section>
  );
};

export default HeroSection;