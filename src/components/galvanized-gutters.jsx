import React from 'react';
import Image from 'next/image';

const GalvanizedGutters = () => {
  return (
    <div className="bg-JonesCo-Blue-600 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Galvanized Gutters
          </h2>
          <p className="mt-4 text-lg leading-6 text-JonesCo-Green-100">
            Experience the durability and reliability of our premium galvanized gutters.
          </p>
        </div>

        <div className="mt-12">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-bold text-JonesCo-Blue-900">About Galvanized Gutters</h3>
              <p className="mt-1 max-w-2xl text-sm text-JonesCo-Blue-900">
                Galvanized gutters are made from steel coated with a layer of zinc, providing excellent corrosion resistance and durability. They are a great choice for homeowners looking for a long-lasting and cost-effective gutter solution.
              </p>
            </div>
            <div className="border-t border-JonesCo-Blue-200">
              <dl>
                <div className="bg-JonesCo-Blue-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-JonesCo-Blue-900">Benefits</dt>
                  <dd className="mt-1 text-sm text-JonesCo-Blue-900 sm:mt-0 sm:col-span-2">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>High corrosion resistance</li>
                      <li>Strong and durable</li>
                      <li>Cost-effective</li>
                      <li>Low maintenance</li>
                    </ul>
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-JonesCo-Blue-900">Installation Process</dt>
                  <dd className="mt-1 text-sm text-JonesCo-Blue-900 sm:mt-0 sm:col-span-2">
                    Our professional team ensures a seamless installation process. We use high-quality materials and techniques to install your galvanized gutters, providing long-lasting protection for your home.
                  </dd>
                </div>
                <div className="bg-JonesCo-Blue-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-JonesCo-Blue-900">Gallery</dt>
                  <dd className="mt-1 text-sm text-JonesCo-Blue-900 sm:mt-0 sm:col-span-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Image src="/images/galvanized-gutter-1.jpg" alt="Galvanized gutter example" width={500} height={500} className="w-full h-full object-cover rounded-lg shadow-md"/>
                      <Image src="/images/galvanized-gutter-2.jpg" alt="Galvanized gutter example" width={500} height={500} className="w-full h-full object-cover rounded-lg shadow-md"/>
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalvanizedGutters;