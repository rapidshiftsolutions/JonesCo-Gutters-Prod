
import React from 'react';
import CityPage from '@/components/CityPage';

const Louisville = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Louisville, Blount. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Louisville gutter services", "Louisville seamless gutters", "gutter installation Louisville", "gutter cleaning Louisville", "gutter replacement Louisville", "Louisville gutter guards", "Louisville custom gutters"];

  return (
    <CityPage
      city="Louisville"
      county="Blount"
      description={description}
      keywords={keywords}
    />
  );
};

export default Louisville;
