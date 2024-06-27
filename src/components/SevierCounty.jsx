import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SevierCounty = () => {
  return (
    <div className="bg-JonesCo-Blue-900 text-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight text-JonesCo-Orange-200">
            Proudly Serving Sevier County, TN
          </h2>
          <p className="mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Exceptional Gutter Solutions
          </p>
        </div>

        <div className="mt-10 max-w-2xl mx-auto lg:max-w-4xl">
          <div className="text-base sm:text-lg md:text-xl leading-7 text-white">
            <p>
              Welcome to JonesCo Seamless Gutter Systems, your trusted partner in Sevier County, TN. Known for its bustling tourist towns like Gatlinburg and Pigeon Forge, Sevier County offers a vibrant mix of entertainment and natural beauty.
            </p>
            <p className="mt-6">
              Whether you&apos;re visiting Dollywood, exploring the Great Smoky Mountains National Park, or enjoying a day at Ober Gatlinburg, we understand the specific needs of homes in Sevier County. Our mission is to ensure your gutters are in perfect condition to protect your home from the elements.
            </p>
            <p className="mt-6">Our comprehensive services include:</p>
            <ul className="list-disc list-inside mt-4">
              <li><Link href="/gutter-cleaning"><a className="underline text-JonesCo-Orange-200">Thorough Gutter Cleaning Services</a></Link></li>
              <li><Link href="/gutter-guards"><a className="underline text-JonesCo-Orange-200">High-Quality Gutter Guard Installation</a></Link></li>
              <li><Link href="/gutter-replacement"><a className="underline text-JonesCo-Orange-200">Seamless Gutter Replacement</a></Link></li>
              <li><Link href="/gutter-replacement"><a className="underline text-JonesCo-Orange-200">Rain Gutter Repair</a></Link></li>
              <li><Link href="/services"><a className="underline text-JonesCo-Orange-200">Gutter Maintenance</a></Link></li>
            </ul>
            <p className="mt-6">
              Join the many satisfied homeowners in Sevier County who trust JonesCo for their gutter needs. We combine local expertise with a commitment to exceptional service to deliver results that last. Whether you need residential gutter services or commercial gutter services, we have you covered.
            </p>
            <p className="mt-6">
              Discover the JonesCo difference today and see why we are the go-to gutter professionals in Sevier County. We offer reliable gutter services, custom gutters, and affordable gutter services to ensure your property is protected.
            </p>
            <p className="mt-6 font-bold">
              Contact us today at <Link href="/contact"><a className="underline text-JonesCo-Orange-200">jonescogutters.com/contact</a></Link> or call 423-207-3325 to schedule your free, no-obligation quote!
            </p>
          </div>
          <div className="mt-10 lg:mt-16 flex justify-center">
            <Image 
              src="/images/sevier-county-landmark.jpg" 
              alt="Sevier County Landmark" 
              className="rounded-lg shadow-lg object-cover" 
              width={700} 
              height={400} 
            />
          </div>
          <div className="text-base sm:text-lg md:text-xl leading-7 text-white mt-10">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight text-JonesCo-Orange-200">
              6 Essential Tips for Maintaining Your Gutters
            </h3>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-JonesCo-Blue-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-white">1. Regular Cleaning</h4>
                <p className="mt-2 text-white">Keep your gutters clear of debris with regular <Link href="/gutter-cleaning"><a className="underline text-JonesCo-Orange-200">gutter cleaning services</a></Link>.</p>
              </div>
              <div className="bg-JonesCo-Blue-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-white">2. Install Gutter Guards</h4>
                <p className="mt-2 text-white">Reduce maintenance needs by installing <Link href="/gutter-guards"><a className="underline text-JonesCo-Orange-200">high-quality gutter guards</a></Link>.</p>
              </div>
              <div className="bg-JonesCo-Blue-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-white">3. Regular Inspections</h4>
                <p className="mt-2 text-white">Schedule regular inspections to catch and address issues early. Learn more about our <Link href="/services"><a className="underline text-JonesCo-Orange-200">gutter maintenance</a></Link>.</p>
              </div>
              <div className="bg-JonesCo-Blue-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-white">4. Repair Damages Promptly</h4>
                <p className="mt-2 text-white">Don’t delay in fixing gutter issues. Our <Link href="/gutter-replacement"><a className="underline text-JonesCo-Orange-200">rain gutter repair</a></Link> services are here to help.</p>
              </div>
              <div className="bg-JonesCo-Blue-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-white">5. Ensure Proper Slope</h4>
                <p className="mt-2 text-white">Make sure your gutters have the correct slope to avoid standing water.</p>
              </div>
              <div className="bg-JonesCo-Blue-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-white">6. Use Seamless Gutters</h4>
                <p className="mt-2 text-white">Consider upgrading to <Link href="/seamless-gutter-installation"><a className="underline text-JonesCo-Orange-200">seamless gutters</a></Link> for enhanced durability and performance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SevierCounty;
