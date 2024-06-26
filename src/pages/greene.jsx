import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CTAA from '@/components/CTA-B'
import GreeneCounty from '@/components/GreeneCounty'
import OurServices from '@/components/OurServices'
import ServicesExtended from '@/components/OurServicesExt'

export default function GreeneCountyPage() {
  return (
    <>
      <Head>
        <title>JonesCo Seamless Gutter Systems || Greene County</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta
          name="description"
          content="Expert gutter installations and services in Greene County, TN. Protect your home with JonesCo Seamless Gutter Systems' top-quality gutter solutions."
        />
        <meta name="keywords" content="Seamless Gutter Installation, Gutter Replacement, Gutter Cleaning, Gutter Guards Installation, Custom Gutter Solutions, Downspout Installation, Greene County, Greeneville, Mosheim, Tusculum, Baileyton" />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="JonesCo Seamless Gutter Systems || Greene County" />
        <meta property="og:description" content="Expert gutter installations and services in Greene County, TN. Protect your home with JonesCo Seamless Gutter Systems' top-quality gutter solutions." />
        <meta property="og:url" content="https://jonescogutters.com/greene" />
        <meta property="og:type" content="website" />
      </Head>
      <Banner />
      <Header />
      <main>
        <GreeneCounty />
        <CTAA />
        <OurServices />
        <ServicesExtended />
      </main>
      <Footer />
    </>
  )
}
