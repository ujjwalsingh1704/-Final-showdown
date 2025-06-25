import React from 'react';
import Logo from '../assets/Logo.png';

const Header = () => (
  <header className="flex items-center justify-between py-4 px-6 bg-black bg-opacity-80 shadow-md sticky top-0 z-50">
    <div className="flex items-center space-x-3">
      <img src={Logo} alt="Inlighn Tech Logo" className="h-10 w-10 object-contain" />
      <span className="text-2xl font-bold text-cyan-400 tracking-wide">INLIGHN TECH</span>
    </div>
    <nav className="hidden md:block">
      <ul className="flex space-x-6 text-lg font-medium">
        <li><a href="#home" className="text-cyan-400 hover:text-cyan-300 transition-colors">Home</a></li>
        <li><a href="#about" className="text-white hover:text-cyan-300 transition-colors">About Us</a></li>
        <li><a href="#programs" className="text-white hover:text-cyan-300 transition-colors">Programs</a></li>
        <li><a href="#special" className="text-white hover:text-cyan-300 transition-colors">Specials</a></li>
        <li><a href="#contact" className="text-white hover:text-cyan-300 transition-colors">Contact Us</a></li>
      </ul>
    </nav>
    <div className="flex items-center space-x-3">
      <button className="btn btn-primary loginPortal bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-4 py-2 rounded transition-colors">Login</button>
      <button className="btn btn-primary verifyPortal bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-4 py-2 rounded transition-colors">Verify</button>
      <div className="md:hidden ml-2 cursor-pointer burger-menu">
        <i className="fas fa-bars text-2xl text-cyan-400"></i>
      </div>
    </div>
  </header>
);

export default Header; 