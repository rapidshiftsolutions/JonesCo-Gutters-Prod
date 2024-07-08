
import React from 'react';
import CityPage from '@/components/CityPage';

const PittmanCenter = () => {
  const city = "Pittman Center";
  const county = "Sevier";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Pittman Center, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Pittman Center gutter services",
    "gutter installation in Pittman Center",
    "gutter replacement in Pittman Center",
    "gutter cleaning in Pittman Center",
    "gutter guards installation in Pittman Center",
    "custom gutter solutions in Pittman Center",
    "downspout installation and repair in Pittman Center",
    "Pittman Center seamless gutters",
    "Pittman Center copper gutters",
    "Pittman Center galvanized gutters",
    "Pittman Center galvalume gutters",
    "Pittman Center colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default PittmanCenter;
