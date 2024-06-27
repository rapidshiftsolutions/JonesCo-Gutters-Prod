import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const GreeneCounty = () => {
  return (
    <div className="bg-JonesCo-Blue-900 text-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight text-JonesCo-Green-200">
            Dedicated to Greene County, TN
          </h2>
          <p className="mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Superior Gutter Services
          </p>
        </div>

        <div className="mt-10 max-w-2xl mx-auto lg:max-w-4xl">
          <div className="mt-10 lg:mt-16 flex justify-center">
            <Image 
              src="/images/greene-county-landmark.jpg" 
              alt="Greene County Landmark" 
              className="rounded-lg shadow-lg object-cover" 
              width={700} 
              height={400} 
            />
          </div>
          <div className="text-base sm:text-lg md:text-xl leading-7 text-white mt-10">
            <p>
              Welcome to JonesCo Seamless Gutter Systems, proudly serving the historic and picturesque Greene County, TN. Known for its charming town of Greeneville and rich cultural heritage, Greene County offers a unique blend of history and natural beauty.
            </p>
            <p className="mt-6">
              Whether you&apos;re exploring the historic sites of Greeneville or enjoying outdoor activities in the Nolichucky River, we understand the specific needs of homes in Greene County. Our mission is to ensure your gutters are in perfect condition to protect your home from the elements.
            </p>
            <p className="mt-6">Our comprehensive services include:</p>
            <ul className="list-disc list-inside mt-4">
              <li>Expert <Link href="/gutter-cleaning"><a className="underline text-JonesCo-Green-200">Gutter Cleaning Services</a></Link></li>
              <li>Durable <Link href="/gutter-guards"><a className="underline text-JonesCo-Green-200">Gutter Guard Installation</a></Link></li>
              <li><Link href="/gutter-replacement"><a className="underline text-JonesCo-Green-200">Seamless Gutter Replacement</a></Link></li>
              <li><Link href="/gutter-replacement"><a className="underline text-JonesCo-Green-200">Rain Gutter Repair</a></Link></li>
              <li><Link href="/services"><a className="underline text-JonesCo-Green-200">Gutter Maintenance</a></Link></li>
            </ul>
            <p className="mt-6">
              Join the many satisfied homeowners in Greene County who trust JonesCo for their gutter needs. We combine local expertise with a commitment to exceptional service to deliver results that last. Whether you need <Link href="/services"><a className="underline text-JonesCo-Green-200">residential gutter services</a></Link> or <Link href="/services"><a className="underline text-JonesCo-Green-200">commercial gutter services</a></Link>, we have you covered.
            </p>
            <p className="mt-6">
              Discover the JonesCo difference today and see why we are the preferred gutter specialists in Greene County. We offer reliable gutter services, <Link href="/custom-gutters"><a className="underline text-JonesCo-Green-200">custom gutters</a></Link>, and affordable gutter services to ensure your property is protected.
            </p>
            <p className="mt-6 font-bold">
              Contact us today at <Link href="/contact"><a className="underline text-JonesCo-Green-200">jonescogutters.com/contact</a></Link> or call 423-207-3325 to schedule your free, no-obligation quote!
            </p>
          </div>
          <div className="text-base sm:text-lg md:text-xl leading-7 text-white mt-10">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight text-JonesCo-Green-200">
              6 Benefits of Seamless Gutters
            </h3>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-JonesCo-Blue-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-white">1. Leak Prevention</h4>
                <p className="mt-2 text-white">Seamless gutters minimize the risk of leaks, ensuring better protection for your home.</p>
              </div>
              <div className="bg-JonesCo-Blue-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-white">2. Custom Fit</h4>
                <p className="mt-2 text-white">Seamless gutters are custom-fit to your home, providing a perfect fit and enhanced performance.</p>
              </div>
              <div className="bg-JonesCo-Blue-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-white">3. Low Maintenance</h4>
                <p className="mt-2 text-white">With fewer joints, seamless gutters require less maintenance and are easier to clean. Invest in <Link href="/gutter-guards"><a className="underline text-JonesCo-Green-200">gutter guards</a></Link> to make maintenance even easier.</p>
              </div>
              <div className="bg-JonesCo-Blue-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-white">4. Enhanced Aesthetics</h4>
                <p className="mt-2 text-white">Seamless gutters offer a cleaner, more attractive appearance that can enhance your home's curb appeal.</p>
              </div>
              <div className="bg-JonesCo-Blue-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-white">5. Durability</h4>
                <p className="mt-2 text-white">Seamless gutters are made from high-quality materials, ensuring they last longer and perform better. Learn more about <Link href="/gutter-replacement"><a className="underline text-JonesCo-Green-200">gutter replacement</a></Link> options.</p>
              </div>
              <div className="bg-JonesCo-Blue-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-white">6. Cost-Effective</h4>
                <p className="mt-2 text-white">While the initial investment may be higher, seamless gutters save you money in the long run due to their durability and low maintenance. Get a <Link href="/contact"><a className="underline text-JonesCo-Green-200">free estimate</a></Link> today!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreeneCounty;
