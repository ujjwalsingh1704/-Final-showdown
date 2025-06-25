import React from 'react';

const MobileNav = ({ activeSection }) => {
  const isColored = activeSection !== undefined && activeSection !== '' && activeSection !== null && activeSection !== 'none' && activeSection !== 'white';
  const bgClass = isColored ? 'bg-gradient-to-br from-cyan-500 via-blue-700 to-blue-900 bg-opacity-95' : 'bg-white bg-opacity-95';
  return (
    <nav className={`md:hidden fixed top-0 left-0 w-full ${bgClass} z-40 shadow-lg transition-colors duration-300`}>
      <ul className="flex flex-col space-y-2 py-6 px-8 text-lg font-medium">
        <li><a href="#home" className={activeSection === 'home' ? 'text-cyan-400 font-bold' : 'text-gray-700 hover:text-cyan-300 transition-colors'}>Home</a></li>
        <li><a href="#about" className={activeSection === 'about' ? 'text-cyan-400 font-bold' : 'text-gray-700 hover:text-cyan-300 transition-colors'}>About Us</a></li>
        <li><a href="#programs" className={activeSection === 'programs' ? 'text-cyan-400 font-bold' : 'text-gray-700 hover:text-cyan-300 transition-colors'}>Programs</a></li>
        <li><a href="#special" className="text-gray-700 hover:text-cyan-300 transition-colors">Specials</a></li>
        <li><a href="#contact" className={activeSection === 'contact' ? 'text-cyan-400 font-bold' : 'text-gray-700 hover:text-cyan-300 transition-colors'}>Contact Us</a></li>
        <li><a href="#faq" className={activeSection === 'faq' ? 'text-cyan-400 font-bold' : 'text-gray-700 hover:text-cyan-300 transition-colors'}>FAQ</a></li>
      </ul>
    </nav>
  );
};

export default MobileNav; 