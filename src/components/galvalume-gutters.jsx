import React from 'react';

const GalvalumeGutters = () => {
  return (
    <div className="bg-JonesCo-Blue-600 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Galvalume Gutters
          </h2>
          <p className="mt-4 text-lg leading-6 text-JonesCo-Green-100">
            Discover the durability and reliability of our top-quality Galvalume gutters.
          </p>
        </div>

        <div className="mt-12">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-bold text-JonesCo-Blue-900">About Galvalume Gutters</h3>
              <p className="mt-1 max-w-2xl text-sm text-JonesCo-Blue-900">
                Galvalume gutters are known for their exceptional durability and corrosion resistance. They combine the strength of steel with the protective properties of aluminum and zinc, making them an excellent choice for long-lasting gutter systems.
              </p>
            </div>
            <div className="border-t border-JonesCo-Blue-200">
              <dl>
                <div className="bg-JonesCo-Blue-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-JonesCo-Blue-900">Benefits</dt>
                  <dd className="mt-1 text-sm text-JonesCo-Blue-900 sm:mt-0 sm:col-span-2">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Superior corrosion resistance</li>
                      <li>High durability and strength</li>
                      <li>Long-lasting performance</li>
                      <li>Low maintenance requirements</li>
                    </ul>
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-JonesCo-Blue-900">Installation Process</dt>
                  <dd className="mt-1 text-sm text-JonesCo-Blue-900 sm:mt-0 sm:col-span-2">
                    Our skilled team ensures a smooth and efficient installation process. We use the best materials and techniques to install your Galvalume gutters, providing reliable protection for your home.
                  </dd>
                </div>
                <div className="bg-JonesCo-Blue-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-JonesCo-Blue-900">Gallery</dt>
                  <dd className="mt-1 text-sm text-JonesCo-Blue-900 sm:mt-0 sm:col-span-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <img src="/images/galvalume-gutter-1.jpg" alt="Galvalume gutter example" className="w-full h-full object-cover rounded-lg shadow-md"/>
                      <img src="/images/galvalume-gutter-2.jpg" alt="Galvalume gutter example" className="w-full h-full object-cover rounded-lg shadow-md"/>
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

export default GalvalumeGutters;
