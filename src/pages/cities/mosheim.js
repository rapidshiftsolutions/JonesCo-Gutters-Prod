
import React from 'react';
import CityPage from '@/components/CityPage';

const Mosheim = () => {
  const city = "Mosheim";
  const county = "Greene";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Mosheim, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Mosheim gutter services",
    "gutter installation in Mosheim",
    "gutter replacement in Mosheim",
    "gutter cleaning in Mosheim",
    "gutter guards installation in Mosheim",
    "custom gutter solutions in Mosheim",
    "downspout installation and repair in Mosheim",
    "Mosheim seamless gutters",
    "Mosheim copper gutters",
    "Mosheim galvanized gutters",
    "Mosheim galvalume gutters",
    "Mosheim colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default Mosheim;
