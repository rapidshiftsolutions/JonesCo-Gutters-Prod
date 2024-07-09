import Head from 'next/head';
import Banner from '@/components/banner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import OurServices from '@/components/downspouts';
import Estimate from '@/components/freeestimate-webhook';

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Gutters - Downspout Installation & Repair</title>
        <meta name="theme-color" content="#0066CC" />
        <meta
          name="description"
          content="Expert downspout installation and repair services in Eastern Tennessee. Protect your home with JonesCo Seamless Gutter Systems' top-quality solutions."
        />
        <meta name="keywords" content="
          Alcoa downspout installation and repair, 
          Maryville downspout installation and repair, 
          Friendsville downspout installation and repair, 
          Townsend downspout installation and repair, 
          Louisville downspout installation and repair, 
          Newport downspout installation and repair, 
          Parrottsville downspout installation and repair, 
          Cosby downspout installation and repair, 
          Del Rio downspout installation and repair, 
          Greeneville downspout installation and repair, 
          Mosheim downspout installation and repair, 
          Tusculum downspout installation and repair, 
          Baileyton downspout installation and repair, 
          Morristown downspout installation and repair, 
          Russellville downspout installation and repair, 
          Whitesburg downspout installation and repair, 
          Talbott downspout installation and repair, 
          Dandridge downspout installation and repair, 
          Jefferson City downspout installation and repair, 
          White Pine downspout installation and repair, 
          New Market downspout installation and repair, 
          Baneberry downspout installation and repair, 
          Knoxville downspout installation and repair, 
          Farragut downspout installation and repair, 
          Powell downspout installation and repair, 
          Corryton downspout installation and repair, 
          Sevierville downspout installation and repair, 
          Pigeon Forge downspout installation and repair, 
          Gatlinburg downspout installation and repair, 
          Pittman Center downspout installation and repair, 
          Johnson City downspout installation and repair, 
          Jonesborough downspout installation and repair, 
          Limestone downspout installation and repair, 
          Telford downspout installation and repair, 
          Blount County downspout installation and repair, 
          Cocke County downspout installation and repair, 
          Greene County downspout installation and repair, 
          Hamblen County downspout installation and repair, 
          Jefferson County downspout installation and repair, 
          Knox County downspout installation and repair, 
          Sevier County downspout installation and repair, 
          Washington County downspout installation and repair
        " />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="JonesCo Gutters - Downspout Installation & Repair" />
        <meta property="og:description" content="Expert downspout installation and repair services in Eastern Tennessee. Protect your home with JonesCo Seamless Gutter Systems' top-quality solutions." />
        <meta property="og:url" content="https://jonescogutters.com/downspouts" />
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
