
import React from 'react';
import CityPage from '@/components/CityPage';

const Louisville = () => {
  const city = "Louisville";
  const county = "Blount";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Louisville, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Louisville gutter services",
    "gutter installation in Louisville",
    "gutter replacement in Louisville",
    "gutter cleaning in Louisville",
    "gutter guards installation in Louisville",
    "custom gutter solutions in Louisville",
    "downspout installation and repair in Louisville",
    "Louisville seamless gutters",
    "Louisville copper gutters",
    "Louisville galvanized gutters",
    "Louisville galvalume gutters",
    "Louisville colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default Louisville;
