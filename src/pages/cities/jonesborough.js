
import React from 'react';
import CityPage from '@/components/CityPage';

const Jonesborough = () => {
  const city = "Jonesborough";
  const county = "Washington";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Jonesborough, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Jonesborough gutter services",
    "gutter installation in Jonesborough",
    "gutter replacement in Jonesborough",
    "gutter cleaning in Jonesborough",
    "gutter guards installation in Jonesborough",
    "custom gutter solutions in Jonesborough",
    "downspout installation and repair in Jonesborough",
    "Jonesborough seamless gutters",
    "Jonesborough copper gutters",
    "Jonesborough galvanized gutters",
    "Jonesborough galvalume gutters",
    "Jonesborough colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default Jonesborough;
