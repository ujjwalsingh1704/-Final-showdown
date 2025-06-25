import React from 'react';

const VerifyPopup = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
    <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center relative">
      <button className="absolute top-4 right-4 text-gray-400 hover:text-cyan-400 text-2xl font-bold focus:outline-none" id="closeVerify">&times;</button>
      <h2 className="text-2xl font-bold text-cyan-400 mb-6">Verify Email</h2>
      <form className="w-full flex flex-col space-y-4">
        <input type="email" className="px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Email" required />
        <button type="submit" className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-4 py-2 rounded transition-colors">Send Verification</button>
      </form>
      <div className="mt-4 text-gray-400 text-sm">
        Already have an account? <a href="#" className="text-cyan-400 hover:underline" id="openLogin">Login</a>
      </div>
    </div>
  </div>
);

export default VerifyPopup; 