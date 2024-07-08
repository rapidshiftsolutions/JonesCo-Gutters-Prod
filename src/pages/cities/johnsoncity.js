
import React from 'react';
import CityPage from '@/components/CityPage';

const JohnsonCity = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Johnson City, Washington. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Johnson City gutter services", "Johnson City seamless gutters", "gutter installation Johnson City", "gutter cleaning Johnson City", "gutter replacement Johnson City", "Johnson City gutter guards", "Johnson City custom gutters"];

  return (
    <CityPage
      city="Johnson City"
      county="Washington"
      description={description}
      keywords={keywords}
    />
  );
};

export default JohnsonCity;
