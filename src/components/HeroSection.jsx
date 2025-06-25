import React from 'react';
import Img from '../assets/Img.jpg';

const HeroSection = () => (
  <section className="flex flex-col md:flex-row items-center justify-between min-h-[80vh] bg-gradient-to-br from-black via-gray-900 to-cyan-950 px-6 py-16">
    <div className="flex-1 flex flex-col items-start space-y-6 max-w-xl">
      <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 leading-tight drop-shadow-lg">Transform Your Career with <span className="text-white">INLIGHN TECH</span></h1>
      <p className="text-lg md:text-xl text-gray-200">Industry-oriented internships in Cyber Security, Full Stack Development, Data Science, and Project Management. Learn by doing, get certified, and launch your tech career!</p>
      <div className="flex space-x-4 mt-4">
        <a href="#programs" className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-6 py-3 rounded-lg shadow transition-colors">Explore Programs</a>
        <a href="#contact" className="bg-transparent border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold px-6 py-3 rounded-lg transition-colors">Contact Us</a>
      </div>
    </div>
    <div className="flex-1 flex justify-center mt-10 md:mt-0">
      <img src={Img} alt="Tech Illustration" className="w-80 h-80 object-cover rounded-3xl shadow-2xl border-4 border-cyan-400" />
    </div>
  </section>
);

export default HeroSection; 