
import React from 'react';
import CityPage from '@/components/CityPage';

const Morristown = () => {
  const city = "Morristown";
  const county = "Hamblen";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Morristown, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Morristown gutter services",
    "gutter installation in Morristown",
    "gutter replacement in Morristown",
    "gutter cleaning in Morristown",
    "gutter guards installation in Morristown",
    "custom gutter solutions in Morristown",
    "downspout installation and repair in Morristown",
    "Morristown seamless gutters",
    "Morristown copper gutters",
    "Morristown galvanized gutters",
    "Morristown galvalume gutters",
    "Morristown colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default Morristown;
