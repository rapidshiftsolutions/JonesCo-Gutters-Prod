import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CTAA from '@/components/CTA-B'
import OurServices from '@/components/gutterinstall'

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Seamless Gutter Systems || Seamless Gutter Installation</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta
          name="description"
          content="Expert seamless gutter installation services for lasting home protection in Eastern Tennessee. Protect your home with JonesCo Seamless Gutter Systems' top-quality gutter solutions."
        />
        <meta name="keywords" content="Seamless Gutter Installation, Gutter Replacement, Gutter Cleaning, Gutter Guards Installation, Custom Gutter Solutions, Downspout Installation, Eastern Tennessee, Newport, Dandridge, Morristown, Greeneville, Sevierville, Johnson City, Knoxville, Maryville" />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="JonesCo Seamless Gutter Systems || Seamless Gutter Installation" />
        <meta property="og:description" content="Expert seamless gutter installation services for lasting home protection in Eastern Tennessee. Protect your home with JonesCo Seamless Gutter Systems' top-quality gutter solutions." />
        <meta property="og:url" content="https://jonescogutters.com/seamless-gutter-installation" />
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
