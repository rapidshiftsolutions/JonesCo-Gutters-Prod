
import React from 'react';
import CityPage from '@/components/CityPage';

const Alcoa = () => {
  const city = "Alcoa";
  const county = "Blount";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Alcoa, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Alcoa gutter services",
    "gutter installation in Alcoa",
    "gutter replacement in Alcoa",
    "gutter cleaning in Alcoa",
    "gutter guards installation in Alcoa",
    "custom gutter solutions in Alcoa",
    "downspout installation and repair in Alcoa",
    "Alcoa seamless gutters",
    "Alcoa copper gutters",
    "Alcoa galvanized gutters",
    "Alcoa galvalume gutters",
    "Alcoa colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default Alcoa;
