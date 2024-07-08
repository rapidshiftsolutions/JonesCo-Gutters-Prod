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

const countyTemplate = (county, cities) => `
import React from 'react';
import CountyPage from '@/components/CountyPage';

const ${county.replace(/ /g, '')} = () => {
  const county = "${county}";
  const cities = ${JSON.stringify(cities)};
  const description = "JonesCo Seamless Gutter Systems provides exceptional seamless gutter services in ${county} County, TN. Our team specializes in gutter installation, gutter repair, gutter cleaning, and custom gutter solutions to ensure your home is protected from water damage. We use the highest quality materials and techniques to deliver top-notch service in ${county} County.";
  const keywords = [
    "commercial gutter installation near ${county} County",
    "seamless gutter company near ${county} County",
    "seamless gutters companies near ${county} County",
    "gutter repair contractors near ${county} County",
    "seamless gutter contractors near ${county} County",
    "seamless gutter installation near ${county} County",
    "seamless gutter installer near ${county} County",
    "seamless guttering companies near ${county} County",
    "seamless gutters contractors near ${county} County",
    "seamless gutters installation near ${county} County",
    "seamless gutters installers near ${county} County",
    "seamless rain gutters near ${county} County",
    "custom gutters near ${county} County",
    "gutter companies around ${county} County",
    "gutter contractor near ${county} County",
    "gutter contractors near ${county} County",
    "gutter guards installers near ${county} County",
    "gutter price calculator ${county} County",
    "gutters and siding contractors near ${county} County",
    "handyman gutter repair near ${county} County",
    "rain gutter contractor near ${county} County",
    "rain gutter contractors near ${county} County",
    "rain gutters contractors near ${county} County",
    "roof gutter installers near ${county} County",
    "seamless gutter companies near ${county} County",
    "seamless gutter contractor near ${county} County",
    "seamless gutter installers near ${county} County",
    "seamless gutters installed near ${county} County",
    "seamless gutters near ${county} County",
    "seemless gutters near ${county} County",
    "siding and gutters near ${county} County",
    "gutter business near ${county} County",
    "gutter guards installed near ${county} County",
    "gutter install near ${county} County",
    "guttering contractors near ${county} County",
    "gutters and siding near ${county} County",
    "gutters contractor near ${county} County",
    "gutters contractors near ${county} County",
    "gutters install near ${county} County",
    "roof and gutter contractors near ${county} County",
    "seamless gutter near ${county} County",
    "seamless guttering near ${county} County",
    "top rated gutter companies near ${county} County",
    "youtube gutter installation ${county} County",
    "continuous gutters near ${county} County",
    "gutter instalation near ${county} County",
    "gutter install companies near ${county} County",
    "gutter installation companies near ${county} County",
    "gutter installation company near ${county} County",
    "gutter installation contractors near ${county} County",
    "gutter installer near ${county} County",
    "gutter installers near ${county} County",
    "gutter replacement companies near ${county} County",
    "gutter service near ${county} County",
    "guttering installation near ${county} County",
    "guttering installers near ${county} County",
    "gutters installation near ${county} County",
    "gutters installed near ${county} County",
    "mini gutter ${county} County",
    "small gutter ${county} County",
    "small gutters ${county} County",
    "where to buy mobile home gutters ${county} County",
    "tools for gutter installation ${county} County",
    "window gutters ${county} County",
    "large rain gutters ${county} County",
    "2 inch gutter ${county} County",
    "menards downspouts ${county} County",
    "rain gutters at menards ${county} County",
    "downspout extension menards ${county} County",
    "downspout repair near ${county} County",
    "gares de casa ${county} County",
    "wide rain gutters ${county} County",
    "16 ft gutter lowe's ${county} County",
    "mini gutters lowe's ${county} County",
    "gutter parts home depot ${county} County",
    "gutter roof ${county} County",
    "mini gutters ${county} County",
    "plastic rain gutters home depot ${county} County",
    "roofing gutter ${county} County",
    "plastic gutters home depot ${county} County",
    "gutter screws home depot ${county} County",
    "add downspout to rain gutter ${county} County",
    "aluminum rain gutters home depot ${county} County",
    "gutter downspouts at lowes ${county} County",
    "aluminum gutters home depot ${county} County",
    "gutter downspout installation ${county} County",
    "rain gutter company near ${county} County",
    "roof gutter repair near ${county} County",
    "seamless gutter price calculator ${county} County",
    "affordable gutters near ${county} County",
    "local gutter company ${county} County",
    "local rain gutter companies ${county} County",
    "water gutter ${county} County",
    "downspouts at lowes ${county} County",
    "gutters installers near ${county} County",
    "roofing and gutters near ${county} County",
    "gutter fixing near ${county} County",
    "home depot gutters and downspouts ${county} County",
    "homedepot gutters ${county} County",
    "rain gutters repair near ${county} County"
  ];

  return (
    <CountyPage county={county} cities={cities} description={description} keywords={keywords} />
  );
};

export default ${county.replace(/ /g, '')};
`;

const pagesDir = path.join(__dirname, 'src/pages');

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
