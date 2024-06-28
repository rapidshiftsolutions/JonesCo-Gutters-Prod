import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CTAA from '@/components/CTA-B'
import OurServices from '@/components/guttercleaning'

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Seamless Gutter Systems || Gutter Cleaning</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta
          name="description"
          content="Expert gutter cleaning services in Eastern Tennessee. Protect your home with JonesCo Seamless Gutter Systems' thorough and professional gutter cleaning solutions."
        />
        <meta name="keywords" content="Gutter Cleaning, Seamless Gutter Installation, Gutter Replacement, Gutter Guards Installation, Custom Gutter Solutions, Downspout Installation, Eastern Tennessee, Newport, Dandridge, Morristown, Greeneville, Sevierville, Johnson City, Knoxville, Maryville" />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="JonesCo Seamless Gutter Systems || Gutter Cleaning" />
        <meta property="og:description" content="Expert gutter cleaning services in Eastern Tennessee. Protect your home with JonesCo Seamless Gutter Systems' thorough and professional gutter cleaning solutions." />
        <meta property="og:url" content="https://jonescogutters.com/gutter-cleaning" />
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
