
import React from 'react';
import CityPage from '@/components/CityPage';

const Alcoa = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Alcoa, Blount. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Alcoa gutter services", "Alcoa seamless gutters", "gutter installation Alcoa", "gutter cleaning Alcoa", "gutter replacement Alcoa", "Alcoa gutter guards", "Alcoa custom gutters"];

  return (
    <CityPage
      city="Alcoa"
      county="Blount"
      description={description}
      keywords={keywords}
    />
  );
};

export default Alcoa;
