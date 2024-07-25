import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Link from 'next/link';

const keywords = [
  "Careers at JonesCo",
  "Gutter Installer Jobs",
  "Gutter Installation Careers",
  "Seamless Gutter Systems Jobs",
  "Join JonesCo Gutters",
  "Gutter Installation Opportunities",
  "Gutter Installer Positions",
  "Eastern Tennessee Gutter Jobs"
];

export default function Careers() {
  return (
    <>
      <Head>
        <title>JonesCo Gutters - Careers</title>
        <meta name="theme-color" content="#0066CC" />
        <meta
          name="description"
          content="Join the team at JonesCo Gutters. We are always looking for experienced installers and professionals to help us deliver top-quality gutter services in Eastern Tennessee."
        />
        <meta name="keywords" content={keywords.join(", ")} />
        <meta name="author" content="JonesCo Gutters" />
        <meta property="og:title" content="JonesCo Gutters - Careers" />
        <meta property="og:description" content="Join the team at JonesCo Gutters. We are always looking for experienced installers and professionals to help us deliver top-quality gutter services in Eastern Tennessee." />
        <meta property="og:url" content="https://jonescogutters.com/careers" />
        <meta property="og:type" content="website" />
      </Head>
      
      <Header />
      <main className="py-8 bg-JonesCo-Green-100">
        <div className="container px-4 mx-auto">
          <h1 className="mb-6 text-3xl font-black text-center sm:text-5xl text-JonesCo-Green-900">Careers at JonesCo</h1>
          <p className="m-auto mb-12 max-w-md text-center text-gray-700">
            At JonesCo Gutters, we are always on the lookout for skilled and dedicated professionals to join our team. If you have experience in gutter installation or other relevant fields, we would love to hear from you.
          </p>
          <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
            <div className="p-6 mb-6 bg-white rounded-lg shadow-lg md:mb-0">
              <h2 className="mb-4 text-2xl font-bold text-JonesCo-Green-900">Open Positions</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li className="mb-2">Experienced Gutter Installers</li>
                <li className="mb-2">Gutter Installers</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h2 className="mb-4 text-2xl font-bold text-JonesCo-Green-900">How to Apply</h2>
              <p className="mb-4 text-gray-700">
                To apply for any of the positions listed above, please send your resume and a brief cover letter to <a href="mailto:careers@jonescogutters.com" className="text-JonesCo-Green-600">careers@jonescogutters.com</a>. We look forward to hearing from you!
              </p>
              <p className="text-gray-700">
                JonesCo Gutters is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.
              </p>
            </div>
          </div>
          <div className="p-6 mb-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-JonesCo-Green-900">Why Work with Us?</h2>
            <p className="mb-4 text-gray-700">
              Working at JonesCo Gutters means joining a team of dedicated professionals who take pride in delivering top-quality services to our clients. We offer competitive salaries, opportunities for growth, and a supportive work environment. Our commitment to excellence extends to our employees, ensuring that you have the resources and support you need to succeed in your role.
            </p>
            <p className="mb-4 text-gray-700">
              As a part of our team, you will have the opportunity to work on a variety of projects, honing your skills and expanding your expertise in gutter installation and maintenance. We value hard work, dedication, and a passion for delivering exceptional results.
            </p>
            <p className="mb-4 text-gray-700">
              If you are looking for a rewarding career with a company that values your contributions and fosters a positive work environment, consider joining JonesCo Gutters.
            </p>
            <p className="font-bold text-gray-700">
              Explore our open positions and apply today. We look forward to welcoming you to the JonesCo family.
            </p>
          </div>
        </div>
      </main>
      <Hero />
      <Footer />
    </>
  );
}
