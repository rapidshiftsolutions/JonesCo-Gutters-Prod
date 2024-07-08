
import React from 'react';
import CityPage from '@/components/CityPage';

const Russellville = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Russellville, Hamblen. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Russellville gutter services", "Russellville seamless gutters", "gutter installation Russellville", "gutter cleaning Russellville", "gutter replacement Russellville", "Russellville gutter guards", "Russellville custom gutters"];

  return (
    <CityPage
      city="Russellville"
      county="Hamblen"
      description={description}
      keywords={keywords}
    />
  );
};

export default Russellville;
