
import React from 'react';
import CityPage from '@/components/CityPage';

const Limestone = () => {
  const city = "Limestone";
  const county = "Washington";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Limestone, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Limestone gutter services",
    "gutter installation in Limestone",
    "gutter replacement in Limestone",
    "gutter cleaning in Limestone",
    "gutter guards installation in Limestone",
    "custom gutter solutions in Limestone",
    "downspout installation and repair in Limestone",
    "Limestone seamless gutters",
    "Limestone copper gutters",
    "Limestone galvanized gutters",
    "Limestone galvalume gutters",
    "Limestone colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default Limestone;
