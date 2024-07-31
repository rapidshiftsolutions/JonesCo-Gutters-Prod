import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Dynamic imports
const Banner = dynamic(() => import('@/components/Banner'), { ssr: false });
const About = dynamic(() => import('@/components/About'), { ssr: false });
const Estimate = dynamic(() => import('@/components/Hero'), { ssr: false });

const keywords = [
  "seamless gutter company about us",
  "gutter installation about us",
  "gutter replacement about us",
  "gutter cleaning about us",
  "gutter guards installation about us",
  "custom gutter solutions about us",
  "downspout installation about us",
  "commercial gutter installation about us",
  "seamless gutter contractors about us",
  "seamless gutter installers about us",
  "seamless rain gutters about us",
  "custom gutters about us",
  "gutter companies about us",
  "gutter contractors about us",
  "gutter guards installers about us",
  "seamless gutters companies about us",
  "seamless gutters installation about us",
  "gutter repair contractors about us",
  "gutter price calculator about us",
  "seamless gutters near me about us",
  "seamless guttering companies about us",
  "gutters and siding contractors about us",
  "handyman gutter repair about us",
  "rain gutter contractors about us",
  "roof gutter installers about us",
  "top rated gutter companies about us",
  "seamless gutters contractors about us",
  "seamless gutters installers about us",
  "seamless gutter installer about us",
  "seamless guttering about us",
  "siding and gutters about us",
  "continuous gutters about us",
  "gutter installation contractors about us",
  "gutter installers about us",
  "gutter replacement companies about us",
  "gutter service about us",
  "guttering installation about us",
  "guttering installers about us",
  "gutters installation about us",
  "gutters installed about us"
];

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Gutters - About Us</title>
        <meta name="theme-color" content="#0066CC" />
        <meta
          name="description"
          content="Discover JonesCo Gutters' expert gutter installations and services in Eastern Tennessee. Learn about our commitment to quality and customer satisfaction."
        />
        <meta name="keywords" content={keywords.join(", ")} />
        <meta name="author" content="JonesCo Gutters" />
        <meta property="og:title" content="JonesCo Gutters - About Us" />
        <meta property="og:description" content="Discover JonesCo Gutters' expert gutter installations and services in Eastern Tennessee. Learn about our commitment to quality and customer satisfaction." />
        <meta property="og:url" content="https://jonescogutters.com/about" />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <main>
        <About />
        <Estimate />
      </main>
      <Footer />
    </>
  );
}
