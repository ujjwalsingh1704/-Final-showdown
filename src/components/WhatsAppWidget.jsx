import React from 'react';

const WhatsAppWidget = () => (
  <a
    href="https://wa.me/919876543210"
    className="fixed bottom-6 right-6 z-50 bg-green-500 rounded-full shadow-lg p-3 hover:bg-green-600 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 48 48"
      fill="none"
      className=""
    >
      <circle cx="24" cy="24" r="24" fill="#25D366" />
      <path
        d="M34.6 29.2c-.5-.2-2.8-1.4-3.2-1.6-.4-.2-.7-.2-1 .2-.3.4-1.1 1.6-1.4 1.9-.3.3-.5.4-1 .1-.5-.2-2-0.7-3.8-2.2-1.4-1.2-2.3-2.7-2.6-3.2-.3-.5 0-.7.2-1 .2-.2.5-.6.7-.9.2-.3.2-.5.3-.8.1-.3 0-.6-.1-.8-.1-.2-1-2.4-1.4-3.3-.4-.9-.7-.8-1-.8-.3 0-.6 0-.9 0-.3 0-.8.1-1.2.5-.4.4-1.6 1.6-1.6 3.8 0 2.2 1.6 4.3 1.8 4.6.2.3 3.1 4.7 7.7 6.1.7.2 1.3.3 1.7.4.7.1 1.3.1 1.8.1.5 0 1.5-.2 2.1-.7.6-.5 1.1-1.2 1.2-1.6.1-.4.1-.7.1-.8 0-.1-.2-.2-.7-.4z"
        fill="#fff"
      />
    </svg>
  </a>
);

export default WhatsAppWidget; 