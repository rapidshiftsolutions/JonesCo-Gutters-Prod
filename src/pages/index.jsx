import Script from 'next/script'
import Head from 'next/head'
import CTAA from '@/components/CTA-A'
import CTAB from '@/components/CTA-B'
import CTAC from '@/components/CTA-C'
import CTAD from '@/components/CTA-D'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import OurServices from '@/components/OurServices'
import ServicesExtended from '@/components/OurServicesExt'
import WhyJonesCo from '@/components/WhyJonesCo'
import John from '@/components/JohnJonesBio'

import Banner from '@/components/banner'

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Seamless Gutter Systems || Home</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Expert Installations for Lasting Home Protection."
        />

      </Head>
      <Banner />
      <Header />

      <main className="z-0">
        <Hero />
        <OurServices />
        <CTAA />
        <WhyJonesCo />
        <CTAB />
        <ServicesExtended />
        <John />


      </main>
      <Footer />
    </>
  )
}
