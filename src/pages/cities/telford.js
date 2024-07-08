
import React from 'react';
import CityPage from '@/components/CityPage';

const Telford = () => {
  const description = "JonesCo Seamless Gutter Systems provides exceptional gutter services in Telford, Washington. Our team ensures that your gutters are functioning perfectly to protect your home from water damage.";
  const keywords = ["Telford gutter services", "Telford seamless gutters", "gutter installation Telford", "gutter cleaning Telford", "gutter replacement Telford", "Telford gutter guards", "Telford custom gutters"];

  return (
    <CityPage
      city="Telford"
      county="Washington"
      description={description}
      keywords={keywords}
    />
  );
};

export default Telford;
