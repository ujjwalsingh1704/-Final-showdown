import React from 'react';
import Img from '../assets/Img.jpg';
import C2 from '../assets/C2.png';
import C1 from '../assets/C1.jpg';

const AboutSection = () => (
  <section id="about" className="py-20 bg-black text-white">
    <div className="max-w-6xl mx-auto px-4">
      {/* Vision & Mission Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold text-cyan-400 mb-2">Save Time and Effort with</h2>
          <h1 className="text-4xl font-extrabold text-white mb-6">INLIGHN TECH</h1>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="text-cyan-400 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639l4.25-6.5a1.012 1.012 0 011.602-.284l.404.284a1.012 1.012 0 01.284 1.602l-4.25 6.5a1.012 1.012 0 01-1.602.284l-.404-.284a1.012 1.012 0 01-.284-1.602zM12 21a9 9 0 100-18 9 9 0 000 18z" /></svg>
              </span>
              <div>
                <h3 className="text-xl font-semibold text-cyan-300">Our Vision</h3>
                <p className="text-gray-300">To be a leading EdTech platform that bridges the gap between academic knowledge and industry demands, shaping the next generation of tech innovators and leaders through hands-on, practical learning.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-cyan-400 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 1.5m-5-1.5l1-1.5m-1 1.5H5.25m7.5 0v2.25m0 0l-1 1.5m1-1.5l1 1.5m0 0l1.5-2.25m-1.5 2.25l-1.5-2.25m-6-9l1.5 2.25m-1.5-2.25l-1.5 2.25" /></svg>
              </span>
              <div>
                <h3 className="text-xl font-semibold text-cyan-300">Our Mission</h3>
                <p className="text-gray-300">To empower students and young professionals by providing immersive, real-world learning experiences through tailored internship programs, equipping them with the skills to succeed in the tech industry.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={Img} alt="Abstract Tech Illustration" className="w-80 h-80 object-cover rounded-3xl shadow-2xl border-4 border-cyan-400" />
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center">The Best Beneficial Side of INLIGHN TECH</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 bg-opacity-80 rounded-xl p-6 shadow-lg flex flex-col items-center border border-cyan-900 backdrop-blur-md transition-all duration-300 hover:shadow-cyan-400/50 hover:ring-4 hover:ring-cyan-400/60 hover:border-cyan-400">
            <h3 className="text-xl font-semibold text-white mb-2">High Quality Resources</h3>
            <p className="text-gray-300 text-center">Our expertly designed resources provide hands-on learning and real-world skills with up-to-date content.</p>
          </div>
          <div className="bg-gray-800 bg-opacity-80 rounded-xl p-6 shadow-lg flex flex-col items-center border border-cyan-900 backdrop-blur-md transition-all duration-300 hover:shadow-cyan-400/50 hover:ring-4 hover:ring-cyan-400/60 hover:border-cyan-400">
            <h3 className="text-xl font-semibold text-white mb-2">Expert Instructors</h3>
            <p className="text-gray-300 text-center">Learn from seasoned industry professionals who bring real-world experience and insights to every lesson.</p>
          </div>
          <div className="bg-gray-800 bg-opacity-80 rounded-xl p-6 shadow-lg flex flex-col items-center border border-cyan-900 backdrop-blur-md transition-all duration-300 hover:shadow-cyan-400/50 hover:ring-4 hover:ring-cyan-400/60 hover:border-cyan-400">
            <h3 className="text-xl font-semibold text-white mb-2">Internship Portal Access</h3>
            <p className="text-gray-300 text-center">Get separate portal access to all course materials and updates, allowing you to learn at your own pace.</p>
          </div>
        </div>
      </div>
      {/* Roadmap Section */}
      <div className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">We Provide Best Industry Services For You</h3>
            <p className="text-gray-300">At INLIGHN TECH, we believe that the future of education lies in bridging the gap between academic learning and industry needs. Our internship programs equip students with practical skills in Cyber Security, Full Stack Development, Data Science, and Project Management.</p>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-cyan-400 mb-4">Roadmap of Internship Journey</h2>
            <ol className="space-y-2 list-decimal list-inside text-gray-200">
              <li>Registration & Portal Access</li>
              <li>Interview Call - Next Day</li>
              <li>Offer Letter & Batch Link</li>
              <li>Select Project & Submit Work</li>
              <li>Experience & Completion Letter</li>
            </ol>
          </div>
        </div>
      </div>
      {/* Stats Section */}
      <div className="mb-16 text-center">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6">Milestones We've Reached</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-extrabold text-cyan-400">5000+</span>
            <p className="text-gray-300">Interns Enrolled</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-extrabold text-cyan-400">9000+</span>
            <p className="text-gray-300">Projects Completed</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-extrabold text-cyan-400">93%</span>
            <p className="text-gray-300">Satisfaction Rate</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-extrabold text-cyan-400">30+</span>
            <p className="text-gray-300">Top Instructors</p>
          </div>
        </div>
      </div>
      {/* Testimonials Section 1 */}
      <div className="mb-16">
        <div className="text-cyan-400 font-bold mb-2">TESTIMONIALS</div>
        <h2 className="text-2xl font-bold text-cyan-400 mb-6">What Our Interns Say</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {/* Card 1 */}
          <div className="bg-gray-800 bg-opacity-80 rounded-xl p-6 shadow-lg flex-1">
            <p className="text-gray-200 mb-4">"During my Data Analytics internship at INLIGHN TECH, I learned SQL, Power BI, and Tableau. The program focused on real-world projects, which helped me understand data-driven decision-making."</p>
            <div className="flex items-center gap-4">
              <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Mirunalini R" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h4 className="text-cyan-300 font-semibold">Mirunalini R</h4>
                <span className="text-gray-400 text-sm">Data Analyst Intern</span>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-gray-800 bg-opacity-80 rounded-xl p-6 shadow-lg flex-1">
            <p className="text-gray-200 mb-4">"I completed my Data Science internship and gained hands-on experience with Python and AI Models. Working on live projects put my knowledge in a practical context. Great mentorship!"</p>
            <div className="flex items-center gap-4">
              <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Surendra Kumar" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h4 className="text-cyan-300 font-semibold">Surendra Kumar</h4>
                <span className="text-gray-400 text-sm">Data Science Intern</span>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-gray-800 bg-opacity-80 rounded-xl p-6 shadow-lg flex-1">
            <p className="text-gray-200 mb-4">"I worked on React, Node.js, and Flask, and built web applications from scratch. The hands-on exposure and expert guidance made a big difference in my confidence as a developer."</p>
            <div className="flex items-center gap-4">
              <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Alex Johnson" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h4 className="text-cyan-300 font-semibold">Alex Johnson</h4>
                <span className="text-gray-400 text-sm">Full Stack Intern</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Recognitions Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6">Our Achievements</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="flex flex-col items-center">
            <img src={C2} alt="Certificate of Incorporation" className="h-24 w-24 object-contain mb-2" />
            <h4 className="text-cyan-300 font-semibold">Incorporation Certificate</h4>
          </div>
          <div className="flex flex-col items-center">
            <img src={C1} alt="Startup India Recognition" className="h-24 w-24 object-contain mb-2" />
            <h4 className="text-cyan-300 font-semibold">Startup India Recognition</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection; 