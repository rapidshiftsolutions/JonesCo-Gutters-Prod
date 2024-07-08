
import React from 'react';
import CityPage from '@/components/CityPage';

const Baneberry = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Baneberry, Jefferson. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Baneberry gutter services", "Baneberry seamless gutters", "gutter installation Baneberry", "gutter cleaning Baneberry", "gutter replacement Baneberry", "Baneberry gutter guards", "Baneberry custom gutters"];

  return (
    <CityPage
      city="Baneberry"
      county="Jefferson"
      description={description}
      keywords={keywords}
    />
  );
};

export default Baneberry;
