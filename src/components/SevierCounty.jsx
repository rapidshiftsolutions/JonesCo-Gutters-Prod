import React from 'react';

const SevierCounty = () => {
  return (
    <div className="bg-gradient-to-r from-JonesCo-Blue-500 to-JonesCo-Orange-700 text-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-JonesCo-Orange-200">
            Proudly Serving Sevier County, TN
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Exceptional Gutter Solutions for Sevier County Homes
          </p>
        </div>

        <div className="mt-10 max-w-2xl mx-auto lg:max-w-4xl">
          <div className="text-xl text-gray-200">
            <p>
              Welcome to JonesCo Seamless Gutter Systems, your trusted partner in Sevier County, TN. Known for its bustling tourist towns like Gatlinburg and Pigeon Forge, Sevier County offers a vibrant mix of entertainment and natural beauty.
            </p>
            <p className="mt-6">
              Whether you&apos;re visiting Dollywood, exploring the Great Smoky Mountains National Park, or enjoying a day at Ober Gatlinburg, we understand the specific needs of homes in Sevier County. Our mission is to ensure your gutters are in perfect condition to protect your home from the elements.
            </p>
            <p className="mt-6">Our comprehensive services include:</p>
            <ul className="list-disc list-inside mt-4">
              <li>Thorough Gutter Cleaning</li>
              <li>High-Quality Gutter Guard Installation</li>
              <li>Seamless Gutter Replacement</li>
            </ul>
            <p className="mt-6">
              Join the many satisfied homeowners in Sevier County who trust JonesCo for their gutter needs. We combine local expertise with a commitment to exceptional service to deliver results that last.
            </p>
            <p className="mt-6">
              Discover the JonesCo difference today and see why we are the go-to gutter professionals in Sevier County.
            </p>
            <p className="mt-6 font-bold">
              Contact us today at <a href="https://jonescogutters.com/contact" className="underline">jonescogutters.com/contact</a> or call 423-207-3325 to schedule your free, no-obligation quote!
            </p>
          </div>
          <div className="mt-10 lg:mt-16 flex justify-center">
            <img src="/images/sevier-county-landmark.jpg" alt="Sevier County Landmark" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SevierCounty;
