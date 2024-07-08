
import React from 'react';
import CityPage from '@/components/CityPage';

const Talbott = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Talbott, Hamblen. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Talbott gutter services", "Talbott seamless gutters", "gutter installation Talbott", "gutter cleaning Talbott", "gutter replacement Talbott", "Talbott gutter guards", "Talbott custom gutters"];

  return (
    <CityPage
      city="Talbott"
      county="Hamblen"
      description={description}
      keywords={keywords}
    />
  );
};

export default Talbott;
