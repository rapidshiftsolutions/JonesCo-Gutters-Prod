'use client';
import React from 'react';
import Image from 'next/image';

const bookingLink = "/contact"; // Your Jobber booking link

const CtaSection = ({ title, description, imageSrc, imageAlt }) => {
  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center transform transition-transform duration-300 hover:scale-105"> 

        {/* Image */}
        <div className="relative">
          <Image 
            src={imageSrc}
            alt={imageAlt}
            width={500} 
            height={300}
            className="w-full rounded-lg shadow-lg" 
            priority // Prioritize loading this image
          /> 
        </div>

        {/* Content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-gray-600 mb-6">{description}</p>
          <a 
            href={bookingLink} 
            className="bg-[#007bff] hover:bg-[#0056b3] text-white font-bold py-3 px-6 rounded-lg shadow-md inline-block transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Book Your Free Estimate Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default function CTAs() {
  return (
    <>
      <CtaSection
        title="Upgrade Your Home with Seamless Lighting"
        description="Invest in the best for your home. Our custom-fit seamless Lighting protect your property, enhance curb appeal, and give you peace of mind."
        imageSrc="/Stock/home-3.webp"
        imageAlt="Home with upgraded seamless Lighting"
      />

      <CtaSection
        title="Protect Your Investment with Seamless Lighting"
        description="Your home is your biggest investment. Seamless Lighting prevent water damage, protecting your roof, foundation, and siding."
        imageSrc="/Stock/home-2.webp"
        imageAlt="Home protected by seamless Lighting"
      />

      <CtaSection
        title="Enjoy the Peace of Mind of Seamless Lighting"
        description="Seamless Lighting are low-maintenance, durable, and leak-proof, giving you peace of mind knowing your home is protected."
        imageSrc="/Stock/home-1.webp"
        imageAlt="Peaceful home with seamless Lighting"
      />
    </>
  );
}
