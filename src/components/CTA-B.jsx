import Link from "next/link";

export default function CTA() {
  return (
    <div className="bg-JonesCo-Green-100 z-0">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div className="space-y-4 max-w-lg lg:max-w-xl">
          <h2 className="text-2xl font-black text-JonesCo-Green-900 sm:text-3xl md:text-4xl">
            Reliable Gutter Protection
          </h2>
          <p className="text-lg sm:text-xl text-JonesCo-Green-900 font-bold">
            Expert Gutter Installation & Maintenance
          </p>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row sm:mt-0 gap-4">
          <Link href="https://clienthub.getjobber.com/booking/cfb34696-fc96-46da-87a4-b54410c83f3b">
            <span className="cursor-pointer inline-flex items-center justify-center rounded-md bg-JonesCo-Green-600 px-6 py-3 text-base font-semibold text-white shadow hover:bg-JonesCo-Green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-JonesCo-Green-700">
              Get Your Free Estimate
            </span>
          </Link>
          <Link href="/services">
            <span className="cursor-pointer inline-flex items-center justify-center rounded-md text-base font-semibold text-JonesCo-Green-900 bg-white px-6 py-3 border border-JonesCo-Green-600 hover:bg-JonesCo-Green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-JonesCo-Green-700">
              Explore Services
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
