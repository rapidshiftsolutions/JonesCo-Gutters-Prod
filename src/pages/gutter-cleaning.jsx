import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import OurServices from '@/components/guttercleaning'
import Estimate from '@/components/freeestimate-webhook';


export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Gutters - Gutter Cleaning</title>
        <meta name="theme-color" content="#0066CC" />
        <meta
          name="description"
          content="Expert gutter cleaning services in Eastern Tennessee. Protect your home with JonesCo Seamless Gutter Systems' thorough and professional gutter cleaning solutions."
        />
        <meta name="keywords" content="
          Alcoa gutter cleaning, 
          Maryville gutter cleaning, 
          Friendsville gutter cleaning, 
          Townsend gutter cleaning, 
          Louisville gutter cleaning, 
          Newport gutter cleaning, 
          Parrottsville gutter cleaning, 
          Cosby gutter cleaning, 
          Del Rio gutter cleaning, 
          Greeneville gutter cleaning, 
          Mosheim gutter cleaning, 
          Tusculum gutter cleaning, 
          Baileyton gutter cleaning, 
          Morristown gutter cleaning, 
          Russellville gutter cleaning, 
          Whitesburg gutter cleaning, 
          Talbott gutter cleaning, 
          Dandridge gutter cleaning, 
          Jefferson City gutter cleaning, 
          White Pine gutter cleaning, 
          New Market gutter cleaning, 
          Baneberry gutter cleaning, 
          Knoxville gutter cleaning, 
          Farragut gutter cleaning, 
          Powell gutter cleaning, 
          Corryton gutter cleaning, 
          Sevierville gutter cleaning, 
          Pigeon Forge gutter cleaning, 
          Gatlinburg gutter cleaning, 
          Pittman Center gutter cleaning, 
          Johnson City gutter cleaning, 
          Jonesborough gutter cleaning, 
          Limestone gutter cleaning, 
          Telford gutter cleaning, 
          Blount County gutter cleaning, 
          Cocke County gutter cleaning, 
          Greene County gutter cleaning, 
          Hamblen County gutter cleaning, 
          Jefferson County gutter cleaning, 
          Knox County gutter cleaning, 
          Sevier County gutter cleaning, 
          Washington County gutter cleaning
        " />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="JonesCo Gutters - Gutter Cleaning" />
        <meta property="og:description" content="Expert gutter cleaning services in Eastern Tennessee. Protect your home with JonesCo Seamless Gutter Systems' thorough and professional gutter cleaning solutions." />
        <meta property="og:url" content="https://jonescogutters.com/gutter-cleaning" />
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
