import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const WashingtonCounty = () => {
  return (
    <div className="bg-JonesCo-Blue-900 text-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight text-JonesCo-Green-200">
            Proudly Serving Washington County, TN
          </h2>
          <p className="mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Premium Gutter Solutions
          </p>
        </div>

        <div className="mt-10 max-w-2xl mx-auto lg:max-w-4xl">
          <div className="text-base sm:text-lg md:text-xl leading-7 text-white">
            <p>
              Welcome to JonesCo Seamless Gutter Systems, dedicated to serving the historic and vibrant Washington County, TN. Known for being home to Tennessee’s oldest town, Jonesborough, and the bustling city of Johnson City, Washington County is a blend of rich history and modern conveniences.
            </p>
            <p className="mt-6">
              Whether you&apos;re exploring the charming streets of Jonesborough, attending a festival in Johnson City, or enjoying outdoor activities in the beautiful countryside, we understand the unique needs of homes in Washington County. Our mission is to ensure your gutters are always in top condition, protecting your property from water damage.
            </p>
            <p className="mt-6">Our comprehensive services include:</p>
            <ul className="list-disc list-inside mt-4">
              <li><Link href="/gutter-cleaning"><a className="underline text-JonesCo-Green-200">Thorough Gutter Cleaning Services</a></Link></li>
              <li><Link href="/gutter-guards"><a className="underline text-JonesCo-Green-200">High-Quality Gutter Guard Installation</a></Link></li>
              <li><Link href="/gutter-replacement"><a className="underline text-JonesCo-Green-200">Seamless Gutter Replacement</a></Link></li>
              <li><Link href="/gutter-replacement"><a className="underline text-JonesCo-Green-200">Rain Gutter Repair</a></Link></li>
              <li><Link href="/services"><a className="underline text-JonesCo-Green-200">Gutter Maintenance</a></Link></li>
            </ul>
            <p className="mt-6">
              Join the many satisfied homeowners in Washington County who trust JonesCo for their gutter needs. We combine local expertise with a commitment to exceptional service to deliver results that last. Whether you need residential gutter services or commercial gutter services, we have you covered.
            </p>
            <p className="mt-6">
              Discover the JonesCo difference today and see why we are the preferred gutter professionals in Washington County. We offer reliable gutter services, custom gutters, and affordable gutter services to ensure your property is protected.
            </p>
            <p className="mt-6 font-bold">
              Contact us today at <Link href="/contact"><a className="underline text-JonesCo-Green-200">jonescogutters.com/contact</a></Link> or call 423-207-3325 to schedule your free, no-obligation quote!
            </p>
          </div>
          <div className="mt-10 lg:mt-16 flex justify-center">
            <Image 
              src="/images/washington-county-landmark.jpg" 
              alt="Washington County Landmark" 
              className="rounded-lg shadow-lg object-cover" 
              width={700} 
              height={400} 
            />
          </div>
          <div className="text-base sm:text-lg md:text-xl leading-7 text-white mt-10">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight text-JonesCo-Green-200">
              6 Benefits of Regular Gutter Maintenance
            </h3>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-JonesCo-Blue-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-white">1. Prevents Water Damage</h4>
                <p className="mt-2 text-white">Regular <Link href="/gutter-cleaning"><a className="underline text-JonesCo-Green-200">gutter cleaning services</a></Link> help prevent water damage to your home’s foundation and structure.</p>
              </div>
              <div className="bg-JonesCo-Blue-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-white">2. Reduces Pest Infestation</h4>
                <p className="mt-2 text-white">Keep pests away by maintaining clean gutters with our <Link href="/gutter-guards"><a className="underline text-JonesCo-Green-200">gutter guard installation</a></Link>.</p>
              </div>
              <div className="bg-JonesCo-Blue-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-white">3. Prevents Roof Damage</h4>
                <p className="mt-2 text-white">Avoid costly roof repairs by ensuring your gutters are in good shape with our <Link href="/gutter-replacement"><a className="underline text-JonesCo-Green-200">seamless gutter replacement</a></Link> services.</p>
              </div>
              <div className="bg-JonesCo-Blue-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-white">4. Enhances Curb Appeal</h4>
                <p className="mt-2 text-white">A well-maintained gutter system improves your home&apos;s appearance. Learn more about our <Link href="/services"><a className="underline text-JonesCo-Green-200">gutter maintenance</a></Link> services.</p>
              </div>
              <div className="bg-JonesCo-Blue-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-white">5. Increases Gutter Lifespan</h4>
                <p className="mt-2 text-white">Extend the life of your gutters with regular maintenance and timely <Link href="/gutter-replacement"><a className="underline text-JonesCo-Green-200">rain gutter repair</a></Link>.</p>
              </div>
              <div className="bg-JonesCo-Blue-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-white">6. Prevents Basement Flooding</h4>
                <p className="mt-2 text-white">Keep your basement dry by ensuring your gutters direct water away from your home.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WashingtonCounty;
