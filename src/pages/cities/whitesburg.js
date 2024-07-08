
import React from 'react';
import CityPage from '@/components/CityPage';

const Whitesburg = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Whitesburg, Hamblen. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Whitesburg gutter services", "Whitesburg seamless gutters", "gutter installation Whitesburg", "gutter cleaning Whitesburg", "gutter replacement Whitesburg", "Whitesburg gutter guards", "Whitesburg custom gutters"];

  return (
    <CityPage
      city="Whitesburg"
      county="Hamblen"
      description={description}
      keywords={keywords}
    />
  );
};

export default Whitesburg;
