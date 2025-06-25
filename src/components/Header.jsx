import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'programs', label: 'Programs' },
  { id: 'contact', label: 'Contact Us' },
  { id: 'faq', label: 'FAQ' },
];

const Header = ({ activeSection }) => {
  const [clicked, setClicked] = useState(null);

  const handleClick = (id) => {
    setClicked(id);
    // Optionally scroll to section
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Use clicked if set, otherwise activeSection
  const current = clicked || activeSection;

  return (
    <header className="flex items-center justify-between py-4 px-6 bg-black bg-opacity-80 shadow-md sticky top-0 z-50">
      <div className="flex items-center space-x-3">
        <img src={Logo} alt="Inlighn Tech Logo" className="h-10 w-10 object-contain" />
        <span className="text-2xl font-bold text-cyan-400 tracking-wide">INLIGHN TECH</span>
      </div>
      <nav className="hidden md:block">
        <ul className="flex space-x-6 text-lg font-medium">
          {navLinks.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={current === link.id ? 'text-cyan-400 font-bold' : 'text-white hover:text-cyan-300 transition-colors'}
                onClick={e => {
                  e.preventDefault();
                  handleClick(link.id);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center space-x-3">
        <Link to="/login" className="btn btn-primary loginPortal bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-4 py-2 rounded transition-colors">Login</Link>
        <div className="md:hidden ml-2 cursor-pointer burger-menu">
          <i className="fas fa-bars text-2xl text-cyan-400"></i>
        </div>
      </div>
    </header>
  );
};

export default Header; 