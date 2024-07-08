
import React from 'react';
import CityPage from '@/components/CityPage';

const Powell = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Powell, Knox. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Powell gutter services", "Powell seamless gutters", "gutter installation Powell", "gutter cleaning Powell", "gutter replacement Powell", "Powell gutter guards", "Powell custom gutters"];

  return (
    <CityPage
      city="Powell"
      county="Knox"
      description={description}
      keywords={keywords}
    />
  );
};

export default Powell;
