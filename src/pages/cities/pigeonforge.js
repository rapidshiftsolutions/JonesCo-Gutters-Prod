
import React from 'react';
import CityPage from '@/components/CityPage';

const PigeonForge = () => {
  const city = "Pigeon Forge";
  const county = "Sevier";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Pigeon Forge, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Pigeon Forge gutter services",
    "gutter installation in Pigeon Forge",
    "gutter replacement in Pigeon Forge",
    "gutter cleaning in Pigeon Forge",
    "gutter guards installation in Pigeon Forge",
    "custom gutter solutions in Pigeon Forge",
    "downspout installation and repair in Pigeon Forge",
    "Pigeon Forge seamless gutters",
    "Pigeon Forge copper gutters",
    "Pigeon Forge galvanized gutters",
    "Pigeon Forge galvalume gutters",
    "Pigeon Forge colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default PigeonForge;
