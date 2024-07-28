import React from 'react';
import Link from 'next/link';
import QandA from '@/components/QandA';
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
      <div className="px-4 py-8 w-full rounded-lg md:px-8 bg-JonesCo-Blue-50">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-4 text-xl font-extrabold md:text-3xl text-JonesCo-Blue-950">Gutter Services in {city}</h1>
          <p className="mb-8 text-base md:text-lg text-JonesCo-Blue-900">
            {description}
          </p>
          <h2 className="mb-4 text-xl font-bold text-JonesCo-Blue-950">Why Choose JonesCo?</h2>
          <p className="mb-4 text-base md:text-lg text-JonesCo-Blue-900">
            Maintaining your home’s gutters is essential to protect it from water damage. {city} experiences unique weather patterns, making it crucial to have reliable and effective gutter systems. JonesCo Gutters offers top-notch services to ensure your home stays protected year-round. Our team is dedicated to providing high-quality workmanship and outstanding customer service, ensuring your complete satisfaction with every project we undertake.
          </p>
          <p className="mb-4 text-base md:text-lg text-JonesCo-Blue-900">
            We understand the importance of a well-functioning gutter system, which is why we use only the best materials and the latest techniques to deliver superior results. Whether you need a new installation, replacement, cleaning, or custom solution, we have the expertise to handle all your gutter needs in {city}.
          </p>
          <h3 className="mb-4 text-xl font-bold text-JonesCo-Blue-950">Our Gutter Services</h3>
          <ul className="mb-8 list-disc list-inside text-JonesCo-Blue-900" style={{ listStylePosition: 'outside', paddingLeft: '1.5rem' }}>
            <li className="pl-4"><Link href="/seamless-gutter-installation" legacyBehavior><a className="text-JonesCo-Blue-900 hover:underline"><strong>Seamless Gutter Installation:</strong></a></Link> Seamless gutters provide a sleek, modern look while minimizing leaks and maintenance. Our experts custom-fit gutters to your home.</li>
            <li className="pl-4"><Link href="/gutter-replacement" legacyBehavior><a className="text-JonesCo-Blue-900 hover:underline"><strong>Gutter Replacement:</strong></a></Link> We replace old, damaged gutters with new, high-quality systems designed to last.</li>
            <li className="pl-4"><Link href="/gutter-cleaning" legacyBehavior><a className="text-JonesCo-Blue-900 hover:underline"><strong>Gutter Cleaning:</strong></a></Link> Regular gutter cleaning prevents clogs and overflows, protecting your home’s foundation and landscaping.</li>
            <li className="pl-4"><Link href="/gutter-guards" legacyBehavior><a className="text-JonesCo-Blue-900 hover:underline"><strong>Gutter Guards Installation:</strong></a></Link> Gutter guards reduce maintenance by keeping debris out, ensuring your gutters work efficiently year-round.</li>
            <li className="pl-4"><Link href="/custom-gutters" legacyBehavior><a className="text-JonesCo-Blue-900 hover:underline"><strong>Custom Gutter Solutions:</strong></a></Link> Tailored solutions to fit your home’s specific needs, enhancing both functionality and aesthetics.</li>
            <li className="pl-4"><Link href="/downspouts" legacyBehavior><a className="text-JonesCo-Blue-900 hover:underline"><strong>Downspout Installation & Repair:</strong></a></Link> Properly functioning downspouts direct water away from your home, preventing erosion and water damage.</li>
          </ul>
          <h3 className="mb-4 text-xl font-bold text-JonesCo-Blue-950">Gutter Styles</h3>
          <ul className="mb-8 list-disc list-inside text-JonesCo-Blue-900" style={{ listStylePosition: 'outside', paddingLeft: '1.5rem' }}>
            <li className="pl-4"><Link href="/copper-gutters" legacyBehavior><a className="text-JonesCo-Blue-900 hover:underline"><strong>Copper Gutters:</strong></a></Link> Durable and stylish, copper gutters add a touch of elegance to any home.</li>
            <li className="pl-4"><Link href="/galvanized-gutters" legacyBehavior><a className="text-JonesCo-Blue-900 hover:underline"><strong>Galvanized Gutters:</strong></a></Link> Known for their strength and resistance to rust, these gutters are a great choice for durability.</li>
            <li className="pl-4"><Link href="/galvalume-gutters" legacyBehavior><a className="text-JonesCo-Blue-900 hover:underline"><strong>Galvalume Gutters:</strong></a></Link> Offering superior corrosion resistance, galvalume gutters are ideal for harsh weather conditions.</li>
            <li className="pl-4"><Link href="/colored-gutters" legacyBehavior><a className="text-JonesCo-Blue-900 hover:underline"><strong>Colored Gutters:</strong></a></Link> Match your home’s exterior with our wide range of colored gutters, providing both functionality and curb appeal.</li>
          </ul>
          <h3 className="mb-4 text-xl font-bold text-JonesCo-Blue-950">Why Choose Us</h3>
          <p className="mb-4 text-base md:text-lg text-JonesCo-Blue-900">
            JonesCo Gutters stands out for our commitment to quality and customer satisfaction. Here’s why homeowners in {city} trust us:
          </p>
          <ul className="mb-8 list-disc list-inside text-JonesCo-Blue-900" style={{ listStylePosition: 'outside', paddingLeft: '1.5rem' }}>
            <li className="pl-4"><strong>Expert Installation:</strong> Our skilled technicians ensure precise installation for optimal performance and longevity.</li>
            <li className="pl-4"><strong>High-Quality Materials:</strong> We use only the best materials to guarantee durability and reliability.</li>
            <li className="pl-4"><strong>Customized Solutions:</strong> Every home is unique, and we provide customized solutions to meet your specific needs.</li>
            <li className="pl-4"><strong>Exceptional Customer Service:</strong> From the initial consultation to project completion, we prioritize clear communication and customer satisfaction.</li>
            <li className="pl-4"><strong>Competitive Pricing:</strong> We offer fair and transparent pricing without compromising on quality.</li>
          </ul>
          <h3 className="mb-4 text-xl font-bold text-JonesCo-Blue-950">Contact Us Today</h3>
          <p className="mb-4 text-base md:text-lg text-JonesCo-Blue-900">
            Ready to upgrade your home’s gutter system? Contact JonesCo Gutters today for a free estimate. Our team in {city} is here to help you protect your home with top-notch gutter solutions. We are committed to providing exceptional service and high-quality products that meet your specific needs.
          </p>
          <p className="mb-4 text-base md:text-lg text-JonesCo-Blue-900">
            Don't wait until it's too late. Ensure your home is protected from water damage by investing in a reliable and efficient gutter system. Our experts are ready to assist you with all your gutter needs, from installation to maintenance and repairs. Call us today or fill out our online form to schedule a consultation.
          </p>
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
      <QandA />
      <Estimate />
      <Footer />
    </div>
  );
};

export default CityPage;