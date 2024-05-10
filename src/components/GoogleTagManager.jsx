// components/GoogleTagManager.jsx
import Script from 'next/script';

const GoogleTagManager = ({ gtagId }) => {
  return (
    <>
      {/* Google Tag Manager */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
      />
      <Script id="gtag-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtagId}');
        `}
      </Script>
    </>
  );
};

export default GoogleTagManager;
