
import React from 'react';
import CityPage from '@/components/CityPage';

const Newport = () => {
  const city = "Newport";
  const county = "Cocke";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Newport, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Newport gutter services",
    "gutter installation in Newport",
    "gutter replacement in Newport",
    "gutter cleaning in Newport",
    "gutter guards installation in Newport",
    "custom gutter solutions in Newport",
    "downspout installation and repair in Newport",
    "Newport seamless gutters",
    "Newport copper gutters",
    "Newport galvanized gutters",
    "Newport galvalume gutters",
    "Newport colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default Newport;
