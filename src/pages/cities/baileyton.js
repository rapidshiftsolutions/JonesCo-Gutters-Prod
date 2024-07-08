
import React from 'react';
import CityPage from '@/components/CityPage';

const Baileyton = () => {
  const city = "Baileyton";
  const county = "Greene";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Baileyton, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Baileyton gutter services",
    "gutter installation in Baileyton",
    "gutter replacement in Baileyton",
    "gutter cleaning in Baileyton",
    "gutter guards installation in Baileyton",
    "custom gutter solutions in Baileyton",
    "downspout installation and repair in Baileyton",
    "Baileyton seamless gutters",
    "Baileyton copper gutters",
    "Baileyton galvanized gutters",
    "Baileyton galvalume gutters",
    "Baileyton colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default Baileyton;
