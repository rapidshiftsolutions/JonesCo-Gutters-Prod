
import React from 'react';
import CityPage from '@/components/CityPage';

const JeffersonCity = () => {
  const city = "Jefferson City";
  const county = "Jefferson";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Jefferson City, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Jefferson City gutter services",
    "gutter installation in Jefferson City",
    "gutter replacement in Jefferson City",
    "gutter cleaning in Jefferson City",
    "gutter guards installation in Jefferson City",
    "custom gutter solutions in Jefferson City",
    "downspout installation and repair in Jefferson City",
    "Jefferson City seamless gutters",
    "Jefferson City copper gutters",
    "Jefferson City galvanized gutters",
    "Jefferson City galvalume gutters",
    "Jefferson City colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default JeffersonCity;
