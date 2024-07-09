import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CTAA from '@/components/CTA-B'
import OurServices from '@/components/gutterguards'
import Estimate from '@/components/freeestimate-webhook';

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Gutters - Gutter Guards</title>
        <meta name="theme-color" content="#0066CC" />
        <meta
          name="description"
          content="Expert gutter guard installations for lasting home protection in Eastern Tennessee. Keep your gutters clean and free of debris with JonesCo Seamless Gutter Systems' top-quality gutter guards."
        />
        <meta name="keywords" content="
          Alcoa gutter guards, 
          Maryville gutter guards, 
          Friendsville gutter guards, 
          Townsend gutter guards, 
          Louisville gutter guards, 
          Newport gutter guards, 
          Parrottsville gutter guards, 
          Cosby gutter guards, 
          Del Rio gutter guards, 
          Greeneville gutter guards, 
          Mosheim gutter guards, 
          Tusculum gutter guards, 
          Baileyton gutter guards, 
          Morristown gutter guards, 
          Russellville gutter guards, 
          Whitesburg gutter guards, 
          Talbott gutter guards, 
          Dandridge gutter guards, 
          Jefferson City gutter guards, 
          White Pine gutter guards, 
          New Market gutter guards, 
          Baneberry gutter guards, 
          Knoxville gutter guards, 
          Farragut gutter guards, 
          Powell gutter guards, 
          Corryton gutter guards, 
          Sevierville gutter guards, 
          Pigeon Forge gutter guards, 
          Gatlinburg gutter guards, 
          Pittman Center gutter guards, 
          Johnson City gutter guards, 
          Jonesborough gutter guards, 
          Limestone gutter guards, 
          Telford gutter guards, 
          Blount County gutter guards, 
          Cocke County gutter guards, 
          Greene County gutter guards, 
          Hamblen County gutter guards, 
          Jefferson County gutter guards, 
          Knox County gutter guards, 
          Sevier County gutter guards, 
          Washington County gutter guards
        " />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="JonesCo Gutters - Gutter Guards" />
        <meta property="og:description" content="Expert gutter guard installations for lasting home protection in Eastern Tennessee. Keep your gutters clean and free of debris with JonesCo Seamless Gutter Systems' top-quality gutter guards." />
        <meta property="og:url" content="https://jonescogutters.com/gutter-guards" />
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
