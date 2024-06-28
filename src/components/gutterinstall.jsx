import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const benefits = [
  { id: 1, icon: CheckCircleIcon, title: 'Enhance Home Protection', description: 'Seamless gutter installation ensures water is effectively diverted away from your home, protecting your foundation. Learn more about our Seamless Gutter Installation.', link: '/seamless-gutter-installation' },
  { id: 2, icon: CheckCircleIcon, title: 'Improve Curb Appeal', description: 'New gutters enhance the look of your home. Discover our Custom Gutter Solutions.', link: '/custom-gutter-solutions' },
  { id: 3, icon: CheckCircleIcon, title: 'Prevent Water Damage', description: 'Proper gutter installation prevents water damage to your roof and walls. Check out our Gutter Replacement Services.', link: '/gutter-replacement' },
  { id: 4, icon: CheckCircleIcon, title: 'Reduce Maintenance', description: 'High-quality gutters reduce the need for frequent maintenance. Explore our Gutter Guard Installation.', link: '/gutter-guards' },
  { id: 5, icon: CheckCircleIcon, title: 'Increase Property Value', description: 'Investing in new gutters can increase your home’s value. See our comprehensive Gutter Services.', link: '/services' },
  { id: 6, icon: CheckCircleIcon, title: 'Long-Term Durability', description: 'Our gutters are designed to last, providing long-term durability and peace of mind. Book a free estimate today.', link: '/contact' },
];

function GutterInstallations() {
  return (
    <div>
      {/* Section 1 - Dark Blue Background */}
      <div className="bg-JonesCo-Blue-900 text-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ExclamationTriangleIcon className="h-12 w-12 text-yellow-400 mx-auto mb-4 animate-bounce" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">Why Install New Gutters?</h2>
            <p className="mt-4 text-base sm:text-lg md:text-xl leading-8">Proper gutter installation is crucial for the protection and enhancement of your home. Here’s why it matters:</p>
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
              JonesCo Gutter Installation in 4 Steps
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            <div className="bg-JonesCo-Green-950 p-6 rounded-lg shadow-lg">
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-JonesCo-Orange-300">1. Consultation</h4>
              <p className="text-sm sm:text-base text-gray-300">
                We start with a consultation to understand your needs and provide a customized solution.<br></br> <Link href="/contact" legacyBehavior><a className="underline text-JonesCo-Green-300">Contact Us</a></Link>
              </p>
            </div>
            <div className="bg-JonesCo-Green-950 p-6 rounded-lg shadow-lg">
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-JonesCo-Orange-300">2. Customization</h4>
              <p className="text-sm sm:text-base text-gray-300">
                We design gutters that fit your home perfectly, enhancing both function and aesthetics.<br></br> <Link href="/custom-gutter-solutions" legacyBehavior><a className="underline text-JonesCo-Green-300">Learn More</a></Link>
              </p>
            </div>
            <div className="bg-JonesCo-Green-950 p-6 rounded-lg shadow-lg">
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-JonesCo-Orange-300">3. Installation</h4>
              <p className="text-sm sm:text-base text-gray-300">
                Our professional team installs your new gutters with precision and care. <br></br><Link href="/seamless-gutter-installation" legacyBehavior><a className="underline text-JonesCo-Green-300">Explore Seamless Gutter Installation</a></Link>
              </p>
            </div>
            <div className="bg-JonesCo-Green-950 p-6 rounded-lg shadow-lg">
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-JonesCo-Orange-300">4. Follow-Up</h4>
              <p className="text-sm sm:text-base text-gray-300">
                After installation, we conduct a thorough inspection and provide a detailed report. <br></br><Link href="/services" legacyBehavior><a className="underline text-JonesCo-Green-300">See All Services</a></Link>
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

export default GutterInstallations;
