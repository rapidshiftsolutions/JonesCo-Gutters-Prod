import Head from 'next/head';
import Banner from '@/components/banner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Estimate from '@/components/Hero';
import OurServices from '@/components/customguttersolutions';

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Gutters - Custom Gutter Solutions</title>
        <meta name="theme-color" content="#0066CC" />
        <meta
          name="description"
          content="Expert gutter installations and services in Eastern Tennessee. Protect your home with JonesCo Seamless Gutter Systems' top-quality custom gutter solutions."
        />
        <meta name="keywords" content="
          Alcoa custom gutters, 
          Maryville custom gutters, 
          Friendsville custom gutters, 
          Townsend custom gutters, 
          Louisville custom gutters, 
          Newport custom gutters, 
          Parrottsville custom gutters, 
          Cosby custom gutters, 
          Del Rio custom gutters, 
          Greeneville custom gutters, 
          Mosheim custom gutters, 
          Tusculum custom gutters, 
          Baileyton custom gutters, 
          Morristown custom gutters, 
          Russellville custom gutters, 
          Whitesburg custom gutters, 
          Talbott custom gutters, 
          Dandridge custom gutters, 
          Jefferson City custom gutters, 
          White Pine custom gutters, 
          New Market custom gutters, 
          Baneberry custom gutters, 
          Knoxville custom gutters, 
          Farragut custom gutters, 
          Powell custom gutters, 
          Corryton custom gutters, 
          Sevierville custom gutters, 
          Pigeon Forge custom gutters, 
          Gatlinburg custom gutters, 
          Pittman Center custom gutters, 
          Johnson City custom gutters, 
          Jonesborough custom gutters, 
          Limestone custom gutters, 
          Telford custom gutters, 
          Blount County custom gutters, 
          Cocke County custom gutters, 
          Greene County custom gutters, 
          Hamblen County custom gutters, 
          Jefferson County custom gutters, 
          Knox County custom gutters, 
          Sevier County custom gutters, 
          Washington County custom gutters
        " />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="JonesCo Gutters - Custom Gutter Solutions" />
        <meta property="og:description" content="Expert gutter installations and services in Eastern Tennessee. Protect your home with JonesCo Seamless Gutter Systems' top-quality custom gutter solutions." />
        <meta property="og:url" content="https://jonescogutters.com/custom-gutters" />
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
