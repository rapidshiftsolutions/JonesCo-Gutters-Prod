const fs = require('fs');
const path = require('path');

// Define the counties and their cities
const data = {
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

const generateKeywords = (location) => seoKeywords.map(keyword => `${keyword} near ${location}`).join(', ');

const generateHeadContent = (title, description, url, imageUrl) => `
  <Head>
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="keywords" content="${generateKeywords(url)}" />
    <meta name="author" content="JonesCo Gutters" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="${imageUrl}" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
    <link rel="canonical" href="${url}" />
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
`;
const generatePageContent = (location, isCounty = false, cities = [], imageUrl) => {
  const description = isCounty
    ? `JonesCo Gutters provides exceptional seamless gutter services in ${location} County, TN. Our team specializes in gutter installation, gutter repair, gutter cleaning, and custom gutter solutions to ensure your home is protected from water damage. We use the highest quality materials and techniques to deliver top-notch service in ${location} County. Whether you need new gutters installed or existing ones repaired, we have the expertise and commitment to provide the best solutions for your needs. Serving all cities in ${location} County, we are dedicated to maintaining the integrity and functionality of your home with our reliable gutter services.`
    : `JonesCo Gutters provides exceptional seamless gutter services in ${location}. We specialize in seamless gutter installation, gutter repair, gutter cleaning, and custom gutter solutions to ensure your home is protected from water damage. Our experienced team delivers top-quality workmanship and reliable service in ${location}.`;

  const title = isCounty
    ? `Gutter Services in ${location} County, TN | JonesCo Gutters`
    : `Gutter Services in ${location}, ${location} County | JonesCo Gutters`;

  const url = isCounty
    ? `https://jonescogutters.com/counties/${location.toLowerCase().replace(/ /g, '')}`
    : `https://jonescogutters.com/cities/${location.toLowerCase().replace(/ /g, '')}`;

  return `
import React from 'react';
import ${isCounty ? 'CountyPage' : 'CityPage'} from '@/components/${isCounty ? 'CountyPage' : 'CityPage'}';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ${location.replace(/ /g, '')} = () => {
  return (
    <>
      ${generateHeadContent(title, description, url, imageUrl)}
      <Header />
      <div className="w-full h-64 bg-center bg-cover" style={{ backgroundImage: "url('${imageUrl}')" }}></div>
      <${isCounty ? 'CountyPage' : 'CityPage'}
        ${isCounty ? `county="${location}"` : `city="${location}"`}
        ${isCounty ? `cities={${JSON.stringify(cities)}}` : `county="${location}"`}
        description="${description}"
        keywords={["${generateKeywords(location + (isCounty ? ' County' : '')).split(', ').join('","')}"]}
      />
      <Footer />
    </>
  );
};

export default ${location.replace(/ /g, '')};
  `;
};

const pagesDirCities = path.join(__dirname, 'src/pages/cities');
const pagesDirCounties = path.join(__dirname, 'src/pages');

const imageUrl = 'https://i.imgur.com/Wiis4b4.jpeg';

// Ensure the directories exist
if (!fs.existsSync(pagesDirCities)) {
  fs.mkdirSync(pagesDirCities, { recursive: true });
}

if (!fs.existsSync(pagesDirCounties)) {
  fs.mkdirSync(pagesDirCounties, { recursive: true });
}
// Generate the city and county pages
Object.entries(data).forEach(([county, cities]) => {
  cities.forEach(city => {
    const content = generatePageContent(city, false, [], imageUrl);
    const filePath = path.join(pagesDirCities, `${city.toLowerCase().replace(/ /g, '')}.jsx`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Generated page for ${city} in ${county} County`);
  });

  const countyContent = generatePageContent(county, true, cities, imageUrl);
  const countyFilePath = path.join(pagesDirCounties, `${county.toLowerCase().replace(/ /g, '')}.jsx`);
  fs.writeFileSync(countyFilePath, countyContent, 'utf8');
  console.log(`Generated page for ${county} County`);
});