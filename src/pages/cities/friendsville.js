
import React from 'react';
import CityPage from '@/components/CityPage';

const Friendsville = () => {
  const city = "Friendsville";
  const county = "Blount";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Friendsville, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Friendsville gutter services",
    "gutter installation in Friendsville",
    "gutter replacement in Friendsville",
    "gutter cleaning in Friendsville",
    "gutter guards installation in Friendsville",
    "custom gutter solutions in Friendsville",
    "downspout installation and repair in Friendsville",
    "Friendsville seamless gutters",
    "Friendsville copper gutters",
    "Friendsville galvanized gutters",
    "Friendsville galvalume gutters",
    "Friendsville colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default Friendsville;
