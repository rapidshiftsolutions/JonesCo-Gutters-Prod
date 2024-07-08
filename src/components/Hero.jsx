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

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
      {isDesktop && (
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
      )}
      <div className="absolute top-0 left-0 w-full h-full bg-JonesCo-Blue-900 opacity-80 pb-2"></div>
      <div className="relative z-10 w-full max-w-7xl mx-4 sm:mx-auto">
        <div className={`bg-white shadow-lg rounded-lg p-6 ${isDesktop ? 'grid grid-cols-2 gap-8' : 'max-w-md mx-auto'}`}>
          {isDesktop && (






            <div className="flex flex-col justify-between items-center px-10 h-full bg-JonesCo-Blue-100 rounded-xl">
              <div className="flex-grow">
                <h2 className="text-2xl font-black tracking-tight text-JonesCo-Blue-950 sm:text-3xl mb-8 text-center mt-8">
                  Done Right, The First Time.
                </h2>
                <div className="flex items-center mb-4">
                  <svg className="h-6 w-6 text-JonesCo-Green-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-lg  text-gray-700">
                    Quality and precision with every project
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <svg className="h-6 w-6 text-JonesCo-Green-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-lg  text-gray-700">
                    Experienced team
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <svg className="h-6 w-6 text-JonesCo-Green-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-lg  text-gray-700">
                    Best materials and techniques
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <svg className="h-6 w-6 text-JonesCo-Green-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-lg  text-gray-700">
                    Meticulous attention to detail
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <svg className="h-6 w-6 text-JonesCo-Green-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-lg  text-gray-700">
                    Solutions tailored to your needs
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <svg className="h-6 w-6 text-JonesCo-Green-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-lg  text-gray-700">
                    Commitment to customer satisfaction
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <svg className="h-6 w-6 text-JonesCo-Green-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-lg  text-gray-700">
                    Trusted by homeowners across Eastern Tennessee
                  </p>
                </div>

              </div>
              <div className="w-full flex flex-col mt-6 mb-4">
                <div className="hidden md:flex flex-col justify-end w-full">
                  <div className="flex space-x-4">
                    <a
                      href="tel:423-207-3325"
                      className="w-1/2 text-center py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-JonesCo-Blue-600 hover:bg-JonesCo-Blue-700 animate-pulse"
                    >
                      423-207-3325
                    </a>
                    <a
                      href="mailto:hey@jonescogutters.com"
                      className="w-1/2 text-center py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-JonesCo-Blue-600 hover:bg-JonesCo-Blue-700 animate-pulse"
                    >
                      hey@jonescogutters.com
                    </a>
                  </div>
                </div>
                <div className="flex md:hidden flex-col mt-6 space-y-4">
                  <button
                    type="button"
                    className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-JonesCo-Blue-600 hover:bg-JonesCo-Blue-700 animate-pulse"
                    onClick={() => window.location.href = 'tel:423-207-3325'}
                  >
                    Call Us
                  </button>
                  <button
                    type="button"
                    className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-JonesCo-Blue-600 hover:bg-JonesCo-Blue-700 animate-pulse"
                    onClick={() => window.location.href = 'mailto:hey@jonescogutters.com'}
                  >
                    Email Us
                  </button>
                </div>
              </div>
            </div>





          )}
          <div>
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
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-JonesCo-Green-600 hover:bg-JonesCo-Blue-700"
                >
                  Submit Request
                </button>
              </div>
            </form>
            {!isDesktop && (
              <div className="mt-6 text-center">
                <div className="flex justify-center space-x-4">
                  <button
                    type="button"
                    className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-JonesCo-Blue-600 hover:bg-JonesCo-Blue-700 animate-pulse"
                    onClick={() => window.location.href = 'tel:423-207-3325'}
                  >
                    Call Us
                  </button>
                  <button
                    type="button"
                    className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-JonesCo-Blue-600 hover:bg-JonesCo-Blue-700 animate-pulse"
                    onClick={() => window.location.href = 'mailto:hey@jonescogutters.com'}
                  >
                    Email Us
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
