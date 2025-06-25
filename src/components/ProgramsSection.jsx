import React from 'react';
import ISO from '../assets/ISO.png';
import SI from '../assets/SI.png';
import Certification from '../assets/Certification.jpg';
import Logo from '../assets/Logo.png';
import MCA from '../assets/MCA.webp';

const ProgramsSection = () => (
  <section id="programs" className="py-20 bg-black text-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10 text-center">Our Internship Programs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="bg-gray-800 bg-opacity-80 rounded-xl p-6 shadow-lg flex flex-col items-center border border-cyan-900 backdrop-blur-md transition-all duration-300 hover:shadow-cyan-400/50 hover:ring-4 hover:ring-cyan-400/60 hover:border-cyan-400">
          <img src={Logo} alt="Cyber Security" className="h-16 w-16 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2 text-center">Cyber Security Internship</h3>
          <ul className="text-gray-300 mb-4 space-y-1 text-center">
            <li>Network Security</li>
            <li>Ethical Hacking</li>
            <li>VAPT</li>
            <li>SIEM Tools</li>
            <li>Incident Response</li>
          </ul>
          <button className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-4 py-2 rounded transition-colors">Enroll Now</button>
        </div>
        <div className="bg-gray-800 bg-opacity-80 rounded-xl p-6 shadow-lg flex flex-col items-center border border-cyan-900 backdrop-blur-md transition-all duration-300 hover:shadow-cyan-400/50 hover:ring-4 hover:ring-cyan-400/60 hover:border-cyan-400">
          <img src={Logo} alt="Full Stack Development" className="h-16 w-16 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2 text-center">Full Stack Development Internship</h3>
          <ul className="text-gray-300 mb-4 space-y-1 text-center">
            <li>HTML, CSS, JS</li>
            <li>React & Node.js</li>
            <li>MongoDB</li>
            <li>REST APIs</li>
            <li>Deployment</li>
          </ul>
          <button className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-4 py-2 rounded transition-colors">Enroll Now</button>
        </div>
        <div className="bg-gray-800 bg-opacity-80 rounded-xl p-6 shadow-lg flex flex-col items-center border border-cyan-900 backdrop-blur-md transition-all duration-300 hover:shadow-cyan-400/50 hover:ring-4 hover:ring-cyan-400/60 hover:border-cyan-400">
          <img src={Logo} alt="Data Science" className="h-16 w-16 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2 text-center">Data Science Internship</h3>
          <ul className="text-gray-300 mb-4 space-y-1 text-center">
            <li>Python & R</li>
            <li>Data Analysis</li>
            <li>Machine Learning</li>
            <li>Power BI</li>
            <li>Tableau</li>
          </ul>
          <button className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-4 py-2 rounded transition-colors">Enroll Now</button>
        </div>
        <div className="bg-gray-800 bg-opacity-80 rounded-xl p-6 shadow-lg flex flex-col items-center border border-cyan-900 backdrop-blur-md transition-all duration-300 hover:shadow-cyan-400/50 hover:ring-4 hover:ring-cyan-400/60 hover:border-cyan-400">
          <img src={Logo} alt="Project Management" className="h-16 w-16 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2 text-center">Project Management Internship</h3>
          <ul className="text-gray-300 mb-4 space-y-1 text-center">
            <li>Agile & Scrum</li>
            <li>Project Planning</li>
            <li>Risk Management</li>
            <li>Stakeholder Management</li>
            <li>Project Delivery</li>
          </ul>
          <button className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-4 py-2 rounded transition-colors">Enroll Now</button>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Our Accreditations</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center">
            <img src={ISO} alt="ISO Certified" className="h-12 w-12 mb-2" />
            <h4 className="text-gray-400 text-sm">ISO Certified</h4>
          </div>
          <div className="flex flex-col items-center">
            <img src={SI} alt="Startup India" className="h-12 w-12 mb-2" />
            <h4 className="text-gray-400 text-sm">Startup India</h4>
          </div>
          <div className="flex flex-col items-center">
            <img src={Certification} alt="Certification" className="h-12 w-12 mb-2" />
            <h4 className="text-gray-400 text-sm">Certification</h4>
          </div>
          <div className="flex flex-col items-center">
            <img src={MCA} alt="MCA Registered" className="h-12 w-12 mb-2" />
            <h4 className="text-gray-400 text-sm">MCA Registered</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProgramsSection; 