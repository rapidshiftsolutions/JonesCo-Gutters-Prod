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
        <meta name="theme-color" content="#C5F5CA"/>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Where your dream ride becomes reality."
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
          type="text/javascript"
          src="https://jones-co.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/xtxyma/b/6/c95134bc67d3a521bb3f4331beb9b804/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en-US&collectorId=4152b955"
        ></Script>
      </main>
      <Footer />
    </>
  )
}
