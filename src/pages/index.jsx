import Head from 'next/head';
import CTAA from '@/components/CTA-A';
import CTAD from '@/components/CTA-D';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import OurServices from '@/components/OurServices';
import ServiceLocations from '@/components/ServiceLocationsCity';
import WhyJonesCo from '@/components/Value';
import John from '@/components/Why';
import Subcontracting from '@/components/subcontracting';
import Reviews from '@/components/reviews';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Estimate from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Gutters - Home</title>
        <meta name="theme-color" content="#0066CC" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Expert gutter installations and services for lasting home protection. Discover why JonesCo Seamless Gutter Systems is the trusted choice in Eastern Tennessee."
        />
        <meta name="keywords" content="
          commercial gutter installation near me,
          seamless gutter company near me,
          seamless gutters companies near me,
          gutter repair contractors near me,
          seamless gutter contractors near me,
          seamless gutter installation near me,
          seamless gutter installer near me,
          seamless guttering companies near me,
          seamless gutters contractors near me,
          seamless gutters installation near me,
          seamless gutters installers near me,
          seamless rain gutters near me,
          custom gutters near me,
          gutter companies around me,
          gutter contractor near me,
          gutter contractors near me,
          gutter guards installers near me,
          gutter price calculator,
          gutters and siding contractors near me,
          handyman gutter repair near me,
          rain gutter contractor near me,
          rain gutter contractors near me,
          rain gutters contractors near me,
          roof gutter installers near me,
          seamless gutter companies near me,
          seamless gutter contractor near me,
          seamless gutter installers near me,
          seamless gutters installed near me,
          seamless gutters near me,
          seemless gutters near me,
          siding and gutters near me,
          gutter business near me,
          gutter guards installed near me,
          gutter install near me,
          guttering contractors near me,
          gutters and siding near me,
          gutters contractor near me,
          gutters contractors near me,
          gutters install near me,
          roof and gutter contractors near me,
          seamless gutter near me,
          seamless guttering near me,
          top rated gutter companies near me,
          youtube gutter installation,
          continuous gutters near me,
          gutter instalation near me,
          gutter install companies near me,
          gutter installation companies near me,
          gutter installation company near me,
          gutter installation contractors near me,
          gutter installer near me,
          gutter installers near me,
          gutter replacement companies near me,
          gutter service near me,
          guttering installation near me,
          guttering installers near me,
          gutters installation near me,
          gutters installed near me,
          mini gutter,
          small gutter,
          small gutters,
          where to buy mobile home gutters,
          tools for gutter installation,
          window gutters,
          large rain gutters,
          2 inch gutter,
          menards downspouts,
          rain gutters at menards,
          downspout extension menards,
          downspout repair near me,
          gares de casa,
          wide rain gutters,
          16 ft gutter lowe's,
          mini gutters lowe's,
          gutter parts home depot,
          gutter roof,
          mini gutters,
          plastic rain gutters home depot,
          roofing gutter,
          plastic gutters home depot,
          gutter screws home depot,
          add downspout to rain gutter,
          aluminum rain gutters home depot,
          gutter downspouts at lowes,
          aluminum gutters home depot,
          gutter downspout installation,
          rain gutter company near me,
          roof gutter repair near me,
          seamless gutter price calculator,
          affordable gutters near me,
          local gutter company,
          local rain gutter companies,
          water gutter,
          downspouts at lowes,
          gutters installers near me,
          roofing and gutters near me,
          gutter fixing near me,
          home depot gutters and downspouts,
          homedepot gutters,
          rain gutters repair near me
        " />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="JonesCo Gutters - Home" />
        <meta property="og:description" content="Expert gutter installations and services for lasting home protection. Discover why JonesCo Seamless Gutter Systems is the trusted choice in Eastern Tennessee." />
        <meta property="og:url" content="https://jonescogutters.com/" />
        <meta property="og:type" content="website" />
      </Head>
      <Header />

      <main className="-z-50">
        <Hero />
        <Reviews />
        <WhyJonesCo />
        <OurServices />
        <ServiceLocations />
        <Estimate />
        <GoogleAnalytics />
      </main>

      <Footer />
    </>
  );
}
