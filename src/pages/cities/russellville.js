
import React from 'react';
import CityPage from '@/components/CityPage';

const Russellville = () => {
  const city = "Russellville";
  const county = "Hamblen";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Russellville, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Russellville gutter services",
    "gutter installation in Russellville",
    "gutter replacement in Russellville",
    "gutter cleaning in Russellville",
    "gutter guards installation in Russellville",
    "custom gutter solutions in Russellville",
    "downspout installation and repair in Russellville",
    "Russellville seamless gutters",
    "Russellville copper gutters",
    "Russellville galvanized gutters",
    "Russellville galvalume gutters",
    "Russellville colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default Russellville;
