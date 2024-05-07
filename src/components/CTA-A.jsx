import Link from "next/link";

export default function Example() {
  return (
    <div className="bg-JonesCo-Green-100 z-0">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="">
          <span className="text-lg tracking-tight text-JonesCo-Green-900 sm:text-3xl">Upgrade to Seamless Protection</span>
          <br />
          <span className="text-3xl tracking-tighter font-black tracking-tight text-JonesCo-Green-900 sm:text-5xl">Premium Gutters, <br/>Expert Service.</span>
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <Link href="https://clienthub.getjobber.com/booking/cfb34696-fc96-46da-87a4-b54410c83f3b">
            <span className="cursor-pointer rounded-md bg-JonesCo-Green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-JonesCo-Green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-JonesCo-Green-600">
              Get started
            </span>
          </Link>
          <Link href="/services">
            <span className="cursor-pointer text-sm font-semibold leading-6 text-JonesCo-Green-900">
              Services <span aria-hidden="true">→</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
