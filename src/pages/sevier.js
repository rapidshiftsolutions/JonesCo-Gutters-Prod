
import React from 'react';
import CountyPage from '@/components/CountyPage';

const Sevier = () => {
  const county = "Sevier";
  const cities = ["Sevierville","Pigeon Forge","Gatlinburg","Pittman Center"];
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Sevier County, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Sevier County gutter services",
    "gutter installation in Sevier County",
    "gutter replacement in Sevier County",
    "gutter cleaning in Sevier County",
    "gutter guards installation in Sevier County",
    "custom gutter solutions in Sevier County",
    "downspout installation and repair in Sevier County",
    "Sevier County seamless gutters",
    "Sevier County copper gutters",
    "Sevier County galvanized gutters",
    "Sevier County galvalume gutters",
    "Sevier County colored gutters"
  ];

  return (
    <CountyPage county={county} cities={cities} description={description} keywords={keywords} />
  );
};

export default Sevier;
