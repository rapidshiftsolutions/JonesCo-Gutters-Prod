import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Warranty = () => {
  return (
    <>
      <Head>
        <title>JonesCo Gutters - Warranty</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta
          name="description"
          content="JonesCo Gutters provides a comprehensive warranty for gutter installations, downspouts, and gutter guards. Learn about our warranty coverage and claim process."
        />
        <meta name="author" content="JonesCo Gutters" />
        <meta property="og:title" content="JonesCo Gutters - Warranty" />
        <meta
          property="og:description"
          content="JonesCo Gutters provides a comprehensive warranty for gutter installations, downspouts, and gutter guards. Learn about our warranty coverage and claim process."
        />
        <meta property="og:url" content="https://jonescogutters.com/warranty" />
        <meta property="og:type" content="website" />
      </Head>

      <Header />
      <main className="py-8 bg-JonesCo-Blue-50">
        <div className="container px-4 mx-auto">
          <h1 className="mb-8 text-4xl font-bold text-center text-JonesCo-Blue-900">Warranty</h1>

          <section className="mb-8">
            <h2 className="mb-4 text-lg font-semibold text-JonesCo-Blue-800">Standard Gutter and Downspout Limited Labor Warranty</h2>
            <p className="text-lg text-gray-700">
              This Labor Warranty certifies that the guttering systems installed by JonesCo Gutters ("JonesCo") are guaranteed for a period of one (1) year from the date of installation against sagging, pulling loose, leaking, or not functioning properly due to improper installation. All claims may be submitted in writing or via email to JonesCo. This warranty is not transferable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-lg font-semibold text-JonesCo-Blue-800">What is Covered</h2>
            <ul className="text-lg list-disc list-inside text-gray-700">
              <li>Defects in materials used in gutter installations, downspouts, and gutter guards.</li>
              <li>Defects in workmanship related to the installation of gutters, downspouts, and gutter guards.</li>
              <li>Damage caused by faulty installation of gutters, downspouts, and gutter guards.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-lg font-semibold text-JonesCo-Blue-800">What is NOT Covered</h2>
            <ul className="text-lg list-disc list-inside text-gray-700">
              <li>Natural, Act-of-God occurrences such as, but not limited to, lightning, hurricanes, hail, earthquakes, floods, tornadoes, and falling objects.</li>
              <li>Damage to the property or structure to which the guttering system has been applied caused by settling, cracking, movement, shifting, distorting, or splitting, including but not limited to structural failure of walls, roofs, foundations, fascia, or rafters.</li>
              <li>Inadequate or improper ventilation of the home, or accumulation of water, ice damming, or mold due to structural deficiencies and/or insufficient drainage.</li>
              <li>Any deliberate act or negligence of the purchaser, workman, or any other person when installing or maintaining surfaces of the structure to which materials have been applied.</li>
              <li>Normal wear and tear as per manufacturer specifications (in case of a claim, the manufacturing company will have the final say if the product has to be replaced).</li>
              <li>Color fading, staining, replacement of any rotten wood, water behind gutters without eave metal, or any erosion.</li>
              <li>Any installed materials not provided by JonesCo.</li>
              <li>Expansion or contraction of windows, siding, roofing, concrete, or trim.</li>
              <li>Improper maintenance of the guttering system by the customer, including but not limited to clogging caused by leaves or debris in the gutter.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-lg font-semibold text-JonesCo-Blue-800">Additional Notes</h2>
            <p className="text-lg text-gray-700">
              The main cause of customer complaints is gutters overflowing due to debris in the gutter. JonesCo is not responsible for general maintenance, inspections, and cleaning of guttering systems. Gutter cleanings are not covered by any warranty.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              PLEASE NOTE THAT ANY SERVICE CALL REQUESTED AFTER 90 DAYS OF INITIAL INSTALL WILL INCUR A FEE IF WE NEED TO CLEAN GUTTERS TO ACCESS REPAIR OR IF WE FIND THAT THE REPORTED PROBLEM IS DUE TO CUSTOMER NEGLECT OR DUE TO CLOGGING CAUSED BY LEAVES OR DEBRIS. THIS INCLUDES ANY SERVICE CALLS TO REPLACE ROTTED WOOD DUE TO LEAKS FROM NEGLECTING TO CLEAN OR MAINTAIN YOUR GUTTERS.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Rain gutters are not designed to make a watertight seal against the fascia board. Water running between the gutter and fascia board or behind the fascia board is usually caused by:
              <ul className="mt-2 list-disc list-inside">
                <li>Short, broken, or old curled-under shingles causing the water to wick back onto the fascia board.</li>
                <li>Pockets in roof shingles caused by the top of the fascia board being higher than the roof decking, allowing the water to track between the shingles and down behind the fascia board. This may cause rotting of the roof decking, rafter ends, fascia board, or eave overhang.</li>
                <li>Faulty or missing flashing around chimneys, vent stacks, and wall flashing among others.</li>
              </ul>
              These cases are not caused by our gutter system and therefore not covered under our Labor Warranty.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              JonesCo will not be responsible for any peripheral needs or issues related to the guttering system. This includes leaf build-up or clogging, cleaning dirty gutters, issues with drainage or dry-well system, etc. JonesCo will not replace a component of the system if it is not faulty while replacing something that is faulty and under warranty. JonesCo is also not responsible for another person or contractor's work on the gutter system following our install. This includes but is not limited to a roofer changing the pitch of the roof, the overhang of the shingle, or any aspect of the roof as it relates to the gutter system at the time of our install.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Installation, removal, repair, adjustment, tampering, or re-installation of any JonesCo guttering system or component by anyone other than JonesCo voids any and all warranties within this document.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              The customer has the duty to deliver payment in full based on the original signed contract price for material and installation provided by JonesCo in accordance with the payment terms set forth; failure to do so voids any and all warranties within this document.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              JonesCo shall not be liable for injury to persons or damage to property, structure, or contents, or for incidental, special, or consequential damages for breach of any written or implied warranty on defects in workmanship. If any warranty work is required that needs to be subcontracted, then JonesCo has the right to select the contractor for the warranty work.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              In order to make a warranty claim and set up a service call, we require photos and in some cases videos of the area(s) in question.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-JonesCo-Blue-800">Disclaimer</h2>
            <p className="text-lg text-gray-700">
              THIS DOCUMENT IS YOUR WARRANTY AND BECOMES EFFECTIVE UPON RECEIPT OF PAYMENT IN FULL. NO REGISTRATION OR SIGNATURE IS REQUIRED.
            </p>
          </section>

          <section className="mt-8 text-center">
            <Link href="/contact" legacyBehavior>
              <a className="text-lg text-JonesCo-Blue-700 hover:underline">
                Contact Us for More Information
              </a>
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Warranty;
