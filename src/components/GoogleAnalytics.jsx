import React, { useEffect } from 'react';
import Script from 'next/script';

const GoogleAnalytics = ({ trackingId }) => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', trackingId);
  }, [trackingId]);

  return (
    <>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`} />
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${trackingId}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
