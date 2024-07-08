
import React from 'react';
import CityPage from '@/components/CityPage';

const Sevierville = () => {
  const city = "Sevierville";
  const county = "Sevier";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Sevierville, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Sevierville gutter services",
    "gutter installation in Sevierville",
    "gutter replacement in Sevierville",
    "gutter cleaning in Sevierville",
    "gutter guards installation in Sevierville",
    "custom gutter solutions in Sevierville",
    "downspout installation and repair in Sevierville",
    "Sevierville seamless gutters",
    "Sevierville copper gutters",
    "Sevierville galvanized gutters",
    "Sevierville galvalume gutters",
    "Sevierville colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default Sevierville;
