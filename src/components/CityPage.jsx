import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Value from '@/components/Value';
import Estimate from '@/components/Hero';
import Head from 'next/head';

const CityPage = ({ city, county, description, keywords }) => {
  if (!city || !county) {
    return <div>Error: Missing city or county information.</div>;
  }

  return (
    <div>
      <Head>
        <title>{`Best Gutter Services in ${city} | JonesCo Gutters`}</title>
        <meta name="description" content={`Top-notch seamless gutters, gutter guards, gutter cleaning and more in ${city}.`} />
        <meta name="keywords" content={keywords.join(', ')} />
      </Head>
      <Header />
      <div className="px-4 py-8 w-full rounded-lg md:px-8 bg-JonesCo-Blue-50">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-4 text-3xl font-extrabold md:text-4xl text-JonesCo-Blue-950">What Do We Provide?</h1>
          <p className="mb-8 text-base md:text-lg text-JonesCo-Blue-900">
            {description}
          </p>
          <h2 className="mb-4 text-xl font-bold text-JonesCo-Blue-950">Why JonesCo?</h2>
          <p className="mb-4 text-base md:text-lg text-JonesCo-Blue-900">
            Maintaining your home’s gutters is essential to protect it from water damage. {city} experiences unique weather patterns, making it crucial to have reliable and effective gutter systems. JonesCo Seamless Gutter Systems offers top-notch services to ensure your home stays protected year-round.
          </p>
          <h3 className="mb-4 text-xl font-bold text-JonesCo-Blue-950">Our Services Include:</h3>
          <ul className="mb-8 list-disc list-inside text-JonesCo-Blue-900">
            <li><Link href="/seamless-gutter-installation" legacyBehavior><a className="text-JonesCo-Blue-900 hover:underline">Seamless Gutter Installation</a></Link></li>
            <li><Link href="/gutter-replacement" legacyBehavior><a className="text-JonesCo-Blue-900 hover:underline">Gutter Replacement</a></Link></li>
            <li><Link href="/gutter-cleaning" legacyBehavior><a className="text-JonesCo-Blue-900 hover:underline">Gutter Cleaning</a></Link></li>
            <li><Link href="/gutter-guards" legacyBehavior><a className="text-JonesCo-Blue-900 hover:underline">Gutter Guards Installation</a></Link></li>
            <li><Link href="/custom-gutters" legacyBehavior><a className="text-JonesCo-Blue-900 hover:underline">Custom Gutter Solutions</a></Link></li>
            <li><Link href="/downspouts" legacyBehavior><a className="text-JonesCo-Blue-900 hover:underline">Downspout Installation & Repair</a></Link></li>
          </ul>
          <h3 className="mb-4 text-xl font-bold text-JonesCo-Blue-950">Gutter Styles:</h3>
          <ul className="mb-8 list-disc list-inside text-JonesCo-Blue-700">
            <li><Link href="/copper-gutters" legacyBehavior><a className="text-JonesCo-Blue-900 hover:underline">Copper Gutters</a></Link></li>
            <li><Link href="/galvanized-gutters" legacyBehavior><a className="text-JonesCo-Blue-900 hover:underline">Galvanized Gutters</a></Link></li>
            <li><Link href="/galvalume-gutters" legacyBehavior><a className="text-JonesCo-Blue-900 hover:underline">Galvalume Gutters</a></Link></li>
            <li><Link href="/colored-gutters" legacyBehavior><a className="text-JonesCo-Blue-900 hover:underline">Colored Gutters</a></Link></li>
          </ul>
          <div className="flex justify-center mt-8 md:justify-start">
            <Link href={`/${county.toLowerCase().replace(/ /g, '')}`} legacyBehavior>
              <a className="inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-md border border-transparent shadow-sm md:px-6 md:py-3 md:text-base bg-JonesCo-Green-600 hover:bg-JonesCo-Blue-700">
                Back to {county} County
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Value />
      <Estimate />
      <Footer />
    </div>
  );
};

export default CityPage;
