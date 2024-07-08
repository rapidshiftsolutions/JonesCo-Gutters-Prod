
import React from 'react';
import CountyPage from '@/components/CountyPage';

const Cocke = () => {
  const county = "Cocke";
  const cities = ["Newport","Parrottsville","Cosby","Del Rio"];
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Cocke County, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Cocke County gutter services",
    "gutter installation in Cocke County",
    "gutter replacement in Cocke County",
    "gutter cleaning in Cocke County",
    "gutter guards installation in Cocke County",
    "custom gutter solutions in Cocke County",
    "downspout installation and repair in Cocke County",
    "Cocke County seamless gutters",
    "Cocke County copper gutters",
    "Cocke County galvanized gutters",
    "Cocke County galvalume gutters",
    "Cocke County colored gutters"
  ];

  return (
    <CountyPage county={county} cities={cities} description={description} keywords={keywords} />
  );
};

export default Cocke;
