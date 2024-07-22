import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CTAA from '@/components/CTA-B'
import OurServices from '@/components/gutterreplacement'
import Estimate from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Gutters - Gutter Replacement</title>
        <meta name="theme-color" content="#0066CC" />
        <meta
          name="description"
          content="Expert gutter replacement services in Eastern Tennessee. Protect your home with JonesCo Seamless Gutter Systems' top-quality gutter solutions."
        />
        <meta name="keywords" content="
          Alcoa gutter replacement, 
          Maryville gutter replacement, 
          Friendsville gutter replacement, 
          Townsend gutter replacement, 
          Louisville gutter replacement, 
          Newport gutter replacement, 
          Parrottsville gutter replacement, 
          Cosby gutter replacement, 
          Del Rio gutter replacement, 
          Greeneville gutter replacement, 
          Mosheim gutter replacement, 
          Tusculum gutter replacement, 
          Baileyton gutter replacement, 
          Morristown gutter replacement, 
          Russellville gutter replacement, 
          Whitesburg gutter replacement, 
          Talbott gutter replacement, 
          Dandridge gutter replacement, 
          Jefferson City gutter replacement, 
          White Pine gutter replacement, 
          New Market gutter replacement, 
          Baneberry gutter replacement, 
          Knoxville gutter replacement, 
          Farragut gutter replacement, 
          Powell gutter replacement, 
          Corryton gutter replacement, 
          Sevierville gutter replacement, 
          Pigeon Forge gutter replacement, 
          Gatlinburg gutter replacement, 
          Pittman Center gutter replacement, 
          Johnson City gutter replacement, 
          Jonesborough gutter replacement, 
          Limestone gutter replacement, 
          Telford gutter replacement, 
          Blount County gutter replacement, 
          Cocke County gutter replacement, 
          Greene County gutter replacement, 
          Hamblen County gutter replacement, 
          Jefferson County gutter replacement, 
          Knox County gutter replacement, 
          Sevier County gutter replacement, 
          Washington County gutter replacement
        " />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="JonesCo Gutters - Gutter Replacement" />
        <meta property="og:description" content="Expert gutter replacement services in Eastern Tennessee. Protect your home with JonesCo Seamless Gutter Systems' top-quality gutter solutions." />
        <meta property="og:url" content="https://jonescogutters.com/gutter-replacement" />
        <meta property="og:type" content="website" />
      </Head>
      
      <Header />
      <main>
        <OurServices />
        <Estimate />
      </main>
      <Footer />
    </>
  )
}
