
import React from 'react';
import CityPage from '@/components/CityPage';

const Dandridge = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Dandridge, Jefferson. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Dandridge gutter services", "Dandridge seamless gutters", "gutter installation Dandridge", "gutter cleaning Dandridge", "gutter replacement Dandridge", "Dandridge gutter guards", "Dandridge custom gutters"];

  return (
    <CityPage
      city="Dandridge"
      county="Jefferson"
      description={description}
      keywords={keywords}
    />
  );
};

export default Dandridge;
