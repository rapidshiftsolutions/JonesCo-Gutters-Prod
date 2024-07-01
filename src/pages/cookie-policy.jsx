import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <>
      <Head>
        <title>Cookie Policy || JonesCo Seamless Gutter Systems</title>
        <meta name="description" content="Read the cookie policy of JonesCo Seamless Gutter Systems to understand how we use cookies to enhance your browsing experience." />
      </Head>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
        <p className="mb-4">JonesCo Seamless Gutter Systems ("we", "us", "our") uses cookies on our website to enhance your browsing experience, provide personalized ads, and analyze site traffic. This cookie policy explains what cookies are, how we use them, and your choices regarding their usage.</p>
        
        <h2 className="text-2xl font-semibold mb-3">What are cookies?</h2>
        <p className="mb-4">Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. They help the website recognize your device and remember your preferences or actions over time.</p>
        
        <h2 className="text-2xl font-semibold mb-3">Types of cookies we use</h2>
        <p className="mb-4">We use the following types of cookies:</p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Essential cookies:</strong> These cookies are necessary for the website to function properly and cannot be switched off in our systems.</li>
          <li><strong>Performance cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
          <li><strong>Functionality cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization.</li>
          <li><strong>Advertising cookies:</strong> These cookies are used to deliver relevant advertisements to you and measure the effectiveness of our ad campaigns.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">How we use cookies</h2>
        <p className="mb-4">We use cookies to:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Enhance your browsing experience by remembering your preferences and settings.</li>
          <li>Provide personalized content and ads tailored to your interests.</li>
          <li>Analyze website traffic and user behavior to improve our services.</li>
          <li>Ensure the security and integrity of our website.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">Your choices regarding cookies</h2>
        <p className="mb-4">You have the option to accept or reject cookies. Most web browsers automatically accept cookies, but you can modify your browser settings to reject cookies if you prefer. However, please note that disabling cookies may affect the functionality and performance of our website.</p>
        <p className="mb-4">To learn more about how to manage cookies in your browser, visit the help section of your browser or the website <a href="https://www.allaboutcookies.org" target="_blank" className="text-blue-500 underline">www.allaboutcookies.org</a>.</p>
        
        <h2 className="text-2xl font-semibold mb-3">Changes to this cookie policy</h2>
        <p className="mb-4">We may update this cookie policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please revisit this page periodically to stay informed about our use of cookies.</p>

        <h2 className="text-2xl font-semibold mb-3">Contact us</h2>
        <p className="mb-4">If you have any questions or concerns about this cookie policy, please contact us at <a href="mailto:hey@jonescogutters.com" className="text-blue-500 underline">hey@jonescogutters.com</a>.</p>
      </main>
      <Footer />
    </>
  );
};

export default CookiePolicy;
