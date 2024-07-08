
import React from 'react';
import CityPage from '@/components/CityPage';

const NewMarket = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in New Market, Jefferson. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["New Market gutter services", "New Market seamless gutters", "gutter installation New Market", "gutter cleaning New Market", "gutter replacement New Market", "New Market gutter guards", "New Market custom gutters"];

  return (
    <CityPage
      city="New Market"
      county="Jefferson"
      description={description}
      keywords={keywords}
    />
  );
};

export default NewMarket;
