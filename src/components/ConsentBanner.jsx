// components/ConsentBanner.jsx
import React from 'react';

const ConsentBanner = ({ onConsent }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <p>
          We use cookies to improve your experience on our site. By using our site, you consent to cookies.
        </p>
        <div>
          <button
            onClick={() => onConsent('granted')}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          >
            Accept
          </button>
          <button
            onClick={() => onConsent('denied')}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded ml-2"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
