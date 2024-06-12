import React from 'react';

const JeffersonCounty = () => {
  return (
    <div className="bg-gradient-to-r from-JonesCo-Blue-500 to-JonesCo-Green-700 text-white py-24 sm:py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-JonesCo-Green-200">
            Welcome to Jefferson County
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Experience the Charm and Community of Jefferson County
          </p>
        </div>

        <div className="mt-10 lg:mt-16">
          <p className="text-xl text-gray-200">
            Jefferson County, located in Eastern Tennessee, offers scenic landscapes and historic towns like Dandridge, the second oldest town in Tennessee. Known for its picturesque views of Douglas Lake, Jefferson County is a favorite destination for fishing, boating, and other water activities.
          </p>
          <p className="mt-6 text-xl text-gray-200">
            Local pride is evident in the strong support for Jefferson County High School’s sports teams, the Patriots. Residents also enjoy the cultural and historical events hosted at the Glenmore Mansion and the annual Jefferson County Fair.
          </p>
          <p className="mt-6 text-xl text-gray-200">
            The county’s blend of history and natural beauty makes it a great place to live and visit. Whether exploring the historic downtowns or enjoying the recreational opportunities on Douglas Lake, Jefferson County offers something for everyone.
          </p>
          <p className="mt-6 text-xl text-gray-200">
            At JonesCo Seamless Gutter Systems, we are proud to serve the vibrant community of Jefferson County. Our expert gutter services ensure your home is well-protected and looks its best.
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

export default JeffersonCounty;
