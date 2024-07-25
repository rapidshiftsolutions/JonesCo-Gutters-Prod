const fs = require('fs');
const path = require('path');

// Define the counties and their cities
const counties = {
  Blount: ['Alcoa', 'Maryville', 'Friendsville', 'Townsend', 'Louisville'],
  Cocke: ['Newport', 'Parrottsville', 'Cosby', 'Del Rio'],
  Greene: ['Greeneville', 'Mosheim', 'Tusculum', 'Baileyton'],
  Hamblen: ['Morristown', 'Russellville', 'Whitesburg', 'Talbott'],
  Jefferson: ['Dandridge', 'Jefferson City', 'White Pine', 'New Market', 'Baneberry'],
  Knox: ['Knoxville', 'Farragut', 'Powell', 'Corryton'],
  Sevier: ['Sevierville', 'Pigeon Forge', 'Gatlinburg', 'Pittman Center'],
  Washington: ['Johnson City', 'Jonesborough', 'Limestone', 'Telford'],
};

// List of keywords from the CSV file
const seoKeywords = [
  "commercial gutter installation",
  "seamless gutter company",
  "seamless gutters companies",
  "gutter repair contractors",
  "seamless gutter contractors",
  "seamless gutter installation",
  "seamless gutter installer",
  "seamless guttering companies",
  "seamless gutters contractors",
  "seamless gutters installation",
  "seamless gutters installers",
  "seamless rain gutters",
  "custom gutters",
  "gutter companies around",
  "gutter contractor",
  "gutter contractors",
  "gutter guards installers",
  "gutter price calculator",
  "gutters and siding contractors",
  "handyman gutter repair",
  "rain gutter contractor",
  "rain gutter contractors",
  "rain gutters contractors",
  "roof gutter installers",
  "seamless gutter companies",
  "seamless gutter contractor",
  "seamless gutter installers",
  "seamless gutters installed",
  "seamless gutters",
  "seemless gutters",
  "siding and gutters",
  "gutter business",
  "gutter guards installed",
  "gutter install",
  "guttering contractors",
  "gutters and siding",
  "gutters contractor",
  "gutters contractors",
  "gutters install",
  "roof and gutter contractors",
  "seamless gutter",
  "seamless guttering",
  "top rated gutter companies",
  "youtube gutter installation",
  "continuous gutters",
  "gutter instalation",
  "gutter install companies",
  "gutter installation companies",
  "gutter installation company",
  "gutter installation contractors",
  "gutter installer",
  "gutter installers",
  "gutter replacement companies",
  "gutter service",
  "guttering installation",
  "guttering installers",
  "gutters installation",
  "gutters installed",
  "mini gutter",
  "small gutter",
  "small gutters",
  "where to buy mobile home gutters",
  "tools for gutter installation",
  "window gutters",
  "large rain gutters",
  "2 inch gutter",
  "menards downspouts",
  "rain gutters at menards",
  "downspout extension menards",
  "downspout repair",
  "gares de casa",
  "wide rain gutters",
  "16 ft gutter lowe's",
  "mini gutters lowe's",
  "gutter parts home depot",
  "gutter roof",
  "mini gutters",
  "plastic rain gutters home depot",
  "roofing gutter",
  "plastic gutters home depot",
  "gutter screws home depot",
  "add downspout to rain gutter",
  "aluminum rain gutters home depot",
  "gutter downspouts at lowes",
  "aluminum gutters home depot",
  "gutter downspout installation",
  "rain gutter company",
  "roof gutter repair",
  "seamless gutter price calculator",
  "affordable gutters",
  "local gutter company",
  "local rain gutter companies",
  "water gutter",
  "downspouts at lowes",
  "gutters installers",
  "roofing and gutters",
  "gutter fixing",
  "home depot gutters and downspouts",
  "homedepot gutters",
  "rain gutters repair"
];

const countyTemplate = (county, cities) => {
  const description = `JonesCo Seamless Gutter Systems provides exceptional seamless gutter services in ${county} County, TN. Our team specializes in gutter installation, gutter repair, gutter cleaning, and custom gutter solutions to ensure your home is protected from water damage. We use the highest quality materials and techniques to deliver top-notch service in ${county} County. Whether you need new gutters installed or existing ones repaired, we have the expertise and commitment to provide the best solutions for your needs. Serving all cities in ${county} County, we are dedicated to maintaining the integrity and functionality of your home with our reliable gutter services.`;

  const keywords = seoKeywords.map(keyword => `${keyword} near ${county} County`).join(', ');

  return `
import React from 'react';
import CountyPage from '@/components/CountyPage';
import Head from 'next/head';

const ${county.replace(/ /g, '')} = () => {
  return (
    <>
      <Head>
        <title>Gutter Services in ${county} County, TN | JonesCo Seamless Gutter Systems</title>
        <meta name="description" content="${description}" />
        <meta name="keywords" content="${keywords}" />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="Gutter Services in ${county} County, TN | JonesCo Seamless Gutter Systems" />
        <meta property="og:description" content="${description}" />
        <meta property="og:url" content="https://jonescogutters.com/counties/${county.toLowerCase().replace(/ /g, '')}" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://jonescogutters.com/Images/hero-background.webp" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="canonical" href="https://jonescogutters.com/counties/${county.toLowerCase().replace(/ /g, '')}" />
        <meta name="application-name" content="JonesCo Gutters" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="JonesCo Gutters" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#0066CC" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#0066CC" />
      </Head>
      <CountyPage
        county="${county}"
        cities={${JSON.stringify(cities)}}
        description="${description}"
        keywords={["${keywords.split(', ').join('","')}"]}
      />
    </>
  );
};

export default ${county.replace(/ /g, '')};
  `;
};

const pagesDir = path.join(__dirname, 'src/pages/');

// Ensure the directory exists
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

// Generate the county pages
Object.entries(counties).forEach(([county, cities]) => {
  const content = countyTemplate(county, cities);
  const filePath = path.join(pagesDir, `${county.toLowerCase().replace(/ /g, '')}.js`);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Generated page for ${county} County`);
});
