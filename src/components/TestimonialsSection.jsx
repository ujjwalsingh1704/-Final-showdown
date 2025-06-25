import React from 'react';

const TestimonialsSection = () => (
  <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10 text-center">What Our Interns Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Testimonial 1 */}
        <div className="bg-gray-800 bg-opacity-80 rounded-xl p-8 shadow-lg flex flex-col items-center">
          <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Mirunalini R" className="w-16 h-16 rounded-full object-cover mb-4" />
          <p className="text-gray-200 mb-4 text-center">"During my Data Analytics internship at INLIGHN TECH, I learned SQL, Power BI, and Tableau. The program focused on real-world projects, which helped me understand data-driven decision-making."</p>
          <h4 className="text-cyan-300 font-semibold">Mirunalini R</h4>
          <span className="text-gray-400 text-sm">Data Analyst Intern</span>
        </div>
        {/* Testimonial 2 */}
        <div className="bg-gray-800 bg-opacity-80 rounded-xl p-8 shadow-lg flex flex-col items-center">
          <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Surendra Kumar" className="w-16 h-16 rounded-full object-cover mb-4" />
          <p className="text-gray-200 mb-4 text-center">"I completed my Data Science internship and gained hands-on experience with Python and AI Models. Working on live projects put my knowledge in a practical context. Great mentorship!"</p>
          <h4 className="text-cyan-300 font-semibold">Surendra Kumar</h4>
          <span className="text-gray-400 text-sm">Data Science Intern</span>
        </div>
        {/* Testimonial 3 */}
        <div className="bg-gray-800 bg-opacity-80 rounded-xl p-8 shadow-lg flex flex-col items-center">
          <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Alex Johnson" className="w-16 h-16 rounded-full object-cover mb-4" />
          <p className="text-gray-200 mb-4 text-center">"I worked on React, Node.js, and Flask, and built web applications from scratch. The hands-on exposure and expert guidance made a big difference in my confidence as a developer."</p>
          <h4 className="text-cyan-300 font-semibold">Alex Johnson</h4>
          <span className="text-gray-400 text-sm">Full Stack Intern</span>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection; 