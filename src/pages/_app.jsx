import 'focus-visible'
import '@/styles/tailwind.css'

import GoogleTagManager from '../components/GoogleTagManager';
import GoogleAnalytics from '@/components/GoogleAnalytics';




function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleTagManager />
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
