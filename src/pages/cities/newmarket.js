
import React from 'react';
import CityPage from '@/components/CityPage';

const NewMarket = () => {
  const city = "New Market";
  const county = "Jefferson";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in New Market, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "New Market gutter services",
    "gutter installation in New Market",
    "gutter replacement in New Market",
    "gutter cleaning in New Market",
    "gutter guards installation in New Market",
    "custom gutter solutions in New Market",
    "downspout installation and repair in New Market",
    "New Market seamless gutters",
    "New Market copper gutters",
    "New Market galvanized gutters",
    "New Market galvalume gutters",
    "New Market colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default NewMarket;
