
import React from 'react';
import CityPage from '@/components/CityPage';

const Baileyton = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Baileyton, Greene. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Baileyton gutter services", "Baileyton seamless gutters", "gutter installation Baileyton", "gutter cleaning Baileyton", "gutter replacement Baileyton", "Baileyton gutter guards", "Baileyton custom gutters"];

  return (
    <CityPage
      city="Baileyton"
      county="Greene"
      description={description}
      keywords={keywords}
    />
  );
};

export default Baileyton;
