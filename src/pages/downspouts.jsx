import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CTAA from '@/components/CTA-B'
import OurServices from '@/components/downspouts'

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Seamless Gutter Systems || Downspout Installation & Repair</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta
          name="description"
          content="Expert downspout installation and repair services in Eastern Tennessee. Protect your home with JonesCo Seamless Gutter Systems' top-quality solutions."
        />
        <meta name="keywords" content="Downspout Installation, Downspout Repair, Seamless Gutter Installation, Gutter Replacement, Gutter Cleaning, Gutter Guards Installation, Custom Gutter Solutions, Eastern Tennessee, Newport, Dandridge, Morristown, Greeneville, Sevierville, Johnson City, Knoxville, Maryville" />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="JonesCo Seamless Gutter Systems || Downspout Installation & Repair" />
        <meta property="og:description" content="Expert downspout installation and repair services in Eastern Tennessee. Protect your home with JonesCo Seamless Gutter Systems' top-quality solutions." />
        <meta property="og:url" content="https://jonescogutters.com/downspouts" />
        <meta property="og:type" content="website" />
      </Head>
      <Banner />
      <Header />
      <main>
        <OurServices />

      </main>
      <Footer />
    </>
  )
}
