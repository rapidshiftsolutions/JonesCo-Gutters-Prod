import { Fragment } from 'react';

const services = [
  {
    id: 1,
    title: 'Seamless Gutter Installation',
    description: 'Experience perfection with our custom-fit seamless gutters. Designed to eliminate leaks and clogs, our systems are tailored to enhance the aesthetics and functionality of your home.',
  },
  {
    id: 2,
    title: 'Gutter Maintenance',
    description: 'Extend the life of your gutters with our comprehensive maintenance plans. Enjoy regular cleaning and inspections to keep your gutters clear, clean, and functioning at their best all year round.',
  },
  {
    id: 3,
    title: 'Gutter Enhancers',
    description: 'Boost your gutter system with high-quality enhancements. From robust downspouts to innovative leaf guards, our accessories improve water flow and protect against debris accumulation.',
  },
];

export default function ServicesComponent() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-2xl font-black text-JonesCo-Green-950 sm:text-5xl lg:text-6xl">
          Our Expert Services
        </h2>
        <div className="mt-8 space-y-10">
          {services.map(service => (
            <Fragment key={service.id}>
              <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <dt className="text-xl font-bold text-black">
                  {service.title}
                </dt>
                <dd className="mt-2 text-base text-gray-600 lg:col-span-2 lg:mt-0">
                  {service.description}
                </dd>
              </div>
              <hr className="border-t border-JonesCo-Green-200" /> {/* Only if visual separation is needed */}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
