
import React from 'react';
import CityPage from '@/components/CityPage';

const WhitePine = () => {
  const city = "White Pine";
  const county = "Jefferson";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in White Pine, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "White Pine gutter services",
    "gutter installation in White Pine",
    "gutter replacement in White Pine",
    "gutter cleaning in White Pine",
    "gutter guards installation in White Pine",
    "custom gutter solutions in White Pine",
    "downspout installation and repair in White Pine",
    "White Pine seamless gutters",
    "White Pine copper gutters",
    "White Pine galvanized gutters",
    "White Pine galvalume gutters",
    "White Pine colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default WhitePine;
