const steps = [
  {
    id: 1,
    short: 'Seamless Gutter Installation',
    long: 'Trust our experienced team to install seamless gutters customized to fit your home perfectly. Say goodbye to leaks and clogs with our high-quality gutter systems.',
  },
  {
    id: 2,
    short: 'Gutter Maintenance',
    long: 'Keep your gutters in top condition with our hassle-free maintenance subscription. Regular cleanings and inspections ensure your gutters remain free from debris and functioning optimally.',
  },
  {
    id: 3,
    short: 'Gutter Enhancers',
    long: 'Enhance the performance of your gutters with our range of accessories, including durable downspouts and effective leaf guards.',
  },
  
  // More shorts...
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="divide-black/30 mx-auto max-w-7xl divide-y px-6 py-10 sm:py-32 lg:px-8 lg:py-24">
        <h2 className="text-JonesCo-Blue-900 text-5xl sm:text-6xl leading-10 tracking-tight  tracking-tighter font-black">
        Our Services
        </h2>
        <dl className="divide-black/20 mt-10 space-y-8 divide-y">
          {steps.map((step) => (
            <div
              key={step.id}
              className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"
            >
              <dt className="text-black text-lg sm:text-lg font-bold leading-7 lg:col-span-4">
                {step.short}
              </dt>
              <dd className="mt-4 lg:col-span-8 lg:mt-0">
                <p className="text-JonesCo-Green-900 text-base leading-7">{step.long}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
