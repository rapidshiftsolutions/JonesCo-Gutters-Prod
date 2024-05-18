// components/LeadCaptureForm.jsx
"use client";

import { useState } from 'react';

export default function LeadCaptureForm() {
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
        setStatus('Form submitted successfully! We will be in touch shortly.');
        e.target.reset();
      } else {
        setStatus('Oops! There was an error. Please try again.');
      }
    } catch (error) {
      setStatus('Oops! There was an error. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="bg-white py-12 px-4 sm:py-16 sm:px-6 lg:px-8 rounded-lg shadow-md">
      <form
        name="contact" // Match with your Netlify form name
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="max-w-md mx-auto"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
        </p>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Name</label>
          <input type="text" id="name" name="name" required className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 sm:text-sm" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
          <input type="email" id="email" name="email" required className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 sm:text-sm" />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">Phone</label>
          <input type="tel" id="phone" name="phone" required className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 sm:text-sm" />
        </div>

        <div className="mb-4">
          <label htmlFor="service" className="block text-gray-700 text-sm font-medium mb-2">Service Needed</label>
          <select id="service" name="service" required className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:ring focus:ring-indigo-500 sm:text-sm">
            <option value="">Select a service</option>
            <option value="installation">Gutter Installation</option>
            <option value="repair">Gutter Repair</option>
            <option value="cleaning">Gutter Cleaning</option>
            <option value="guards">Gutter Guards</option>
          </select>
        </div>

        <button type="submit" className="bg-JonesCo-Red-500 hover:bg-JonesCo-Red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
          Get a Free Estimate
        </button>
        {status && <p className={`${status.includes('error') ? 'text-red-500' : 'text-green-500'} mt-2`}>{status}</p>} 
      </form>
    </div>
  );
}
