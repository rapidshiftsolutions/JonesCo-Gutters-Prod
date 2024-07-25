import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import John from '@/components/Why'
import Value from '@/components/Value'

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Gutters - Why Us?</title>
        <meta name="theme-color" content="#0066CC" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Discover why JonesCo Gutters is the top choice for expert gutter installations and services. Experience lasting home protection with our quality solutions."
        />
        <meta name="keywords" content="Why Us, Seamless Gutter Installation, Gutter Replacement, Gutter Cleaning, Gutter Guards Installation, Custom Gutter Solutions, Downspout Installation, Eastern Tennessee" />
        <meta name="author" content="JonesCo Gutters" />
        <meta property="og:title" content="JonesCo Gutters - Why Us?" />
        <meta property="og:description" content="Discover why JonesCo Gutters is the top choice for expert gutter installations and services. Experience lasting home protection with our quality solutions." />
        <meta property="og:url" content="https://jonescogutters.com/why" />
        <meta property="og:type" content="website" />
      </Head>
      
      <Header />
      <main>
        <John />
        <Value />
      </main>
      <Footer />
    </>
  )
}
