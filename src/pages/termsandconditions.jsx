import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Terms from '@/components/TermsAndConditions'

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Gutters - Terms And Conditions</title>
        <meta name="theme-color" content="#0066CC" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Review the terms and conditions for using the services provided by JonesCo Seamless Gutter Systems."
        />
        <meta name="keywords" content="Terms and Conditions, Seamless Gutter Installation, Gutter Replacement, Gutter Cleaning, Gutter Guards Installation, Custom Gutter Solutions, Downspout Installation, Eastern Tennessee" />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="JonesCo Gutters - Terms And Conditions" />
        <meta property="og:description" content="Review the terms and conditions for using the services provided by JonesCo Seamless Gutter Systems." />
        <meta property="og:url" content="https://jonescogutters.com/termsandconditions" />
        <meta property="og:type" content="website" />
      </Head>
      
      <Header />
      <main>
        <Terms />
      </main>
      <Footer />
    </>
  )
}
