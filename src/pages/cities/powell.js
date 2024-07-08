
import React from 'react';
import CityPage from '@/components/CityPage';

const Powell = () => {
  const city = "Powell";
  const county = "Knox";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Powell, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Powell gutter services",
    "gutter installation in Powell",
    "gutter replacement in Powell",
    "gutter cleaning in Powell",
    "gutter guards installation in Powell",
    "custom gutter solutions in Powell",
    "downspout installation and repair in Powell",
    "Powell seamless gutters",
    "Powell copper gutters",
    "Powell galvanized gutters",
    "Powell galvalume gutters",
    "Powell colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default Powell;
