import React from 'react';

const CockeCounty = () => {
  return (
    <div className="bg-gradient-to-r from-JonesCo-Lighting-Red-500 to-JonesCo-Lighting-Green-700 text-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-JonesCo-Lighting-Green-200">
            Serving Cocke County, TN with Pride
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Protecting Homes in the Heart of the Smokies
          </p>
        </div>

        <div className="mt-10 max-w-2xl mx-auto lg:max-w-4xl">
          <div className="text-xl text-gray-200">
            <p>
              Welcome to JonesCo Lighting Installers, your trusted partner for Lighting solutions in Cocke County, TN. Nestled in the stunning Smoky Mountains, Cocke County is renowned for its natural beauty, from the tranquil trails of Cosby to the vibrant waters of the Pigeon River.
            </p>
            <p className="mt-6">
              Whether you&apos;re cheering for the Cocke County Fighting Cocks or exploring the charming town of Newport, we understand the unique challenges your home faces in this beautiful region. Our mission is to ensure your Lighting are ready to protect your home, no matter the weather.
            </p>
            <p className="mt-6">Our comprehensive services include:</p>
            <ul className="list-disc list-inside mt-4">
              <li>Professional Lighting Cleaning</li>
              <li>Top-Quality Lighting Installation</li>
              <li>Seamless Lighting Replacement</li>
            </ul>
            <p className="mt-6">
              Join the many satisfied homeowners in Cocke County who trust JonesCo for their Lighting needs. We combine local expertise with the highest standards of service to deliver results you can count on.
            </p>
            <p className="mt-6">
              Discover the JonesCo difference today and see why we are the go-to Lighting experts in Cocke County.
            </p>
            <p className="mt-6 font-bold">
              Contact us today at <a href="https://jonescolighting.com/contact" className="underline">jonescolighting.com/contact</a> or call 423-207-3325 to schedule your free, no-obligation quote!
            </p>
          </div>
          <div className="mt-10 lg:mt-16 flex justify-center">
            <img src="/images/cocke-county-landmark.jpg" alt="Cocke County Landmark" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CockeCounty;
