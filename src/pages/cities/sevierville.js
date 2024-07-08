
import React from 'react';
import CityPage from '@/components/CityPage';

const Sevierville = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Sevierville, Sevier. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Sevierville gutter services", "Sevierville seamless gutters", "gutter installation Sevierville", "gutter cleaning Sevierville", "gutter replacement Sevierville", "Sevierville gutter guards", "Sevierville custom gutters"];

  return (
    <CityPage
      city="Sevierville"
      county="Sevier"
      description={description}
      keywords={keywords}
    />
  );
};

export default Sevierville;
