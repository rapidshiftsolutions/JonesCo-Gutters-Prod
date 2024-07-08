
import React from 'react';
import CityPage from '@/components/CityPage';

const Parrottsville = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Parrottsville, Cocke. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Parrottsville gutter services", "Parrottsville seamless gutters", "gutter installation Parrottsville", "gutter cleaning Parrottsville", "gutter replacement Parrottsville", "Parrottsville gutter guards", "Parrottsville custom gutters"];

  return (
    <CityPage
      city="Parrottsville"
      county="Cocke"
      description={description}
      keywords={keywords}
    />
  );
};

export default Parrottsville;
