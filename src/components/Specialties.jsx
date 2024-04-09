import Link from "next/link";


import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Experienced Professionals',
    description:
      'Our team brings years of expertise to every project, ensuring flawless installation and maintenance.',
    href: '/services',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'High Quality Products',
    description:
      'We use only the highest quality materials for durable, long-lasting results.',
    href: '/services',
    icon: LockClosedIcon,
  },
  {
    name: 'Customer Satisfaction',
    description:
      'Your satisfaction is our priority. From the initial consultation to aftercare, were committed to exceeding your expectations.',
    href: '/services',
    icon: ArrowPathIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-white py-10 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-lg font-semibold leading-7 text-JonesCo-Green-600">
            Why Choose JonesCo?
          </h2>
          <p className="mt-2 tracking-tighter font-black text-5xl text-black sm:text-5xl">
            Our Quality.
          </p>
          <p className="text-gray-600 mt-6 text-lg leading-8">
          At JonesCo Seamless Gutter Systems, we stand out from the competition for several key reasons. Here's why homeowners trust us with their gutter needs:
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-gray-900 flex items-center gap-x-3 text-2xl leading-7 tracking-tighter font-black tracking-wide">
                  {feature.name}
                </dt>
                <dd className="text-gray-600 mt-2 flex flex-auto flex-col text-base leading-7">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-3">
                    <Link
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-JonesCo-Green-600"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
