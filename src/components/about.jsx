import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | JonesCo Seamless Gutter Systems</title>
        <meta name="description" content="Learn about JonesCo Seamless Gutter Systems, our journey, and commitment to quality and customer satisfaction." />
      </Head>
      <div className="bg-JonesCo-Blue-900 text-white py-8 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
              Meet the Man Behind the Gutters
            </h1>
            <p className="mt-4 text-lg sm:text-xl lg:text-2xl leading-8 text-JonesCo-Green-200">
              From Mechanic to Nurse to Gutter Expert
            </p>
          </div>
          <div className="mt-10 sm:mt-12">
            <div className="sm:grid sm:grid-cols-2 sm:gap-8 sm:items-center">
              <div>
                <p className="text-base sm:text-lg lg:text-xl leading-7 text-white">
                  Johnathan Jones, the founder of JonesCo Gutters, isn&apos;t your typical businessman. Born and raised in the heart of Kentucky, Johnathan started his career as a mechanic, honing his skills in problem-solving and meticulous craftsmanship.
                </p>
                <p className="mt-6 text-base sm:text-lg lg:text-xl leading-7 text-white">
                  Driven by a desire to help others, he later transitioned to nursing, where he learned the importance of compassion, empathy, and putting people&apos;s needs first.
                </p>
                <p className="mt-6 text-base sm:text-lg lg:text-xl leading-7 text-white">
                  These values are at the core of JonesCo Gutters. Johnathan&apos;s journey taught him that every job, no matter how big or small, deserves the utmost care and attention to detail. He brings the same passion and dedication he had as a mechanic and nurse to every gutter installation and repair.
                </p>
                <p className="mt-6 text-base sm:text-lg lg:text-xl leading-7 text-white">
                  When you choose JonesCo Gutters, you&apos;re not just getting a service; you&apos;re becoming part of Johnathan&apos;s commitment to quality, integrity, and customer satisfaction.
                </p>
              </div>
              <div className="mt-10 sm:mt-0 sm:ml-10 relative flex justify-center">
                <Image
                  className="rounded-lg shadow-lg object-cover"
                  src="/Stock/john.webp"
                  alt="Johnathan Jones"
                  width={400}
                  height={500}
                  quality={90}
                  style={{ height: '100%', width: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
