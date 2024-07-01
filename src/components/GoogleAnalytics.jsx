import Script from 'next/script';

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-7842C2P52F`}
      />
      <Script
        id="google-analytics-inline"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7842C2P52F');
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
