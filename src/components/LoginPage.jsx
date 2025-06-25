import React from 'react';
import Logo from '../assets/Logo.png';

const LoginPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-900 via-blue-900 to-black">
    <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center relative">
      <img src={Logo} alt="INLIGHN TECH Logo" className="h-12 w-12 object-contain mb-4" />
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">Login to Your Account</h2>
      <form className="w-full flex flex-col space-y-4">
        <input type="email" className="px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Email" required />
        <input type="password" className="px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Password" required />
        <button type="submit" className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-4 py-2 rounded transition-colors">Login</button>
      </form>
      <div className="w-full flex justify-between mt-4 text-gray-400 text-sm">
        <a href="#" className="hover:underline text-cyan-400">Forgot password?</a>
        <a href="#" className="hover:underline text-cyan-400">Sign up</a>
      </div>
    </div>
  </div>
);

export default LoginPage; 