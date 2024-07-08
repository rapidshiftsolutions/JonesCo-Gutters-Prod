
import React from 'react';
import CityPage from '@/components/CityPage';

const Talbott = () => {
  const city = "Talbott";
  const county = "Hamblen";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Talbott, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Talbott gutter services",
    "gutter installation in Talbott",
    "gutter replacement in Talbott",
    "gutter cleaning in Talbott",
    "gutter guards installation in Talbott",
    "custom gutter solutions in Talbott",
    "downspout installation and repair in Talbott",
    "Talbott seamless gutters",
    "Talbott copper gutters",
    "Talbott galvanized gutters",
    "Talbott galvalume gutters",
    "Talbott colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default Talbott;
