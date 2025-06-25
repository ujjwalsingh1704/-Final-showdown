import React from 'react';
import ISO from '../assets/ISO.png';
import SI from '../assets/SI.png';
import Certification from '../assets/Certification.jpg';
import Logo from '../assets/Logo.png';
import MCA from '../assets/MCA.webp';

const FeaturesSection = () => (
  <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10 text-center">Why Choose INLIGHN TECH?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="flex flex-col items-center bg-gray-800 bg-opacity-80 rounded-xl p-6 shadow-lg">
          <img src={Logo} alt="Expert Instructors" className="h-16 w-16 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Expert Instructors</h3>
          <p className="text-gray-300 text-center">Learn from industry professionals with real-world experience and insights.</p>
        </div>
        <div className="flex flex-col items-center bg-gray-800 bg-opacity-80 rounded-xl p-6 shadow-lg">
          <img src={ISO} alt="ISO Certified" className="h-16 w-16 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">ISO Certified</h3>
          <p className="text-gray-300 text-center">Our programs are ISO certified, ensuring quality and industry relevance.</p>
        </div>
        <div className="flex flex-col items-center bg-gray-800 bg-opacity-80 rounded-xl p-6 shadow-lg">
          <img src={SI} alt="Startup India" className="h-16 w-16 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Startup India</h3>
          <p className="text-gray-300 text-center">Recognized by Startup India for innovation and impact in EdTech.</p>
        </div>
        <div className="flex flex-col items-center bg-gray-800 bg-opacity-80 rounded-xl p-6 shadow-lg">
          <img src={Certification} alt="Certification" className="h-16 w-16 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Certification</h3>
          <p className="text-gray-300 text-center">Earn industry-recognized certificates to boost your career prospects.</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex flex-col items-center">
          <img src={MCA} alt="MCA Registered" className="h-12 w-12 mb-2" />
          <span className="text-gray-400 text-sm">MCA Registered</span>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection; 