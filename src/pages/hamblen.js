
import React from 'react';
import CountyPage from '@/components/CountyPage';

const Hamblen = () => {
  const county = "Hamblen";
  const cities = ["Morristown","Russellville","Whitesburg","Talbott"];
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Hamblen County, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Hamblen County gutter services",
    "gutter installation in Hamblen County",
    "gutter replacement in Hamblen County",
    "gutter cleaning in Hamblen County",
    "gutter guards installation in Hamblen County",
    "custom gutter solutions in Hamblen County",
    "downspout installation and repair in Hamblen County",
    "Hamblen County seamless gutters",
    "Hamblen County copper gutters",
    "Hamblen County galvanized gutters",
    "Hamblen County galvalume gutters",
    "Hamblen County colored gutters"
  ];

  return (
    <CountyPage county={county} cities={cities} description={description} keywords={keywords} />
  );
};

export default Hamblen;
