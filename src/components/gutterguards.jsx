import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const GutterGuards = () => {
  return (
    <div className="bg-JonesCo-Blue-900 text-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight text-JonesCo-Orange-200">
            Why Install Gutter Guards?
          </h2>
          <p className="mt-2 text-base sm:text-lg md:text-xl leading-8 text-gray-300">
            Gutter guards prevent debris from clogging your gutters, ensuring efficient water flow and reducing maintenance needs. At JonesCo, we provide top-quality gutter guard solutions tailored to your home.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-JonesCo-Orange-200 text-center">
            JonesCo Gutter Guard Installation in 4 Steps
          </h3>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            <div className="bg-JonesCo-Blue-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-JonesCo-Green-300">1. Assessment</h4>
              <p className="text-sm sm:text-base text-gray-300">
                We start with a thorough assessment of your current gutter system to determine the best type of gutter guards for your home.
              </p>
            </div>
            <div className="bg-JonesCo-Blue-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-JonesCo-Green-300">2. Customization</h4>
              <p className="text-sm sm:text-base text-gray-300">
                Our team customizes the gutter guards to fit your gutters perfectly, ensuring maximum protection and efficiency.
              </p>
            </div>
            <div className="bg-JonesCo-Blue-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-JonesCo-Green-300">3. Installation</h4>
              <p className="text-sm sm:text-base text-gray-300">
                Professional installation guarantees that your gutter guards are securely and properly fitted, providing long-lasting performance.
              </p>
            </div>
            <div className="bg-JonesCo-Blue-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-JonesCo-Green-300">4. Maintenance</h4>
              <p className="text-sm sm:text-base text-gray-300">
                We offer ongoing maintenance services to keep your gutter guards in excellent condition, ensuring your gutters remain debris-free.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <motion.a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 sm:px-8 sm:py-3 text-base sm:text-lg font-medium text-JonesCo-Blue-900 hover:bg-yellow-600"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Contact Us for a Free Estimate
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default GutterGuards;
