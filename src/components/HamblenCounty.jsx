import React from 'react';

const HamblenCounty = () => {
  return (
    <div className="bg-gradient-to-r from-JonesCo-Blue-500 to-JonesCo-Green-700 text-white py-24 sm:py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-JonesCo-Green-200">
            Welcome to Hamblen County
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Discover the Community and Culture of Hamblen County
          </p>
        </div>

        <div className="mt-10 lg:mt-16">
          <p className="text-xl text-gray-200">
            Hamblen County, located in Eastern Tennessee, is known for its vibrant city of Morristown, which combines urban conveniences with rural charm. The county offers a variety of recreational activities at Cherokee Lake and Panther Creek State Park.
          </p>
          <p className="mt-6 text-xl text-gray-200">
            Local pride shines through in the support for Morristown East and West High Schools' sports teams, the Hurricanes and the Trojans. The county also hosts cultural events such as the Morristown Craft Beer Festival and the Cherokee Lake Festival.
          </p>
          <p className="mt-6 text-xl text-gray-200">
            Whether you are enjoying a day on the lake, exploring the parks, or attending local events, Hamblen County offers a great quality of life for its residents.
          </p>
          <p className="mt-6 text-xl text-gray-200">
            At JonesCo Seamless Gutter Systems, we are dedicated to serving the wonderful community of Hamblen County. Our top-quality gutter services ensure your home is protected from the elements and looking its best.
          </p>
        </div>

        <div className="mt-10 lg:mt-16 text-center">
          <a
            href="https://jonescogutters.com/contact"
            className="inline-block bg-JonesCo-Green-500 hover:bg-JonesCo-Green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out"
          >
            Contact Us for a Free Quote
          </a>
          <p className="mt-4 text-xl text-gray-200">
            Or call us at <a href="tel:14232073325" className="text-JonesCo-Green-200">423-207-3325</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HamblenCounty;
