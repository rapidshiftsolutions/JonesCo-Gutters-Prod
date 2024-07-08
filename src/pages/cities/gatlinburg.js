
import React from 'react';
import CityPage from '@/components/CityPage';

const Gatlinburg = () => {
  const city = "Gatlinburg";
  const county = "Sevier";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Gatlinburg, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Gatlinburg gutter services",
    "gutter installation in Gatlinburg",
    "gutter replacement in Gatlinburg",
    "gutter cleaning in Gatlinburg",
    "gutter guards installation in Gatlinburg",
    "custom gutter solutions in Gatlinburg",
    "downspout installation and repair in Gatlinburg",
    "Gatlinburg seamless gutters",
    "Gatlinburg copper gutters",
    "Gatlinburg galvanized gutters",
    "Gatlinburg galvalume gutters",
    "Gatlinburg colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default Gatlinburg;
