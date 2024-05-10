import 'focus-visible'
import '@/styles/tailwind.css'

import GoogleTagManager from '../components/GoogleTagManager';

function MyApp({ Component, pageProps }) {
  const GTAG_ID = process.env.NEXT_PUBLIC_GTAG_ID;

  return (
    <>
      <GoogleTagManager gtagId={GTAG_ID} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
