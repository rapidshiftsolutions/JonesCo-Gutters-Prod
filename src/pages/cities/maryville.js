
import React from 'react';
import CityPage from '@/components/CityPage';

const Maryville = () => {
  const city = "Maryville";
  const county = "Blount";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Maryville, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Maryville gutter services",
    "gutter installation in Maryville",
    "gutter replacement in Maryville",
    "gutter cleaning in Maryville",
    "gutter guards installation in Maryville",
    "custom gutter solutions in Maryville",
    "downspout installation and repair in Maryville",
    "Maryville seamless gutters",
    "Maryville copper gutters",
    "Maryville galvanized gutters",
    "Maryville galvalume gutters",
    "Maryville colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default Maryville;
