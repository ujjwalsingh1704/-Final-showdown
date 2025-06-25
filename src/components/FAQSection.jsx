import React from 'react';

const FAQSection = () => (
  <section id="faq" className="py-20 bg-black text-white">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10 text-center">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {/* FAQ Item 1 */}
        <div className="border-b border-gray-700 pb-4">
          <input type="checkbox" id="faq1" className="hidden peer" />
          <label htmlFor="faq1" className="block cursor-pointer text-lg font-semibold text-cyan-300 peer-checked:text-cyan-400 transition-colors">What is INLIGHN TECH?</label>
          <div className="max-h-0 overflow-hidden peer-checked:max-h-40 transition-all duration-300 text-gray-300 mt-2">
            INLIGHN TECH is an EdTech platform offering industry-oriented internship programs in Cyber Security, Full Stack Development, Data Science, and Project Management.
          </div>
        </div>
        {/* FAQ Item 2 */}
        <div className="border-b border-gray-700 pb-4">
          <input type="checkbox" id="faq2" className="hidden peer" />
          <label htmlFor="faq2" className="block cursor-pointer text-lg font-semibold text-cyan-300 peer-checked:text-cyan-400 transition-colors">How do I enroll in an internship program?</label>
          <div className="max-h-0 overflow-hidden peer-checked:max-h-40 transition-all duration-300 text-gray-300 mt-2">
            You can enroll by clicking the "Enroll Now" button under your desired program and filling out the registration form.
          </div>
        </div>
        {/* FAQ Item 3 */}
        <div className="border-b border-gray-700 pb-4">
          <input type="checkbox" id="faq3" className="hidden peer" />
          <label htmlFor="faq3" className="block cursor-pointer text-lg font-semibold text-cyan-300 peer-checked:text-cyan-400 transition-colors">Are the internships paid?</label>
          <div className="max-h-0 overflow-hidden peer-checked:max-h-40 transition-all duration-300 text-gray-300 mt-2">
            Our internships are designed for learning and skill development. Some may offer stipends based on performance and project requirements.
          </div>
        </div>
        {/* FAQ Item 4 */}
        <div className="border-b border-gray-700 pb-4">
          <input type="checkbox" id="faq4" className="hidden peer" />
          <label htmlFor="faq4" className="block cursor-pointer text-lg font-semibold text-cyan-300 peer-checked:text-cyan-400 transition-colors">Will I get a certificate?</label>
          <div className="max-h-0 overflow-hidden peer-checked:max-h-40 transition-all duration-300 text-gray-300 mt-2">
            Yes, you will receive a certificate upon successful completion of the internship program.
          </div>
        </div>
        {/* FAQ Item 5 */}
        <div className="border-b border-gray-700 pb-4">
          <input type="checkbox" id="faq5" className="hidden peer" />
          <label htmlFor="faq5" className="block cursor-pointer text-lg font-semibold text-cyan-300 peer-checked:text-cyan-400 transition-colors">How can I contact support?</label>
          <div className="max-h-0 overflow-hidden peer-checked:max-h-40 transition-all duration-300 text-gray-300 mt-2">
            You can reach out to us via the contact form or email us at info@inlighntech.com.
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FAQSection; 