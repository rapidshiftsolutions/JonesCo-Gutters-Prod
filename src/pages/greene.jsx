
import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CTAA from '@/components/CTA-B'
import GreeneCounty from '@/components/GreeneCounty'
import OurServices from '@/components/OurServices'
import ServicesExtended from '@/components/OurServicesExt'

export default function GreeneCountyPage() {
  return (
    <>
      <Head>
        <title>JonesCo Lighting Installers || Greene County</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta
          name="description"
          content="Expert Installations for Lasting Home Protection in Greene County."
        />
      </Head>
      <Banner />
      <Header />
      <main className="">
        <GreeneCounty />
        <CTAA />
      </main>
      <Footer />
    </>
  )
}
