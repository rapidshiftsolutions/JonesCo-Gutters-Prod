import Head from 'next/head';
import Banner from '@/components/banner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import OurServices from '@/components/galvalume-gutters';
import Estimate from '@/components/Hero';

export default function GalvalumeGutters() {
  return (
    <>
      <Head>
        <title>JonesCo Gutters - Galvalume Gutters</title>
        <meta name="theme-color" content="#0066CC" />
        <meta
          name="description"
          content="Superior galvalume gutter installations and services in Eastern Tennessee. Protect your home with JonesCo Seamless Gutter Systems' advanced galvalume gutter solutions."
        />
        <meta name="keywords" content="
          Alcoa galvalume gutters, 
          Maryville galvalume gutters, 
          Friendsville galvalume gutters, 
          Townsend galvalume gutters, 
          Louisville galvalume gutters, 
          Newport galvalume gutters, 
          Parrottsville galvalume gutters, 
          Cosby galvalume gutters, 
          Del Rio galvalume gutters, 
          Greeneville galvalume gutters, 
          Mosheim galvalume gutters, 
          Tusculum galvalume gutters, 
          Baileyton galvalume gutters, 
          Morristown galvalume gutters, 
          Russellville galvalume gutters, 
          Whitesburg galvalume gutters, 
          Talbott galvalume gutters, 
          Dandridge galvalume gutters, 
          Jefferson City galvalume gutters, 
          White Pine galvalume gutters, 
          New Market galvalume gutters, 
          Baneberry galvalume gutters, 
          Knoxville galvalume gutters, 
          Farragut galvalume gutters, 
          Powell galvalume gutters, 
          Corryton galvalume gutters, 
          Sevierville galvalume gutters, 
          Pigeon Forge galvalume gutters, 
          Gatlinburg galvalume gutters, 
          Pittman Center galvalume gutters, 
          Johnson City galvalume gutters, 
          Jonesborough galvalume gutters, 
          Limestone galvalume gutters, 
          Telford galvalume gutters, 
          Blount County galvalume gutters, 
          Cocke County galvalume gutters, 
          Greene County galvalume gutters, 
          Hamblen County galvalume gutters, 
          Jefferson County galvalume gutters, 
          Knox County galvalume gutters, 
          Sevier County galvalume gutters, 
          Washington County galvalume gutters
        " />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="JonesCo Gutters - Galvalume Gutters" />
        <meta property="og:description" content="Superior galvalume gutter installations and services in Eastern Tennessee. Protect your home with JonesCo Seamless Gutter Systems' advanced galvalume gutter solutions." />
        <meta property="og:url" content="https://jonescogutters.com/galvalume-gutters" />
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
