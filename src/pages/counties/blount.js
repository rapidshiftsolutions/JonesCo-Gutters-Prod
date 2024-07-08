
import React from 'react';
import CountyPage from '@/components/CountyPage';

const Blount = () => {
  const county = "Blount";
  const cities = ["Alcoa","Maryville","Friendsville","Townsend","Louisville"];
  const description = "JonesCo Seamless Gutter Systems provides top-notch gutter services in Blount County, TN. We are proud to offer the best services to protect your home from water damage and enhance its curb appeal.";
  const keywords = [
    "Blount County gutter services",
    "gutter installation in Blount County",
    "gutter replacement in Blount County",
    "gutter cleaning in Blount County",
    "gutter guards installation in Blount County",
    "custom gutter solutions in Blount County",
    "downspout installation and repair in Blount County",
    "Blount County seamless gutters",
    "Blount County copper gutters",
    "Blount County galvanized gutters",
    "Blount County galvalume gutters",
    "Blount County colored gutters"
  ];

  return (
    <CountyPage county={county} cities={cities} description={description} keywords={keywords} />
  );
};

export default Blount;
