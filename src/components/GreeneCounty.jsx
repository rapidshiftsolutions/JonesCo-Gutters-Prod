import React from 'react';

const GreeneCounty = () => {
  return (
    <div className="bg-gradient-to-r from-JonesCo-Blue-500 to-JonesCo-Green-700 text-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-JonesCo-Green-200">
            Dedicated to Greene County, TN
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Superior Gutter Services for Greene County Homes
          </p>
        </div>

        <div className="mt-10 max-w-2xl mx-auto lg:max-w-4xl">
          <div className="text-xl text-gray-200">
            <p>
              Welcome to JonesCo Seamless Gutter Systems, proudly serving the historic and picturesque Greene County, TN. Known for its charming town of Greeneville and rich cultural heritage, Greene County offers a unique blend of history and natural beauty.
            </p>
            <p className="mt-6">
              Whether you're exploring the historic sites of Greeneville or enjoying outdoor activities in the Nolichucky River, we understand the specific needs of homes in Greene County. Our mission is to ensure your gutters are in perfect condition to protect your home from the elements.
            </p>
            <p className="mt-6">Our comprehensive services include:</p>
            <ul className="list-disc list-inside mt-4">
              <li>Expert Gutter Cleaning</li>
              <li>Durable Gutter Guard Installation</li>
              <li>Seamless Gutter Replacement</li>
            </ul>
            <p className="mt-6">
              Join the many satisfied homeowners in Greene County who trust JonesCo for their gutter needs. We combine local expertise with a commitment to exceptional service to deliver results that last.
            </p>
            <p className="mt-6">
              Discover the JonesCo difference today and see why we are the preferred gutter specialists in Greene County.
            </p>
            <p className="mt-6 font-bold">
              Contact us today at <a href="https://jonescogutters.com/contact" className="underline">jonescogutters.com/contact</a> or call 423-207-3325 to schedule your free, no-obligation quote!
            </p>
          </div>
          <div className="mt-10 lg:mt-16 flex justify-center">
            <img src="/images/greene-county-landmark.jpg" alt="Greene County Landmark" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreeneCounty;
