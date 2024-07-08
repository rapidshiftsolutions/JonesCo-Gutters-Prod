
import React from 'react';
import CityPage from '@/components/CityPage';

const Cosby = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Cosby, Cocke. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Cosby gutter services", "Cosby seamless gutters", "gutter installation Cosby", "gutter cleaning Cosby", "gutter replacement Cosby", "Cosby gutter guards", "Cosby custom gutters"];

  return (
    <CityPage
      city="Cosby"
      county="Cocke"
      description={description}
      keywords={keywords}
    />
  );
};

export default Cosby;
