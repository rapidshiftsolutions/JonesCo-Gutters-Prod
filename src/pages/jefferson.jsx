import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CTAA from '@/components/CTA-B'
import JeffersonCounty from '@/components/JeffersonCounty'

export default function JeffersonCountyPage() {
  return (
    <>
      <Head>
        <title>JonesCo Seamless Gutter Systems || Jefferson County</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta
          name="description"
          content="Expert gutter installations and services in Jefferson County, TN. Protect your home with JonesCo Seamless Gutter Systems' top-quality gutter solutions."
        />
        <meta name="keywords" content="Seamless Gutter Installation, Gutter Replacement, Gutter Cleaning, Gutter Guards Installation, Custom Gutter Solutions, Downspout Installation, Jefferson County, Dandridge, Jefferson City, White Pine, New Market, Baneberry" />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="JonesCo Seamless Gutter Systems || Jefferson County" />
        <meta property="og:description" content="Expert gutter installations and services in Jefferson County, TN. Protect your home with JonesCo Seamless Gutter Systems' top-quality gutter solutions." />
        <meta property="og:url" content="https://jonescogutters.com/jefferson" />
        <meta property="og:type" content="website" />
      </Head>
      
      <Header />
      <main>
        <JeffersonCounty />
        <CTAA />
      </main>
      <Footer />
    </>
  )
}
