'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function JobberBookingForm() {
  const CLIENTHUB_ID = '1b0129bf-9730-46bf-9d7c-a34501f74690'; 
  const FORM_URL = `https://clienthub.getjobber.com/client_hubs/${CLIENTHUB_ID}/public/work_request/embedded_work_request_form`;

  useEffect(() => {
    const initJobber = () => {
      if (typeof window !== 'undefined' && window.Jobber) {
        window.Jobber.init({ clientHubId: CLIENTHUB_ID });
      } else {
        // If Jobber is not yet loaded, retry after a delay
        setTimeout(initJobber, 500); 
      }
    };

    initJobber(); // Call the function to initiate Jobber
  }, []);

  return (
    <div className="flex flex-col justify-center py-6 sm:py-12 bg-JonesCo-Green-200 w-full">
      <div id={CLIENTHUB_ID}></div> 

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
