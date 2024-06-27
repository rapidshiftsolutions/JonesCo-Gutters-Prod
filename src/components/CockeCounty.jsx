import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CockeCounty = () => {
  return (
    <div className="bg-JonesCo-Blue-900 text-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight text-JonesCo-Green-200">
            Serving Cocke County, TN
          </h2>
          <p className="mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Gutter Experts in the Smokies
          </p>
        </div>

        <div className="mt-10 max-w-2xl mx-auto lg:max-w-4xl">
          <div className="mt-10 lg:mt-16 flex justify-center">
            <Image 
              src="/images/cocke-county-landmark.jpg" 
              alt="Cocke County Landmark" 
              className="rounded-lg shadow-lg object-cover" 
              width={700} 
              height={400} 
            />
          </div>
          <div className="text-base sm:text-lg md:text-xl leading-7 text-white mt-10">
            <p>
              Welcome to JonesCo Seamless Gutter Systems, your trusted partner for gutter solutions in Cocke County, TN. Nestled in the stunning Smoky Mountains, Cocke County is renowned for its natural beauty, from the tranquil trails of Cosby to the vibrant waters of the Pigeon River.
            </p>
            <p className="mt-6">
              Whether you&apos;re cheering for the Cocke County Fighting Cocks or exploring the charming town of Newport, we understand the unique challenges your home faces in this beautiful region. Our mission is to ensure your gutters are ready to protect your home, no matter the weather.
            </p>
            <p className="mt-6">Our comprehensive services include:</p>
            <ul className="list-disc list-inside mt-4">
              <li>Professional <Link href="/gutter-cleaning"><a className="underline text-JonesCo-Green-200">Gutter Cleaning Services</a></Link></li>
              <li>Top-Quality <Link href="/gutter-guards"><a className="underline text-JonesCo-Green-200">Gutter Guard Installation</a></Link></li>
              <li><Link href="/gutter-replacement"><a className="underline text-JonesCo-Green-200">Seamless Gutter Replacement</a></Link></li>
              <li><Link href="/gutter-replacement"><a className="underline text-JonesCo-Green-200">Rain Gutter Repair</a></Link></li>
              <li><Link href="/services"><a className="underline text-JonesCo-Green-200">Gutter Maintenance</a></Link></li>
            </ul>
            <p className="mt-6">
              Join the many satisfied homeowners in Cocke County who trust JonesCo for their gutter needs. We combine local expertise with the highest standards of service to deliver results you can count on. Whether you need <Link href="/services"><a className="underline text-JonesCo-Green-200">residential gutter services</a></Link> or <Link href="/services"><a className="underline text-JonesCo-Green-200">commercial gutter services</a></Link>, we have you covered.
            </p>
            <p className="mt-6">
              Discover the JonesCo difference today and see why we are the go-to gutter experts in Cocke County. We offer reliable gutter services, <Link href="/custom-gutters"><a className="underline text-JonesCo-Green-200">custom gutters</a></Link>, and affordable gutter services to ensure your property is protected.
            </p>
            <p className="mt-6 font-bold">
              Contact us today at <Link href="/contact"><a className="underline text-JonesCo-Green-200">jonescogutters.com/contact</a></Link> or call 423-207-3325 to schedule your free, no-obligation quote!
            </p>
          </div>
          <div className="text-base sm:text-lg md:text-xl leading-7 text-white mt-10">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight text-JonesCo-Green-200">
              6 Ways to Increase Gutter Lifespan
            </h3>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-JonesCo-Blue-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-white">1. Regular Cleaning</h4>
                <p className="mt-2 text-white">Keep your gutters free from debris and blockages to ensure proper water flow. Schedule regular <Link href="/gutter-cleaning"><a className="underline text-JonesCo-Green-200">gutter cleanings</a></Link> to prevent buildup that can cause damage.</p>
              </div>
              <div className="bg-JonesCo-Blue-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-white">2. Gutter Guards</h4>
                <p className="mt-2 text-white">Install <Link href="/gutter-guards"><a className="underline text-JonesCo-Green-200">gutter guards</a></Link> to prevent leaves and debris from clogging your system. This helps reduce maintenance and prolongs the life of your gutters.</p>
              </div>
              <div className="bg-JonesCo-Blue-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-white">3. Professional Inspections</h4>
                <p className="mt-2 text-white">Schedule regular inspections with our team to catch and fix issues early. Professional assessments ensure your gutters are in optimal condition.</p>
              </div>
              <div className="bg-JonesCo-Blue-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-white">4. Proper Installation</h4>
                <p className="mt-2 text-white">Ensure your gutters are installed correctly to prevent leaks and water damage. Proper <Link href="/seamless-gutter-installation"><a className="underline text-JonesCo-Green-200">gutter installation</a></Link> is key to a long-lasting gutter system.</p>
              </div>
              <div className="bg-JonesCo-Blue-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-white">5. Routine Maintenance</h4>
                <p className="mt-2 text-white">Perform routine <Link href="/services"><a className="underline text-JonesCo-Green-200">gutter maintenance</a></Link> checks to identify and address any potential problems. Regular upkeep helps extend the lifespan of your gutters.</p>
              </div>
              <div className="bg-JonesCo-Blue-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-white">6. Timely Repairs</h4>
                <p className="mt-2 text-white">Address any damages or issues promptly with our <Link href="/gutter-replacement"><a className="underline text-JonesCo-Green-200">rain gutter repair</a></Link> services to prevent further deterioration and ensure your gutters function properly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CockeCounty;
