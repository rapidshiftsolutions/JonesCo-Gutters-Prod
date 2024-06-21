import React from 'react';

const JeffersonCounty = () => {
  return (
    <div className="bg-JonesCo-Blue-900 text-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight text-JonesCo-Orange-200">
            Serving Jefferson County, TN with Excellence
          </h2>
          <p className="mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Protecting Homes in Historic Jefferson County
          </p>
        </div>

        <div className="mt-10 max-w-2xl mx-auto lg:max-w-4xl">
          <div className="text-base sm:text-lg md:text-xl leading-7 text-white">
            <p>
              Welcome to JonesCo Seamless Gutter Systems, proudly serving the beautiful and historic Jefferson County, TN. Known for its scenic landscapes and rich history, Jefferson County is home to charming towns like Dandridge, the second oldest town in Tennessee, and the stunning Douglas Lake.
            </p>
            <p className="mt-6">
              Whether you&apos;re supporting the Jefferson County Patriots or enjoying the serene views at Cherokee Dam, we understand the unique needs of your home in this vibrant community. Our goal is to ensure your gutters are equipped to handle the local weather and keep your home safe.
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
              Join the many satisfied homeowners in Jefferson County who trust JonesCo for their gutter needs. We blend local knowledge with superior service to provide results that last. Whether you need residential gutter services or commercial gutter services, we have you covered.
            </p>
            <p className="mt-6">
              Discover the JonesCo difference today and see why we are the preferred gutter specialists in Jefferson County. We offer reliable gutter services, custom gutters, and affordable gutter services to ensure your property is protected.
            </p>
            <p className="mt-6 font-bold">
              Contact us today at <a href="https://jonescogutters.com/contact" className="underline">jonescogutters.com/contact</a> or call 423-207-3325 to schedule your free, no-obligation quote!
            </p>
          </div>
          <div className="mt-10 lg:mt-16 flex justify-center">
            <img src="/images/jefferson-county-landmark.jpg" alt="Jefferson County Landmark" className="rounded-lg shadow-lg object-cover" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JeffersonCounty;
