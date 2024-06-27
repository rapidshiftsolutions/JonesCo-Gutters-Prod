import Head from 'next/head'
import CTAA from '@/components/CTA-A'
import CTAB from '@/components/CTA-B'
import CTAC from '@/components/CTA-C'
import CTAD from '@/components/CTA-D'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import OurServices from '@/components/OurServices'
import ServiceLocations from '@/components/ServiceLocationsCity'
import WhyJonesCo from '@/components/Value'
import John from '@/components/Why'
import Subcontracting from '@/components/subcontracting'
import Bot from '@/components/zapier'

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Seamless Gutter Systems || Home</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Expert gutter installations and services for lasting home protection. Discover why JonesCo Seamless Gutter Systems is the trusted choice in Eastern Tennessee."
        />
        <meta name="keywords" content="Seamless Gutter Installation, Gutter Replacement, Gutter Cleaning, Gutter Guards Installation, Custom Gutter Solutions, Downspout Installation, Eastern Tennessee, Newport, Dandridge, Morristown, Greeneville, Sevierville, Johnson City, Knoxville, Maryville" />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="JonesCo Seamless Gutter Systems || Home" />
        <meta property="og:description" content="Expert gutter installations and services for lasting home protection. Discover why JonesCo Seamless Gutter Systems is the trusted choice in Eastern Tennessee." />
        <meta property="og:url" content="https://jonescogutters.com/" />
        <meta property="og:type" content="website" />
      </Head>
      <Header />

      <main className="-z-50">
        
        <Bot />
        <Hero />
        <WhyJonesCo />
        <OurServices />
        <ServiceLocations />
        <Subcontracting />
        <CTAA />
        <John />
        <CTAD />

      </main>

      <Footer />
    </>
  )
}
