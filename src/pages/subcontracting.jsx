import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CTAA from '@/components/CTA-B'
import Subcontracting from '@/components/subcontracting'
import ServiceLocations from '@/components/ServiceLocationsCity'


export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Gutters - Subcontracting</title>
        <meta name="theme-color" content="#0066CC" />
        <meta
          name="description"
          content="Expert subcontracting services for seamless gutter installations and more in Eastern Tennessee. Partner with JonesCo Seamless Gutter Systems for quality and reliability."
        />
        <meta name="keywords" content="
          Alcoa subcontracting seamless gutter installation, 
          Maryville subcontracting seamless gutter installation, 
          Friendsville subcontracting seamless gutter installation, 
          Townsend subcontracting seamless gutter installation, 
          Louisville subcontracting seamless gutter installation, 
          Newport subcontracting seamless gutter installation, 
          Parrottsville subcontracting seamless gutter installation, 
          Cosby subcontracting seamless gutter installation, 
          Del Rio subcontracting seamless gutter installation, 
          Greeneville subcontracting seamless gutter installation, 
          Mosheim subcontracting seamless gutter installation, 
          Tusculum subcontracting seamless gutter installation, 
          Baileyton subcontracting seamless gutter installation, 
          Morristown subcontracting seamless gutter installation, 
          Russellville subcontracting seamless gutter installation, 
          Whitesburg subcontracting seamless gutter installation, 
          Talbott subcontracting seamless gutter installation, 
          Dandridge subcontracting seamless gutter installation, 
          Jefferson City subcontracting seamless gutter installation, 
          White Pine subcontracting seamless gutter installation, 
          New Market subcontracting seamless gutter installation, 
          Baneberry subcontracting seamless gutter installation, 
          Knoxville subcontracting seamless gutter installation, 
          Farragut subcontracting seamless gutter installation, 
          Powell subcontracting seamless gutter installation, 
          Corryton subcontracting seamless gutter installation, 
          Sevierville subcontracting seamless gutter installation, 
          Pigeon Forge subcontracting seamless gutter installation, 
          Gatlinburg subcontracting seamless gutter installation, 
          Pittman Center subcontracting seamless gutter installation, 
          Johnson City subcontracting seamless gutter installation, 
          Jonesborough subcontracting seamless gutter installation, 
          Limestone subcontracting seamless gutter installation, 
          Telford subcontracting seamless gutter installation, 
          Blount County subcontracting seamless gutter installation, 
          Cocke County subcontracting seamless gutter installation, 
          Greene County subcontracting seamless gutter installation, 
          Hamblen County subcontracting seamless gutter installation, 
          Jefferson County subcontracting seamless gutter installation, 
          Knox County subcontracting seamless gutter installation, 
          Sevier County subcontracting seamless gutter installation, 
          Washington County subcontracting seamless gutter installation
        " />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="JonesCo Gutters - subcontracting" />
        <meta property="og:description" content="Expert subcontracting services for seamless gutter installations and more in Eastern Tennessee. Partner with JonesCo Seamless Gutter Systems for quality and reliability." />
        <meta property="og:url" content="https://jonescogutters.com/subcontracting" />
        <meta property="og:type" content="website" />
      </Head>
      
      <Header />
      <main>
        <Subcontracting />
        <ServiceLocations />
      </main>
      <Footer />
    </>
  )
}
