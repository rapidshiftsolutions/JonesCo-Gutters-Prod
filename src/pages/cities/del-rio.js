
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Value from '@/components/Value';
import Estimate from '@/components/freeestimate-webhook';
import CityPage from '@/components/CityPage';

const DelRio = () => {
  return (
    <div>
      <Header />
        <CityPage />
      <Value />
      <Estimate />
      <Footer />
    </div>
  );
};

export default DelRio;
