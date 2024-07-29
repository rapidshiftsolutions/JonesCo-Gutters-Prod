import Head from 'next/head';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ServiceLocations from '@/components/ServiceLocationsCity';

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Gutters - Service Locations</title>
        <meta name="theme-color" content="#0066CC" />
        <meta
          name="description"
          content="Expert gutter installation and services across Eastern Tennessee. Find out if JonesCo Gutters serves your area."
        />
        <meta
          name="keywords"
          content="
            Alcoa seamless gutter installation, 
            Maryville seamless gutter installation, 
            Friendsville seamless gutter installation, 
            Townsend seamless gutter installation, 
            Louisville seamless gutter installation, 
            Newport seamless gutter installation, 
            Parrottsville seamless gutter installation, 
            Cosby seamless gutter installation, 
            Del Rio seamless gutter installation, 
            Greeneville seamless gutter installation, 
            Mosheim seamless gutter installation, 
            Tusculum seamless gutter installation, 
            Baileyton seamless gutter installation, 
            Morristown seamless gutter installation, 
            Russellville seamless gutter installation, 
            Whitesburg seamless gutter installation, 
            Talbott seamless gutter installation, 
            Dandridge seamless gutter installation, 
            Jefferson City seamless gutter installation, 
            White Pine seamless gutter installation, 
            New Market seamless gutter installation, 
            Baneberry seamless gutter installation, 
            Knoxville seamless gutter installation, 
            Farragut seamless gutter installation, 
            Powell seamless gutter installation, 
            Corryton seamless gutter installation, 
            Sevierville seamless gutter installation, 
            Pigeon Forge seamless gutter installation, 
            Gatlinburg seamless gutter installation, 
            Pittman Center seamless gutter installation, 
            Johnson City seamless gutter installation, 
            Jonesborough seamless gutter installation, 
            Limestone seamless gutter installation, 
            Telford seamless gutter installation, 
            Blount County seamless gutter installation, 
            Cocke County seamless gutter installation, 
            Greene County seamless gutter installation, 
            Hamblen County seamless gutter installation, 
            Jefferson County seamless gutter installation, 
            Knox County seamless gutter installation, 
            Sevier County seamless gutter installation, 
            Washington County seamless gutter installation
          "
        />
        <meta name="author" content="JonesCo Gutters" />
        <meta property="og:title" content="JonesCo Gutters - Service Locations" />
        <meta property="og:description" content="Expert gutter installation and services across Eastern Tennessee. Find out if JonesCo Gutters serves your area." />
        <meta property="og:url" content="https://jonescogutters.com/servicelocations" />
        <meta property="og:type" content="website" />
      </Head>
      
      <Header />
      <main>
        <ServiceLocations />
      </main>
      <Footer />
    </>
  );
}