import { Fragment } from 'react';

const services = [
  {
    id: 1,
    title: 'Seamless Gutter Installation',
    description: 'Get perfectly tailored seamless gutters for your home. Our custom-fit systems eliminate leaks and clogs while enhancing your home’s aesthetics and functionality.',
  },
  {
    id: 2,
    title: 'Gutter Replacement',
    description: 'Upgrade your old gutters to modern, efficient seamless systems. We provide expert removal and installation to ensure optimal water flow and long-lasting protection.',
  },
  {
    id: 3,
    title: 'Gutter Cleaning',
    description: 'Maintain your gutters with regular cleaning and inspections. Our team clears out leaves, debris, and clogs, ensuring your gutters stay clean and functional all year round.',
  },
  {
    id: 4,
    title: 'Gutter Guards Installation',
    description: 'Protect your gutters from debris accumulation with high-quality gutter guards. Our innovative leaf guards prevent clogs, improve water flow, and reduce maintenance.',
  },
  {
    id: 5,
    title: 'Custom Gutter Solutions',
    description: 'Get custom-designed gutters to meet unique architectural needs. Our team provides tailored solutions for challenging roof lines, complex angles, and specific water flow requirements.',
  },
  {
    id: 6,
    title: 'Downspout Installation & Repair',
    description: 'Ensure proper water drainage with our downspout installation and repair services. We install robust downspouts that efficiently direct water away from your home’s foundation.',
  },
];

export default function ServicesComponent() {
  return (
    <div className="bg-white py-16 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-base font-semibold leading-7 text-JonesCo-Green-600">
            Premium Gutter Solutions
          </h2>
          <h1 className="text-gray-900 mt-2 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Our Expert Services
          </h1>
          <dl className="mt-10 space-y-10 text-base leading-7 text-gray-600 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16 lg:space-y-0">
            {services.map((service) => (
              <Fragment key={service.id}>
                <div className="relative pl-9">
                  <dt className="font-semibold text-JonesCo-Green-900">
                    <span
                      className="absolute left-0 top-1 h-5 w-5 text-JonesCo-Green-500"
                      aria-hidden="true"
                    >
                      ✔
                    </span>
                    {service.title}
                  </dt>
                  <dd className="mt-2">{service.description}</dd>
                </div>
              </Fragment>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
