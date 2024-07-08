
import React from 'react';
import CityPage from '@/components/CityPage';

const Townsend = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Townsend, Blount. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Townsend gutter services", "Townsend seamless gutters", "gutter installation Townsend", "gutter cleaning Townsend", "gutter replacement Townsend", "Townsend gutter guards", "Townsend custom gutters"];

  return (
    <CityPage
      city="Townsend"
      county="Blount"
      description={description}
      keywords={keywords}
    />
  );
};

export default Townsend;
