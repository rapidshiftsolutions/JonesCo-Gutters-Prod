
import React from 'react';
import CityPage from '@/components/CityPage';

const Knoxville = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Knoxville, Knox. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Knoxville gutter services", "Knoxville seamless gutters", "gutter installation Knoxville", "gutter cleaning Knoxville", "gutter replacement Knoxville", "Knoxville gutter guards", "Knoxville custom gutters"];

  return (
    <CityPage
      city="Knoxville"
      county="Knox"
      description={description}
      keywords={keywords}
    />
  );
};

export default Knoxville;
