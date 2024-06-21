import React from 'react';

const GreeneCounty = () => {
  return (
    <div className="bg-JonesCo-Blue-900 text-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight text-JonesCo-Green-200">
            Dedicated to Greene County, TN
          </h2>
          <p className="mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Superior Gutter Services for Greene County Homes
          </p>
        </div>

        <div className="mt-10 max-w-2xl mx-auto lg:max-w-4xl">
          <div className="text-base sm:text-lg md:text-xl leading-7 text-white">
            <p>
              Welcome to JonesCo Seamless Gutter Systems, proudly serving the historic and picturesque Greene County, TN. Known for its charming town of Greeneville and rich cultural heritage, Greene County offers a unique blend of history and natural beauty.
            </p>
            <p className="mt-6">
              Whether you&apos;re exploring the historic sites of Greeneville or enjoying outdoor activities in the Nolichucky River, we understand the specific needs of homes in Greene County. Our mission is to ensure your gutters are in perfect condition to protect your home from the elements.
            </p>
            <p className="mt-6">Our comprehensive services include:</p>
            <ul className="list-disc list-inside mt-4">
              <li>Expert Gutter Cleaning Services</li>
              <li>Durable Gutter Guard Installation</li>
              <li>Seamless Gutter Replacement</li>
              <li>Rain Gutter Repair</li>
              <li>Gutter Maintenance</li>
            </ul>
            <p className="mt-6">
              Join the many satisfied homeowners in Greene County who trust JonesCo for their gutter needs. We combine local expertise with a commitment to exceptional service to deliver results that last. Whether you need residential gutter services or commercial gutter services, we have you covered.
            </p>
            <p className="mt-6">
              Discover the JonesCo difference today and see why we are the preferred gutter specialists in Greene County. We offer reliable gutter services, custom gutters, and affordable gutter services to ensure your property is protected.
            </p>
            <p className="mt-6 font-bold">
              Contact us today at <a href="https://jonescogutters.com/contact" className="underline">jonescogutters.com/contact</a> or call 423-207-3325 to schedule your free, no-obligation quote!
            </p>
          </div>
          <div className="mt-10 lg:mt-16 flex justify-center">
            <img src="/images/greene-county-landmark.jpg" alt="Greene County Landmark" className="rounded-lg shadow-lg object-cover" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreeneCounty;
