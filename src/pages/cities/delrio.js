
import React from 'react';
import CityPage from '@/components/CityPage';

const DelRio = () => {
  const city = "Del Rio";
  const county = "Cocke";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Del Rio, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Del Rio gutter services",
    "gutter installation in Del Rio",
    "gutter replacement in Del Rio",
    "gutter cleaning in Del Rio",
    "gutter guards installation in Del Rio",
    "custom gutter solutions in Del Rio",
    "downspout installation and repair in Del Rio",
    "Del Rio seamless gutters",
    "Del Rio copper gutters",
    "Del Rio galvanized gutters",
    "Del Rio galvalume gutters",
    "Del Rio colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default DelRio;
