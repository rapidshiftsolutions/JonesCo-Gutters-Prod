
import React from 'react';
import CityPage from '@/components/CityPage';

const Tusculum = () => {
  const city = "Tusculum";
  const county = "Greene";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Tusculum, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Tusculum gutter services",
    "gutter installation in Tusculum",
    "gutter replacement in Tusculum",
    "gutter cleaning in Tusculum",
    "gutter guards installation in Tusculum",
    "custom gutter solutions in Tusculum",
    "downspout installation and repair in Tusculum",
    "Tusculum seamless gutters",
    "Tusculum copper gutters",
    "Tusculum galvanized gutters",
    "Tusculum galvalume gutters",
    "Tusculum colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default Tusculum;
