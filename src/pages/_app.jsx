import 'focus-visible'
import '@/styles/tailwind.css'

import GoogleTagManager from '../components/GoogleTagManager';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleTagManager />
      <GoogleAnalytics trackingId="G-7842C2P52F" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
