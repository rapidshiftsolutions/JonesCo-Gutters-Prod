
import React from 'react';
import CityPage from '@/components/CityPage';

const Greeneville = () => {
  const city = "Greeneville";
  const county = "Greene";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Greeneville, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Greeneville gutter services",
    "gutter installation in Greeneville",
    "gutter replacement in Greeneville",
    "gutter cleaning in Greeneville",
    "gutter guards installation in Greeneville",
    "custom gutter solutions in Greeneville",
    "downspout installation and repair in Greeneville",
    "Greeneville seamless gutters",
    "Greeneville copper gutters",
    "Greeneville galvanized gutters",
    "Greeneville galvalume gutters",
    "Greeneville colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default Greeneville;
