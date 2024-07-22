import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Value from '@/components/Value';
import Estimate from '@/components/Hero';
import Head from 'next/head';

const CountyPage = ({ county, cities, description, keywords }) => {
  return (
    <div>
      <Head>
        <title>Services in {county} County, TN | JonesCo Seamless Gutter Systems</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(', ')} />
      </Head>
      <Header />
      <div className="w-full px-4 py-8 md:px-8 bg-JonesCo-Green-50 rounded-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-JonesCo-Green-950 mb-4">What Do We Provide?</h1>
          <p className="text-base md:text-lg text-JonesCo-Green-900 mb-8">
            {description}
          </p>
          <h2 className="text-xl font-bold text-JonesCo-Green-950 mb-4">Why JonesCo?</h2>
          <p className="text-base md:text-lg text-JonesCo-Green-900 mb-4">
            Maintaining your home’s gutters is essential to protect it from water damage. {county} experiences unique weather patterns, making it crucial to have reliable and effective gutter systems. JonesCo Seamless Gutter Systems offers top-notch services to ensure your home stays protected year-round.
          </p>
          <h3 className="text-xl font-bold text-JonesCo-Green-950 mb-4">Cities We Serve in {county} County:</h3>
          <ul className="list-disc list-inside text-JonesCo-Green-900 mb-8">
            {cities.map(city => (
              <li key={city}>
                <Link href={`/cities/${city.toLowerCase().replace(/ /g, '')}`} legacyBehavior>
                  <a className="text-JonesCo-Green-900 hover:underline">{city}</a>
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-bold text-JonesCo-Green-950 mb-4">Our Services Include:</h3>
          <ul className="list-disc list-inside text-JonesCo-Green-900 mb-8">
            <li><Link href="/seamless-gutter-installation" legacyBehavior><a className="text-JonesCo-Green-900 hover:underline">Seamless Gutter Installation</a></Link></li>
            <li><Link href="/gutter-replacement" legacyBehavior><a className="text-JonesCo-Green-900 hover:underline">Gutter Replacement</a></Link></li>
            <li><Link href="/gutter-cleaning" legacyBehavior><a className="text-JonesCo-Green-900 hover:underline">Gutter Cleaning</a></Link></li>
            <li><Link href="/gutter-guards" legacyBehavior><a className="text-JonesCo-Green-900 hover:underline">Gutter Guards Installation</a></Link></li>
            <li><Link href="/custom-gutters" legacyBehavior><a className="text-JonesCo-Green-900 hover:underline">Custom Gutter Solutions</a></Link></li>
            <li><Link href="/downspouts" legacyBehavior><a className="text-JonesCo-Green-900 hover:underline">Downspout Installation & Repair</a></Link></li>
          </ul>
          <h3 className="text-xl font-bold text-JonesCo-Green-950 mb-4">Gutter Styles:</h3>
          <ul className="list-disc list-inside text-JonesCo-Green-700 mb-8">
            <li><Link href="/copper-gutters" legacyBehavior><a className="text-JonesCo-Green-900 hover:underline">Copper Gutters</a></Link></li>
            <li><Link href="/galvanized-gutters" legacyBehavior><a className="text-JonesCo-Green-900 hover:underline">Galvanized Gutters</a></Link></li>
            <li><Link href="/galvalume-gutters" legacyBehavior><a className="text-JonesCo-Green-900 hover:underline">Galvalume Gutters</a></Link></li>
            <li><Link href="/colored-gutters" legacyBehavior><a className="text-JonesCo-Green-900 hover:underline">Colored Gutters</a></Link></li>
          </ul>
        </div>
      </div>
      <Value />
      <Estimate />
      <Footer />
    </div>
  );
};

export default CountyPage;
