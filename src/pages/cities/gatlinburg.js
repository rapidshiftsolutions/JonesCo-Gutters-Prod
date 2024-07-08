
import React from 'react';
import CityPage from '@/components/CityPage';

const Gatlinburg = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Gatlinburg, Sevier. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Gatlinburg gutter services", "Gatlinburg seamless gutters", "gutter installation Gatlinburg", "gutter cleaning Gatlinburg", "gutter replacement Gatlinburg", "Gatlinburg gutter guards", "Gatlinburg custom gutters"];

  return (
    <CityPage
      city="Gatlinburg"
      county="Sevier"
      description={description}
      keywords={keywords}
    />
  );
};

export default Gatlinburg;
