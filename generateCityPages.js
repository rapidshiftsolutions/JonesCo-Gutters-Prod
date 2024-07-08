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
  Washington: ['Johnson City', 'Jonesborough', 'Limestone', 'Telford']
};

const cityTemplate = (city, county) => `
import React from 'react';
import CityPage from '@/components/CityPage';

const ${city.replace(/ /g, '')} = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in ${city}, ${county}. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["${city} gutter services", "${city} seamless gutters", "gutter installation ${city}", "gutter cleaning ${city}", "gutter replacement ${city}", "${city} gutter guards", "${city} custom gutters"];

  return (
    <CityPage
      city="${city}"
      county="${county}"
      description={description}
      keywords={keywords}
    />
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
