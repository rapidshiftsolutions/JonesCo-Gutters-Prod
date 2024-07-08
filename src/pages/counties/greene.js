
import React from 'react';
import CountyPage from '@/components/CountyPage';

const Greene = () => {
  const county = "Greene";
  const cities = ["Greeneville","Mosheim","Tusculum","Baileyton"];
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Greene County, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Greene County gutter services",
    "gutter installation in Greene County",
    "gutter replacement in Greene County",
    "gutter cleaning in Greene County",
    "gutter guards installation in Greene County",
    "custom gutter solutions in Greene County",
    "downspout installation and repair in Greene County",
    "Greene County seamless gutters",
    "Greene County copper gutters",
    "Greene County galvanized gutters",
    "Greene County galvalume gutters",
    "Greene County colored gutters"
  ];

  return (
    <CountyPage county={county} cities={cities} description={description} keywords={keywords} />
  );
};

export default Greene;
