import Head from 'next/head';
import Banner from '@/components/banner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function WarrantyPage() {
  return (
    <>
      <Head>
        <title>JonesCo Seamless Gutter Systems || Warranty Information</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta
          name="description"
          content="Learn about the warranty information for JonesCo Seamless Gutter Systems. Protect your investment with our comprehensive warranty coverage."
        />
        <meta name="keywords" content="Seamless Gutter Installation, Gutter Replacement, Gutter Cleaning, Gutter Guards Installation, Custom Gutter Solutions, Downspout Installation, Warranty Information, JonesCo Warranty" />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="JonesCo Seamless Gutter Systems || Warranty Information" />
        <meta property="og:description" content="Learn about the warranty information for JonesCo Seamless Gutter Systems. Protect your investment with our comprehensive warranty coverage." />
        <meta property="og:url" content="https://jonescogutters.com/warranty" />
        <meta property="og:type" content="website" />
      </Head>
      
      <Header />
      <main>
        <WarrantyInformation />
      </main>
      <Footer />
    </>
  );
}

// The WarrantyInformation component
const WarrantyInformation = () => {
  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Warranty Information
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          At JonesCo Seamless Gutter Systems, we stand behind the quality of our work and materials. Our comprehensive warranty coverage ensures that your investment is protected.
        </p>
      </div>

      <div className="mt-12 max-w-2xl mx-auto lg:max-w-4xl text-left">
        <div className="text-base sm:text-lg md:text-xl leading-7 text-gray-900">
          <h2 className="text-2xl font-bold text-JonesCo-Blue-900 mb-4">What Our Warranty Covers</h2>
          <p>
            Our warranty covers any defects in materials and workmanship under normal use during the warranty period. This includes:
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>Seamless Gutter Installation</li>
            <li>Gutter Replacement</li>
            <li>Gutter Cleaning</li>
            <li>Gutter Guards Installation</li>
            <li>Custom Gutter Solutions</li>
            <li>Downspout Installation</li>
          </ul>
          <p className="mt-6">
            If a product or service provided by JonesCo Seamless Gutter Systems is found to be defective within the warranty period, we will repair or replace the defective materials at no cost to you.
          </p>

          <h2 className="text-2xl font-bold text-JonesCo-Blue-900 mt-8 mb-4">Warranty Terms and Conditions</h2>
          <p>
            The warranty period is valid for one year from the date of installation. The warranty is void under the following conditions:
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>Improper maintenance by the homeowner</li>
            <li>Damage caused by natural disasters (e.g., storms, floods, earthquakes)</li>
            <li>Unauthorized modifications or repairs</li>
            <li>Damage caused by external factors (e.g., tree branches, ladders)</li>
          </ul>
          <p className="mt-6">
            JonesCo Seamless Gutter Systems is not liable for any indirect, incidental, or consequential damages arising from the use of our products.
          </p>

          <h2 className="text-2xl font-bold text-JonesCo-Blue-900 mt-8 mb-4">How to File a Warranty Claim</h2>
          <p>
            To file a warranty claim, please contact us at <a href="mailto:hey@jonescogutters.com" className="underline text-JonesCo-Blue-600 hover:text-JonesCo-Blue-800">hey@jonescogutters.com</a> or call 423-207-3325. Please provide the following information:
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>Your name and contact information</li>
            <li>Date of installation or service</li>
            <li>Details of the issue</li>
          </ul>
          <p className="mt-6">
            Our team will review your claim and schedule a service visit to assess and address the issue. We strive to resolve all warranty claims promptly to ensure your complete satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};
