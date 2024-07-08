
import React from 'react';
import CityPage from '@/components/CityPage';

const Dandridge = () => {
  const city = "Dandridge";
  const county = "Jefferson";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Dandridge, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Dandridge gutter services",
    "gutter installation in Dandridge",
    "gutter replacement in Dandridge",
    "gutter cleaning in Dandridge",
    "gutter guards installation in Dandridge",
    "custom gutter solutions in Dandridge",
    "downspout installation and repair in Dandridge",
    "Dandridge seamless gutters",
    "Dandridge copper gutters",
    "Dandridge galvanized gutters",
    "Dandridge galvalume gutters",
    "Dandridge colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default Dandridge;
