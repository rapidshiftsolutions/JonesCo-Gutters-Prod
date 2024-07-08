
import React from 'react';
import CityPage from '@/components/CityPage';

const Friendsville = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Friendsville, Blount. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Friendsville gutter services", "Friendsville seamless gutters", "gutter installation Friendsville", "gutter cleaning Friendsville", "gutter replacement Friendsville", "Friendsville gutter guards", "Friendsville custom gutters"];

  return (
    <CityPage
      city="Friendsville"
      county="Blount"
      description={description}
      keywords={keywords}
    />
  );
};

export default Friendsville;
