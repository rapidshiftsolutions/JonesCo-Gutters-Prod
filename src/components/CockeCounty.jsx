import React from 'react';

const CockeCounty = () => {
  return (
    <div className="bg-gradient-to-r from-JonesCo-Blue-500 to-JonesCo-Green-700 text-white py-24 sm:py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-JonesCo-Green-200">
            Welcome to Cocke County
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Discover the Beauty and Community of Cocke County
          </p>
        </div>

        <div className="mt-10 lg:mt-16">
          <p className="text-xl text-gray-200">
            Cocke County, located in Eastern Tennessee, is known for its rich history and stunning natural landscapes. The county seat, Newport, offers a charming historic downtown area with antique shops and beautiful views of the Pigeon River. Cocke County is also home to part of the Great Smoky Mountains, making it a haven for outdoor enthusiasts who enjoy hiking, camping, and scenic drives.
          </p>
          <p className="mt-6 text-xl text-gray-200">
            Local pride runs deep in Cocke County, especially when it comes to our high school sports teams like the Cocke County High School Fighting Cocks. Residents also enjoy thrilling events at the English Mountain Dragway and the exciting action at the local racetracks.
          </p>
          <p className="mt-6 text-xl text-gray-200">
            The Great Smoky Mountains National Park is a major attraction, offering breathtaking views, diverse wildlife, and numerous recreational opportunities. Whether you are a nature lover or looking to explore historical sites, Cocke County has something for everyone.
          </p>
          <p className="mt-6 text-xl text-gray-200">
            At JonesCo Seamless Gutter Systems, we are proud to serve the wonderful community of Cocke County. We offer expert gutter cleaning, gutter guard installation, and gutter replacement services to ensure your home is protected from the elements.
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

export default CockeCounty;
