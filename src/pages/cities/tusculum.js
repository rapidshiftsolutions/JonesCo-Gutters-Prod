
import React from 'react';
import CityPage from '@/components/CityPage';

const Tusculum = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Tusculum, Greene. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Tusculum gutter services", "Tusculum seamless gutters", "gutter installation Tusculum", "gutter cleaning Tusculum", "gutter replacement Tusculum", "Tusculum gutter guards", "Tusculum custom gutters"];

  return (
    <CityPage
      city="Tusculum"
      county="Greene"
      description={description}
      keywords={keywords}
    />
  );
};

export default Tusculum;
