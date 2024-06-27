import React, { useState } from 'react';
import { CheckCircleIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const counties = [
  {
    name: 'Cocke County, TN',
    description: 'Home to Parrottsville where the local community thrives amidst the natural beauty of Eastern Tennessee.',
    cities: ['Newport', 'Parrottsville', 'Cosby', 'Del Rio'],
    link: '/cocke',
  },
  {
    name: 'Jefferson County, TN',
    description: 'Adjacent to Cocke, Jefferson County offers scenic landscapes and historic towns like Dandridge.',
    cities: ['Dandridge', 'Jefferson City', 'White Pine', 'New Market', 'Baneberry'],
    link: '/jefferson',
  },
  {
    name: 'Hamblen County, TN',
    description: 'Known for its vibrant city of Morristown, Hamblen County combines urban conveniences with rural charm.',
    cities: ['Morristown', 'Russellville', 'Whitesburg', 'Talbott'],
    link: '/hamblen',
  },
  {
    name: 'Greene County, TN',
    description: 'Features the historic town of Greeneville and provides a rich tapestry of cultural and outdoor activities.',
    cities: ['Greeneville', 'Mosheim', 'Tusculum', 'Baileyton'],
    link: '/greene',
  },
  {
    name: 'Sevier County, TN',
    description: 'Tourist hotspot with attractions such as Dollywood and the gateway to the Great Smoky Mountains.',
    cities: ['Sevierville', 'Pigeon Forge', 'Gatlinburg', 'Pittman Center'],
    link: '/sevier',
  },
  {
    name: 'Washington County, TN',
    description: "Houses Tennessee's oldest town, Jonesborough, and is rich in history and tradition.",
    cities: ['Johnson City', 'Jonesborough', 'Limestone', 'Telford'],
    link: '/washington',
  },
  {
    name: 'Knox County, TN',
    description: 'Includes Knoxville and offers a mix of urban life, educational institutions, and extensive shopping areas.',
    cities: ['Knoxville', 'Farragut', 'Powell', 'Corryton'],
    link: '/knox',
  },
  {
    name: 'Blount County, TN',
    description: 'Known for the quiet beauty of the Foothills of the Great Smoky Mountains and the peaceful town of Maryville.',
    cities: ['Maryville', 'Alcoa', 'Friendsville', 'Townsend', 'Louisville'],
    link: '/blount',
  }
];

export default function ServiceAreas() {
  const [openCounty, setOpenCounty] = useState(null);

  const toggleCounty = (index) => {
    setOpenCounty(openCounty === index ? null : index);
  };

  return (
    <div className="bg-white py-16 sm:py-24 text-JonesCo-Blue-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight text-JonesCo-Green-800">
            Our Service Areas in Eastern Tennessee
          </h2>
          <p className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
            Gutter Solutions for Your Home
          </p>
          <p className="mt-6 text-base leading-7 text-gray-700">
            At JonesCo Seamless Gutter Systems, we proudly offer our services across multiple counties in Eastern Tennessee. Our comprehensive gutter solutions ensure your home is protected. Explore our service areas below and learn how we can help you.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8">
          {counties.map((county, index) => (
            <div key={county.name} className="border rounded-lg shadow-lg">
              <button
                onClick={() => toggleCounty(index)}
                className="flex justify-between items-center w-full p-6 text-left text-lg font-bold bg-JonesCo-Blue-900 text-white hover:bg-JonesCo-Blue-700 transition-colors duration-300"
              >
                <span>{county.name}</span>
                {openCounty === index ? (
                  <ChevronUpIcon className="h-6 w-6" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6" />
                )}
              </button>
              {openCounty === index && (
                <div className="p-6 bg-white text-JonesCo-Blue-900">
                  <p className="text-base sm:text-lg md:text-xl leading-7">
                    {county.description}
                  </p>
                  <ul className="list-disc pl-5 mt-4 text-base sm:text-lg md:text-xl">
                    {county.cities.map((city) => (
                      <li key={city} className="text-gray-600">{city}</li>
                    ))}
                  </ul>
                  <div className="mt-6 text-base sm:text-lg md:text-xl leading-7 text-gray-700">
                    <p>Our comprehensive services in {county.name.split(',')[0]} include:</p>
                    <ul className="list-disc pl-5 mt-2">
                      <li><Link href="/gutter-cleaning"><a className="underline text-JonesCo-Blue-900 hover:text-JonesCo-Green-700">Expert Gutter Cleaning Services</a></Link></li>
                      <li><Link href="/gutter-guards"><a className="underline text-JonesCo-Blue-900 hover:text-JonesCo-Green-700">Durable Gutter Guard Installation</a></Link></li>
                      <li><Link href="/gutter-replacement"><a className="underline text-JonesCo-Blue-900 hover:text-JonesCo-Green-700">Seamless Gutter Replacement</a></Link></li>
                      <li><Link href="/services"><a className="underline text-JonesCo-Blue-900 hover:text-JonesCo-Green-700">Rain Gutter Repair</a></Link></li>
                      <li><Link href="/services"><a className="underline text-JonesCo-Blue-900 hover:text-JonesCo-Green-700">Gutter Maintenance</a></Link></li>
                    </ul>
                    <p className="mt-4">
                      Join the many satisfied homeowners in {county.name.split(',')[0]} who trust JonesCo for their gutter needs. Discover the JonesCo difference today and see why we are the preferred gutter professionals in {county.name.split(',')[0]}.
                    </p>
                    <p className="mt-4 font-bold">
                      Contact us today at <Link href="/contact"><a className="underline">jonescogutters.com/contact</a></Link> or call 423-207-3325 to schedule your free, no-obligation quote!
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
