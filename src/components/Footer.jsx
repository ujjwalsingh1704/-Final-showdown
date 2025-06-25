import React from 'react';
import Logo from '../assets/Logo.png';

const Footer = () => (
  <footer className="bg-black text-white py-8 border-t border-gray-800">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex items-center space-x-3 mb-4 md:mb-0">
        <img src={Logo} alt="INLIGHN TECH Logo" className="h-10 w-10 object-contain" />
        <span className="text-2xl font-bold text-cyan-400 tracking-wide">INLIGHN TECH</span>
      </div>
      <ul className="flex space-x-6 text-lg font-medium mb-4 md:mb-0">
        <li><a href="#about" className="text-white hover:text-cyan-400 transition-colors">About</a></li>
        <li><a href="#programs" className="text-white hover:text-cyan-400 transition-colors">Programs</a></li>
        <li><a href="#contact" className="text-white hover:text-cyan-400 transition-colors">Contact</a></li>
        <li><a href="#faq" className="text-white hover:text-cyan-400 transition-colors">FAQ</a></li>
      </ul>
      <div className="flex space-x-4 mb-4 md:mb-0">
        <a href="https://www.linkedin.com/company/inlighntech/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-cyan-400 hover:text-cyan-300 text-2xl transition-colors">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/inlighntech/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-cyan-400 hover:text-cyan-300 text-2xl transition-colors">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-cyan-400 hover:text-cyan-300 text-2xl transition-colors">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
      <div className="text-gray-400 text-sm text-center md:text-right w-full md:w-auto">&copy; {new Date().getFullYear()} INLIGHN TECH. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer; 