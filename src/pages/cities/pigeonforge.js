
import React from 'react';
import CityPage from '@/components/CityPage';

const PigeonForge = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Pigeon Forge, Sevier. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Pigeon Forge gutter services", "Pigeon Forge seamless gutters", "gutter installation Pigeon Forge", "gutter cleaning Pigeon Forge", "gutter replacement Pigeon Forge", "Pigeon Forge gutter guards", "Pigeon Forge custom gutters"];

  return (
    <CityPage
      city="Pigeon Forge"
      county="Sevier"
      description={description}
      keywords={keywords}
    />
  );
};

export default PigeonForge;
