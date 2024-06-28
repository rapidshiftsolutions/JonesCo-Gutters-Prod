import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ServiceLocations from '@/components/ServiceLocationsCity'

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Seamless Gutter Systems || Service Locations</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta
          name="description"
          content="Expert gutter installation and services across Eastern Tennessee. Find out if JonesCo Seamless Gutter Systems serves your area."
        />
        <meta name="keywords" content="Service Locations, Seamless Gutter Installation, Gutter Replacement, Gutter Cleaning, Gutter Guards Installation, Custom Gutter Solutions, Downspout Installation, Eastern Tennessee, Newport, Dandridge, Morristown, Greeneville, Sevierville, Johnson City, Knoxville, Maryville" />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="JonesCo Seamless Gutter Systems || Service Locations" />
        <meta property="og:description" content="Expert gutter installation and services across Eastern Tennessee. Find out if JonesCo Seamless Gutter Systems serves your area." />
        <meta property="og:url" content="https://jonescogutters.com/servicelocations" />
        <meta property="og:type" content="website" />
      </Head>
      
      <Header />
      <main>
        <ServiceLocations />
      </main>
      <Footer />
    </>
  )
}
