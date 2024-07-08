
import React from 'react';
import CityPage from '@/components/CityPage';

const Maryville = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Maryville, Blount. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Maryville gutter services", "Maryville seamless gutters", "gutter installation Maryville", "gutter cleaning Maryville", "gutter replacement Maryville", "Maryville gutter guards", "Maryville custom gutters"];

  return (
    <CityPage
      city="Maryville"
      county="Blount"
      description={description}
      keywords={keywords}
    />
  );
};

export default Maryville;
