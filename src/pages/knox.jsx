import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CTAA from '@/components/CTA-B'
import KnoxCounty from '@/components/KnoxCounty'
import OurServices from '@/components/OurServices'
import ServicesExtended from '@/components/OurServicesExt'

export default function KnoxCountyPage() {
  return (
    <>
      <Head>
        <title>JonesCo Seamless Gutter Systems || Knox County</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta
          name="description"
          content="Expert gutter installations and services in Knox County, TN. Protect your home with JonesCo Seamless Gutter Systems' top-quality gutter solutions."
        />
        <meta name="keywords" content="Seamless Gutter Installation, Gutter Replacement, Gutter Cleaning, Gutter Guards Installation, Custom Gutter Solutions, Downspout Installation, Knox County, Knoxville, Farragut, Powell, Corryton" />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="JonesCo Seamless Gutter Systems || Knox County" />
        <meta property="og:description" content="Expert gutter installations and services in Knox County, TN. Protect your home with JonesCo Seamless Gutter Systems' top-quality gutter solutions." />
        <meta property="og:url" content="https://jonescogutters.com/knox" />
        <meta property="og:type" content="website" />
      </Head>
      
      <Header />
      <main>
        <KnoxCounty />
        <CTAA />
        <OurServices />
        <ServicesExtended />
      </main>
      <Footer />
    </>
  )
}
