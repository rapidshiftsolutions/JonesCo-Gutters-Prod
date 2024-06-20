import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CTAA from '@/components/CTA-B'
import SevierCounty from '@/components/SevierCounty'
import OurServices from '@/components/OurServices'
import ServicesExtended from '@/components/OurServicesExt'

export default function SevierCountyPage() {
  return (
    <>
      <Head>
        <title>JonesCo Lighting Installers || Sevier County</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta
          name="description"
          content="Expert Installations for Lasting Home Protection in Sevier County."
        />
      </Head>
      <Banner />
      <Header />
      <main className="">
        <SevierCounty />
        <CTAA />
      </main>
      <Footer />
    </>
  )
}

