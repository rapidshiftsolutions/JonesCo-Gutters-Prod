import React from 'react';

const BlountCounty = () => {
  return (
    <div className="bg-gradient-to-r from-JonesCo-Blue-500 to-JonesCo-Green-700 text-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-JonesCo-Green-200">
            Proudly Serving Blount County, TN
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Superior Gutter Solutions for Blount County Homes
          </p>
        </div>

        <div className="mt-10 max-w-2xl mx-auto lg:max-w-4xl">
          <div className="text-xl text-gray-200">
            <p>
              Welcome to JonesCo Seamless Gutter Systems, proudly serving the beautiful and diverse Blount County, TN. Known for its proximity to the Great Smoky Mountains National Park and the peaceful town of Maryville, Blount County offers a perfect blend of natural beauty and suburban living.
            </p>
            <p className="mt-6">
              Whether you&apos;re exploring the scenic trails of the Smokies, enjoying the tranquility of Townsend, or supporting the Maryville High School Rebels, we understand the specific needs of homes in Blount County. Our mission is to ensure your gutters are in top condition, protecting your property from water damage.
            </p>
            <p className="mt-6">Our comprehensive services include:</p>
            <ul className="list-disc list-inside mt-4">
              <li>Thorough Gutter Cleaning</li>
              <li>High-Quality Gutter Guard Installation</li>
              <li>Seamless Gutter Replacement</li>
            </ul>
            <p className="mt-6">
              Join the many satisfied homeowners in Blount County who trust JonesCo for their gutter needs. We combine local expertise with a commitment to exceptional service to deliver results that last.
            </p>
            <p className="mt-6">
              Discover the JonesCo difference today and see why we are the preferred gutter professionals in Blount County.
            </p>
            <p className="mt-6 font-bold">
              Contact us today at <a href="https://jonescogutters.com/contact" className="underline">jonescogutters.com/contact</a> or call 423-207-3325 to schedule your free, no-obligation quote!
            </p>
          </div>
          <div className="mt-10 lg:mt-16 flex justify-center">
            <img src="/images/blount-county-landmark.jpg" alt="Blount County Landmark" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlountCounty;
