import Head from 'next/head'
import PP from '@/components/PrivacyPolicy'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Banner from '@/components/banner'

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Gutters - Privacy Policy</title>
        <meta name="theme-color" content="#0066CC" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Review the privacy policy of JonesCo Seamless Gutter Systems to understand how we protect your personal information."
        />
        <meta name="keywords" content="Privacy Policy, Personal Information Protection, Data Security, JonesCo Seamless Gutter Systems" />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="JonesCo Gutters - Privacy Policy" />
        <meta property="og:description" content="Review the privacy policy of JonesCo Seamless Gutter Systems to understand how we protect your personal information." />
        <meta property="og:url" content="https://jonescogutters.com/privacy" />
        <meta property="og:type" content="website" />
      </Head>
      
      <Header />
      <main className="-z-50">
        <PP />
      </main>
      <Footer />
    </>
  )
}
