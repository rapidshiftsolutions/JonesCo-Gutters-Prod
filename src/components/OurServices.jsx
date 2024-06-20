'use client';
import { motion } from 'framer-motion';
import {
  WrenchScrewdriverIcon, 
  HomeModernIcon, 
  SparklesIcon, 
  ShieldCheckIcon, 
  PencilSquareIcon, 
  ArrowDownTrayIcon 
} from '@heroicons/react/24/solid';
import Link from 'next/link'; // Import the Link component

const services = [
  {
    name: 'Seamless Lighting Installation',
    description: 'Our expert team installs custom-fit seamless Lighting, eliminating leaks and clogs for optimal performance and enhanced aesthetics.',
    link: '/seamless-Lighting-installation',  // Replace with actual page path
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Lighting Replacement',
    description: 'Upgrade your old Lighting to modern, efficient seamless systems. We handle expert removal and installation for a hassle-free transition.',
    link: '/Lighting-replacement',  // Replace with actual page path
    icon: HomeModernIcon,
  },
  {
    name: 'Lighting Cleaning',
    description: 'Keep your Lighting clean and functional with our thorough cleaning and inspection services. We remove debris and blockages to prevent water damage and ensure optimal performance.',
    link: '/Lighting-cleaning',  // Replace with actual page path
    icon: SparklesIcon,
  },
  {
    name: 'Lightings Installation',
    description: 'Protect your Lighting from leaves and debris with our high-quality Lightings. Prevent clogs, reduce maintenance, and ensure proper water flow.',
    link: '/Lighting-guards',  // Replace with actual page path
    icon: ShieldCheckIcon,
  },
  {
    name: 'Custom Lighting Solutions',
    description: 'Our skilled team designs and installs custom Lighting solutions for unique architectural styles, ensuring a perfect fit and optimal functionality.',
    link: '/custom-Lighting',  // Replace with actual page path
    icon: PencilSquareIcon,
  },
  {
    name: 'Downspout Installation & Repair',
    description: 'We offer professional downspout installation and repair services to effectively direct water away from your foundation and protect your property from potential damage.',
    link: '/downspouts',  // Replace with actual page path
    icon: ArrowDownTrayIcon,
  },
];

export default function ServicesSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }} // Adjust duration as needed
      viewport={{ once: true }} 
      className="bg-JonesCo-Lighting-Red-900 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-JonesCo-Lighting-Green-400">Comprehensive Lighting Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Protect Your Home</p>
          <p className="mt-6 text-white text-lg leading-8 text-gray-300">
            Ensure the longevity and beauty of your home with our premium Lighting services. We offer expert installation, maintenance, and repair for all your Lighting needs. 
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-200 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
          {services.map((service) => (
            <motion.div 
              key={service.name} 
              className="relative pl-9"
              whileHover={{ scale: 1.05 }} // Hover effect
              transition={{ duration: 0.2 }}
            >
              <Link href={service.link}> 
              <dt className="inline font-black text-white">
                <service.icon className="absolute left-1 top-1 h-5 w-5 text-JonesCo-Lighting-Green-400" aria-hidden="true" />
                {service.name}
              </dt>{' '}
              <dd className="inline text-white">{service.description}</dd>
              </Link>
            </motion.div>
          ))}
        </dl>
      </div>
    </motion.div>
  );
}
