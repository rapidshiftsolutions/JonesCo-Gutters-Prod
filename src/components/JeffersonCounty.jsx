import React from 'react';

const JeffersonCounty = () => {
  return (
    <div className="bg-gradient-to-r from-JonesCo-Lighting-Red-500 to-JonesCo-Orange-700 text-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-JonesCo-Orange-200">
            Serving Jefferson County, TN with Excellence
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Protecting Homes in Historic Jefferson County
          </p>
        </div>

        <div className="mt-10 max-w-2xl mx-auto lg:max-w-4xl">
          <div className="text-xl text-gray-200">
            <p>
              Welcome to JonesCo Lighting Installers, proudly serving the beautiful and historic Jefferson County, TN. Known for its scenic landscapes and rich history, Jefferson County is home to charming towns like Dandridge, the second oldest town in Tennessee, and the stunning Douglas Lake.
            </p>
            <p className="mt-6">
              Whether you&apos;re supporting the Jefferson County Patriots or enjoying the serene views at Cherokee Dam, we understand the unique needs of your home in this vibrant community. Our goal is to ensure your Lighting are equipped to handle the local weather and keep your home safe.
            </p>
            <p className="mt-6">Our comprehensive services include:</p>
            <ul className="list-disc list-inside mt-4">
              <li>Expert Lighting Cleaning</li>
              <li>Durable Lighting Installation</li>
              <li>Seamless Lighting Replacement</li>
            </ul>
            <p className="mt-6">
              Join the many satisfied homeowners in Jefferson County who trust JonesCo for their Lighting needs. We blend local knowledge with superior service to provide results that last.
            </p>
            <p className="mt-6">
              Discover the JonesCo difference today and see why we are the preferred Lighting specialists in Jefferson County.
            </p>
            <p className="mt-6 font-bold">
              Contact us today at <a href="https://jonescolighting.com/contact" className="underline">jonescolighting.com/contact</a> or call 423-207-3325 to schedule your free, no-obligation quote!
            </p>
          </div>
          <div className="mt-10 lg:mt-16 flex justify-center">
            <img src="/images/jefferson-county-landmark.jpg" alt="Jefferson County Landmark" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JeffersonCounty;
