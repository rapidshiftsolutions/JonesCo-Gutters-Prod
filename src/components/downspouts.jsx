import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const benefits = [
  { id: 1, icon: CheckCircleIcon, title: 'Improved Water Flow', description: 'New downspouts enhance water flow and prevent clogging. Learn more about our Downspout Installation and Replacement Services.', link: '/downspouts' },
  { id: 2, icon: CheckCircleIcon, title: 'Prevent Water Damage', description: 'Properly installed downspouts direct water away from your foundation, protecting your home from water damage. Discover our Seamless Gutter Installation.', link: '/seamless-gutter-installation' },
  { id: 3, icon: CheckCircleIcon, title: 'Enhanced Curb Appeal', description: 'Downspouts come in various styles and colors to match your home’s exterior. Check out our Custom Gutter Solutions.', link: '/custom-gutter-solutions' },
  { id: 4, icon: CheckCircleIcon, title: 'Durability', description: 'We use high-quality materials to ensure your downspouts last longer. Explore our Gutter Replacement Services.', link: '/gutter-replacement' },
  { id: 5, icon: CheckCircleIcon, title: 'Reduced Erosion', description: 'Properly directed water flow reduces soil erosion around your home. See our comprehensive Gutter Maintenance services.', link: '/services' },
  { id: 6, icon: CheckCircleIcon, title: 'Professional Installation', description: 'Our experienced team ensures your downspouts are installed correctly. Book a free estimate today.', link: '/contact' },
];

function DownspoutInstallation() {
  return (
    <div>
      {/* Section 1 - Dark Blue Background */}
      <div className="bg-JonesCo-Blue-900 text-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ExclamationTriangleIcon className="h-12 w-12 text-yellow-400 mx-auto mb-4 animate-bounce" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">Why Install or Replace Downspouts?</h2>
            <p className="mt-4 text-base sm:text-lg md:text-xl leading-8">Proper downspout installation is crucial for effective water management and home protection. Here’s why it matters:</p>
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
              Downspout Installation in 4 Steps
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            <div className="bg-JonesCo-Green-950 p-6 rounded-lg shadow-lg">
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-JonesCo-Orange-300">1. Assessment</h4>
              <p className="text-sm sm:text-base text-gray-300">
                Our team conducts a thorough assessment to determine the best placement and type of downspouts for your home.<br></br> <Link href="/contact" legacyBehavior><a className="underline text-JonesCo-Green-300">Contact Us</a></Link>
              </p>
            </div>
            <div className="bg-JonesCo-Green-950 p-6 rounded-lg shadow-lg">
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-JonesCo-Orange-300">2. Customization</h4>
              <p className="text-sm sm:text-base text-gray-300">
                We customize the downspouts to fit your home’s specific needs and aesthetic preferences.<br></br> <Link href="/custom-gutter-solutions" legacyBehavior><a className="underline text-JonesCo-Green-300">Learn More</a></Link>
              </p>
            </div>
            <div className="bg-JonesCo-Green-950 p-6 rounded-lg shadow-lg">
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-JonesCo-Orange-300">3. Installation</h4>
              <p className="text-sm sm:text-base text-gray-300">
                Our expert team installs the downspouts, ensuring proper alignment and secure attachment. <br></br><Link href="/seamless-gutter-installation" legacyBehavior><a className="underline text-JonesCo-Green-300">Explore Seamless Gutter Installation</a></Link>
              </p>
            </div>
            <div className="bg-JonesCo-Green-950 p-6 rounded-lg shadow-lg">
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-JonesCo-Orange-300">4. Inspection & Maintenance</h4>
              <p className="text-sm sm:text-base text-gray-300">
                We inspect the installation to ensure everything is functioning properly and provide ongoing maintenance tips. <br></br><Link href="/services" legacyBehavior><a className="underline text-JonesCo-Green-300">See All Services</a></Link>
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

export default DownspoutInstallation;
