
import React from 'react';
import CityPage from '@/components/CityPage';

const Cosby = () => {
  const city = "Cosby";
  const county = "Cocke";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Cosby, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Cosby gutter services",
    "gutter installation in Cosby",
    "gutter replacement in Cosby",
    "gutter cleaning in Cosby",
    "gutter guards installation in Cosby",
    "custom gutter solutions in Cosby",
    "downspout installation and repair in Cosby",
    "Cosby seamless gutters",
    "Cosby copper gutters",
    "Cosby galvanized gutters",
    "Cosby galvalume gutters",
    "Cosby colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default Cosby;
