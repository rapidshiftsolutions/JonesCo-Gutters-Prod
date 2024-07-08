
import React from 'react';
import CityPage from '@/components/CityPage';

const Limestone = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Limestone, Washington. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Limestone gutter services", "Limestone seamless gutters", "gutter installation Limestone", "gutter cleaning Limestone", "gutter replacement Limestone", "Limestone gutter guards", "Limestone custom gutters"];

  return (
    <CityPage
      city="Limestone"
      county="Washington"
      description={description}
      keywords={keywords}
    />
  );
};

export default Limestone;
