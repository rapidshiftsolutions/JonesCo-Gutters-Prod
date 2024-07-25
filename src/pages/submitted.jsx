import Head from 'next/head';
import Link from 'next/link';

const Submitted = () => {
  return (
    <>
      <Head>
        <title>Submission Received | JonesCo Gutters</title>
        <meta name="description" content="Thank you for requesting a free estimate. Here are your next steps and ways to contact us." />
        <meta name="keywords" content="gutter services, seamless gutters, contact, next steps" />
      </Head>
      <div className="bg-JonesCo-Blue-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <div className="text-center">
            <h1 className="text-3xl font-black tracking-tight text-JonesCo-Blue-950 sm:text-4xl">
              Thank You for Your Request!
            </h1>
            <p className="mt-4 text-lg leading-6 text-JonesCo-Green-700">
              We have received your request for a free estimate.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-JonesCo-Blue-900">Next Steps:</h2>
            <ul className="list-disc list-inside mt-4 text-JonesCo-Blue-900">
              <li>Our team will review your request and get in touch with you within the next 24 hours.</li>
              <li>We will schedule a visit to your location to assess your gutter needs and provide an accurate estimate.</li>
              <li>If you have any immediate questions, feel free to contact us using the information below.</li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-JonesCo-Blue-900">Contact Us:</h2>
            <p className="mt-2 text-JonesCo-Blue-900">
              Phone: <a href="tel:423-207-3325" className="text-JonesCo-Blue-600">423-207-3325</a>
            </p>
            <p className="mt-2 text-JonesCo-Blue-900">
              Email: <a href="mailto:hey@jonescogutters.com" className="text-JonesCo-Blue-600">hey@jonescogutters.com</a>
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-JonesCo-Blue-900">Useful Links:</h2>
            <ul className="list-disc list-inside mt-4 text-JonesCo-Blue-900">
              <li>
                <Link href="/services" legacyBehavior>
                  <a className="text-JonesCo-Blue-600 hover:underline">Our Services</a>
                </Link>
              </li>
              <li>
                <Link href="/locations" legacyBehavior>
                  <a className="text-JonesCo-Blue-600 hover:underline">Our Locations</a>
                </Link>
              </li>
              <li>
                <Link href="/about" legacyBehavior>
                  <a className="text-JonesCo-Blue-600 hover:underline">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" legacyBehavior>
                  <a className="text-JonesCo-Blue-600 hover:underline">Contact Page</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Submitted;
