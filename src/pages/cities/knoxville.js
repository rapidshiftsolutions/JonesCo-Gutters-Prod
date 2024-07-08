
import React from 'react';
import CityPage from '@/components/CityPage';

const Knoxville = () => {
  const city = "Knoxville";
  const county = "Knox";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Knoxville, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Knoxville gutter services",
    "gutter installation in Knoxville",
    "gutter replacement in Knoxville",
    "gutter cleaning in Knoxville",
    "gutter guards installation in Knoxville",
    "custom gutter solutions in Knoxville",
    "downspout installation and repair in Knoxville",
    "Knoxville seamless gutters",
    "Knoxville copper gutters",
    "Knoxville galvanized gutters",
    "Knoxville galvalume gutters",
    "Knoxville colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default Knoxville;
