
import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CTAA from '@/components/CTA-B'
import CockeCounty from '@/components/CockeCounty'
import OurServices from '@/components/OurServices'
import ServicesExtended from '@/components/OurServicesExt'

export default function CockeCountyPage() {
  return (
    <>
      <Head>
        <title>JonesCo Seamless Gutter Systems || Cocke County</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta
          name="description"
          content="Expert Installations for Lasting Home Protection in Cocke County."
        />
      </Head>
      <Banner />
      <Header />
      <main className="">
        <CockeCounty />
        <CTAA />
      </main>
      <Footer />
    </>
  )
}
