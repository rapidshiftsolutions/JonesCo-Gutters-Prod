
import React from 'react';
import CityPage from '@/components/CityPage';

const Farragut = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Farragut, Knox. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Farragut gutter services", "Farragut seamless gutters", "gutter installation Farragut", "gutter cleaning Farragut", "gutter replacement Farragut", "Farragut gutter guards", "Farragut custom gutters"];

  return (
    <CityPage
      city="Farragut"
      county="Knox"
      description={description}
      keywords={keywords}
    />
  );
};

export default Farragut;
