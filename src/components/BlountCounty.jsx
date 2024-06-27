import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlountCounty = () => {
  return (
    <div className="bg-JonesCo-Blue-900 text-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight text-JonesCo-Green-200">
            Serving Blount County, TN
          </h2>
          <p className="mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Gutter Experts You Can Trust
          </p>
        </div>

        <div className="mt-10 max-w-2xl mx-auto lg:max-w-4xl">
          <div className="mt-10 lg:mt-16 flex justify-center">
            <Image 
              src="/images/blount-county-landmark.jpg" 
              alt="Blount County Landmark" 
              className="rounded-lg shadow-lg object-cover" 
              width={700} 
              height={400} 
            />
          </div>
          <div className="text-base sm:text-lg md:text-xl leading-7 text-white mt-10">
            <p>
              Welcome to JonesCo Seamless Gutter Systems, proudly serving the beautiful and diverse Blount County, TN. Known for its proximity to the Great Smoky Mountains National Park and the peaceful town of Maryville, Blount County offers a perfect blend of natural beauty and suburban living.
            </p>
            <p className="mt-6">
              Whether you&apos;re exploring the scenic trails of the Smokies, enjoying the tranquility of Townsend, or supporting the Maryville High School Rebels, we understand the specific needs of homes in Blount County. Our mission is to ensure your gutters are in top condition, protecting your property from water damage.
            </p>
            <p className="mt-6">Our comprehensive services include:</p>
            <ul className="list-disc list-inside mt-4">
              <li>Professional <Link href="/gutter-cleaning"><a className="underline text-JonesCo-Green-200">Gutter Cleaning Services</a></Link></li>
              <li>High-Quality <Link href="/gutter-guards"><a className="underline text-JonesCo-Green-200">Gutter Guard Installation</a></Link></li>
              <li><Link href="/gutter-replacement"><a className="underline text-JonesCo-Green-200">Seamless Gutter Replacement</a></Link></li>
              <li><Link href="/gutter-replacement"><a className="underline text-JonesCo-Green-200">Rain Gutter Repair</a></Link></li>
              <li><Link href="/services"><a className="underline text-JonesCo-Green-200">Gutter Maintenance</a></Link></li>
            </ul>
            <p className="mt-6">
              Join the many satisfied homeowners in Blount County who trust JonesCo for their gutter needs. We combine local expertise with the highest standards of service to deliver results you can count on. Whether you need <Link href="/services"><a className="underline text-JonesCo-Green-200">residential gutter services</a></Link> or <Link href="/services"><a className="underline text-JonesCo-Green-200">commercial gutter services</a></Link>, we have you covered.
            </p>
            <p className="mt-6">
              Discover the JonesCo difference today and see why we are the go-to gutter experts in Blount County. We offer reliable gutter services, <Link href="/custom-gutters"><a className="underline text-JonesCo-Green-200">custom gutters</a></Link>, and affordable gutter services to ensure your property is protected.
            </p>
            <p className="mt-6 font-bold">
              Contact us today at <Link href="/contact"><a className="underline text-JonesCo-Green-200">jonescogutters.com/contact</a></Link> or call 423-207-3325 to schedule your free, no-obligation quote!
            </p>
          </div>
          <div className="text-base sm:text-lg md:text-xl leading-7 text-white mt-10">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight text-JonesCo-Green-200">
              6 Benefits of Regular Gutter Maintenance
            </h3>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-JonesCo-Blue-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-white">1. Prevent Water Damage</h4>
                <p className="mt-2 text-white">Regular <Link href="/gutter-cleaning"><a className="underline text-JonesCo-Green-200">gutter cleaning</a></Link> helps to prevent water damage to your home's foundation and roof.</p>
              </div>
              <div className="bg-JonesCo-Blue-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-white">2. Avoid Pest Infestations</h4>
                <p className="mt-2 text-white">Clean gutters reduce the likelihood of attracting pests like mosquitoes and rodents. Invest in <Link href="/gutter-guards"><a className="underline text-JonesCo-Green-200">gutter guards</a></Link> to keep debris and pests out.</p>
              </div>
              <div className="bg-JonesCo-Blue-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-white">3. Protect Your Landscaping</h4>
                <p className="mt-2 text-white">Gutters direct water away from your home, preventing soil erosion and protecting your landscaping. Regular <Link href="/gutter-maintenance"><a className="underline text-JonesCo-Green-200">gutter maintenance</a></Link> ensures this protection is effective.</p>
              </div>
              <div className="bg-JonesCo-Blue-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-white">4. Increase Gutter Lifespan</h4>
                <p className="mt-2 text-white">Routine maintenance and <Link href="/seamless-gutter-installation"><a className="underline text-JonesCo-Green-200">seamless gutter installation</a></Link> extend the lifespan of your gutters by preventing damage and ensuring optimal performance.</p>
              </div>
              <div className="bg-JonesCo-Blue-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-white">5. Enhance Curb Appeal</h4>
                <p className="mt-2 text-white">Well-maintained gutters enhance the overall appearance of your home, contributing to better curb appeal. Consider <Link href="/gutter-replacement"><a className="underline text-JonesCo-Green-200">gutter replacement</a></Link> for an updated look.</p>
              </div>
              <div className="bg-JonesCo-Blue-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-white">6. Ensure Safety</h4>
                <p className="mt-2 text-white">Properly maintained gutters prevent dangerous icicles in winter and reduce the risk of slipping on icy walkways. Stay safe with our <Link href="/services"><a className="underline text-JonesCo-Green-200">reliable gutter services</a></Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlountCounty;
