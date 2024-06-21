import React from 'react';

const KnoxCounty = () => {
  return (
    <div className="bg-JonesCo-Blue-900 text-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight text-JonesCo-Green-200">
            Proudly Serving Knox County, TN
          </h2>
          <p className="mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Premium Gutter Solutions for Knox County Homes
          </p>
        </div>

        <div className="mt-10 max-w-2xl mx-auto lg:max-w-4xl">
          <div className="text-base sm:text-lg md:text-xl leading-7 text-white">
            <p>
              Welcome to JonesCo Seamless Gutter Systems, proudly serving Knox County, TN. Known for its vibrant city of Knoxville, Knox County offers a unique blend of urban amenities and natural beauty.
            </p>
            <p className="mt-6">
              Whether you&apos;re cheering on the Vols at the University of Tennessee, exploring Market Square, or enjoying the scenic views at Ijams Nature Center, we understand the specific needs of homes in Knox County. Our mission is to ensure your gutters are in top shape, protecting your property from water damage.
            </p>
            <p className="mt-6">Our comprehensive services include:</p>
            <ul className="list-disc list-inside mt-4">
              <li>Thorough Gutter Cleaning Services</li>
              <li>High-Quality Gutter Guard Installation</li>
              <li>Seamless Gutter Replacement</li>
              <li>Rain Gutter Repair</li>
              <li>Gutter Maintenance</li>
            </ul>
            <p className="mt-6">
              Join the many satisfied homeowners in Knox County who trust JonesCo for their gutter needs. We combine local expertise with a commitment to exceptional service to deliver results that last. Whether you need residential gutter services or commercial gutter services, we have you covered.
            </p>
            <p className="mt-6">
              Discover the JonesCo difference today and see why we are the preferred gutter professionals in Knox County. We offer reliable gutter services, custom gutters, and affordable gutter services to ensure your property is protected.
            </p>
            <p className="mt-6 font-bold">
              Contact us today at <a href="https://jonescogutters.com/contact" className="underline">jonescogutters.com/contact</a> or call 423-207-3325 to schedule your free, no-obligation quote!
            </p>
          </div>
          <div className="mt-10 lg:mt-16 flex justify-center">
            <img src="/images/knox-county-landmark.jpg" alt="Knox County Landmark" className="rounded-lg shadow-lg object-cover" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnoxCounty;
