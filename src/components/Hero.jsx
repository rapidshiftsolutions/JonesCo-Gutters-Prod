import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

const Hero = () => {
  const videoRef = useRef();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zipCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const zapierWebhookUrl = 'https://hooks.zapier.com/hooks/catch/19076579/2386szr/';
    const urlEncodedData = new URLSearchParams(formData).toString();

    try {
      const response = await fetch(zapierWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlEncodedData,
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setFormData({
          name: '',
          email: '',
          phone: '',
          zipCode: '',
        });
        router.push('/submitted');
      } else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div ref={videoRef} className="relative h-[100vh] md:h-[90vh] overflow-hidden z-10 flex items-center justify-center">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/sr3fAhxiwzQ?autoplay=1&mute=1&loop=1&playlist=sr3fAhxiwzQ"
        title="Background Video"
        frameBorder="0"
        allow="autoplay; loop; fullscreen"
        loading="lazy"
        style={{
          width: '1920px',
          height: '1080px',
          transform: 'scale(2)',
          transformOrigin: 'center center',
        }}
      ></iframe>
      <div className="absolute top-0 left-0 w-full h-full bg-JonesCo-Blue-900 opacity-80 pb-2"></div>
      <div className="relative z-10 max-w-md w-full bg-white shadow-lg rounded-lg p-6 mx-4 sm:mx-auto">
        <h2 className="text-2xl font-black tracking-tight text-JonesCo-Blue-950 sm:text-3xl mb-2 text-center">
          Request a Free Estimate
        </h2>
        <p className="text-center text-gray-700 mb-4">Get a quick and free estimate for your gutter needs by filling out our simple form below!</p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                Zip Code
              </label>
              <input
                type="text"
                name="zipCode"
                id="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-JonesCo-Green-600 hover:bg-JonesCo-Blue-700"
            >
              Submit Request
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-JonesCo-Blue-600 hover:bg-JonesCo-Blue-700"
              onClick={() => window.location.href = 'tel:423-207-3325'}
            >
              Call Us
            </button>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 ml-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-JonesCo-Blue-600 hover:bg-JonesCo-Blue-700"
              onClick={() => window.location.href = 'mailto:hey@jonescogutters.com'}
            >
              Email Us
            </button>
          </div>
          <div className="hidden md:block mt-4 text-gray-700">
            <p>Call us: <a href="tel:423-207-3325" className="text-JonesCo-Blue-600">423-207-3325</a></p>
            <p>Email us: <a href="mailto:hey@jonescogutters.com" className="text-JonesCo-Blue-600">hey@jonescogutters.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
