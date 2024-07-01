import React, { useState, useEffect } from 'react';
import Script from 'next/script';

const Example = () => {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('user-consent');
    if (consent === 'granted') {
      setConsentGiven(true);
      setConsentGranted();
    } else {
      setConsentDefaults();
    }
  }, []);

  const handleConsent = (consent) => {
    localStorage.setItem('user-consent', consent);
    if (consent === 'granted') {
      setConsentGranted();
    } else {
      setConsentDefaults();
    }
    setConsentGiven(consent === 'granted');
  };

  const setConsentDefaults = () => {
    if (window.gtag) {
      window.gtag('consent', 'default', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied',
      });
    }
  };

  const setConsentGranted = () => {
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'ad_storage': 'granted',
        'analytics_storage': 'granted',
      });
    }
  };

  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-7842C2P52F"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7842C2P52F', { 'anonymize_ip': true });
        `}
      </Script>
      <Script id="google-consent" strategy="afterInteractive">
        {`
          function setConsentDefaults() {
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
            });
          }

          function setConsentGranted() {
            gtag('consent', 'update', {
              'ad_storage': 'granted',
              'analytics_storage': 'granted'
            });
          }
        `}
      </Script>
      {!consentGiven && (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6 z-50">
          <div className="pointer-events-auto ml-auto max-w-xl rounded-xl bg-white p-6 shadow-lg ring-1 ring-JonesCo-Blue-900/10">
            <p className="text-sm leading-6 text-JonesCo-Blue-900">
            This website uses cookies to enhance your browsing experience, provide personalized ads, and analyze site traffic. Your consent helps us to provide better services and relevant content. Learn more in our{' '}
              <a href="/cookie-policy" className="font-semibold text-indigo-600">
                cookie policy
              </a>
              .
            </p>
            <div className="mt-4 flex items-center gap-x-5">
              <button
                type="button"
                className="rounded-md bg-JonesCo-Blue-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-JonesCo-Blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-JonesCo-Blue-900"
                onClick={() => handleConsent('granted')}
              >
                Accept all
              </button>
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-JonesCo-Blue-900"
                onClick={() => handleConsent('denied')}
              >
                Reject all
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Example;
