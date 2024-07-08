
import React from 'react';
import CityPage from '@/components/CityPage';

const Farragut = () => {
  const city = "Farragut";
  const county = "Knox";
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Farragut, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Farragut gutter services",
    "gutter installation in Farragut",
    "gutter replacement in Farragut",
    "gutter cleaning in Farragut",
    "gutter guards installation in Farragut",
    "custom gutter solutions in Farragut",
    "downspout installation and repair in Farragut",
    "Farragut seamless gutters",
    "Farragut copper gutters",
    "Farragut galvanized gutters",
    "Farragut galvalume gutters",
    "Farragut colored gutters"
  ];

  return (
    <CityPage city={city} county={county} description={description} keywords={keywords} />
  );
};

export default Farragut;
