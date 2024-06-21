import React from 'react';

const BlountCounty = () => {
  return (
    <div className="bg-JonesCo-Blue-900 text-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight text-JonesCo-Green-200">
            Proudly Serving Blount County, TN
          </h2>
          <p className="mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Superior Gutter Solutions for Blount County Homes
          </p>
        </div>

        <div className="mt-10 max-w-2xl mx-auto lg:max-w-4xl">
          <div className="text-base sm:text-lg md:text-xl leading-7 text-white">
            <p>
              Welcome to JonesCo Seamless Gutter Systems, your go-to local gutter contractors proudly serving the beautiful and diverse Blount County, TN. Known for its proximity to the Great Smoky Mountains National Park and the peaceful town of Maryville, Blount County offers a perfect blend of natural beauty and suburban living.
            </p>
            <p className="mt-6">
              Whether you&apos;re exploring the scenic trails of the Smokies, enjoying the tranquility of Townsend, or supporting the Maryville High School Rebels, we understand the specific needs of homes in Blount County. Our mission is to ensure your gutters are in top condition, protecting your property from water damage.
            </p>
            <p className="mt-6">Our comprehensive services include:</p>
            <ul className="list-disc list-inside mt-4">
              <li>Thorough Gutter Cleaning Services</li>
              <li>High-Quality Gutter Guard Installation</li>
              <li>Seamless Gutter Installation</li>
              <li>Rain Gutter Repair</li>
              <li>Affordable Gutter Services</li>
              <li>Gutter Maintenance and Gutter System Upgrades</li>
            </ul>
            <p className="mt-6">
              Join the many satisfied homeowners in Blount County who trust JonesCo for their residential gutter services. We combine local expertise with a commitment to exceptional service to deliver results that last.
            </p>
            <p className="mt-6">
              Discover the JonesCo difference today and see why we are one of the best gutter companies in Blount County for professional gutter installation and custom gutters. We also offer commercial gutter services.
            </p>
            <p className="mt-6 font-bold">
              Contact us today at <a href="https://jonescogutters.com/contact" className="underline">jonescogutters.com/contact</a> or call 423-207-3325 to schedule your free gutter estimate and experience reliable gutter services!
            </p>
          </div>
          <div className="mt-10 lg:mt-16 flex justify-center">
            <img src="/Images/blount-county-landmark.jpg" alt="Blount County Landmark" className="rounded-lg shadow-lg object-cover" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlountCounty;
