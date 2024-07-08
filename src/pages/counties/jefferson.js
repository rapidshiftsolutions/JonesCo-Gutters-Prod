
import React from 'react';
import CountyPage from '@/components/CountyPage';

const Jefferson = () => {
  const county = "Jefferson";
  const cities = ["Dandridge","Jefferson City","White Pine","New Market","Baneberry"];
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Jefferson County, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Jefferson County gutter services",
    "gutter installation in Jefferson County",
    "gutter replacement in Jefferson County",
    "gutter cleaning in Jefferson County",
    "gutter guards installation in Jefferson County",
    "custom gutter solutions in Jefferson County",
    "downspout installation and repair in Jefferson County",
    "Jefferson County seamless gutters",
    "Jefferson County copper gutters",
    "Jefferson County galvanized gutters",
    "Jefferson County galvalume gutters",
    "Jefferson County colored gutters"
  ];

  return (
    <CountyPage county={county} cities={cities} description={description} keywords={keywords} />
  );
};

export default Jefferson;
