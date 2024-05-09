import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Gutter Inspection',
    description:
      'Our experts conduct thorough inspections and necessary tune-ups, ensuring your gutters are in optimal condition, ready to handle the heaviest downpours.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Seamless Installation',
    description: 'Upgrade to seamless gutters for a flawless look and superior performance. We handle the installation, so your home is prepped and protected.',
    icon: LockClosedIcon,
  },
  {
    name: 'Regular Maintenance',
    description: 'We keep your gutters clean and debris-free with our regular maintenance services, preventing blockages and extending their lifespan.',
    icon: ServerIcon,
  },
  {
    name: 'Custom Solutions',
    description: 'Whether it’s enhancing curb appeal or installing guards to keep out leaves, we customize solutions to fit your specific needs.',
    icon: ServerIcon,
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-10 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg sm:text-2xl font-semibold leading-7 text-JonesCo-Blue-600">Complete Gutter Care,</h2>
              <p className="tracking-tighter font-black mt-2 text-4xl text-JonesCo-Blue-950 sm:text-5xl">Tailored for You.</p>
              <p className="mt-6 text-lg leading-8 text-JonesCo-Blue-900">
              Time is precious, especially when it comes to home maintenance. Thats why JonesCo Gutter Services offers comprehensive care for your gutters, ensuring theyre ready for any season. Were dedicated to delivering top-notch gutter maintenance, repair, and enhancement with efficiency and precision.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7  lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt className="tracking-tighter font-black text-JonesCo-Blue-900 text-3xl pb-2">
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline text-JonesCo-Blue-950">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src='/../Stock/Home-2.webp'
            alt="Product screenshot"
            className="h-0 sm:h-full invisible sm:visible w-[48rem] max-w-none rounded-xl shadow-xl sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
