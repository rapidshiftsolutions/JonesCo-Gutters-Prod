
import React from 'react';
import CityPage from '@/components/CityPage';

const DelRio = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Del Rio, Cocke. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Del Rio gutter services", "Del Rio seamless gutters", "gutter installation Del Rio", "gutter cleaning Del Rio", "gutter replacement Del Rio", "Del Rio gutter guards", "Del Rio custom gutters"];

  return (
    <CityPage
      city="Del Rio"
      county="Cocke"
      description={description}
      keywords={keywords}
    />
  );
};

export default DelRio;
