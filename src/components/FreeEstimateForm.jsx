import Link from 'next/link';


export default function Example() {
    return (
      <div className="relative isolate bg-white px-6 py-10 sm:py-32 lg:px-8">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-JonesCo-Blue-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              x="50%"
              y={-64}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-64} className="overflow-visible fill-JonesCo-Blue-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
        </svg>
        <div className="mx-auto max-w-xl lg:max-w-4xl">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-JonesCo-Blue-900">Let’s talk about your project</h2>
          <p className="mt-2 text-lg leading-8 text-JonesCo-Blue-600">
            We help companies and individuals solve their gutter problems.
          </p>
          <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
            <form action="#" method="POST" className="lg:flex-auto" netlify>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-JonesCo-Blue-900">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-JonesCo-Blue-900 shadow-sm ring-1 ring-inset ring-JonesCo-Blue-300 placeholder:text-JonesCo-Blue-400 focus:ring-2 focus:ring-inset focus:ring-JonesCo-Green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-JonesCo-Blue-900">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-JonesCo-Blue-900 shadow-sm ring-1 ring-inset ring-JonesCo-Blue-300 placeholder:text-JonesCo-Blue-400 focus:ring-2 focus:ring-inset focus:ring-JonesCo-Green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold leading-6 text-JonesCo-Blue-900">
                    Sq. Footage of Building
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="budget"
                      name="budget"
                      type="text"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-JonesCo-Blue-900 shadow-sm ring-1 ring-inset ring-JonesCo-Blue-300 placeholder:text-JonesCo-Blue-400 focus:ring-2 focus:ring-inset focus:ring-JonesCo-Green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-semibold leading-6 text-JonesCo-Blue-900">
                    Address
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="website"
                      id="website"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-JonesCo-Blue-900 shadow-sm ring-1 ring-inset ring-JonesCo-Blue-300 placeholder:text-JonesCo-Blue-400 focus:ring-2 focus:ring-inset focus:ring-JonesCo-Green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-JonesCo-Blue-900">
                    In a few words, describe how we can help.
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-JonesCo-Blue-900 shadow-sm ring-1 ring-inset ring-JonesCo-Blue-300 placeholder:text-JonesCo-Blue-400 focus:ring-2 focus:ring-inset focus:ring-JonesCo-Green-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-JonesCo-Green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-JonesCo-Green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-JonesCo-Green-600"
                >
                  Let’s talk
                </button>
              </div>
              <p className="mt-4 text-xs sm:text-sm leading-6 text-JonesCo-Blue-800">
                By submitting this form, I agree to the{' '}
                <Link href="/privacy" className="font-semibold text-JonesCo-Green-600">
                  privacy&nbsp;policy
                </Link>
                .
              </p>
            </form>
            <div className="lg:mt-6 lg:w-80 lg:flex-none">
              <img className="h-12 w-auto" src="/JC/JonesCo.webp" alt="" />
              <figure className="mt-10">
                <blockquote className="text-lg font-semibold leading-8 text-JonesCo-Blue-900">
                  <p>
                    “Our mission is to make sure the job is done right, the first time, every time. 
                    If you aren&apos;t happy, we&apos;ll make it right.”
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex gap-x-6">
                  <img
                    src="/Stock/john.webp"
                    alt=""
                    className="h-12 w-12 flex-none rounded-full bg-JonesCo-Blue-50"
                  />
                  <div>
                    <div className="text-base font-semibold text-JonesCo-Blue-900">John Jones</div>
                    <div className="text-sm leading-6 text-JonesCo-Blue-600">CEO of JonesCo</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    )
  }
  