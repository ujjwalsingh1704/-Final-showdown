import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

const fullText = 'Transform Your Career with INLIGHN TECH';

const HeroSection = () => {
  const [displayed, setDisplayed] = useState('');

 
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between w-screen min-h-screen max-w-none bg-gradient-to-br from-black via-gray-960 to-cyan-950 px-6 py-16 overflow-hidden">
      <Spline
        scene="https://prod.spline.design/a3zpHxbFcZz2fvMp/scene.splinecode" 
        style={{ position: 'absolute', inset: 0, width: '100vw', height: '100vh', zIndex: 0 }}
      />
      
    </section>
  );
};

export default HeroSection;