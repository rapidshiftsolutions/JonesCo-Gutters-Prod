'use client';

import { useState } from 'react';
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function ContactUs() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...'); 

    try {
      const response = await fetch(e.target.action, {
        method: e.target.method,
        body: new FormData(e.target),
      });

      if (response.ok) {
        setStatus('Form submitted successfully!');
        e.target.reset();
      } else {
        setStatus('Oops! There was an error submitting your form.');
      }
    } catch (error) {
      setStatus('Oops! There was an error submitting your form.');
      console.error(error);
    }
  };

  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div 
              className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-gray-900/10 lg:w-1/2"
              style={{ 
                backgroundImage: 'url(/Stock/home-1.webp)', 
                backgroundSize: 'cover',
                filter: 'brightness(40%)' // Increased darkening for better contrast
              }}
            ></div>
            <div className="bg-black/40 absolute inset-0 lg:w-1/2"></div>  {/* Increased overlay opacity for better contrast */}

            <h2 className="text-3xl font-bold tracking-tight text-white relative z-10">Get in Touch</h2>
            <p className="mt-6 text-lg leading-8 text-white relative z-10">  {/* Lightened text for better contrast */}
              Ready to experience the JonesCo difference? Contact us for a free estimate on your next gutter project. We&apos;re committed to providing the highest quality gutter solutions for your home in Eastern Tennessee.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-JonesCo-Blue-100 relative z-10"> 
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon className="h-7 w-6 text-white" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-JonesCo-Blue-300 text-white" href="tel:4239007901">
                    (423) 900-7901
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="h-7 w-6 text-white" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-JonesCo-Blue-300 text-white" href="mailto:hey@jonescogutters.com">
                    hey@jonescogutters.com
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4 text-white">
                <dt className="flex-none">
                  <span className="sr-only">Location</span>
                  <BuildingOffice2Icon className="h-7 w-6 text-white" aria-hidden="true" />
                </dt>
                <dd>
                  Based in Parrottsville, TN<br />
                  Serving Eastern Tennessee
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          name="contact" 
          method="POST"  
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <p className="hidden">
              <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
            </p>

            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-JonesCo-Blue-900">First name</label>
                <input type="text" id="first-name" name="first-name" autoComplete="given-name" required className="mt-2 block w-full rounded-md border-0 py-2 px-3.5 text-JonesCo-Blue-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-JonesCo-Blue-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-JonesCo-Blue-900">Last name</label>
                <input type="text" id="last-name" name="last-name" autoComplete="family-name" required className="mt-2 block w-full rounded-md border-0 py-2 px-3.5 text-JonesCo-Blue-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-JonesCo-Blue-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-JonesCo-Blue-900">Email</label>
                <input type="email" id="email" name="email" autoComplete="email" required className="mt-2 block w-full rounded-md border-0 py-2 px-3.5 text-JonesCo-Blue-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-JonesCo-Blue-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-JonesCo-Blue-900">Phone number</label>
                <input type="tel" id="phone-number" name="phone-number" autoComplete="tel" className="mt-2 block w-full rounded-md border-0 py-2 px-3.5 text-JonesCo-Blue-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-JonesCo-Blue-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="service" className="block text-sm font-semibold leading-6 text-JonesCo-Blue-900">Service Needed:</label>
                <select id="service" name="service" className="mt-2 block w-full rounded-md border-0 py-2 px-3.5 text-JonesCo-Blue-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <option value="">Select a service</option>
                  <option value="installation">Gutter Installation</option>
                  <option value="repair">Gutter Repair</option>
                  <option value="cleaning">Gutter Cleaning</option>
                  <option value="guards">Gutter Guards</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-JonesCo-Blue-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-JonesCo-Blue-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-JonesCo-Blue-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>

            </div>
            </div>
            
            <div className="mt-8 flex justify-end"> 
              <button
                type="submit"
                className="rounded-md bg-JonesCo-Blue-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-JonesCo-Red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-JonesCo-Red-500"
              >
                Request Free Estimate 😎
              </button>
            </div>
            {status && <p className={`${status.includes('error') ? 'text-red-500' : 'text-green-500'} mt-2`}>{status}</p>} 
          </div>
        </form>
      </div>
    </div>
  );
}
