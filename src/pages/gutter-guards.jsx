import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CTAA from '@/components/CTA-B'
import OurServices from '@/components/OurServices'

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Seamless Gutter Systems || Gutter Guards</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta
          name="description"
          content="Expert gutter guard installations for lasting home protection in Eastern Tennessee. Keep your gutters clean and free of debris with JonesCo Seamless Gutter Systems' top-quality gutter guards."
        />
        <meta name="keywords" content="Gutter Guards Installation, Seamless Gutter Installation, Gutter Replacement, Gutter Cleaning, Custom Gutter Solutions, Downspout Installation, Eastern Tennessee, Newport, Dandridge, Morristown, Greeneville, Sevierville, Johnson City, Knoxville, Maryville" />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="JonesCo Seamless Gutter Systems || Gutter Guards" />
        <meta property="og:description" content="Expert gutter guard installations for lasting home protection in Eastern Tennessee. Keep your gutters clean and free of debris with JonesCo Seamless Gutter Systems' top-quality gutter guards." />
        <meta property="og:url" content="https://jonescogutters.com/gutter-guards" />
        <meta property="og:type" content="website" />
      </Head>
      <Banner />
      <Header />
      <main>
        <OurServices />
        <CTAA />
      </main>
      <Footer />
    </>
  )
}
