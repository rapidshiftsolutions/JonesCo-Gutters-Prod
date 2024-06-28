import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CTAA from '@/components/CTA-B'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Seamless Gutter Systems || Contact Us</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta
          name="description"
          content="Get in touch with JonesCo Seamless Gutter Systems for expert gutter installations and services in Eastern Tennessee. Contact us for a free consultation."
        />
        <meta name="keywords" content="Contact JonesCo Seamless Gutter Systems, Gutter Installation, Gutter Replacement, Gutter Cleaning, Gutter Guards Installation, Custom Gutter Solutions, Downspout Installation, Eastern Tennessee" />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="JonesCo Seamless Gutter Systems || Contact Us" />
        <meta property="og:description" content="Get in touch with JonesCo Seamless Gutter Systems for expert gutter installations and services in Eastern Tennessee. Contact us for a free consultation." />
        <meta property="og:url" content="https://jonescogutters.com/contact" />
        <meta property="og:type" content="website" />
      </Head>
      
      <Header />
      <main className="-z-50">
        <Hero />
      </main>
      <Footer />
    </>
  )
}
