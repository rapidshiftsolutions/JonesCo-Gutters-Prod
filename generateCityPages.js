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
  const description = "JonesCo Seamless Gutter Systems provides exceptional seamless gutter services in ${city}. We specialize in seamless gutter installation, gutter repair, gutter cleaning, and custom gutter solutions to ensure your home is protected from water damage. Our experienced team delivers top-quality workmanship and reliable service in ${city}.";
  const keywords = [
    "commercial gutter installation near ${city}",
    "seamless gutter company near ${city}",
    "seamless gutters companies near ${city}",
    "gutter repair contractors near ${city}",
    "seamless gutter contractors near ${city}",
    "seamless gutter installation near ${city}",
    "seamless gutter installer near ${city}",
    "seamless guttering companies near ${city}",
    "seamless gutters contractors near ${city}",
    "seamless gutters installation near ${city}",
    "seamless gutters installers near ${city}",
    "seamless rain gutters near ${city}",
    "custom gutters near ${city}",
    "gutter companies around ${city}",
    "gutter contractor near ${city}",
    "gutter contractors near ${city}",
    "gutter guards installers near ${city}",
    "gutter price calculator ${city}",
    "gutters and siding contractors near ${city}",
    "handyman gutter repair near ${city}",
    "rain gutter contractor near ${city}",
    "rain gutter contractors near ${city}",
    "rain gutters contractors near ${city}",
    "roof gutter installers near ${city}",
    "seamless gutter companies near ${city}",
    "seamless gutter contractor near ${city}",
    "seamless gutter installers near ${city}",
    "seamless gutters installed near ${city}",
    "seamless gutters near ${city}",
    "seemless gutters near ${city}",
    "siding and gutters near ${city}",
    "gutter business near ${city}",
    "gutter guards installed near ${city}",
    "gutter install near ${city}",
    "guttering contractors near ${city}",
    "gutters and siding near ${city}",
    "gutters contractor near ${city}",
    "gutters contractors near ${city}",
    "gutters install near ${city}",
    "roof and gutter contractors near ${city}",
    "seamless gutter near ${city}",
    "seamless guttering near ${city}",
    "top rated gutter companies near ${city}",
    "youtube gutter installation ${city}",
    "continuous gutters near ${city}",
    "gutter instalation near ${city}",
    "gutter install companies near ${city}",
    "gutter installation companies near ${city}",
    "gutter installation company near ${city}",
    "gutter installation contractors near ${city}",
    "gutter installer near ${city}",
    "gutter installers near ${city}",
    "gutter replacement companies near ${city}",
    "gutter service near ${city}",
    "guttering installation near ${city}",
    "guttering installers near ${city}",
    "gutters installation near ${city}",
    "gutters installed near ${city}",
    "mini gutter ${city}",
    "small gutter ${city}",
    "small gutters ${city}",
    "where to buy mobile home gutters ${city}",
    "tools for gutter installation ${city}",
    "window gutters ${city}",
    "large rain gutters ${city}",
    "2 inch gutter ${city}",
    "menards downspouts ${city}",
    "rain gutters at menards ${city}",
    "downspout extension menards ${city}",
    "downspout repair near ${city}",
    "gares de casa ${city}",
    "wide rain gutters ${city}",
    "16 ft gutter lowe's ${city}",
    "mini gutters lowe's ${city}",
    "gutter parts home depot ${city}",
    "gutter roof ${city}",
    "mini gutters ${city}",
    "plastic rain gutters home depot ${city}",
    "roofing gutter ${city}",
    "plastic gutters home depot ${city}",
    "gutter screws home depot ${city}",
    "add downspout to rain gutter ${city}",
    "aluminum rain gutters home depot ${city}",
    "gutter downspouts at lowes ${city}",
    "aluminum gutters home depot ${city}",
    "gutter downspout installation ${city}",
    "rain gutter company near ${city}",
    "roof gutter repair near ${city}",
    "seamless gutter price calculator ${city}",
    "affordable gutters near ${city}",
    "local gutter company ${city}",
    "local rain gutter companies ${city}",
    "water gutter ${city}",
    "downspouts at lowes ${city}",
    "gutters installers near ${city}",
    "roofing and gutters near ${city}",
    "gutter fixing near ${city}",
    "home depot gutters and downspouts ${city}",
    "homedepot gutters ${city}",
    "rain gutters repair near ${city}"
  ];

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
