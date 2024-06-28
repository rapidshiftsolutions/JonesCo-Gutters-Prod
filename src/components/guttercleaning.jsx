import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const benefits = [
  { id: 1, icon: CheckCircleIcon, title: 'Prevent Water Damage', description: 'Clean gutters redirect water away from your home, protecting it from costly water damage. Learn more about our Gutter Cleaning Services.', link: '/gutter-cleaning' },
  { id: 2, icon: CheckCircleIcon, title: 'Reduce Pest Infestation', description: 'Avoid attracting insects and rodents with clear gutters. Discover our Gutter Guard Installation.', link: '/gutter-guards' },
  { id: 3, icon: CheckCircleIcon, title: 'Stop Mold Growth', description: 'Proper drainage reduces the risk of mold and mildew. Check out our Seamless Gutter Installation.', link: '/seamless-gutter-installation' },
  { id: 4, icon: CheckCircleIcon, title: 'Maintain Curb Appeal', description: 'Keep your home looking its best with well-maintained gutters. Explore our Gutter Replacement Services.', link: '/gutter-replacement' },
  { id: 5, icon: CheckCircleIcon, title: 'Eliminate Fire Hazards', description: 'Remove debris to reduce fire risk during dry seasons. See our comprehensive Gutter Maintenance services.', link: '/services' },
  { id: 6, icon: CheckCircleIcon, title: 'Extend Gutter Life', description: 'Regular cleaning extends the lifespan of your gutter system. Book a free estimate today.', link: '/contact' },
];

function GutterCleaning() {
  return (
    <div>
      {/* Section 1 - Dark Blue Background */}
      <div className="bg-JonesCo-Blue-900 text-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ExclamationTriangleIcon className="h-12 w-12 text-yellow-400 mx-auto mb-4 animate-bounce" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">Why Clean Your Gutters?</h2>
            <p className="mt-4 text-base sm:text-lg md:text-xl leading-8">Regular gutter maintenance prevents costly damage and keeps your home safe. Here’s why it matters:</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <motion.div 
                key={benefit.id} 
                className="flex flex-col items-center bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <benefit.icon className="h-10 w-10 text-yellow-400 mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-center">{benefit.description}</p>
                <Link href={benefit.link} legacyBehavior>
                  <a className="mt-2 text-JonesCo-Blue-500 hover:text-JonesCo-Blue-700 underline">Learn More</a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2 - Dark Green Background */}
      <div className="bg-JonesCo-Green-800 text-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black leading-tight text-JonesCo-Green-100">
              JonesCo Gutter Cleaning in 4 Steps
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            <div className="bg-JonesCo-Green-950 p-6 rounded-lg shadow-lg">
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-JonesCo-Orange-300">1. Inspection</h4>
              <p className="text-sm sm:text-base text-gray-300">
                Our team conducts a thorough inspection to identify problem areas and determine the best cleaning approach.<br></br> <Link href="/contact" legacyBehavior><a className="underline text-JonesCo-Green-300">Contact Us</a></Link>
              </p>
            </div>
            <div className="bg-JonesCo-Green-950 p-6 rounded-lg shadow-lg">
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-JonesCo-Orange-300">2. Cleaning</h4>
              <p className="text-sm sm:text-base text-gray-300">
                We use professional tools to remove debris, ensuring your gutters are clean and free-flowing.<br></br> <Link href="/gutter-cleaning" legacyBehavior><a className="underline text-JonesCo-Green-300">Learn More</a></Link>
              </p>
            </div>
            <div className="bg-JonesCo-Green-950 p-6 rounded-lg shadow-lg">
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-JonesCo-Orange-300">3. Flushing</h4>
              <p className="text-sm sm:text-base text-gray-300">
                We flush the gutters and downspouts to ensure proper water flow and drainage. <br></br><Link href="/downspouts" legacyBehavior><a className="underline text-JonesCo-Green-300">Explore Downspout Services</a></Link>
              </p>
            </div>
            <div className="bg-JonesCo-Green-950 p-6 rounded-lg shadow-lg">
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-JonesCo-Orange-300">4. Inspection & Report</h4>
              <p className="text-sm sm:text-base text-gray-300">
                After cleaning, we inspect the gutters to ensure they are in optimal condition and provide a detailed report. <br></br><Link href="/services" legacyBehavior><a className="underline text-JonesCo-Green-300">See All Services</a></Link>
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 sm:px-8 sm:py-3 text-base sm:text-lg font-medium text-JonesCo-Green-900 hover:bg-yellow-600"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Contact Us for a Free Estimate
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GutterCleaning;
