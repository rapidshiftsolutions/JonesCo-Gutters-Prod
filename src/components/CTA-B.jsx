import React from 'react';

export default function CallToActionGreen() { // New component name
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Protect Your Biggest Investment
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Schedule a free consultation and get a personalized quote today.
        </p>

        {/* Green Gradient Button with Pulse Animation */}
        <a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-JonesCo-Lighting-Green-500 to-JonesCo-Lighting-Green-700 hover:from-JonesCo-Lighting-Green-600 hover:to-JonesCo-Lighting-Green-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-pulse"
        >
          Book Your Free Consultation
        </a>
      </div>
    </div>
  );
}
