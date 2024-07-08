
import React from 'react';
import CityPage from '@/components/CityPage';

const Jonesborough = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Jonesborough, Washington. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Jonesborough gutter services", "Jonesborough seamless gutters", "gutter installation Jonesborough", "gutter cleaning Jonesborough", "gutter replacement Jonesborough", "Jonesborough gutter guards", "Jonesborough custom gutters"];

  return (
    <CityPage
      city="Jonesborough"
      county="Washington"
      description={description}
      keywords={keywords}
    />
  );
};

export default Jonesborough;
