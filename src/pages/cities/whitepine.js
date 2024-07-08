
import React from 'react';
import CityPage from '@/components/CityPage';

const WhitePine = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in White Pine, Jefferson. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["White Pine gutter services", "White Pine seamless gutters", "gutter installation White Pine", "gutter cleaning White Pine", "gutter replacement White Pine", "White Pine gutter guards", "White Pine custom gutters"];

  return (
    <CityPage
      city="White Pine"
      county="Jefferson"
      description={description}
      keywords={keywords}
    />
  );
};

export default WhitePine;
