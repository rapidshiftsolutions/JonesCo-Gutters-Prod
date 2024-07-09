import Head from 'next/head'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import About from '@/components/about';


export default function Careers() {
  return (
    <>
      <Head>
        <title>JonesCo Gutters - Careers</title>
        <meta name="theme-color" content="#0066CC" />
        <meta
          name="description"
          content="Join the team at JonesCo Seamless Gutter Systems. We are always looking for experienced installers and professionals to help us deliver top-quality gutter services in Eastern Tennessee."
        />
        <meta name="keywords" content="Careers at JonesCo, Gutter Installer Jobs, Gutter Installation Careers, Seamless Gutter Systems Jobs, Join JonesCo Gutters, Gutter Installation Opportunities, Gutter Installer Positions, Eastern Tennessee Gutter Jobs" />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="JonesCo Gutters - Careers" />
        <meta property="og:description" content="Join the team at JonesCo Seamless Gutter Systems. We are always looking for experienced installers and professionals to help us deliver top-quality gutter services in Eastern Tennessee." />
        <meta property="og:url" content="https://jonescogutters.com/careers" />
        <meta property="og:type" content="website" />
      </Head>
      
      <Header />
      <main className="bg-JonesCo-Green-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl font-black text-center text-JonesCo-Green-900 mb-6">Careers at JonesCo</h1>
          <p className="text-center text-gray-700 mb-12 max-w-md m-auto">
            At JonesCo Seamless Gutter Systems, we are always on the lookout for skilled and dedicated professionals to join our team. If you have experience in gutter installation or other relevant fields, we would love to hear from you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white shadow-lg rounded-lg p-6 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-JonesCo-Green-900 mb-4">Open Positions</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li className="mb-2">Experienced Gutter Installers</li>
                <li className="mb-2">Gutter Installers</li>
              </ul>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold text-JonesCo-Green-900 mb-4">How to Apply</h2>
              <p className="text-gray-700 mb-4">
                To apply for any of the positions listed above, please send your resume and a brief cover letter to <a href="mailto:careers@jonescogutters.com" className="text-JonesCo-Green-600">careers@jonescogutters.com</a>. We look forward to hearing from you!
              </p>
              <p className="text-gray-700">
                JonesCo Seamless Gutter Systems is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.
              </p>
            </div>
          </div>
        </div>
      </main>
      <About />
      <Footer />
    </>
  )
}
