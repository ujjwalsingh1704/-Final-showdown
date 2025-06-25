import React from 'react';
import Logo from '../assets/Logo.png';

const Loader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-cyan-500 via-blue-700 to-blue-900 animate-pulse">
    <div className="flex flex-col items-center justify-center w-48 h-48 rounded-full bg-black/60 shadow-2xl border-4 border-cyan-400 animate-spin-slow">
      <img src={Logo} alt="" className="w-32 h-32 object-contain" />
    </div>
  </div>
);

export default Loader; 