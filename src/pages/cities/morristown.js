
import React from 'react';
import CityPage from '@/components/CityPage';

const Morristown = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Morristown, Hamblen. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Morristown gutter services", "Morristown seamless gutters", "gutter installation Morristown", "gutter cleaning Morristown", "gutter replacement Morristown", "Morristown gutter guards", "Morristown custom gutters"];

  return (
    <CityPage
      city="Morristown"
      county="Hamblen"
      description={description}
      keywords={keywords}
    />
  );
};

export default Morristown;
