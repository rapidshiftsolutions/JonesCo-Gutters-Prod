
import React from 'react';
import CityPage from '@/components/CityPage';

const Greeneville = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Greeneville, Greene. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Greeneville gutter services", "Greeneville seamless gutters", "gutter installation Greeneville", "gutter cleaning Greeneville", "gutter replacement Greeneville", "Greeneville gutter guards", "Greeneville custom gutters"];

  return (
    <CityPage
      city="Greeneville"
      county="Greene"
      description={description}
      keywords={keywords}
    />
  );
};

export default Greeneville;
