import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CTAA from '@/components/CTA-B'
import Subcontracting from '@/components/subcontracting'

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Seamless Gutter Systems || Sub-Contracting</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta
          name="description"
          content="Expert sub-contracting services for seamless gutter installations and more in Eastern Tennessee. Partner with JonesCo Seamless Gutter Systems for quality and reliability."
        />
        <meta name="keywords" content="Sub-Contracting, Seamless Gutter Installation, Gutter Replacement, Gutter Cleaning, Gutter Guards Installation, Custom Gutter Solutions, Downspout Installation, Eastern Tennessee" />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="JonesCo Seamless Gutter Systems || Sub-Contracting" />
        <meta property="og:description" content="Expert sub-contracting services for seamless gutter installations and more in Eastern Tennessee. Partner with JonesCo Seamless Gutter Systems for quality and reliability." />
        <meta property="og:url" content="https://jonescogutters.com/subcontracting" />
        <meta property="og:type" content="website" />
      </Head>
      <Banner />
      <Header />
      <main>
        <Subcontracting />
        <CTAA />
      </main>
      <Footer />
    </>
  )
}
