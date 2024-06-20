
import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CTAA from '@/components/CTA-B'
import WashingtonCounty from '@/components/WashingtonCounty'
import OurServices from '@/components/OurServices'
import ServicesExtended from '@/components/OurServicesExt'

export default function WashingtonCountyPage() {
  return (
    <>
      <Head>
        <title>JonesCo Lighting Installers || Washington County</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta
          name="description"
          content="Expert Installations for Lasting Home Protection in Washington County."
        />
      </Head>
      <Banner />
      <Header />
      <main className="">
        <WashingtonCounty />
        <CTAA />
      </main>
      <Footer />
    </>
  )
}
