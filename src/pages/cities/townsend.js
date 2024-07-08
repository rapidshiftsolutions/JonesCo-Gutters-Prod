
import React from 'react';
import CityPage from '@/components/CityPage';

const Townsend = () => {
  const city = "Townsend";
  const county = "Blount";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Townsend, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Townsend gutter services",
    "gutter installation in Townsend",
    "gutter replacement in Townsend",
    "gutter cleaning in Townsend",
    "gutter guards installation in Townsend",
    "custom gutter solutions in Townsend",
    "downspout installation and repair in Townsend",
    "Townsend seamless gutters",
    "Townsend copper gutters",
    "Townsend galvanized gutters",
    "Townsend galvalume gutters",
    "Townsend colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default Townsend;
