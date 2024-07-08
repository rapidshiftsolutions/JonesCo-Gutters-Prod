
import React from 'react';
import CityPage from '@/components/CityPage';

const Telford = () => {
  const city = "Telford";
  const county = "Washington";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Telford, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Telford gutter services",
    "gutter installation in Telford",
    "gutter replacement in Telford",
    "gutter cleaning in Telford",
    "gutter guards installation in Telford",
    "custom gutter solutions in Telford",
    "downspout installation and repair in Telford",
    "Telford seamless gutters",
    "Telford copper gutters",
    "Telford galvanized gutters",
    "Telford galvalume gutters",
    "Telford colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default Telford;
