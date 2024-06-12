import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CTAA from '@/components/CTA-B'
import BlountCounty from '@/components/BlountCounty'
import OurServices from '@/components/OurServices'
import ServicesExtended from '@/components/OurServicesExt'

export default function BlountCountyPage() {
  return (
    <>
      <Head>
        <title>JonesCo Seamless Gutter Systems || Blount County</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta
          name="description"
          content="Expert Installations for Lasting Home Protection in Blount County."
        />
      </Head>
      <Banner />
      <Header />
      <main className="">
        <BlountCounty />
        <CTAA />
      </main>
      <Footer />
    </>
  )
}

