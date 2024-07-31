import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import ReviewSnippet from '@/components/ReviewSnippet';

// Dynamically import the QandA component
const QandA = dynamic(() => import('@/components/QandA'), { ssr: false });

// Dynamically import the Hero component
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });

const services = [
  {
    href: '/seamless-gutter-installation',
    title: 'Seamless Gutter Installation',
    description: 'Seamless gutters provide a sleek, modern look while minimizing leaks and maintenance. Our experts custom-fit gutters to your home.',
  },
  {
    href: '/gutter-replacement',
    title: 'Gutter Replacement',
    description: 'We replace old, damaged gutters with new, high-quality systems designed to last.',
  },
  {
    href: '/gutter-cleaning',
    title: 'Gutter Cleaning',
    description: 'Regular gutter cleaning prevents clogs and overflows, protecting your home’s foundation and landscaping.',
  },
  {
    href: '/gutter-guards',
    title: 'Gutter Guards Installation',
    description: 'Gutter guards reduce maintenance by keeping debris out, ensuring your gutters work efficiently year-round.',
  },
  {
    href: '/custom-gutters',
    title: 'Custom Gutter Solutions',
    description: 'Tailored solutions to fit your home’s specific needs, enhancing both functionality and aesthetics.',
  },
  {
    href: '/downspouts',
    title: 'Downspout Installation & Repair',
    description: 'Properly functioning downspouts direct water away from your home, preventing erosion and water damage.',
  },
  {
    href: '/snow-guards',
    title: 'Snow Guards Installation',
    description: 'Protect your roof and gutters from snow damage with our durable snow guards.',
  },
  {
    href: '/rain-chains',
    title: 'Rain Chains Installation',
    description: 'Enhance your home’s aesthetic and manage rainwater flow with our decorative rain chains.',
  },
];

const gutterStyles = [
  {
    href: '/copper-gutters',
    title: 'Copper Gutters',
    description: 'Durable and stylish, copper gutters add a touch of elegance to any home.',
  },
  {
    href: '/galvanized-gutters',
    title: 'Galvanized Gutters',
    description: 'Known for their strength and resistance to rust, these gutters are a great choice for durability.',
  },
  {
    href: '/galvalume-gutters',
    title: 'Galvalume Gutters',
    description: 'Offering superior corrosion resistance, galvalume gutters are ideal for harsh weather conditions.',
  },
  {
    href: '/colored-gutters',
    title: 'Colored Gutters',
    description: 'Match your home’s exterior with our wide range of colored gutters, providing both functionality and curb appeal.',
  },
];

const whyChooseUs = [
  'Expert Installation: Our skilled technicians ensure precise installation for optimal performance and longevity.',
  'High-Quality Materials: We use only the best materials to guarantee durability and reliability.',
  'Customized Solutions: Every home is unique, and we provide customized solutions to meet your specific needs.',
  'Exceptional Customer Service: From the initial consultation to project completion, we prioritize clear communication and customer satisfaction.',
  'Competitive Pricing: We offer fair and transparent pricing without compromising on quality.',
];

const CountyPage = React.memo(({ county, cities, description, keywords }) => {
  return (
    <div>
      <Head>
        <title>{`Best Gutter Services in ${county} County | JonesCo Gutters`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(', ')} />
      </Head>
      <div className="px-4 py-8 w-full rounded-lg md:px-8 bg-JonesCo-Green-50">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-4 text-2xl font-extrabold md:text-3xl text-JonesCo-Green-950">JonesCo in {county} County 💪</h1>
          <div className="my-8">
            <ReviewSnippet
              name={`JonesCo Gutters in ${county} County`}
              description={`Top-notch seamless gutters, gutter guards, gutter cleaning and more in ${county} County.`}
              ratingValue="5"
              ratingCount="10"
            />
          </div>
          <p className="mb-8 text-base md:text-lg text-JonesCo-Green-900">{description}</p>
          <h2 className="mb-4 text-xl font-bold text-JonesCo-Green-950">Why Choose JonesCo?</h2>
          <p className="mb-4 text-base md:text-lg text-JonesCo-Green-900">
            Maintaining your home’s gutters is essential to protect it from water damage. {county} experiences unique weather patterns, making it crucial to have reliable and effective gutter systems. JonesCo Gutters offers top-notch services to ensure your home stays protected year-round. Our team is dedicated to providing high-quality workmanship and outstanding customer service, ensuring your complete satisfaction with every project we undertake. We understand that your home is one of your most significant investments, and we treat it with the respect it deserves.
          </p>
          <p className="mb-4 text-base md:text-lg text-JonesCo-Green-900">
            Our seamless gutter systems are designed to withstand the harshest weather conditions, providing you with peace of mind and long-lasting protection. We use only the best materials and the latest techniques to ensure that your gutters are durable, efficient, and aesthetically pleasing. Whether you need a new gutter installation, replacement, cleaning, or custom solution, we have the expertise to handle all your gutter needs in {county} County.
          </p>
          <h3 className="mb-4 text-xl font-bold text-JonesCo-Green-950">Cities We Serve in {county} County</h3>
          <ul className="mb-8 list-disc list-inside text-JonesCo-Green-900" style={{ paddingLeft: '1.5rem' }}>
            {cities.map(city => (
              <li key={city}>
                <Link href={`/cities/${city.toLowerCase().replace(/ /g, '')}`} legacyBehavior>
                  <a className="text-JonesCo-Green-900 hover:underline">{city}</a>
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mb-4 text-xl font-bold text-JonesCo-Green-950">Our Comprehensive Services</h3>
          <p className="mb-4 text-base md:text-lg text-JonesCo-Green-900">
            At JonesCo Gutters, we offer a wide range of services to meet all your gutter needs. Our services include:
          </p>
          <ul className="mb-8 list-disc list-inside text-JonesCo-Green-900" style={{ paddingLeft: '1.5rem' }}>
            {services.map((service) => (
              <li key={service.href}>
                <Link href={service.href} legacyBehavior>
                  <a className="text-JonesCo-Green-900 hover:underline"><strong>{service.title}:</strong></a>
                </Link> {service.description}
              </li>
            ))}
          </ul>
          <h3 className="mb-4 text-xl font-bold text-JonesCo-Green-950">Our Gutter Styles</h3>
          <p className="mb-4 text-base md:text-lg text-JonesCo-Green-900">
            We offer a variety of gutter styles to suit your home's aesthetic and functional needs:
          </p>
          <ul className="mb-8 list-disc list-inside text-JonesCo-Green-900" style={{ paddingLeft: '1.5rem' }}>
            {gutterStyles.map((style) => (
              <li key={style.href}>
                <Link href={style.href} legacyBehavior>
                  <a className="text-JonesCo-Green-900 hover:underline"><strong>{style.title}:</strong></a>
                </Link> {style.description}
              </li>
            ))}
          </ul>
          <h3 className="mb-4 text-xl font-bold text-JonesCo-Green-950">Why Choose Us</h3>
          <ul className="mb-8 list-disc list-inside text-JonesCo-Green-900" style={{ paddingLeft: '1.5rem' }}>
            {whyChooseUs.map((reason, index) => (
              <li key={index}>
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <QandA />
      <Hero />
    </div>
  );
});

export default CountyPage;