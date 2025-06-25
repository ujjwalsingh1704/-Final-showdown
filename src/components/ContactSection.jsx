import React from 'react';
import Logo from '../assets/Logo.png';

const ContactSection = () => (
  <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10 text-center">Contact Us</h2>
      <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
        <div className="flex-1 flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center space-x-2 mb-2">
            <img src={Logo} alt="INLIGHN TECH Logo" className="h-8 w-8 object-contain rounded-full shadow-md" />
            <h3 className="text-xl font-bold text-cyan-400">INLIGHN TECH</h3>
          </div>
          <p className="text-gray-300 text-center md:text-left max-w-xs">Reach out to us for any queries, support, or partnership opportunities. We are here to help you!</p>
          <ul className="text-gray-400 text-sm space-y-1">
            <li><strong className="text-cyan-400">Email:</strong> info@inlighntech.com</li>
            <li><strong className="text-cyan-400">Phone:</strong> +91 98765 43210</li>
            <li><strong className="text-cyan-400">Address:</strong> 123, Tech Park, Innovation City, India</li>
          </ul>
        </div>
        <form className="flex-1 bg-gray-800/80 rounded-2xl p-8 shadow-2xl flex flex-col space-y-4 border border-cyan-900 backdrop-blur-md transition-all duration-300 hover:shadow-cyan-400/50 hover:ring-4 hover:ring-cyan-400/60 hover:border-cyan-400">
          <h4 className="text-xl font-semibold text-cyan-300 mb-2 text-center">Send us a message</h4>
          <input type="text" className="px-4 py-2 rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Your Name" required />
          <input type="email" className="px-4 py-2 rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Your Email" required />
          <textarea className="px-4 py-2 rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Your Message" required rows={4}></textarea>
          <button type="submit" className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-4 py-2 rounded-lg shadow transition-colors">Send Message</button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactSection; 