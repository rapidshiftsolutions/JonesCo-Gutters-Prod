import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap"
        />
        <link rel="icon" href="/icons/favicon.ico" />
        <meta name="description" content="JonesCo Seamless Gutter Systems offers top-notch seamless gutter installation, gutter repair, gutter cleaning, and custom gutter solutions in Eastern Tennessee. Our experienced team ensures your home is protected from water damage with high-quality materials and expert workmanship." />
        <meta name="theme-color" content="#0066CC" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:description" content="JonesCo Seamless Gutter Systems offers top-notch seamless gutter installation, gutter repair, gutter cleaning, and custom gutter solutions in Eastern Tennessee. Our experienced team ensures your home is protected from water damage with high-quality materials and expert workmanship." />
        <meta property="og:url" content="https://jonescogutters.com" />
        <meta property="og:image" content="/images/hero-background.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JonesCo Seamless Gutter Systems" />
        <meta name="twitter:description" content="JonesCo Seamless Gutter Systems offers top-notch seamless gutter installation, gutter repair, gutter cleaning, and custom gutter solutions in Eastern Tennessee. Our experienced team ensures your home is protected from water damage with high-quality materials and expert workmanship." />
        <meta name="twitter:image" content="/images/hero-background.webp" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "JonesCo Seamless Gutter Systems",
            "image": "https://jonescogutters.com/images/hero-background.webp",
            "@id": "https://jonescogutters.com",
            "url": "https://jonescogutters.com",
            "telephone": "423-207-3325",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "528 Gorden Rd",
              "addressLocality": "Parrottsville",
              "addressRegion": "TN",
              "postalCode": "37843",
              "addressCountry": "US"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.5",
              "reviewCount": "27"
            }
          }`
        }} />
      </Head>
      <body className="flex z-0 flex-col h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}