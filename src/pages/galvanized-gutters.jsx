import Head from 'next/head';
import Banner from '@/components/banner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import OurServices from '@/components/galvanized-gutters';
import Estimate from '@/components/freeestimate-webhook';

export default function GalvanizedGutters() {
  return (
    <>
      <Head>
        <title>JonesCo Gutters - Galvanized Gutters</title>
        <meta name="theme-color" content="#0066CC" />
        <meta
          name="description"
          content="Durable galvanized gutter installations and services in Eastern Tennessee. Protect your home with JonesCo Seamless Gutter Systems' long-lasting galvanized gutter solutions."
        />
        <meta name="keywords" content="
          Alcoa galvanized gutters, 
          Maryville galvanized gutters, 
          Friendsville galvanized gutters, 
          Townsend galvanized gutters, 
          Louisville galvanized gutters, 
          Newport galvanized gutters, 
          Parrottsville galvanized gutters, 
          Cosby galvanized gutters, 
          Del Rio galvanized gutters, 
          Greeneville galvanized gutters, 
          Mosheim galvanized gutters, 
          Tusculum galvanized gutters, 
          Baileyton galvanized gutters, 
          Morristown galvanized gutters, 
          Russellville galvanized gutters, 
          Whitesburg galvanized gutters, 
          Talbott galvanized gutters, 
          Dandridge galvanized gutters, 
          Jefferson City galvanized gutters, 
          White Pine galvanized gutters, 
          New Market galvanized gutters, 
          Baneberry galvanized gutters, 
          Knoxville galvanized gutters, 
          Farragut galvanized gutters, 
          Powell galvanized gutters, 
          Corryton galvanized gutters, 
          Sevierville galvanized gutters, 
          Pigeon Forge galvanized gutters, 
          Gatlinburg galvanized gutters, 
          Pittman Center galvanized gutters, 
          Johnson City galvanized gutters, 
          Jonesborough galvanized gutters, 
          Limestone galvanized gutters, 
          Telford galvanized gutters, 
          Blount County galvanized gutters, 
          Cocke County galvanized gutters, 
          Greene County galvanized gutters, 
          Hamblen County galvanized gutters, 
          Jefferson County galvanized gutters, 
          Knox County galvanized gutters, 
          Sevier County galvanized gutters, 
          Washington County galvanized gutters
        " />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="JonesCo Gutters - Galvanized Gutters" />
        <meta property="og:description" content="Durable galvanized gutter installations and services in Eastern Tennessee. Protect your home with JonesCo Seamless Gutter Systems' long-lasting galvanized gutter solutions." />
        <meta property="og:url" content="https://jonescogutters.com/galvanized-gutters" />
        <meta property="og:type" content="website" />
      </Head>
      
      <Header />
      <main>
        <OurServices />
        <Estimate />
      </main>
      <Footer />
    </>
  );
}
