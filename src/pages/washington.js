
import React from 'react';
import CountyPage from '@/components/CountyPage';

const Washington = () => {
  const county = "Washington";
  const cities = ["Johnson City","Jonesborough","Limestone","Telford"];
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Washington County, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Washington County gutter services",
    "gutter installation in Washington County",
    "gutter replacement in Washington County",
    "gutter cleaning in Washington County",
    "gutter guards installation in Washington County",
    "custom gutter solutions in Washington County",
    "downspout installation and repair in Washington County",
    "Washington County seamless gutters",
    "Washington County copper gutters",
    "Washington County galvanized gutters",
    "Washington County galvalume gutters",
    "Washington County colored gutters"
  ];

  return (
    <CountyPage county={county} cities={cities} description={description} keywords={keywords} />
  );
};

export default Washington;
