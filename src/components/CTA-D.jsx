import React from 'react';
import { motion } from 'framer-motion';

export default function CallToActionCrazy() {
  return (
    <div className="bg-JonesCo-Red-500 py-16 px-4 text-center"> 
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Lighting Leaking? 
          <motion.span 
            className="text-JonesCo-Yellow-300 animate-bounce" 
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.8 }}
          > 
            
          </motion.span>
        </motion.h2>
        <motion.p 
          className="text-xl md:text-2xl text-white/80 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Stop the drip, ditch the worry. Call JonesCo for a free, no-obligation quote and let us handle it the right way!
        </motion.p>

        {/* Bold Red Button with Pulse Animation */}
        <motion.a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white hover:bg-gray-200 text-JonesCo-Red-500 font-black py-4 px-10 rounded-full shadow-xl transition duration-300 ease-in-out transform hover:scale-110 animate-pulse"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Stop the Drip NOW!
        </motion.a>
      </div>
    </div>
  );
}
