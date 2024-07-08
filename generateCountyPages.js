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
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in ${county} County, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "${county} County gutter services",
    "gutter installation in ${county} County",
    "gutter replacement in ${county} County",
    "gutter cleaning in ${county} County",
    "gutter guards installation in ${county} County",
    "custom gutter solutions in ${county} County",
    "downspout installation and repair in ${county} County",
    "${county} County seamless gutters",
    "${county} County copper gutters",
    "${county} County galvanized gutters",
    "${county} County galvalume gutters",
    "${county} County colored gutters"
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
