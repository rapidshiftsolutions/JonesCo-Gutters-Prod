'use client';

import Script from 'next/script';
import { useState, useEffect } from 'react';

export default function JobberBookingForm() {
  const CLIENTHUB_ID = '1b0129bf-9730-46bf-9d7c-a34501f74690';
  const FORM_URL = `https://clienthub.getjobber.com/client_hubs/${CLIENTHUB_ID}/public/work_request/embedded_work_request_form`;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let timeoutId;

    const initializeJobber = () => {
      if (typeof window !== 'undefined' && window.Jobber) {
        const jobberFormContainer = document.getElementById(CLIENTHUB_ID);
        if (jobberFormContainer) {
          window.Jobber.init({ clientHubId: CLIENTHUB_ID });
          setIsLoading(false);
        } else {
          timeoutId = setTimeout(initializeJobber, 500);
        }
      } else {
        timeoutId = setTimeout(initializeJobber, 500);
      }
    };

    initializeJobber();

    // Set a timeout to show an error message if the form doesn't load after 5 seconds
    const errorTimeoutId = setTimeout(() => {
      setError('Error loading the booking form. Please try again later.');
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(errorTimeoutId);
    };
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col justify-center py-6 sm:py-12 bg-JonesCo-Green-200 w-full">
      <div key={CLIENTHUB_ID} id={CLIENTHUB_ID}></div>

      <Script
        src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js"
        data-clienthub-id={CLIENTHUB_ID}
        data-form-url={FORM_URL}
        strategy="afterInteractive"
      />
      <Script
        src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css"
        strategy="afterInteractive"
      />
    </div>
  );
}
