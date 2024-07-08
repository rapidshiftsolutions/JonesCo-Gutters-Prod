
import React from 'react';
import CityPage from '@/components/CityPage';

const Corryton = () => {
  const city = "Corryton";
  const county = "Knox";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Corryton, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Corryton gutter services",
    "gutter installation in Corryton",
    "gutter replacement in Corryton",
    "gutter cleaning in Corryton",
    "gutter guards installation in Corryton",
    "custom gutter solutions in Corryton",
    "downspout installation and repair in Corryton",
    "Corryton seamless gutters",
    "Corryton copper gutters",
    "Corryton galvanized gutters",
    "Corryton galvalume gutters",
    "Corryton colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default Corryton;
