
import React from 'react';
import CityPage from '@/components/CityPage';

const Mosheim = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Mosheim, Greene. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Mosheim gutter services", "Mosheim seamless gutters", "gutter installation Mosheim", "gutter cleaning Mosheim", "gutter replacement Mosheim", "Mosheim gutter guards", "Mosheim custom gutters"];

  return (
    <CityPage
      city="Mosheim"
      county="Greene"
      description={description}
      keywords={keywords}
    />
  );
};

export default Mosheim;
