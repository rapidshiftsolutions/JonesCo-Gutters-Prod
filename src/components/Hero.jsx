export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-black px-6 py-32 sm:py-32 lg:px-8">
      <img
        src="/../Stock/camaro_wheelie.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20 sm:opacity-10"
      />
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="">
          <span className="text-3xl text-white sm:text-5xl font-semibold">Protect Your Home,</span>
          <br></br>{' '}
          <span className="tracking-tighter font-black text-5xl uppercase text-JonesCo-Green-400 sm:text-6xl">
            With JonesCo.
          </span>
        </h2>
        <p className="mt-8 text-sm leading-8 text-white sm:mt-12 sm:text-lg">
        Welcome to JonesCo Seamless Gutter Systems, your trusted partner in safeguarding your home against water damage. With our seamless gutter installation, downspouts, leaf guards, and maintenance subscriptions, we ensure your gutters remain efficient and your home stays protected, year-round.
        </p>
      </div>
    </div>
  )
}
