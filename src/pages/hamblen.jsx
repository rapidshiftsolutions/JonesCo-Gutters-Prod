
import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CTAA from '@/components/CTA-B'
import HamblenCounty from '@/components/HamblenCounty'
import OurServices from '@/components/OurServices'
import ServicesExtended from '@/components/OurServicesExt'

export default function HamblenCountyPage() {
  return (
    <>
      <Head>
        <title>JonesCo Seamless Gutter Systems || Hamblen County</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta
          name="description"
          content="Expert Installations for Lasting Home Protection in Hamblen County."
        />
      </Head>
      <Banner />
      <Header />
      <main className="">
        <HamblenCounty />
        <CTAA />
      </main>
      <Footer />
    </>
  )
}
