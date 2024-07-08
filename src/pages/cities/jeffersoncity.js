
import React from 'react';
import CityPage from '@/components/CityPage';

const JeffersonCity = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Jefferson City, Jefferson. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Jefferson City gutter services", "Jefferson City seamless gutters", "gutter installation Jefferson City", "gutter cleaning Jefferson City", "gutter replacement Jefferson City", "Jefferson City gutter guards", "Jefferson City custom gutters"];

  return (
    <CityPage
      city="Jefferson City"
      county="Jefferson"
      description={description}
      keywords={keywords}
    />
  );
};

export default JeffersonCity;
