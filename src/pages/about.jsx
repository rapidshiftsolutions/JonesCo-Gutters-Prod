import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CTAA from '@/components/CTA-A'
import About from '@/components/about'

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Seamless Gutter Systems || About Us</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta
          name="description"
          content="Expert gutter installations and services in Eastern Tennessee. Learn about JonesCo Seamless Gutter Systems' commitment to quality and customer satisfaction."
        />
        <meta name="keywords" content="Seamless Gutter Installation, Gutter Replacement, Gutter Cleaning, Gutter Guards Installation, Custom Gutter Solutions, Downspout Installation, Eastern Tennessee, Newport, Dandridge, Morristown, Greeneville, Sevierville, Johnson City, Knoxville, Maryville" />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="JonesCo Seamless Gutter Systems || About Us" />
        <meta property="og:description" content="Expert gutter installations and services in Eastern Tennessee. Learn about JonesCo Seamless Gutter Systems' commitment to quality and customer satisfaction." />
        <meta property="og:url" content="https://jonescogutters.com/about" />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <main>
        <About />
        <CTAA />

      </main>
      <Footer />
    </>
  )
}
