import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Seamless Gutter Systems || Privacy Policy</title>
        <meta
          name="description"
          content="Expert Installations for Lasting Home Protection."
        />
      </Head>
      <Banner />
      <Header />
      <main className="">
      </main>
      <Footer />
    </>
  )
}
