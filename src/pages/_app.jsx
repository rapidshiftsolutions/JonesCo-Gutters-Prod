import 'focus-visible';
import '../styles/tailwind.css';

import '../styles/globals.css';

import GoogleTagManager from '../components/GoogleTagManager';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="browserconfig" href="/browserconfig.xml" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GoogleTagManager />
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;