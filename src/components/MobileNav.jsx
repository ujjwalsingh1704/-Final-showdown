import React from 'react';

const MobileNav = () => (
  <nav className="md:hidden fixed top-0 left-0 w-full bg-black bg-opacity-90 z-40 shadow-lg transition-transform duration-300">
    <ul className="flex flex-col space-y-2 py-6 px-8 text-lg font-medium">
      <li><a href="#home" className="text-cyan-400 hover:text-cyan-300 transition-colors">Home</a></li>
      <li><a href="#about" className="text-white hover:text-cyan-300 transition-colors">About Us</a></li>
      <li><a href="#programs" className="text-white hover:text-cyan-300 transition-colors">Programs</a></li>
      <li><a href="#special" className="text-white hover:text-cyan-300 transition-colors">Specials</a></li>
      <li><a href="#contact" className="text-white hover:text-cyan-300 transition-colors">Contact Us</a></li>
    </ul>
  </nav>
);

export default MobileNav; 