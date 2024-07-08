
import React from 'react';
import CityPage from '@/components/CityPage';

const Parrottsville = () => {
  const city = "Parrottsville";
  const county = "Cocke";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Parrottsville, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Parrottsville gutter services",
    "gutter installation in Parrottsville",
    "gutter replacement in Parrottsville",
    "gutter cleaning in Parrottsville",
    "gutter guards installation in Parrottsville",
    "custom gutter solutions in Parrottsville",
    "downspout installation and repair in Parrottsville",
    "Parrottsville seamless gutters",
    "Parrottsville copper gutters",
    "Parrottsville galvanized gutters",
    "Parrottsville galvalume gutters",
    "Parrottsville colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default Parrottsville;
