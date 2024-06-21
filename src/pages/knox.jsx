import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CTAA from '@/components/CTA-B'
import KnoxCounty from '@/components/KnoxCounty'
import OurServices from '@/components/OurServices'
import ServicesExtended from '@/components/OurServicesExt'

export default function KnoxCountyPage() {
  return (
    <>
      <Head>
        <title>JonesCo Seamless Gutter Systems || Knox County</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta
          name="description"
          content="Expert Installations for Lasting Home Protection in Knox County."
        />
      </Head>
      <Banner />
      <Header />
      <main className="">
        <KnoxCounty />
        <CTAA />
      </main>
      <Footer />
    </>
  )
}

