
import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CTAA from '@/components/CTA-B'
import JeffersonCounty from '@/components/JeffersonCounty'
import OurServices from '@/components/OurServices'
import ServicesExtended from '@/components/OurServicesExt'

export default function JeffersonCountyPage() {
  return (
    <>
      <Head>
        <title>JonesCo Seamless Gutter Systems || Jefferson County</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta
          name="description"
          content="Expert Installations for Lasting Home Protection in Jefferson County."
        />
      </Head>
      <Banner />
      <Header />
      <main className="">
        <JeffersonCounty />
        <CTAA />
      </main>
      <Footer />
    </>
  )
}
