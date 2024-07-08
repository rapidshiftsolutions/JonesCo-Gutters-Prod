
import React from 'react';
import CountyPage from '@/components/CountyPage';

const Knox = () => {
  const county = "Knox";
  const cities = ["Knoxville","Farragut","Powell","Corryton"];
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Knox County, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Knox County gutter services",
    "gutter installation in Knox County",
    "gutter replacement in Knox County",
    "gutter cleaning in Knox County",
    "gutter guards installation in Knox County",
    "custom gutter solutions in Knox County",
    "downspout installation and repair in Knox County",
    "Knox County seamless gutters",
    "Knox County copper gutters",
    "Knox County galvanized gutters",
    "Knox County galvalume gutters",
    "Knox County colored gutters"
  ];

  return (
    <CountyPage county={county} cities={cities} description={description} keywords={keywords} />
  );
};

export default Knox;
