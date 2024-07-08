
import React from 'react';
import CityPage from '@/components/CityPage';

const Whitesburg = () => {
  const city = "Whitesburg";
  const county = "Hamblen";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Whitesburg, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Whitesburg gutter services",
    "gutter installation in Whitesburg",
    "gutter replacement in Whitesburg",
    "gutter cleaning in Whitesburg",
    "gutter guards installation in Whitesburg",
    "custom gutter solutions in Whitesburg",
    "downspout installation and repair in Whitesburg",
    "Whitesburg seamless gutters",
    "Whitesburg copper gutters",
    "Whitesburg galvanized gutters",
    "Whitesburg galvalume gutters",
    "Whitesburg colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default Whitesburg;
