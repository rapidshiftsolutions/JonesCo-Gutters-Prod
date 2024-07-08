
import React from 'react';
import CityPage from '@/components/CityPage';

const Baneberry = () => {
  const city = "Baneberry";
  const county = "Jefferson";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Baneberry, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Baneberry gutter services",
    "gutter installation in Baneberry",
    "gutter replacement in Baneberry",
    "gutter cleaning in Baneberry",
    "gutter guards installation in Baneberry",
    "custom gutter solutions in Baneberry",
    "downspout installation and repair in Baneberry",
    "Baneberry seamless gutters",
    "Baneberry copper gutters",
    "Baneberry galvanized gutters",
    "Baneberry galvalume gutters",
    "Baneberry colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default Baneberry;
