
import React from 'react';
import CityPage from '@/components/CityPage';

const Newport = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Newport, Cocke. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Newport gutter services", "Newport seamless gutters", "gutter installation Newport", "gutter cleaning Newport", "gutter replacement Newport", "Newport gutter guards", "Newport custom gutters"];

  return (
    <CityPage
      city="Newport"
      county="Cocke"
      description={description}
      keywords={keywords}
    />
  );
};

export default Newport;
