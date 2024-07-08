
import React from 'react';
import CityPage from '@/components/CityPage';

const PittmanCenter = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Pittman Center, Sevier. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Pittman Center gutter services", "Pittman Center seamless gutters", "gutter installation Pittman Center", "gutter cleaning Pittman Center", "gutter replacement Pittman Center", "Pittman Center gutter guards", "Pittman Center custom gutters"];

  return (
    <CityPage
      city="Pittman Center"
      county="Sevier"
      description={description}
      keywords={keywords}
    />
  );
};

export default PittmanCenter;
