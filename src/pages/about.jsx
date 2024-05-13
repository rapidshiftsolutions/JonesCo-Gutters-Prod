import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Contact from '@/components/contact'
import ServiceLocations from '@/components/ServiceLocations'

import  CTAA  from '@/components/CTA-A'
import  CTAB  from '@/components/CTA-B'
import  CTAC  from '@/components/CTA-C'
import  CTAD  from '@/components/CTA-D'

import  John  from '@/components/About'

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Seamless Gutter Systems || About Us</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta
          name="description"
          content="Expert Installations for Lasting Home Protection."
        />
      </Head>
      <Banner />
      <Header />
      <main className="">
        <John />
        <CTAC />

      </main>
      <Footer />
    </>
  )
}
