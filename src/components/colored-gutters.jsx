import React from 'react';

const ColoredGutters = () => {
  return (
    <div className="px-4 py-16 bg-JonesCo-Blue-600 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Colored Gutters
          </h2>
          <p className="mt-4 text-lg leading-6 text-JonesCo-Green-100">
            Add a splash of color to your home's exterior with our high-quality colored gutters.
          </p>
        </div>

        <div className="mt-12">
          <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-bold leading-6 text-JonesCo-Blue-900">About Colored Gutters</h3>
              <p className="mt-1 max-w-2xl text-sm text-JonesCo-Blue-900">
                Colored gutters provide both functional and aesthetic benefits to your home. Available in a variety of colors, they can complement your home's exterior design while ensuring efficient water drainage.
              </p>
            </div>
            <div className="border-t border-JonesCo-Blue-200">
              <dl>
                <div className="px-4 py-5 bg-JonesCo-Blue-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-JonesCo-Blue-900">Benefits</dt>
                  <dd className="mt-1 text-sm text-JonesCo-Blue-900 sm:mt-0 sm:col-span-2">
                    <ul className="pl-5 space-y-2 list-disc">
                      <li>Enhances curb appeal with customizable colors</li>
                      <li>Durable and weather-resistant</li>
                      <li>Low maintenance and easy to clean</li>
                      <li>Matches or contrasts with home exterior colors</li>
                    </ul>
                  </dd>
                </div>
                <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-JonesCo-Blue-900">Installation Process</dt>
                  <dd className="mt-1 text-sm text-JonesCo-Blue-900 sm:mt-0 sm:col-span-2">
                    Our experienced team provides a smooth installation process, ensuring your colored gutters are securely and precisely installed. We use top-quality materials for lasting performance.
                  </dd>
                </div>
                <div className="px-4 py-5 bg-JonesCo-Blue-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-JonesCo-Blue-900">Gallery</dt>
                  <dd className="mt-1 text-sm text-JonesCo-Blue-900 sm:mt-0 sm:col-span-2">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <img src="/images/colored-gutter-1.jpg" alt="Colored gutter example" className="object-cover w-full h-full rounded-lg shadow-md"/>
                      <img src="/images/colored-gutter-2.jpg" alt="Colored gutter example" className="object-cover w-full h-full rounded-lg shadow-md"/>
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

export default ColoredGutters;
