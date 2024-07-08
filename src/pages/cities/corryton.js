
import React from 'react';
import CityPage from '@/components/CityPage';

const Corryton = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Corryton, Knox. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Corryton gutter services", "Corryton seamless gutters", "gutter installation Corryton", "gutter cleaning Corryton", "gutter replacement Corryton", "Corryton gutter guards", "Corryton custom gutters"];

  return (
    <CityPage
      city="Corryton"
      county="Knox"
      description={description}
      keywords={keywords}
    />
  );
};

export default Corryton;
