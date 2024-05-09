import { CheckIcon } from '@heroicons/react/20/solid';

export default function Example() {
  return (
    <div className="bg-JonesCo-Blue-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-xl font-semibold leading-7 text-JonesCo-Green-600">
            The Jones Family:
          </p>
          <h1 className="text-gray-900 mt-2 text-2xl font-bold tracking-tight sm:text-4xl">
            Gutter Replacement & Installation You Can Trust
          </h1>
          <div className="text-gray-700 mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                Meet Johnathan Jones, the dedicated founder of JonesCo Seamless
                Gutter Systems. With years of experience as both a mechanic and
                a nurse, Johnathan applies a meticulous and caring approach to
                every home’s gutter needs.
              </p>
              <p className="mt-8">
                His journey is rooted in a rich history of problem-solving and
                compassionate service. He’s committed not just to excellence in
                gutter installation and replacement but also to ensuring each
                family receives a service that reflects his dedication to home
                care.
              </p>
            </div>
            <div>
              <p>
                With a careful hand and a keen eye, Johnathan and his team at
                JonesCo bring personalized attention to every project, ensuring
                your gutter solutions are tailored to your home’s specific
                requirements.
              </p>
              <p className="mt-8">
                Enjoy the assurance and tranquility of a home protected by
                JonesCo, where gutter replacements, installations, and cleaning
                are done with care. The safety and comfort of your family are
                our top priority, just as they are in our own.
              </p>
            </div>
          </div>
          <div className="mt-10 flex">
            <a
              href="https://clienthub.getjobber.com/booking/cfb34696-fc96-46da-87a4-b54410c83f3b"
              className="rounded-md bg-JonesCo-Green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-JonesCo-Green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-JonesCo-Green-600"
            >
              Request a Free Estimate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
