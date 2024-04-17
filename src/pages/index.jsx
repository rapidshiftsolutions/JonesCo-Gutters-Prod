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

      <main className="">
        <Hero />
        <OurServices />
        <CTAA />
        <WhyJonesCo />
        <CTAB />
        <ServicesExtended />
        <John />

        <Script
          data-jsd-embedded
          data-key="4620f160-e644-41bc-8719-d55570fa3bc8"
          data-base-url="https://jsd-widget.atlassian.com"
          src="https://jsd-widget.atlassian.com/assets/embed.js"
        ></Script>
      </main>
      <Footer />
    </>
  )
}
