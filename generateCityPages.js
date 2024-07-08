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

const cityTemplate = (city, county) => `
import React from 'react';
import CityPage from '@/components/CityPage';

const ${city.replace(/ /g, '')} = () => {
  const city = "${city}";
  const county = "${county}";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in ${city}, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "${city} gutter services",
    "gutter installation in ${city}",
    "gutter replacement in ${city}",
    "gutter cleaning in ${city}",
    "gutter guards installation in ${city}",
    "custom gutter solutions in ${city}",
    "downspout installation and repair in ${city}",
    "${city} seamless gutters",
    "${city} copper gutters",
    "${city} galvanized gutters",
    "${city} galvalume gutters",
    "${city} colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default ${city.replace(/ /g, '')};
`;

const pagesDir = path.join(__dirname, 'src/pages/cities');

// Ensure the directory exists
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

// Generate the city pages
Object.entries(counties).forEach(([county, cities]) => {
  cities.forEach(city => {
    const content = cityTemplate(city, county);
    const filePath = path.join(pagesDir, `${city.toLowerCase().replace(/ /g, '')}.js`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Generated page for ${city} in ${county} County`);
  });
});
