import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CTAA from '@/components/CTA-B'
import BlountCounty from '@/components/BlountCounty'

export default function BlountCountyPage() {
  return (
    <>
      <Head>
        <title>JonesCo Seamless Gutter Systems || Blount County</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta
          name="description"
          content="Expert gutter installations and services in Blount County, TN. Discover how JonesCo Seamless Gutter Systems can protect your home with top-quality gutter solutions."
        />
        <meta name="keywords" content="Seamless Gutter Installation, Gutter Replacement, Gutter Cleaning, Gutter Guards Installation, Custom Gutter Solutions, Downspout Installation, Blount County, Maryville, Alcoa, Friendsville, Townsend, Louisville" />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="JonesCo Seamless Gutter Systems || Blount County" />
        <meta property="og:description" content="Expert gutter installations and services in Blount County, TN. Discover how JonesCo Seamless Gutter Systems can protect your home with top-quality gutter solutions." />
        <meta property="og:url" content="https://jonescogutters.com/blount" />
        <meta property="og:type" content="website" />
      </Head>
      <Banner />
      <Header />
      <main>
        <BlountCounty />
        <CTAA />
      </main>
      <Footer />
    </>
  )
}
