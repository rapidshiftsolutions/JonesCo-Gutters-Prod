
import React from 'react';
import CityPage from '@/components/CityPage';

const JohnsonCity = () => {
  const city = "Johnson City";
  const county = "Washington";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Johnson City, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Johnson City gutter services",
    "gutter installation in Johnson City",
    "gutter replacement in Johnson City",
    "gutter cleaning in Johnson City",
    "gutter guards installation in Johnson City",
    "custom gutter solutions in Johnson City",
    "downspout installation and repair in Johnson City",
    "Johnson City seamless gutters",
    "Johnson City copper gutters",
    "Johnson City galvanized gutters",
    "Johnson City galvalume gutters",
    "Johnson City colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default JohnsonCity;
