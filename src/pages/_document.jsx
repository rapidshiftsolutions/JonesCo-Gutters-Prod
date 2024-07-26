import { Head, Html, Main, NextScript } from 'next/document';

export default function Document(props) {
  let pageProps = props.__NEXT_DATA__?.props?.pageProps;

  return (
    <Html
      className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
      lang="en"
    >
      <Head>
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
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="JonesCo Seamless Gutter Systems offers top-notch seamless gutter installation, gutter repair, gutter cleaning, and custom gutter solutions in Eastern Tennessee. Our experienced team ensures your home is protected from water damage with high-quality materials and expert workmanship."
        />
        <meta
          name="keywords"
          content="seamless gutter installation, gutter repair, gutter cleaning, custom gutter solutions, Eastern Tennessee, JonesCo Seamless Gutter Systems, gutter services"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://jonescogutters.com" />
        <meta property="og:title" content="JonesCo Seamless Gutter Systems" />
        <meta
          property="og:description"
          content="JonesCo Seamless Gutter Systems offers top-notch seamless gutter installation, gutter repair, gutter cleaning, and custom gutter solutions in Eastern Tennessee."
        />
        <meta property="og:url" content="https://jonescogutters.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://jonescogutters.com/Images/hero-background.webp"
        />
        <meta name="application-name" content="JonesCo Gutters" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="JonesCo Gutters" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#0066CC" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#0066CC" />
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body className="flex z-0 flex-col h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}