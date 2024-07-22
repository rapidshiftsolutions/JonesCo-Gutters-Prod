import Head from 'next/head'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import OurServices from '@/components/gutterinstall'
import Estimate from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Gutters - Seamless Gutter Installation</title>
        <meta name="theme-color" content="#0066CC" />
        <meta
          name="description"
          content="Expert seamless gutter installation services for lasting home protection in Eastern Tennessee. Protect your home with JonesCo Seamless Gutter Systems' top-quality gutter solutions."
        />
        <meta name="keywords" content="
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
        " />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="JonesCo Gutters - Seamless Gutter Installation" />
        <meta property="og:description" content="Expert seamless gutter installation services for lasting home protection in Eastern Tennessee. Protect your home with JonesCo Seamless Gutter Systems' top-quality gutter solutions." />
        <meta property="og:url" content="https://jonescogutters.com/seamless-gutter-installation" />
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
